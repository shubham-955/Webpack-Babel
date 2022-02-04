const add = (a, b) => a + b;

let obj = {
    a: 1,
    add,
    mul(a, b) {
        return a * b;
    }
}

let r1 = add(1, 2);
console.log(add(1, 2))
const { mul } = obj;
console.log(mul(1, 2))

document.getElementById('root').append(r1);