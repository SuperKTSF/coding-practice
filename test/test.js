var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var n = -1; // ��ʼ״̬Ϊ��������ʾ��û��ʼ��ȡ
var ans = 0;
var cur_line = 0;
var arr = [];
var brr = [];

rl.on('line', function(line) { // javascriptÿ�����ݵĻص��ӿ�
    if (n < 0) { // ����������һ�ж�ȡn
        n = parseInt(line.trim())
    } else {
        //�������ݶ�ȡ,��ÿһ�����ݷ���arr����
        arr.push(line.trim());
        if (n == arr.length) {
            function delSame(arr) {
                var result = [];
                var len = arr.length;
                for (var i = 0; i < len; i++) {
                    if (result.indexOf(arr[i]) == -1) {
                        result.push(arr[i])
                    };
                };
                return result;
            }
            brr = delSame(arr);

            //����
            brr = brr.sort(function(a, b) {
                return a - b;
            });

            //���
            for (var i = 0; i < brr.length; i++) {
                process.stdout.write(brr[i] + "\n");
            }

            // ���³�ʼ����ر���
            n = -1;
            arr = [];
            result = [];
        };
        // ��¼��ǰ��ȡ������
        //cur_line += 1;
    }



    // ��ȡ������������ʱcur_line=���鳤��ʱ����������ȥ�����ȷ��ֻ��һ�ж�����������룬Ҳ����ͨ��cur_line === 1���ж�
    if (arr.length === cur_line) {
        // ȥ��


    }
});
