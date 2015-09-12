var TuringMachine = (function (pub) {

    pub.executeMachine = function (machine) {

        var formattedMachine = MachineFormatter.format(machine);

        return run(formattedMachine, machine.firstState, machine.lastState,machine.tape);
    };

    function run(machine, firstState, lastState, tape) {
        tape = tape.split('');

        var tapePointer = 0;
        var actualState = firstState;

        var read = "";
        var stateInfo = [];

        while (true) {

            read = tape[tapePointer];

            if(read == undefined){
                read = "$";
            }

            stateInfo = machine[actualState][read];

            //verify if there is nowhere to go then halt
            if(!stateInfo){
                if(actualState == lastState){
                    break;
                }else{
                    throw new Error("Machine did not halt on last state");
                }
            }

            if(tapePointer < 0){
                tape.unshift(stateInfo['write']);
                tapePointer = 0;
            }else{
                tape[tapePointer] = stateInfo['write'];
            }

            actualState = stateInfo['nextState'];


            if(stateInfo['goTo'] == 'right'){
                tapePointer++;
            }else{
                tapePointer--;
            }
        }

        //return tape.join('');

        var returnTape = "";

        for(var i = 0; i < tape.length; i++){
            returnTape += tape[i];
        }

        return returnTape;
    }

    return pub;
})(TuringMachine || {});