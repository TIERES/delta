angular.module('delta')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$scope', '$timeout', 'AlertService', '$filter'];

function IndexController($scope, $timeout, AlertService, $filter){
    $scope.nome = "Walter";
    $scope.testeFuncao = testeFuncao;
    $scope.myStyle = {};
    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.ultimaData = '';
    $scope.onClickEditar = onClickEditar;
    $scope.getRowStyle = getRowStyle;
    $scope.salvarSemValidar = salvarSemValidar;

    iniciar();

    function iniciar(){
        $scope.gridOptions = {
            data: 'listaDePessoas',
            columnDefs:[
                {field:'nome', displayName:'Nome', width:400},
                {field:'email', displayName:'Email'},
                {field:'data', displayName:'Data Nascimento', width:150},
                {field:'nascimento', displayName:'Nascido em', width:150, cellTemplate:"app/template/cell-template-date.html"},
                {field:'editar', displayName:'', width:60, cellTemplate:"app/template/cell-template-editar.html"}
            ],
            rowTemplate: "app/template/row-template.html"
        };
    }

    $scope.$watch('nome',onChangeNome);

    function onChangeNome(novoValor,valorAntigo){
        if (novoValor === valorAntigo) {
            return;
        }

        if (novoValor === 'arthur'){
            $scope.myStyle.backgroundColor = 'green';
        } else {
            $scope.myStyle.backgroundColor = 'red'
        }
    }

    function testeFuncao(){
        alert('Ola ' + $scope.nome);
    }

    function salvarSemValidar(){
        $scope.listaDePessoas.push($scope.entidade);
        AlertService.showSuccess('Registro inserido com sucesso','OK');
        limpar();
    }

    function salvar(){
        if ($scope.formPessoa.$invalid){
            /*if ($scope.formPessoa.nome.validator.length <= 3 || $scope.formPessoa.nome.length >= 20) {
                AlertService.showInfo('Verifique os campos invalidos.','');
                return;
            }*/
            setarTouched();
            //alert('Campos Obrigatorios!');
            AlertService.showError('Verifique os campos obrigatórios antes de salvar','Erro');
            return;
        }

        $scope.ultimaData = $filter('date')($scope.entidade.nascimento, 'dd/MM/yyyy');

        //$scope.entidade.nascimento = $scope.ultimaData;

        $scope.listaDePessoas.push($scope.entidade);
        AlertService.showSuccess('Registro inserido com sucesso','OK');
        limpar();
    }

    function limpar(){
        $timeout(function(){
            setarUntouched();
        },100);
        $scope.entidade = {};
    }

    function excluir(registro){
        $scope.listaDePessoas.splice($scope.listaDePessoas.indexOf(registro),1);
        limpar();
    }

    function setarTouched(){
        angular.forEach($scope.formPessoa.$error, function(error){
            angular.forEach(error, function(field){
                field.$setTouched();
            });
        });
    }

    function setarUntouched(){
        angular.forEach($scope.formPessoa.$error, function(error){
            angular.forEach(error,function(field){
                field.$setUntouched();
            })
        });
    }

    function onClickEditar(linhaDaGrid){
        $scope.entidade = linhaDaGrid;
    }

    function getRowStyle(linhaSelecionada){
        var style = {};
        style.backgroundColor = linhaSelecionada.cor;
        style.color = invertColor(linhaSelecionada.cor);
        return style;
    }

    function invertColor(hexTripletColor) {
        var color = hexTripletColor;
        color = color.substring(1);           // remove #
        color = parseInt(color, 16);          // convert to integer
        color = 0xFFFFFF ^ color;             // invert three bytes
        color = color.toString(16);           // convert to hex
        color = ("000000" + color).slice(-6); // pad with leading zeros
        color = "#" + color;                  // prepend #
        return color;
    }
}