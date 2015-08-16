$(document).ready(function () {
    $("#addRow").click(function () {

        var html =
            "<tr>"
                +"<td><input name='actualState'></td>"
                +"<td><input name='read'></td>"
                +"<td><input name='write'></td>"
                +'<td><select name="">'
                    +'<option value="right">Direita</option>'
                    +'<option value="left">Esquerda</option>'
                    +'<option value="stay">Não movimenta</option>'
                +'</select></td>'
                +"<td><input name='nextState'></td>"
            +"</tr>";

        $("#inputTable").append(html);
    });

    $("#removeRow").click(function () {
        $("#inputTable").find("tr").last().remove();
    });

    $("#execute").click(function () {

        var turingMachine = TuringMachine.getTuringMachine();

        $.post("/turingMachine/Controller/executeMachine.php", turingMachine, function () {
            
        });
    })
});