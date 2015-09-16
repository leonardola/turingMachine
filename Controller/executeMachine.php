<?php

include('DataFormatter.php');
include('TuringMachine.php');

header('Content-Type: application/json');

set_time_limit(1000000);

$tableData = $_POST['states'];

$tape = $_POST['tape'];
$firstState = $_POST['firstState'];
$lastState = $_POST['lastState'];

$turingMachineData = DataFormatter::getTuringMachineFromTableData($tableData);

$machine = $turingMachineData;
$tapePointer = 0;
$actualState = $firstState;
$read = "";
$stateInfo = [];

while (true) {

    if(!isset($tape[$tapePointer])){
        $read = "$";
    }else{
        $read = $tape[$tapePointer];
    }

    //verify if there is nowhere to go then halt
    if(!isset($machine[$actualState][$read])){
        if($actualState == $lastState){
            break;
        }else{
            throw new \Exception("Machine did not halt on last state");
        }
    }else{
        $stateInfo = $machine[$actualState][$read];
    }

    $tape[$tapePointer] = $stateInfo['write'];

    $actualState = $stateInfo['nextState'];


    if($stateInfo['goTo'] == 'right'){
        $tapePointer++;
    }else{
        $tapePointer--;
    }
}

if(is_array($tape)){
    ksort($tape);
    $tape = implode("",$tape);
}

echo json_encode(array("tape"=>utf8_encode($tape)));