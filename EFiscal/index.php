<?php 

include("config/path.php");
include_once(ROOT_PATH . "/includes/header.php");
include_once(ROOT_PATH . "/controller/consultar.php");

/* Depuracion de errores

error_reporting(E_ALL);
ini_set('display_errors', 1); */

?>

<div class="container p-4">
    
    <div class="row">
        
        <div class="col-md-4">
        
            <div class="card card-body">
                
                <h2>Registro</h2>
                
                <form action="./controller/guardar.php" method="POST">

                    <div class="form-group">
                        <input type="number" name="idnumeracion" class="form-control" placeholder="ID Numeraci&oacute;n">
                    </div>
                    <div class="form-group">
                        <input type="number" name="idestado" class="form-control" placeholder="ID Estado">
                    </div>
                    <div class="form-group">
                        <input type="number" name="numero" class="form-control" placeholder="N&uacute;mero">
                    </div>
                    <div class="form-group">
                        <input type="text" name="fecha" class="form-control" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="Fecha"/>
                    </div>
                    <div class="form-group">
                        <input type="number" step="any" name="base" class="form-control" placeholder="Base">
                    </div>
                    <div class="form-group">
                        <input type="number" step="any" name="impuestos" class="form-control" placeholder="Impuestos">
                    </div> 

                    <input type="submit" class="btn btn-success btn-block" name="creardocumento" value="Guardar">
                </form>
            </div>
        </div>  
        
        <div class="col-md-8">
            
            <table class="table table-bordered">
                
                <thead>
                    <tr>
                        <th>Numeraci&oacute;n</th>
                        <th>Estado</th>
                        <th>N&uacute;mero</th>
                        <th>Fecha</th>
                        <th>Base</th>
                        <th>Impuestos</th>
                    </tr>
                </thead>
                <tbody>
                    <?php

                        $consultar = new Consultar();
                        $resultados = $consultar->obtenerDocumentos();

                        foreach ($resultados as $row) {
                            echo "<tr>";
                            echo "<td>" . $row['idnumeracion'] . "</td>";
                            echo "<td>" . $row['descripcion'] . "</td>";
                            echo "<td>" . $row['numero'] . "</td>";
                            echo "<td>" . $row['fecha'] . "</td>";
                            echo "<td>" . $row['base'] . "</td>";
                            echo "<td>" . $row['impuestos'] . "</td>";
                            echo "</tr>";
                        }
                    ?>
                </tbody>
            </table>
            
        </div>
    </div>
</div>


<?php

include_once(ROOT_PATH . "/includes/footer.php")
        
?>
