const p = function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(111);
        }, 0);
    });
};

function get() { };

async function getValue() {
    let d;
    const a = await p();
    await p();
    d = await p();
    console.log(a);
};