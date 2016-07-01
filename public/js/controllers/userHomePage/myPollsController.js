/**
 * Created by Chi J on 6/21/2016.
 */
function myPollsController( myPollService ){

    this.pollList = myPollService.getPollList();

    if( this.pollList.length !== 0 ){
        this.selectedPollDetail = this.pollList[0];
    }

    this.getPollDetail = function getPollDetail( id ){
        this.selectedPollDetail =  myPollService.getSingleDetail( id );
    };

    this.addNewPoll = function addNewPoll (){

        var id = this.pollList.length;
        id = id.toString();

        var obj = new myPollService.pollConstruct( this.pollText, '0', '0', '0', '0', id, [] );

        myPollService.updatePollList( obj );

        hideLogIn_fn();
    }
}

myPollsController.$inject = ['myPollService'];

angular
    .module( 'myApp' )
    .controller( 'myPollsController', myPollsController );