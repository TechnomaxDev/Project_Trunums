/**
 * Created by Chi J on 6/22/2016.
 */
function replyComments(){
    var link = function( $scope, $ele, $attr ){
        $ele.on('click', function(){
            var parent = $(this).parents('div.commentStyle');
            var innerParent = $(this).parents('div.commentFrame');
            var textarea = $("<textarea class='form-control m-b-xs'></textarea><button class='btn btn-danger m-r-xs submitComment'>Submit</button><button class='btn btn-default CancelComment'>Cancel</button>");

            if( parent.find('textarea').length == 0 ){
                textarea.insertAfter( innerParent );
            } else {
                parent.find('textarea').focus();
            }

            $('button.submitComment').unbind().on( 'click', function(){
                var d = new Date();

                var month = d.getMonth()+1;
                var day = d.getDate();

                var output = d.getFullYear() + '/' +
                    (month<10 ? '0' : '') + month + '/' +
                    (day<10 ? '0' : '') + day;

                var string =
                    '<div class="commentStyle">'+
                        '<div class="commentFrame">'+
                            '<div class="commentProfile_right">'+
                                '<span class="glyphicon glyphicon-user" ></span>'+
                                '<div><a class="commentName">Mr. Sai</a></div>'+
                            '</div>'+
                            '<ul class="contentsList_right">'+
                                '<li>'+
                                    '<h4>'+ parent.find('textarea').val() +'</h4>'+
                                '</li>'+
                                '<li class="text-right">'+
                                    '<span class="m-r-xs">' + output + '</span>'+
                                    '<a data-reply-comments class="deleteThisComment">Delete</a>'+
                                '</li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>';

                textarea.remove();
                $( string ).insertAfter( parent );

                $( 'a.deleteThisComment' ).unbind().on( 'click', function(){
                    $( this ).parents( 'div.commentStyle' ).remove();
                });
            } );

            $( 'button.CancelComment' ).unbind().on( 'click', function(){
                textarea.remove();
            } );

        });
    };

    return {
        restrict: 'A',
        scope: {},
        link: link
    };
}

angular
    .module( 'myApp')
    .directive( 'replyComments', replyComments );