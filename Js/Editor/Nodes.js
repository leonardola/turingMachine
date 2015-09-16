/**
 * Created by leonardoalbuquerque on 08/06/15.
 */


var Node = (function(pub){

    var lastId = -1;

    pub.addNewNode = function () {
        lastId++;

        $(".editor").append("<div id='node-id-"+lastId+"' class='node' node-id='"+lastId+"'><input value='"+lastId+"'></input></div>");

        makeNodeDraggable(lastId);
    };

    function makeNodeDraggable(nodeId){
        jsPlumb.draggable("node-id-"+nodeId);
    }

    return pub;

}(Node || {}));