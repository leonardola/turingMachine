var TuringMachine = (function (pub) {

    pub.executeMachine = function (machine) {

        var formattedMachine = MachineFormatter.format(machine);

        return MachineTest.run(formattedMachine, machine['firstState'], machine['lastState'],"");
    };


    pub.getTuringMachine = function(){
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
})(TuringMachine || {});