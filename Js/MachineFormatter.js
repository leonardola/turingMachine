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

            groupedCards[actualState] = groupedCards[actualState] || [];
            groupedCards[actualState][nextState] = groupedCards[actualState][nextState] || [];
            groupedCards[actualState][nextState][tapeNumber] = card;
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

                var transition = actualStateInfo[nextState];
                var concated = getConcatedReadAndWrite(transition);

                transitions[actualState] = transitions[actualState] || [];
                transitions[actualState][concated.read] = transitions[actualState][concated.read] || [];
                transitions[actualState][concated.read][concated.write] = transition;

            }

        }

        return transitions;
    }

    function getConcatedReadAndWrite(transition){
        var concatedRead = "";
        var concatedWrite = "";

        for(var tape in transition){
            if(!transition.hasOwnProperty(tape)){  continue;   }

            var oneTapeTransition = transition[tape];

            concatedRead += oneTapeTransition['read'];
            concatedWrite += oneTapeTransition['write'];
        }

        return{
            read: concatedRead,
            write: concatedWrite
        };
    }

    return pub;
})(MachineFormatter || {});