angular.module('delta')
    .controller('CadastroPessoaController',CadastroPessoaController);

function CadastroPessoaController($scope){
    $scope.nome = "Valor informado no controller Cadastro";
}