<?php

include_once(__DIR__ . "/../config/path.php");
include_once(ROOT_PATH . "/database/connection.php");

class Consultar {
    
    private $conexion;
    
    function __construct() {
        $database = new Connection();
        $this->conexion = $database->conexion();
    }

    public function obtenerDocumentos() {
        
        try{
            
            $sql = "SELECT idnumeracion, estado.descripcion, numero, fecha, base, impuestos FROM documento JOIN estado ON documento.idestado = estado.idestado ORDER BY idnumeracion;";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll();
            return $result;       
        }
        catch (PDOException){
            
            return false;
        }
    }
}
?>