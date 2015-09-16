<?php

/**
 * Created by IntelliJ IDEA.
 * User: leonardoalbuquerque
 * Date: 13/08/15
 * Time: 08:38
 */
class DataFormatter {

    public static function getTuringMachineFromTableData($tableData){
        $turingMachine = array();

        foreach($tableData as $row){
            $actualState = $row['actualState'];

            self::createArrayIndex($turingMachine,$actualState);
            self::createArrayIndex($turingMachine[$actualState],$row['read']);

            $turingMachine[$actualState][$row['read']] = $row;
        }

        return $turingMachine;
    }

    private static function createArrayIndex(&$array, $index){
        if(!isset($array[$index]) || !$array[$index]){
            $array[$index] = array();
        }
    }
}