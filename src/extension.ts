import * as vscode from 'vscode';
import { getAwaitExpression } from './main';
export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('vscode-auto-add-trycatch.addTryCatch', () => {
        const editor = vscode.window.activeTextEditor;
        const code = editor?.document.getText() as string;
        const index = editor?.document.offsetAt(editor?.selection.active);
        if (index === undefined) {
            return;
        }
        const awaitExpression = getAwaitExpression(code, index);
        if (!awaitExpression) {
            return;
        }
        const range = new vscode.Range(new vscode.Position(awaitExpression.start.line - 1, awaitExpression.start.column), new vscode.Position(awaitExpression.end.line - 1, awaitExpression.end.column))
        const originCode = editor?.document.getText(range) as string;
        const tryCatch = `try {\n` +
            `        ${originCode}\n` +
            `    } catch (e) {\n` +
            `        console.log(e)\n` +
            `    }`;

        editor?.edit((editBuilder) => {
            editBuilder.replace(
                range, tryCatch
            );
        });
    });
    context.subscriptions.push(disposable);
}