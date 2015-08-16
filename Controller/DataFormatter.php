<?php

/**
 * Created by IntelliJ IDEA.
 * User: leonardoalbuquerque
 * Date: 13/08/15
 * Time: 08:38
 */
class DataFormatter {

    public static function getTuringMachineFromTableData($tableData){
        $turingMachine = array(
            'actualState' => array()
        );

        foreach($tableData as $row){
            $actualState = $row['actualState'];

            self::createArrayIndex($turingMachine['actualState'],$actualState);
            self::createArrayIndex($turingMachine['actualState'][$actualState],'read');
            self::createArrayIndex($turingMachine['actualState'][$actualState]['read'],$row['read']);

            $turingMachine['actualState'][$actualState]['read'][$row['read']] = $row;
        }

        return $turingMachine;
    }

    private static function createArrayIndex(&$array, $index){
        if(!isset($array[$index]) || !$array[$index]){
            $array[$index] = array();
        }
    }
}