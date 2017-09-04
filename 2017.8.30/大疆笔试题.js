//第一题的答案
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var n = 0,
    arr = [];
rl.on('line', function(line) {
    if (!n) {
        n = parseInt(line);
    } else {
        arr.push(parseInt(line));
        if (arr.length === n) {
            var count = 0;
            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = i + 1; j < arr.length; j++) {
                    var res = arr[i] ^ arr[j];
                    count += number(res);
                }
            }
            console.log(count);
            n = 0;
            arr=[];
        }
    }
});
function number(num) {
    var n = 0;
	var arr = num.toString(2).split("");
	for(var i = 0;i<arr.length;i++){
		if(arr[i]=="1"){
			n++;
		}
	}
    return n;
}
//第三题的答案
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
        var before = s.slice(0, i),
            after = s.slice(i + 1);
        var d = countchar(before, 'd');
        var i = countchar(after, 'i');
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
    return n;
}