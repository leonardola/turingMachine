/**
 * Created by leonardoalbuquerque on 10/09/15.
 */


var PredefinedMachines = (function (pub) {

    pub.getMyMachine = function () {
        return {
            states:
                [
                    {actualState:"0",read:"1",write:"1",nextState:"1",goTo:"right"},
                    {actualState:"1",read:"0",write:"0",nextState:"0",goTo:"right"}
                ],
            language:"",tape:"10",firstState:"0",lastState:"1"
        };
    };

    pub.getMachineFour = function () {
        return {
            states:
                [
                    {actualState:"a",read:"$",write:"1",nextState:"b",goTo:"right"},
                    {actualState:"a",read:"1",write:"1",nextState:"b",goTo:"left"},
                    {actualState:"b",read:"$",write:"1",nextState:"a",goTo:"left"},
                    {actualState:"b",read:"1",write:"$",nextState:"c",goTo:"left"},
                    {actualState:"c",read:"$",write:"1",nextState:"h",goTo:"right"},
                    {actualState:"c",read:"1",write:"1",nextState:"d",goTo:"left"},
                    {actualState:"d",read:"$",write:"1",nextState:"d",goTo:"right"},
                    {actualState:"d",read:"1",write:"$",nextState:"a",goTo:"right"},
                    {actualState:"h",read:"-",write:"-",nextState:"h",goTo:"right"}
                ],
                    language:"","tape":"",firstState:"a",lastState:"h"
        };
    };

    pub.getMachineFive = function () {
        return {
            states:
                [
                    {actualState:"a",read:"$",write:"1",nextState:"b",goTo:"right"},
                    {actualState:"a",read:"1",write:"1",nextState:"c",goTo:"left"},
                    {actualState:"b",read:"$",write:"1",nextState:"c",goTo:"right"},
                    {actualState:"b",read:"1",write:"1",nextState:"b",goTo:"right"},
                    {actualState:"c",read:"$",write:"1",nextState:"d",goTo:"right"},
                    {actualState:"c",read:"1",write:"$",nextState:"e",goTo:"left"},
                    {actualState:"d",read:"$",write:"1",nextState:"a",goTo:"left"},
                    {actualState:"d",read:"1",write:"1",nextState:"d",goTo:"left"},
                    {actualState:"e",read:"$",write:"1",nextState:"h",goTo:"right"},
                    {actualState:"e",read:"1",write:"$",nextState:"a",goTo:"left"},
                    {actualState:"h",read:"-",write:"-",nextState:"h",goTo:"right"}
                ],
            language:"",tape:"",firstState:"a",lastState:"h"
        };
    };

    return pub;
})(PredefinedMachines || {});