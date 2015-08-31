/**
 * Created by leonardoalbuquerque on 09/06/15.
 */

var Connectors = (function(pub){

    jsPlumb.ready(function () {

    });

    pub.connectNodes = function (firstElementId,secondElementId) {

        var conn = jsPlumb.connect({
            source:firstElementId,
            target:secondElementId,
            endpoint:[ "Dot", {
                radius:2
            }],
            /*overlays:[
                "Arrow"
            ],*/
            overlays:[
                ["Custom", {
                    create:function(component) {
                        return $("<input value='0;0;R'>");
                    },
                    location:0.7,
                    id:"customOverlay"
                }],
                [ "Arrow", {
                    location: 1,
                    id: "arrow",
                    length: 14,
                    foldback: 0.8
                } ]
            ],
            anchor: "Continuous",
            connector: [ "StateMachine", { curviness: 30 } ]
        });

        //conn.setLabel("abacaxi");
    };

    return pub;

}(Connectors || {}));
