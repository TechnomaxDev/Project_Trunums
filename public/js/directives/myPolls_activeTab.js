/**
 * Created by Chi J on 6/18/2016.
 */
function activeTab(){
    return{
        restrict: 'A',
        link: function( $scope, $ele ){
            $ele.on( 'click', function(){
                if( $(this).hasClass( 'active' ) == false ){
                    $(this).siblings().removeClass( 'active' );
                    $(this).siblings().find('a').removeClass( 'selectedPoll' );
                    $(this).addClass( 'active' );
                    $(this).find('a').addClass( 'selectedPoll' );
                }
            } );
        }
    }
}
angular
    .module( 'myApp' )
    .directive( 'activeTab', activeTab );