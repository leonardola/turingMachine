<?php
/**
 * Created by IntelliJ IDEA.
 * User: leonardoalbuquerque
 * Date: 12/08/15
 * Time: 09:27
 */
include('DataFormatter.php');
include('TuringMachine.php');

$tableData = $_POST['table'];
$tape = $_POST['tape'];
$firstState = $_POST['firstState'];
$lastState = $_POST['lastState'];

$turingMachineData = DataFormatter::getTuringMachineFromTableData($tableData);
$turingMachine = new TuringMachine($turingMachineData, $tape, $firstState, $lastState);
$processedTape = $turingMachine->execute();

echo $processedTape;