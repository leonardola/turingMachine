<?php
/**
 * Created by IntelliJ IDEA.
 * User: leonardoalbuquerque
 * Date: 12/08/15
 * Time: 09:27
 */
include('DataFormatter.php');
include('TuringMachine.php');

header('Content-Type: application/json');

$tableData = $_POST['table'];
$tape = $_POST['tape'];
$firstState = $_POST['firstState'];
$lastState = $_POST['lastState'];

$turingMachineData = DataFormatter::getTuringMachineFromTableData($tableData);
try{
    $turingMachine = new TuringMachine($turingMachineData, $tape, $firstState, $lastState);
    $processedTape = $turingMachine->execute();
}catch (\Exception $e){
    echo json_encode($e->getMessage());
    return;
}

echo json_encode($processedTape);
