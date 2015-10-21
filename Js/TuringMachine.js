var TuringMachine = (function (pub) {

    pub.executeMachine = function (machineTable) {

        var formattedMachine = MachineFormatter.format(machineTable.states);

        return MachineTest.run(formattedMachine, machineTable);
    };


    pub.getTuringMachineFromTable = function(){
        turingMachine = {};

        turingMachine.states = Table.getData();
        turingMachine.language = getAlphabet();
        turingMachine.tapes = getTapes();
        turingMachine.firstState = getFirstState();
        turingMachine.lastState = getLastState();
        turingMachine.numberOfTapes = getNumberOfTapes();

        console.log(turingMachine);
        return turingMachine;
    };

    function getAlphabet(){
        return $("#alphabet").val();
    }
    function getTapes(){

        var tapes = {};

        $(".tape").each(function () {
            var tapeNumber = $(this).attr("number");

            tapes[tapeNumber] = $(this).val();
        });

        return tapes;

    }

    function getFirstState(){
        return $("#firstState").val();
    }

    function getLastState(){
        return $("#lastState").val();
    }

    function getNumberOfTapes(){
        return $("#numberOfTapes").val();
    }

    return pub;
})(TuringMachine || {});