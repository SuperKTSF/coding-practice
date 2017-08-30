//给一个字符串测试有多少个dji组合
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var n = 0,
    arr = [];
rl.on('line', function(line) {
    if (!n) {
        n = parseInt(line)
    } else {
        arr.push(line);
        if (arr.length == n) {
            var res = [];

            arr.forEach(function(x) {
                res.push(count(x));
            })

            res.forEach(function(x) {
                console.log(x);
            })
            //清空
            arr = [];
            n = 0;
        }

    }

});

function count(s) {
    var n = 0;
    var ans = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] == 'j') {
            ans.push(i);
        }
    }


    ans.forEach(function(i) {
        var forward = s.slice(0, i),
            backword = s.slice(i + 1);
        var d = countchar(forward, 'd');
        var i = countchar(backword, 'i');
        n += d * i
    })
    return n;
}


function countchar(s, char) {
    var n = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == char) {
            n++;
        }
    }