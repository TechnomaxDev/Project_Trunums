/**
 * Created by Chi J on 6/21/2016.
 */
function navHeaderBar( $state ){
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/directives/navHeaderDirective/navHeaderTemplate.html',
        controller : function(){
            this.userName = 'Mr.Sai';
            this.jumpToUserHome_Fn = function login_Fn( state ){
                $state.go( state );
            };
        },
        controllerAs: 'navBarController'
    };
}

navHeaderBar.$inject = ['$state'];

angular
    .module( 'myApp')
    .directive( 'navHeaderBar', navHeaderBar );