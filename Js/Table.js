/**
 * Created by leonardoalbuquerque on 13/08/15.
 */

var Table = (function (pub) {

    pub.getData = function () {
        var table = [];

        $("#inputTable").find("tr").each(function () {

            var row = getRowData($(this));

            if(row.actualState){
                table.push(row);
            }
        });

        return table;
    };

    function getRowData(row){
        var rowData = {};

        row.find("input").each(function () {
            rowData[$(this).attr("name")] = $(this).val();
        });
        rowData.goTo = row.find("select").val();


        return rowData;
    }
    pub.addRow = function () {

        var numberOfTapes = getNumberOfTapes();

        var nextTransitionNumber = getNextTransitionNumber();

        var html = "";

        for (var i = 0; i < numberOfTapes; i++){
            html +=
                '<tr>'
                    +'<td>'
                        +'<input class="transitionNumber" value="'+nextTransitionNumber+'" readonly>'
                        +'<input name="tapeNumber" >'
                    +'</td>'
                    +'<td><input name="actualState"></td>'
                    +'<td><input name="read"></td>'
                    +'<td><input name="write"></td>'
                    +'<td><select name="">'
                    +'<option value="right">Direita</option>'
                    +'<option value="left">Esquerda</option>'
                    +'<option value="stay">Não movimenta</option>'
                    +'</select></td>'
                    +'<td><input name="nextState"></td>'
                +'</tr>';
        }

        $("#inputTable").append(html);
    };

    function getNumberOfTapes(){
        var numberOfTapes = $("#numberOfTapes").val();

        if(!numberOfTapes){
            alert("Put the number of tapes first");
            throw new Error("No number of tapes");
        }

        return numberOfTapes;
    }

    function getNextTransitionNumber(){
        var lastTransitionNumber = pub.getLastTransitionNumber();

        return lastTransitionNumber + 1;
    }

    pub.getLastTransitionNumber = function(){
        var lastTransitionNumber = parseInt($(".transitionNumber").last().val());

        if(!lastTransitionNumber && lastTransitionNumber !== 0){
            return 0;
        }

        return lastTransitionNumber;
    };

    return pub;
})(Table || {});