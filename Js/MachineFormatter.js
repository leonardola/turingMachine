/**
 * Created by leonardoalbuquerque on 10/09/15.
 */

var MachineFormatter = (function (pub) {

    pub.format = function (machineTable) {

        var turingMachine = {};

        for(var row in machineTable['states']){
            var card = machineTable['states'][row];
            var actualState = card['actualState'];

            turingMachine[actualState] = turingMachine[actualState] || {};
            turingMachine[actualState][card['read']] = card;

        }

        return turingMachine;

    };

    return pub;
})(MachineFormatter || {});