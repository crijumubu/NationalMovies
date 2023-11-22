<?php 

include("config/config.php");
include_once(ROOT_PATH . "/views/templates/cabecera.php");
include_once(ROOT_PATH . "/controller/consultar.php");

// Depuracion de errores

error_reporting(E_ALL);
ini_set('display_errors', 1); 

?>

<div class="container p-4">
    
    <div class="row">
        
        <div class="col-md-4">

            <?php 
            
            if (isset($_SESSION['mensaje'])){ ?>

                <div class="alert alert-<?= $_SESSION['tipomensaje']?> alert-dismissible fade show" role="alert">
                    <?= $_SESSION['mensaje'] ?>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                
            <?php session_unset(); } ?>

            <div class="card card-body">
                
                <h3 style="text-align: center;">Registro</h3>
                
                <form action="/EFiscal/controller/guardar.php" method="POST">

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
                        <th class="text-center">Numeraci&oacute;n</th>
                        <th class="text-center">Estado</th>
                        <th class="text-center">N&uacute;mero</th>
                        <th class="text-center">Fecha</th>
                        <th class="text-center">Base</th>
                        <th class="text-center">Impuestos</th>
                        <th class="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <?php

                        $consultar = new Consultar();
                        $resultados = $consultar->obtenerDocumentos();

                        foreach ($resultados as $row) { ?>
                            <tr>

                                <td style="text-align: center; white-space: nowrap;"> <?php echo $row['idnumeracion'];?> </td>
                                <td style="text-align: center; white-space: nowrap;"> <?php echo $row['descripcion'];?> </td>
                                <td style="text-align: center; white-space: nowrap;"> <?php echo $row['numero'];?> </td>
                                <td style="text-align: center; white-space: nowrap;"> <?php echo $row['fecha'];?> </td>
                                <td style="text-align: center; white-space: nowrap;"> <?php echo $row['base'];?> </td>
                                <td style="text-align: center; white-space: nowrap;"> <?php echo $row['impuestos'];?> </td>

                                <td style="text-align: center; white-space: nowrap;">

                                    <a class="btn btn-secondary" href="./views/editar.php?iddocumento=<?php echo $row['iddocumento'];?>"> <i class="fas fa-marker"></i> </a>
                                    <a class="btn btn-danger" href="./controller/eliminar.php?iddocumento=<?php echo $row['iddocumento'];?>"> <i class="far fa-trash-alt"></i> </a>

                                </td>

                            </tr>
                    <?php } ?>
                </tbody>
            </table>
            
        </div>
    </div>
</div>


<?php

include_once(ROOT_PATH . "/views/templates/piedepagina.php")
        
?>