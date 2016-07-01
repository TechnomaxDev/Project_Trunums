/**
 * Created by Chi J on 6/21/2016.
 */
function myPollService(){
    var myPolls = [
        {
            title: 'Will you vote for Donald Trump ? ',
            yes: '100,253',
            no: '67,890',
            dontCare: '2,567',
            total: '169,000',
            pollId: '0',
            comments: [
                {
                    commentsBy: "AliBaBa",
                    Date: '06/17/2016',
                    contents: 'Trump is Nazi !!!'
                },
                {
                    commentsBy: "BaBaLa",
                    Date: '05/07/2016',
                    contents: 'Trump is a Fool !!!'
                }
            ]
        },
        {
            title: 'Pele is the greatest footballer in history ? ',
            yes: '100,111',
            no: '67,111',
            dontCare: '3,111',
            total: '170,333',
            pollId: '1',
            comments: [
                {
                    commentsBy: "AliBaBa",
                    Date: '06/17/2016',
                    contents: 'Noooooooooooo !!!'
                },
                {
                    commentsBy: "AliBaBa",
                    Date: '06/17/2016',
                    contents: 'But I love him, lol !!'
                }
            ]
        },
        {
            title: 'Mohammed Ali was the greatest boxer of all time ? ',
            yes: '100,011',
            no: '67,011',
            dontCare: '3,011',
            total: '170,033',
            pollId: '2',
            comments: [
                {
                    commentsBy: "AliBaBa",
                    Date: '06/17/2016',
                    contents: 'Who is Mohammed ?'
                }
            ]
        }
    ];

    function getPollList (){
        return myPolls;
    }

    function updatePollList( obj ){
        myPolls.push( obj );
    }

    function getSingleDetail( id ){
        var selectedPoll = {};
        angular.forEach( myPolls, function( e ){
            if(e.pollId == id ){
                selectedPoll = e;
            }
        } );

        return selectedPoll;
    }

    function pollConstruct( title, yes, no, dontCare, total, pollId, comments ){
        this.title = title;
        this.yes = yes;
        this.no = no;
        this.dontCare = dontCare;
        this.total = total;
        this.pollId = pollId;
        this.comments = comments;
    }



    return {
        getPollList: getPollList,
        getSingleDetail: getSingleDetail,
        pollConstruct: pollConstruct,
        updatePollList: updatePollList
    }

}

angular
    .module( 'myApp' )
    .factory( 'myPollService', myPollService );