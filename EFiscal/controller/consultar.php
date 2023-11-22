<?php

include_once(__DIR__ . "/../config/config.php");
include_once(ROOT_PATH . "/database/connection.php");

class Consultar {
    
    private $conexion;
    
    function __construct() {
        $database = new Connection();
        $this->conexion = $database->conexion();
    }

    public function obtenerDocumentos() {
        
        $result = [];

        try{
            
            $sql = "SELECT * FROM documento JOIN estado ON documento.idestado = estado.idestado ORDER BY idnumeracion;";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll();     
        }
        catch (PDOException){
            
            $result = false;
        }
        finally {
                
            $stmt = null;
            $this->conexion = null;
            
            return $result;
        }
    }

    public function obtenerDocumento($iddocumento) {
        
        $result = [];

        try{
            
            $sql = "SELECT * FROM documento WHERE iddocumento = :iddocumento;";
            $stmt = $this->conexion->prepare($sql);
            $stmt->bindParam(':iddocumento', $iddocumento);
            $stmt->execute();
            $result = $stmt->fetch();  
               
        }
        catch (PDOException){
            
            $result = false;
        }
        finally {
                
            $stmt = null;
            $this->conexion = null;
            
            return $result;
        }
    }
}
?>