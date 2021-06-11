var userData = localStorage.getItem("user");
var user = JSON.parse(userData);

if (!user || user.role !== 2) {
    window.location.href = "/demo_login/login.html"
}
