$(document).ready(function () {
    $("#addRow").click(function () {
        Table.addRow();
    });

    $("#removeRow").click(function () {

        var lastTransitionNumber = Table.getLastTransitionNumber();

        $("#inputTable").find(".transitionNumber[value="+lastTransitionNumber+"]").closest("tr").remove();
    });

    $("#execute").click(function () {


        var machine = TuringMachine.getTuringMachineFromTable();
        var data = TuringMachine.executeMachine(machine);

        showOutputData(data);

    });

    $("#numberOfTapes").change(function () {

        var html = "";

        for(var i = 1; i <= $(this).val(); i++){
            html += '<lable> Fita '+i+' </lable>'
            +'<input class="tape" number="'+i+'">'
        }

        $(this).nextAll().remove();

        $(this).after("<br><br>" +html);
        Table.addRow();

    });

    $("#executePredefinedMachine").click(function () {

        var predefinedMachine = $("#predefinedMachines").val();

        if(predefinedMachine == '4'){
            var machine = PredefinedMachines.getMachineFour();
        }else if(predefinedMachine == '5'){
            var machine = PredefinedMachines.getMachineFive();
        }else if(predefinedMachine == 'double'){
            var machine = PredefinedMachines.getDoubleTapeMachine();
        }else if(predefinedMachine == 'multiply'){
            var machine = PredefinedMachines.getMultiplyMachine();
        }

        var data = TuringMachine.executeMachine(machine);

        showOutputData(data);
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