function search() {
    var val_search = document.getElementById("search").value;
    var val_keyword = document.getElementById("keyword").value;

    if(val_search == "" || val_keyword == "") {
        return false;
    } else {
        self.location.href = "{{url_for('board.lists')}}?search=" + val_search + "&keyword=" + val_keyword;
    }
}