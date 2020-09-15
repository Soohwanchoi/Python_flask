function removeCheck(){
    if(confirm("삭제하시겠습니까?")){
        return;
    }else{
        alert("삭제를 취소하셨습니다.");
        return false;
    }
}

function comentCheck(){

    if($.trim($("#comment_check").val()) == "") {
        alert("내용을 입력하세요.");
        $("#comment_check").focus();
        return false;
    }

    if(confirm("댓글을 작성하시겠습니까?")){
        return;
    }else{
        return false;
    }
}
