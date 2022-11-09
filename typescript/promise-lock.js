//原理展示
var _res = function () { };
var p = new Promise(function (res) {
    _res = res;
});
function test() {
    console.log('我免费了');
}
p.then(test);
_res();
