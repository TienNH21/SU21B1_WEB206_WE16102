$("form#login_form").on('submit', function (event) {
    event.preventDefault();

    var email = $("input#email").val();
    var password = $("input#password").val();
    // work around
    var loginApi = `http://localhost:3000/users?email=${email}&password=${password}`;

    fetch(loginApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseData) {
            console.log(responseData)
            if (responseData.length !== 0) {
                alert("Đăng nhập thành công")
                var userData = JSON.stringify(responseData[0]);
                localStorage.setItem("user", userData);
            } else {
                alert("Đăng nhập thất bại")
            }
        })
});
