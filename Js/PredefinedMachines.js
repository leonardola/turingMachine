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

    pub.getDoubleTapeMachine = function () {
        return {
            states:[
                {tapeNumber:"1",actualState:"1",read:"1",write:"$",nextState:"2",goTo:"right"},
                {tapeNumber:"2",actualState:"1",read:"$",write:"1",nextState:"2",goTo:"right"},
                {tapeNumber:"1",actualState:"2",read:"0",write:"$",nextState:"1",goTo:"right"},
                {tapeNumber:"2",actualState:"2",read:"$",write:"0",nextState:"1",goTo:"right"}
            ],
            language:"",tapes:{1:"101",2:""},firstState:"1",lastState:"2",numberOfTapes:"2"
        }
    };

    pub.getMultiplyMachine = function () {
        return {
            states:[
                {transition:"0",tapeNumber:"1",actualState:"0",read:"*",write:"*",nextState:"1",goTo:"right"},
                {transition:"0",tapeNumber:"2",actualState:"0",read:"$",write:"$",nextState:"1",goTo:"stay"},
                {transition:"1",tapeNumber:"1",actualState:"1",read:"1",write:"1",nextState:"1",goTo:"right"},
                {transition:"1",tapeNumber:"2",actualState:"1",read:"$",write:"$",nextState:"1",goTo:"stay"},
                {transition:"2",tapeNumber:"1",actualState:"1",read:"0",write:"0",nextState:"2",goTo:"right"},
                {transition:"2",tapeNumber:"2",actualState:"1",read:"$",write:"$",nextState:"2",goTo:"stay"},
                {transition:"3",tapeNumber:"1",actualState:"2",read:"0",write:"0",nextState:"2",goTo:"right"},
                {transition:"3",tapeNumber:"2",actualState:"2",read:"$",write:"$",nextState:"2",goTo:"stay"},
                {transition:"4",tapeNumber:"1",actualState:"2",read:"$",write:"$",nextState:"3",goTo:"right"},
                {transition:"4",tapeNumber:"2",actualState:"2",read:"$",write:"$",nextState:"3",goTo:"right"},
                {transition:"5",tapeNumber:"1",actualState:"2",read:"1",write:"0",nextState:"4",goTo:"left"},
                {transition:"5",tapeNumber:"2",actualState:"2",read:"$",write:"$",nextState:"4",goTo:"stay"},
                {transition:"6",tapeNumber:"1",actualState:"4",read:"0",write:"0",nextState:"4",goTo:"left"},
                {transition:"6",tapeNumber:"2",actualState:"4",read:"$",write:"$",nextState:"4",goTo:"stay"},
                {transition:"7",tapeNumber:"1",actualState:"4",read:"1",write:"1",nextState:"4",goTo:"left"},
                {transition:"7",tapeNumber:"2",actualState:"4",read:"$",write:"1",nextState:"4",goTo:"right"},
                {transition:"8",tapeNumber:"1",actualState:"4",read:"*",write:"*",nextState:"1",goTo:"right"},
                {transition:"8",tapeNumber:"2",actualState:"4",read:"$",write:"$",nextState:"1",goTo:"stay"}
            ],
                language:"",tapes:{"1":"*11011","2":""},firstState:"0",lastState:"3",numberOfTapes:"2"
        }
    };

    return pub;
})(PredefinedMachines || {});