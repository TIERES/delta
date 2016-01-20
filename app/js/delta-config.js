angular.module('delta',[
    'ngMessages',
    'toastr',
    'ui.grid',
    'ngMaterial',
    'ui.router',
    'oc.lazyLoad'
]).config(config);//declaracao do module principal

config.$inject = ['$stateProvider','$urlRouterProvider']

function config($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/cadastro");

    var cadastro = {
        url: "/cadastro",
        templateUrl: "app/view/cadastro/cadastro.html"
    }

    var pesquisa = {
        url: "/pesquisa",
        templateUrl: "app/view/pesquisa/pesquisa.html"
    }

    var cadastroPessoa = {
        url: "/cadastro-pessoa",
        templateUrl: "app/view/pessoa/cadastro-pessoa.html",
        resolve: {
            deps: function ($ocLazyLoad){
                return $ocLazyLoad.load('app/view/pessoa/cadastro-pessoa-controller.js')
            }
        }

    }

    var pesquisaPessoa = {
        url: "/pesquisa-pessoa",
        templateUrl: "app/view/pessoa/pesquisa-pessoa.html",
        resolve: {
            deps: function ($ocLazyLoad){
                return $ocLazyLoad.load('app/view/pessoa/pesquisa-pessoa-controller.js')
            }
        }

    }

    $stateProvider.state('cadastro', cadastro);
    $stateProvider.state('pesquisa', pesquisa);
    $stateProvider.state('cadastro-pessoa', cadastroPessoa);
    $stateProvider.state('pesquisa-pessoa', pesquisaPessoa);

}