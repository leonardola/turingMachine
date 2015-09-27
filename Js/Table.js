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
        var html =
            '<tr>'
                +'<td><input name="tapeNumber"></td>'
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

        $("#inputTable").append(html);
    };

    return pub;
})(Table || {});