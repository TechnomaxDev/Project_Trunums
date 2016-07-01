/**
 * Created by Chi J on 6/21/2016.
 */
var pollDetailComponent = {
    templateUrl: 'js/components/pollDetailComponent/pollDetailComponent.html',
    bindings: {
        poll: '<'
    },
    controller : function(){
        this.openComment = function openComment(){
            this.showComment = true;
        };

    }
};

angular
    .module( 'myApp' )
    .component( 'pollDetailComponent', pollDetailComponent );