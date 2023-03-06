// array like object
function sum(a, b, c){
    // console.log(arguments);
    // console.log(arguments[3]);
    // console.log(typeof arguments);
    const arg = [...arguments]
    // arg.push(100);
    // console.log(arg);
    const result = a + b + c ;
    return result;
}
const total = sum(20, 30, 40, 50, 60, 70)
// console.log(total);
// console.log(sum.length);