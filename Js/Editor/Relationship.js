/**
 * Created by leonardoalbuquerque on 09/06/15.
 */

var Relationship = (function(pub){

    var selectedElements = [];

    pub.selectElement = function (element) {
        element.addClass("selectedNode");

        if(selectedElements.length == 0){
            selectFirstElement(element);
        }else{
            createRelationShip(element)
        }
    };

    function selectFirstElement(element){
        selectedElements.push(element.attr("node-id"));
    }

    function createRelationShip(element){

        var otherNodeId = "node-id-"+selectedElements[0];
        var thisNodeId = element.attr("id");

        Connectors.connectNodes(otherNodeId,thisNodeId);

    }

    pub.clearSelectedElements = function () {
        selectedElements = [];
    };

    pub.getMachine = function () {
        var connections = jsPlumb.getConnections();

        var machine = {
            tape:getTape(),
            firstState:getFirstState(),
            lastState:getLastState()
        };

        machine.states = [];

        for(var i in connections){
            if(!connections.hasOwnProperty(i)){
                continue;
            }
            var connection = connections[i];

            machine.states.push(getConnectionInfo(connection));
        }

        return machine;
    };

    function getTape(){
        return $("#tape").val();
    }

    function getFirstState(){
        return $("#firstState").val();
    }

    function getLastState(){
        return $("#lastState").val();
    }

    function getConnectionInfo(connection){
        var stateInfo = getFormattedStateInfo(connection);
        stateInfo.actualState = getActualState(connection);
        stateInfo.nextState = getNextState(connection);

        return stateInfo;
    };

    function getFormattedStateInfo(connection){
        var stateInfo = $(connection.getOverlay("customOverlay").getElement()).val();
        stateInfo = stateInfo.split(";");

        if(stateInfo[2] == "R"){
            var goTo = "right";
        }else{
            var goTo = "left";
        }

        return {
            read:stateInfo[0],
            write:stateInfo[1],
            goTo:goTo
        }
    }

    function getActualState(connection){
        return connection.source.attr("node-id");
    }

    function getNextState(connection){
        return connection.target.attr("node-id");
    }

    return pub;

}(Relationship || {}));