$(document).ready(function () {

    $(".addNode").click(function () {
        Node.addNewNode();
    });

    $(document).on("click",".node",function (event) {
        event.stopPropagation();
        Relationship.selectElement($(this));
    });

    $(document).click(function () {
        Relationship.clearSelectedElements();
        $(".node").removeClass("selectedNode");
    });

    $(".executeMachine").click(function () {
        var machine = Relationship.getMachine();

        $.post("/turingMachine/Controller/executeMachine.php", machine, function (data) {
            showOutputData(data);
        })
    });

    function showOutputData(data){
        $(".output").val(data);
        $(".output").show();
    }
});