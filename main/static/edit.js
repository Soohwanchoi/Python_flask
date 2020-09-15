$(document).ready(function() {
    $('#summernote').summernote({
          height: 300,
          minHeight: null,
          maxHeight: null,
          lang : 'ko-KR',
          popover: {
              image: [],
              link: [],
              air: []
          },
  
    });
  });

function CheckEditForm() {
    if($.trim($("#title").val()) == "") {
        alert("제목을 입력하세요.");
        $("#title").focus();
        return false;
    }

    if($.trim($("#summernote").val()) == "") {
        alert("내용을 입력하세요.");
        $("#summernote").focus();
        return false;
    }

    return true;
}

function modify(){
    if(confirm("수정하시겠습니까?")){
        return;
    }else{
        return false;
    }
}

