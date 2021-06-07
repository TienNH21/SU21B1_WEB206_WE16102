document.getElementById("btn_convert")
    .addEventListener('click', function (event) {
        var txt = document.getElementById('txt').value;

        var regexPattern = /[\w]+/g;
        var arr = txt.match(regexPattern);
        console.log(arr);

        for (var i = 0; i < arr.length; i++) {
            if (i == 0) {
                arr[i] = arr[i].toLowerCase();
            } else {
                var chuCaiDauTien = arr[i][0];
                var camelCase = chuCaiDauTien.toUpperCase() +
                arr[i].slice(1).toLowerCase();
                console.log(camelCase);
                arr[i] = camelCase;
            }
        }

        document.getElementById('result').innerText = arr.join('');
    });


var sv1 = {
    name: "Cuong",
    student_code: "PH123456",
};

var sv2 = {
    name: "Cuong",
    student_code: "PH123456",
};

var sv3 = {
    ten: "Hieu",
    ma_sv: 'PH54321',
};
