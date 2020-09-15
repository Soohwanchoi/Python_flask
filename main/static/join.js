function CheckForm() {

    var admin = "관리자";

    if($.trim($("#name").val()).indexOf(admin) != -1) {
        alert("해당 이름은 사용할 수 없는 이름입니다.");
        $("#name").focus();
        return false;
    }

    if($.trim($("#name").val()) == "") {
        alert("이름을 입력하세요.");
        $("#name").focus();
        return false;
    }

    if($.trim($("#email").val()) == "") {
        alert("이메일을 입력하세요.");
        $("#name").focus();
        return false;
    }

    if(!validateEmail($("#email").val())) {
        alert("이메일 유효성이 올바르지 않습니다.");
        $("#email").focus();
        return false;
    }

    if($.trim($("#pass").val()) == "") {
        alert("비밀번호를 입력하세요.");
        $("#name").focus();
        return false;
    }

    var p1 = $.trim($("#pass").val());
    var p2 = $.trim($("#pass2").val());

    if(p1 != p2) {
        alert("비밀번호가 일치하지 않습니다.");
        $("#pass2").focus().select();
        return false;
    }
    return true;
}