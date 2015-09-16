$(document).ready(function () {
    $("#addRow").click(function () {
        Table.addRow();
    });

    $("#removeRow").click(function () {
        $("#inputTable").find("tr").last().remove();
    });

    $("#execute").click(function () {

        var machine = TuringMachine.getTuringMachineFromTable();
        //var data = TuringMachine.executeMachine(machine);
        $.post("../Controller/executeMachine.php",machine, function (data) {
            showOutputData(data.tape);
        });
    });

    $("#executePredefinedMachine").click(function () {

        var predefinedMachine = $("#predefinedMachines").val();

        if(predefinedMachine == '4'){
            var machine = PredefinedMachines.getMachineFour();
        }else if(predefinedMachine == '5'){
            var machine = PredefinedMachines.getMachineFive();
        }

        //var data = TuringMachine.executeMachine(machine);

        $.post("../Controller/executeMachine.php",machine, function (data) {
            showOutputData(data.tape);
        });
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