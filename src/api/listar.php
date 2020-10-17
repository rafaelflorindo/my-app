<?php
    require_once('Selecao.php');

    $campo = json_decode(file_get_contents("php://input"),true);
    $selecao = new Selecao();
    if($campo == null){
        $selecao->selecao(null);
    }else{
        $selecao->selecao($campo['funcao']);
    }