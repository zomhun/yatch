// function isEmail(inputEmail){
//     var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     return regex.test(inputEmail);
// }
// function validatePassword(inputPassword){
//     return inputPassword.length > 5;
// }
// $(document).ready(function(){
//     $('#email').change(function(){
//         var email = $(this).val().trim();
//         if(!isEmail(email)){
//             $(".emailError").html("Email is not valid format");
//         }else{
//             $(".emailError").html("");
//         }
//     })
//     $('#password').change(function(){
//         var password = $(this).val();
//         if(!validatePassword(password)){
//             $(".passwordError").html("Password must be at least 6 chatracters");
//         }else{
//             $(".passwordError").html("");
//         }
//     })
// })
$(document).ready(function () {
    $("#button1").click(function () {
        // alert();
        var user = $("#email").val();//lấy dữ liệu của ô input
        var pass = $("#password").val();
        if (user == "") {
            alert("Bạn chưa nhập user name");
        } else if( pass == ""){
            alert("Bạn chưa nhập password");
        } else {
            alert("Đăng nhập thành công");
        }
    });
});