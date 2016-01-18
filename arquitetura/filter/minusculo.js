angular.module('delta')
    .filter('minusculo', minusculo)

function minusculo(){
    return function(input){
        if(input && (typeof input === 'string')){
            return input.toLowerCase();
        }
        return input;
    }
}