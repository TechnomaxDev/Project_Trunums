/**
 * Created by Chi J on 6/22/2016.
 */
var pollDetailComment = {
    templateUrl: 'js/components/pollDetailComponent/pollDetailComment.html',
    bindings: {
        poll: '<'
    },
    controller : function(){

    }
};

angular
    .module( 'myApp' )
    .component( 'pollDetailComment', pollDetailComment );