angular.module('delta')
    .service('AlertService',AlertService);

AlertService.$inject = ['toastr'];

function AlertService(toastr){
    this.showSuccess = showSuccess;
    this.showError = showError;
    this.showInfo = showInfo;
    this.showWarning = showWarning;

    function showSuccess(mensagem, titulo){

        if(!titulo){
            titulo = 'OK';
        }
        toastr.success(mensagem, titulo, {progressBar: true});
    }

    function showError(mensagem, titulo){

        if(!titulo){
            titulo = 'ERRO';
        }
        toastr.error(mensagem, titulo, {progressBar: true});
    }

    function showInfo(mensagem, titulo){

        if(!titulo){
            titulo = 'INFORMACAO';
        }
        toastr.info(mensagem, titulo, {progressBar: true});
    }

    function showWarning(mensagem, titulo){

        if(!titulo){
            titulo = 'CUIDADO';
        }
        toastr.warning(mensagem, titulo, {progressBar: true});
    }
}
