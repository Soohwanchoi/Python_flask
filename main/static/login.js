function CheckLoginForm() {
    if(!validateEmail($("#email").val())) {
        alert("이메일 주소를 정확히 입력하세요.");
        $("#email").focus();
        return false;
    }
    if($.trim($("#pass").val()) == "") {
        alert("비밀번호를 입력하세요.");
        $("#pass").focus();
        return false;
    }
    return true;
}