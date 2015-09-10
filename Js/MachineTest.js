/**
 * Created by leonardoalbuquerque on 10/09/15.
 */

var MachineTest = (function (pub) {

    pub.run = function (machine, firstState, lastState, tape) {
        tape = tape.split('');
        var tapePointer = 0;
        var actualState = firstState;

        while (true) {

            var read = "";

            //read the tape
            if(!tape[tapePointer] && tape[tapePointer] !== 0 ){
                read = "$";
            }else{
                read = tape[tapePointer];
            }

            var stateInfo = machine[actualState][read];

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


        return tape.join('');
    };

    return pub;
})(MachineTest || {});