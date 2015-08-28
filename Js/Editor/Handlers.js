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

    $(".saveData").click(function () {
        Database.saveRelationshipTable(Relationship.getRelationshipTable());
    });

    $(".doBreathSearch").click(function () {
        var result = BreadthSearch.execute(Relationship.getRelationshipTable(), 0);

        Output.showBreathSearch(result);
    })

});