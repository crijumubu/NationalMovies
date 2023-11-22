<?php

include_once(__DIR__ . "/../config/config.php");
include_once(ROOT_PATH . "/views/templates/cabecera.php");
include_once(ROOT_PATH . "/controller/consultar.php");
include_once(ROOT_PATH . "/controller/editar.php");

$controller = new Consultar();

if ($_GET['iddocumento']){

    $documento = $controller->obtenerDocumento($_GET['iddocumento']);
}

?>

<div class="container p-4">
    <div class="row">
        <div class="col-md-4 mx-auto">
            <div class="card card-body">
                <form action="/EFiscal/controller/editar.php?iddocumento=<?php echo $documento['iddocumento'] ?>" method="POST">

                    <h3 style="text-align: center;">Actualizar</h3>

                    <div class="form-group">
                        <input type="number" name="idnumeracion" class="form-control" value="<?php echo $documento['idnumeracion'] ?>" placeholder="ID Numeraci&oacute;n">
                    </div>

                    <div class="form-group">
                        <input type="number" name="idestado" class="form-control" value="<?php echo $documento['idestado'] ?>" placeholder="ID Estado">
                    </div>

                    <div class="form-group">
                        <input type="number" name="numero" class="form-control" value="<?php echo $documento['numero'] ?>" placeholder="N&uacute;mero">
                    </div>

                    <div class="form-group">
                        <input type="text" name="fecha" class="form-control" value="<?php echo $documento['fecha'] ?>" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="Fecha"/>
                    </div>

                    <div class="form-group">
                        <input type="number" step="any" name="base" class="form-control" value="<?php echo $documento['base'] ?>" placeholder="Base">
                    </div>

                    <div class="form-group">
                        <input type="number" step="any" name="impuestos" class="form-control" value="<?php echo $documento['impuestos'] ?>" placeholder="Impuestos">
                    </div>

                    <input type="submit" class="btn btn-success btn-block" name="actualizardocumento" value="Guardar">

                </form>
            </div>
        </div>
    </div>
</div>

<?php

include_once(ROOT_PATH . "/views/templates/piedepagina.php");

?>