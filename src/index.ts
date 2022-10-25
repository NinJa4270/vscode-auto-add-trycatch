import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
const types = require("@babel/types")
interface Position { line: number, column: number, index: number }

interface TAwaitExpression {
    type: string
    start: Position,
    end: Position
}


export const getAwaitExpression = function (code: string, index: number): TAwaitExpression | undefined {
    const ast = parse(code);
    let result;
    traverse(ast, {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        AwaitExpression(path) {
            let code;
            if (index >= path.node.start! && index <= path.node.end! && path.node.type === 'AwaitExpression') {
                let type = '';
                if (types.isVariableDeclarator(path.parent)) {
                    type = 'isVariableDeclarator';
                    code = path.parentPath.parentPath;

                } else if (types.isAssignmentExpression(path.parent)) {
                    type = 'isAssignmentExpression';
                    code = path.parentPath.parentPath;

                } else {
                    type = 'await';
                    code = path;
                }

                result = {
                    type,
                    start: code!.node.loc?.start,
                    end: code!.node.loc?.end,
                };
            }
        }
    });

    return result;
};