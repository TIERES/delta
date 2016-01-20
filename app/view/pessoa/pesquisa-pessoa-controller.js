angular.module('delta')
    .controller('PesquisaPessoaController',PesquisaPessoaController);

function PesquisaPessoaController($scope){
    $scope.nome = "Valor informado no controller Pesquisa";
}