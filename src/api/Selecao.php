<?php

require_once('Conexao.php');

class Selecao extends Conexao{

    public function selecao($parametro=null){
        if($parametro == null){
            $retorno = $this->conectar()->prepare("SELECT DISTINCT funcao FROM usuario");
        }else{
            $retorno = $this->conectar()->prepare("SELECT * FROM usuario funcao = :FUNCAO");
            $retorno->bindParam(":FUNCAO", $parametro, PDO::PARAM_STR);
        }
            $retorno->execute();
        
        //$results = $retorno->fetchAll(PDO::FETCH_ASSOC);
        $i=0;
        $j=[];
        while($linha = $retorno->fetch(PDO::FETCH_ASSOC)){
            if($parametro == null){
                $j[$i]=[
                    "Resposta"=>$linha['funcao']
                ];
                $i++;
            }else{
                $j[$i]=[
                    "Resposta"=>$linha['nome']
                ];
                $i++;
            }
             
        }

        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($j);
    }

}