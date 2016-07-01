/**
 * Created by Chi J on 6/17/2016.
 */
function loginController( $state, loginService ){

    this.login = function login( state ){
        var loginFlag = loginService.assignAuthenticate( this.userName, this.password );
        if( loginFlag == true ){
            $state.go( state );
        }
    };
}

loginController.$inject = ['$state', 'loginService'];

angular
    .module('myApp')
    .controller( 'loginController', loginController );