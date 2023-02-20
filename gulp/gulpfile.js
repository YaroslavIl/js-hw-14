function hello(cb) {
    console.log('adqwdqw');
    cb();
}


function start(cb) {
    console.log('START');
    cb();
}
exports.start = start;
exports.default = hello;