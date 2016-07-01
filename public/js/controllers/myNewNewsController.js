/**
 * Created by Chi J on 6/20/2016.
 */
function myNewNewsController(){
    $('button').on('click', function( e ){
        e.preventDefault();
        if( checkAuth() ){

        } else {
            showLogIn_fn();
        }
    });
}

angular
    .module('myApp')
    .controller('myNewNewsController', myNewNewsController);