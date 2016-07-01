/**
 * Created by Chi J on 6/17/2016.
 */
function loginService(){
    function assignAuthenticate( id, password ){
        var giveAuth = false;
        if( id == 'Sai' && password == 'tmx' ){
            giveAuth = true;
            sessionStorage.setItem( 'UserInfo', id );
        }
        return giveAuth;
    }

    return {
        assignAuthenticate : assignAuthenticate
    };
}

angular
    .module('myApp')
    .factory( 'loginService', loginService );