angular.module('delta')
    .factory('ParametrosAplicacao',ParametrosAplicacao);

function ParametrosAplicacao(){
    return {
        nomeDoUsuario: '',
        email: '',
        logado: false
    };
}