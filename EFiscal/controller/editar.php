<?php

include_once(__DIR__ . "/../config/config.php");
include_once(ROOT_PATH . "/database/connection.php");

class Editar {
    
    private $conexion;
    
    function __construct() {
        $database = new Connection();
        $this->conexion = $database->conexion();
    }

    public function EditarDocumento() {
        
        $status = true;

        if (isset($_POST['actualizardocumento'])) {


            try{
                
                $sql = "UPDATE documento SET idnumeracion = :idnumeracion, idestado = :idestado, numero = :numero , fecha = :fecha, base = :base, impuestos = :impuestos WHERE iddocumento = :iddocumento";
                $stmt = $this->conexion->prepare($sql);
                $stmt->bindParam(':iddocumento', $_GET['iddocumento']);
                $stmt->bindParam(':idnumeracion', $_POST['idnumeracion']);
                $stmt->bindParam(':idestado', $_POST['idestado']);
                $stmt->bindParam(':numero', $_POST['numero']);
                $stmt->bindParam(':fecha', $_POST['fecha']);
                $stmt->bindParam(':base', $_POST['base']);
                $stmt->bindParam(':impuestos', $_POST['impuestos']);
                $stmt->execute();

                $_SESSION['mensaje'] = "Documento editado satisfactoriamente!";
                $_SESSION['tipomensaje'] = "dark";

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

$controlador = new Editar();
$controlador->EditarDocumento();
?>