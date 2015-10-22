/**
 * Created by leonardoalbuquerque on 10/09/15.
 */

var MachineTest = (function (pub) {

    pub.run = function (machine, info) {
        var tapes = prepareTapes(info.tapes);
        var pointers = loadPointers(tapes);
        var actualState = info.firstState;
        var lastState = info.lastState;

        while(true) {

            var read = readTapes(tapes, pointers);

            try{
                var stateInfo = machine[actualState][read];
            }catch(e){
                if(shouldHalt(actualState, lastState)){
                    break;
                }
            }finally{
                //verify if there is nowhere to go then halt
                if(!stateInfo){
                    if(shouldHalt(actualState, lastState)){
                        break;
                    }
                }
            }

            actualState = stateInfo.slice(-1).pop()['nextState'];
            tapes = writeOnTapes(tapes, stateInfo, pointers);
            pointers = moveTapes(tapes, stateInfo, pointers);
        }


        return tapes;
    };

    function prepareTapes(tapes){
        for(var i in tapes){
            tapes[i] = tapes[i].split('');
        }

        return tapes;
    }

    function loadPointers(tapes){
        var pointers = [];

        for(var i in tapes){
            pointers[i] = 0;
        }

        return pointers;
    }

    function readTapes(tapes, tapesPointer){
        var read = "";

        for(var i in tapes){
            if(!tapes[i][tapesPointer[i]] && tapes[i][tapesPointer[i]] !== 0 ){
                read += "$";
            }else{
                read += tapes[i][tapesPointer[i]];
            }
        }

        return read;
    }

    function shouldHalt(actualState, lastState){
        if(actualState == lastState){
            return true;
        }else{
            throw new Error("Machine did not halt on last state");
        }
    }


    function writeOnTapes(tapes, stateInfo, pointers){
        for(var i in tapes){

            if(pointers[i] < 0){
                tapes[i].unshift(stateInfo[i]['write']);
                pointers[i] = 0;
            }else{
                tapes[i][pointers[i]] = stateInfo[i]['write'];
            }

        }
        return tapes;
    }

    function moveTapes(tapes, stateInfo, pointers){

        for(var i in tapes){
            if(stateInfo[i]['goTo'] == 'right'){
                pointers[i]++;
            }else if(stateInfo[i]['goTo'] == 'left'){
                pointers[i]--;
            }
        }

        //actualState = stateInfo['nextState'];
        
        return pointers;

    }
    return pub;
})(MachineTest || {});