<script>
$j(document).ready(function(){
    var cont = 0;
    $j("#indicador").click(function(){
            cont++;
//           event.preventDefault();
           $j("#rst").append('<b>Tratamiento<b><br>')
                     .append('<input name = "data[TipoTratamiento][nombre_tratamiento_'+cont+']"><br>')
                     .append('<b>Descripcion<b><br>')
                     .append('<textarea name = "data[TipoTratamiento][descripcion_tratamiento_'+cont+']" cols="50" rows="5"></textarea><br><br>');
    })

});
</script>
<?php echo $form->create('TipoTratamiento', array('url' => '/tipotratamientos/add')); ?>
<fieldset>
    <legend>Creacion Tipos de Tratamientos</legend>
    <ul>
        <li>
            <?php echo $form->input('TipoTratamiento.nombre', array('type'=>'text', 'label'=>'Tipo de Tratamiento'));?></td>
        </li>
        <li>
            <div id="rst"></div>
        </li>
    </ul>
</fieldset>
<?php 
//echo $ajax->submit('Agregar', array('update'   =>'content'));
echo $form->submit('Guardar');
?>
<?php echo $form->end(); ?>
 <div>
    <?php echo $form->button('Agregar Indicador', array('id' => 'indicador')); ?>
</div>

