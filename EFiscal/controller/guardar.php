<?php

include_once(__DIR__ . "/../config/path.php");
include_once(ROOT_PATH . "/database/connection.php");

class Guardar {
    
    private $conexion;
    
    function __construct() {
        
        $database = new Connection();
        $this->conexion = $database->conexion();
    }

    public function insertarDocumento() {
        
        if (isset($_POST['creardocumento'])) {
            
            $status = true;
            
            try{
                
                $sql = "INSERT INTO documento (idnumeracion, idestado, numero, fecha, base, impuestos) VALUES (:idnumeracion, :idestado, :numero, :fecha, :base, :impuestos)";
                $stmt = $this->conexion->prepare($sql);
                $stmt->bindParam(':idnumeracion', $_POST['idnumeracion']);
                $stmt->bindParam(':idestado', $_POST['idestado']);
                $stmt->bindParam(':numero', $_POST['numero']);
                $stmt->bindParam(':fecha', $_POST['fecha']);
                $stmt->bindParam(':base', $_POST['base']);
                $stmt->bindParam(':impuestos', $_POST['impuestos']);
                $stmt->execute();
                
                header("Location: ../index.php");
            }
            catch (PDOException){
                
                $status = false;
            }
            finally {
                
                $stmt = null;
                $this->conexion = null;
                
                return $status;
            }
        }
    }
}

$controlador = new Guardar();
$controlador->insertarDocumento();
?>