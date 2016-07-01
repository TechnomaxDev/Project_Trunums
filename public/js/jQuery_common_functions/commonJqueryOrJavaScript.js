/**
 * Created by Chi J on 6/20/2016.
 */
function showLogIn_fn(){
    $('#myModal').modal('show');
}
function hideLogIn_fn(){
    $('#myModal').modal('hide');
}
function checkAuth(){
    var token = sessionStorage.getItem("UserInfo");
    var flag = true;
    if( token == null || token == undefined || token == "" ){
        flag = false;
    }
    return flag;
}