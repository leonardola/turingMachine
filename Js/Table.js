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

    return pub;
})(Table || {});