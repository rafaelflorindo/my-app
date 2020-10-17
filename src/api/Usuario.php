<?php
require_once('Conexao.php');

class Usuario extends Conexao{

    public function exibeUsuario(){
        $retorno = $this->conectar()->prepare("SELECT * FROM usuario");
        $retorno->execute();
        
        $results = $retorno->fetchAll(PDO::FETCH_ASSOC);
        
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($results);
    }
}
