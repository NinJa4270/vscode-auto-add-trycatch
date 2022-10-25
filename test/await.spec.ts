import { test, expect } from 'vitest';
import { getAwaitExpression } from '../src/main';

test.skip('await', () => {
    const index = 238;
    const code = `
    const p = function () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(111)
            }, 0);
        })
    };

    function get(){};
    
    async function getValue() {
         await p()
        console.log(a)
    };
    `;
    const result = getAwaitExpression(code, index);
    expect(result).toEqual({
        start: { line: 13, column: 9, index: 237 },
        end: { line: 13, column: 18, index: 246 }
    });
});