/**
 * Created by leonardoalbuquerque on 10/09/15.
 */

var MachineFormatter = (function (pub) {

    pub.format = function (machineTable) {

        var groupedCards = groupCardsByState(machineTable);

        return groupCardByTransition(groupedCards);
    };

    function groupCardsByState(machineTable){
        var groupedCards = [];

        for(var i in machineTable){
            if(!machineTable.hasOwnProperty(i)){
                continue;
            }else{
                var card = machineTable[i];
            }
            var actualState = card['actualState'];
            var nextState = card['nextState'];
            var tapeNumber = card['tapeNumber'];
            var transitionNumber = card['transition'];

            groupedCards[actualState] = groupedCards[actualState] || [];
            groupedCards[actualState][nextState] = groupedCards[actualState][nextState] || [];
            groupedCards[actualState][nextState][transitionNumber] = groupedCards[actualState][nextState][transitionNumber] || [];
            groupedCards[actualState][nextState][transitionNumber][tapeNumber] = card;
        }

        return groupedCards;
    }

    function groupCardByTransition(groupedCards){

        var transitions = [];

        for(var actualState in groupedCards){
            if(!groupedCards.hasOwnProperty(actualState)){    continue;   }

            var actualStateInfo = groupedCards[actualState];

            for(var nextState in actualStateInfo){
                if(!actualStateInfo.hasOwnProperty(nextState)){    continue;   }
                var stateData = actualStateInfo[nextState];

                for(var i in stateData) {
                    if (!stateData.hasOwnProperty(i)) {
                        continue;
                    }
                    var transition = stateData[i];

                    var concatedRead = getConcatedReadAndWrite(transition);

                    transitions[actualState] = transitions[actualState] || [];
                    transitions[actualState][concatedRead] = transitions[actualState][concatedRead] || [];
                    transitions[actualState][concatedRead] = transition;
                }
            }

        }

        return transitions;
    }

    function getConcatedReadAndWrite(transition){
        var concatedRead = "";

        for(var tape in transition){
            if(!transition.hasOwnProperty(tape)){  continue;   }

            var oneTapeTransition = transition[tape];

            concatedRead += oneTapeTransition['read'];
        }

        return concatedRead;
    }

    return pub;
})(MachineFormatter || {});