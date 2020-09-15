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
  
        //   callbacks: {
        //       onImageUpload: function(image) {
        //           //uploadImage(image[0]);
        //           for(let i=0; i < image.length; i++) {
        //               uploadImage(image[i]);
        //           }
        //       }
        //   }
    });
  });
  
//   function uploadImage(image) {
//       var data = new FormData();
//       data.append("image", image);
//       $.ajax({
//           url: "{{url_for('board.upload_image')}}",
//           cache: false, // cache 가 true 이면 캐싱된 데이터로 처리될 수 있어 데이터 전송이 되지 않을수 있어 false
//           contentType: false, // 기본값이 application/x-www-form-urlencoded 인데 파일전송시에는 multipart/form-data 로 보내야 하기 때문에 false
//           processData: false, //POST 형태의 데이터를 전달할때는 query string 형태의 GET 방식으로 보내면 안되기 때문에 false
//           data: data,
//           type: "post",
//           success: function(url) {
//               var image = $('<img>').attr('src', url).css("max-width", "900px");
//               $('#summernote').summernote("insertNode", image[0]);
//           },
//           error: function(data) {
//               alert(data);
//           }
//       });
//   }
  
  function CheckWriteForm() {
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


function checkwrite(){
    if(confirm("작성하시겠습니까?")){
        return;
    }else{
        return false;
    }
}