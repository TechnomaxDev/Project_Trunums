/**
 * Created by q10228 on 6/17/2016.
 */
var express = require( 'express' );
var app     = express();
var mongoose = require( 'mongoose' );
var morgan = require( 'morgan' );
var bodyParser = require( 'body-parser' );
var methodOverride = require( 'method-override' );

mongoose.connect( 'mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu' );

/**
 * set the static files location /public/img will be /img for use
 * */
app.use( express.static( __dirname + '/public' ) );
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
/**
 * log every request to the console
 * */
app.use( morgan( 'dev' ) );
/**
 * parse application/x-www-form-urlencoded
 * */
app.use( bodyParser.urlencoded( { 'extended': 'true' } ) );
/**
 * parse application/json
 * */
app.use( bodyParser.json() );
/**
 * parse application/vnd.api+json as json
 * */
app.use( bodyParser.json( { type: 'application/vnd.api+json' } ) );
app.use( methodOverride() );


/**
 * define model for out todo app
 * */
var Todo = mongoose.model( 'Todo', {
    text : String
} );
/**
 * That is all we want. Just the text for the todo. 
 * MongoDB will automatically generate an _id for each todo that we create also.
 * */

/** routes ===================================================================*/
    //get all todos
    app.get( '/api/todos', function( req, res ){
        //use mongoose to get all todos in the database
        Todo.find( function( err, todos ){

            // if there is an error retrieving,
            //Send the error.
            // nothing after res.send(err) will execute
            if( err ){
                res.send( err );
            }
            res.json( todos ); //return all todos in JSON format
        } );
    } );
    // Create todo and send back all todos  after creation
    app.post( '/api/todo', function( req, res ){

        //Create a todo, information comes from AJAX request from Angular
        Todo.create( {
            text: req.body.text,
            done: false
        }, function( err, todo ){
            if( err ){
                res.send( err );
            }

            //get and return all the todos after you create another
            Todo.find( function( err, todos ){
                if( err ){
                    res.send( err )
                }
                res.json( todos );
            } );
        } );

    } );
    // delete a todo
    app.delete( '/api.todos/:todo_id', function( req, res ){
        Todo.remove( {
            _id: req.params.todo_id
        }, function( err, todo ){
            if( err ){
                res.send( err )
            }

            Todo.find( function( err, todos ){
                if( err ){
                    res.send( err )
                }
                res.json( todos );
            } );
        } );
    } );
/**
 * Applications --------------------------------
 * */
    app.use('/*', function( req, res ){
        res.sendFile( __dirname + '/public/index.html' );
    } );

/**
 * Listen (start app with node server.js) =============================
 * */
app.listen( 8081 );
console.log( "App listening on port 8081" );
console.log( "Use link http://localhost:8081/#/ in the browser to Open the Application" );