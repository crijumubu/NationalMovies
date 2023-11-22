<?php

include_once(__DIR__ . "/../config/config.php");
include_once(ROOT_PATH . "/database/connection.php");

class Eliminar {
    
    private $conexion;
    
    function __construct() {
        $database = new Connection();
        $this->conexion = $database->conexion();
    }

    public function eliminarDocumento() {
        
        if (isset($_GET['iddocumento'])){
            
            $status = true;

            try{
            
                $sql = "DELETE FROM documento WHERE iddocumento = :iddocumento;";
                $stmt = $this->conexion->prepare($sql);
                $stmt->bindParam(':iddocumento', $_GET['iddocumento']);
                $stmt->execute();
                
                $_SESSION['mensaje'] = "Documento eliminado satisfactoriamente!";
                $_SESSION['tipomensaje'] = "danger";
                
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

$controlador = new Eliminar();
$controlador->eliminarDocumento();
?>