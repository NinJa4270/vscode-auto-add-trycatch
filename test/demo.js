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
    try {
        const a = await p();
    } catch (e) {
        console.log(e)
    }
    try {
        await p()
    } catch (e) {
        console.log(e)
    };
    try {
        d = await p();
    } catch (e) {
        console.log(e)
    }
    console.log(a);
};