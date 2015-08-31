<?php

/**
 * Created by IntelliJ IDEA.
 * User: leonardoalbuquerque
 * Date: 14/08/15
 * Time: 10:46
 */
class TuringMachine {

    private $turingMachine, $tape, $firstState, $tapePointer, $actualState, $lastState;


    public function __construct($turingMachine, $tape, $firstState, $lastState){
        $this->turingMachine = $turingMachine;
        $this->tape = $tape;
        $this->firstState = $firstState;
        $this->lastState = $lastState;
    }

    public function execute(){

        $this->validateMachine();
        $this->startMachine();

        while(true){
            $read = $this->readTape();

            if($this->shouldHalt($read)){
                break;
            }

            $stateInfo = $this->tryToGetInfoFromState($read);

            $this->writeOnTape($stateInfo);
            $this->gotToNextState($stateInfo);
        }

        return $this->tape; //implode("",$this->tape);
    }

    private function validateMachine(){
        if(empty($this->turingMachine)){
            throw new \Exception("Machine not found");
        }
        if(empty($this->tape) && !isset($this->tape)){
            throw new \Exception("Machine does not contain tape");
        }
        if(empty($this->firstState) && $this->firstState !== "0"){
            throw new \Exception("Machine does not contain first state");
        }
        if(empty($this->lastState) && $this->lastState !== "0"){
            throw new \Exception("Machine does not contain last state");
        }
    }

    private function readTape(){

        if($this->isEndOfTape()){
            return "$";
        }

        return $this->tape[$this->tapePointer];
    }

    private function isEndOfTape(){
        return !isset($this->tape[$this->tapePointer]) || ((empty($this->tape[$this->tapePointer]) && $this->tape[$this->tapePointer] !== "0"));
    }

    private function shouldHalt($read){

        $data = $this->getPossibleReadForActualState();

        if(!isset($data[$read])){
            if($this->actualState == $this->lastState){
                return true;
            }else{
                throw new \Exception("Machine did not halt on end state");
            }
        }

        return false;
    }

    private function startMachine(){
        $this->tapePointer = 0;
        $this->actualState = $this->firstState;
    }

    private function tryToGetInfoFromState($read){
        $stateInfo = $this->getPossibleReadForActualState()[$read];

        if(!$stateInfo){
            throw new \Exception("Machine does not contain state");
        }

        return $stateInfo;
    }

    private function writeOnTape($stateInfo){
        $this->tape[$this->tapePointer] = $stateInfo['write'];
    }

    private function gotToNextState($stateInfo){
        $this->actualState = $stateInfo['nextState'];
        $this->changeTapePointer($stateInfo['goTo']);
    }

    private function changeTapePointer($goTo){
        if($goTo == 'right'){
            $this->tapePointer++;
        }elseif($goTo == 'left'){
            $this->tapePointer--;
        }
    }

    private function getPossibleReadForActualState(){
        if(isset($this->turingMachine['actualState'][$this->actualState])){
            return $this->turingMachine['actualState'][$this->actualState]['read'];
        }
        return array();
    }
}