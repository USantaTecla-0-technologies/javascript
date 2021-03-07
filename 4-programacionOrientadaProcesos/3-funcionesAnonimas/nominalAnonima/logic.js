// con hoisting: funciones nominales
function ambitoNominal(){
    function nominal(){
        return 0;
    }
    return nominal();
    function nominal(){
        return 1;
    }
}
console.log(ambitoNominal());

// sin hoisting: con funciones anónimas
function ambitoAnonima(){
    var a = function(){
        return 0;
    }
    return a();
    var a = function(){
        return 1;
    }
}

console.log(ambitoAnonima());
