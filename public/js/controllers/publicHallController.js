/**
 * Created by Chi J on 6/20/2016.
 */
function publicHallController( $state, loginService ){
    this.jumpToSignUp = function jumpToSignUp( state ){
        hideLogIn_fn();
        setTimeout( function(){
            $state.go( state );
        }, 500 );
    };

    this.login_Fn = function login( state ){
        var loginFlag = loginService.assignAuthenticate( this.username, this.password );
        if( loginFlag == true ){
            hideLogIn_fn();
            setTimeout( function(){
                $state.go( state );
            }, 500 );
        }
    };
}

publicHallController.$inject = ['$state', 'loginService'];

angular
    .module( 'myApp' )
    .controller( 'publicHallController', publicHallController );