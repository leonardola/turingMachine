$(document).ready(function () {
    $("#addRow").click(function () {
        Table.addRow();
    });

    $("#removeRow").click(function () {
        $("#inputTable").find("tr").last().remove();
    });

    $("#execute").click(function () {

        var turingMachine = TuringMachine.getTuringMachine();

        $.post("/turingMachine/Controller/executeMachine.php", turingMachine, function (data) {
            showOutputData(data);
        })
            
    });

    $(document).keydown(function (event) {
        var activeElement = $(document.activeElement).first();
        var lastInput = $("input[name='nextState']").last();
        var keycode = event.keyCode;

        if(activeElement[0] == lastInput[0] && keycode == 9){
            Table.addRow();
        }
    });

    function showOutputData(data){
        $(".output").val(data);
        $(".output").show();
    }
});