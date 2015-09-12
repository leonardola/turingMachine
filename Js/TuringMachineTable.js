/**
 * Created by leonardoalbuquerque on 10/09/15.
 */


var TuringMachineTable = (function (pub) {

    pub.getTuringMachineFromTable = function(){
        turingMachine = {};

        turingMachine.states = Table.getData();
        turingMachine.language = getAlphabet();
        turingMachine.tape = getTape();
        turingMachine.firstState = getFirstState();
        turingMachine.lastState = getLastState();

        return turingMachine;
    };

    function getAlphabet(){
        return $("#alphabet").val();
    }
    function getTape(){
        return $("#tape").val();
    }

    function getFirstState(){
        return $("#firstState").val();
    }

    function getLastState(){
        return $("#lastState").val();
    }

    return pub;
})(TuringMachineTable || {});