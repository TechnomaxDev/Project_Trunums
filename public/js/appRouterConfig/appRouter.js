/**
 * Created by Chi J on 6/17/2016.
 */
function appRouter( $stateProvider, $urlRouterProvider ){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state( 'login', {
            url: '/',
            templateUrl: '../templates/login.html',
            controller: 'loginController as vm',
            resolve: {
                loginService: loginService
            }
        } )
        .state( 'signUp', {
            url: '/signUp',
            templateUrl: '../templates/signUp.html'
        } )
        .state( 'publicHall', {
            url:'/publicHall',
            templateUrl: '../templates/publicHall.html',
            controller: 'publicHallController as publicVM',
            resolve: {
                loginService: loginService
            }
        } )
        .state( 'homepage', {
            url:'/homepage',
            templateUrl: '../templates/homepage.html',
            controller: 'homePageController as homeVM'
        } )
        .state( 'homepage.settings', {
            url: '/settings',
            templateUrl: '../templates/settings.html'
        } )
        .state( 'homepage.new', {
            url:'/new',
            templateUrl: '../templates/homeTabsContent/myNewNews.html',
            controller: 'myNewNewsController as newNewsVM'
        } )
        .state( 'homepage.trending', {
            url:'/trending',
            templateUrl: '../templates/homeTabsContent/trending.html'
        } )
        .state( 'homepage.top', {
            url:'/top',
            templateUrl: '../templates/homeTabsContent/top.html'
        } )
        .state( 'userHomePage', {
            url: '/userHomePage',
            templateUrl: '../templates/userHomePage.html',
            controller: 'userHomePageController as userHomeVM'
        } )
        .state( 'userHomePage.followers', {
            url: '/followers',
            templateUrl: '../templates/userHomeTabsContents/followers.html'
        } )
        .state( 'userHomePage.leaders', {
            url: '/leaders',
            templateUrl: '../templates/userHomeTabsContents/leaders.html'
        } )
        .state( 'userHomePage.myPolls', {
            url: '/myPolls',
            templateUrl: '../templates/userHomeTabsContents/myPolls.html',
            controller : 'myPollsController as myPollVM',
            resolve: {
                myPollService: myPollService
            }
        } )
        .state( 'userHomePage.requests', {
            url: '/requests',
            templateUrl: '../templates/userHomeTabsContents/requests.html'
        } );

}

angular
    .module('myApp')
    .config( appRouter );