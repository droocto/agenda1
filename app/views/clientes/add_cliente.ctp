<script>
$j(document).ready(function() {

    $j("#ciudad").change(function(){
        var valor = $j('#ciudad option:selected').text();
        alert(valor);
        //Se envía el resultado a una función php que consulte los departamentos y los traiga por JSON
        
        /* Esta funcion sirve para cuando son muchos elementos
        $j('#ciudad option:selected').each(function(){
            var valor = $j(this).text();
            alert(valor);
        });
        */
    });

});
</script>
<?php echo $form->create('Cliente'); ?>
<fieldset>
    <legend>Informaci&oacute;n del Cliente</legend>
    <ul>
        <li>
            <?php echo $form->input('documento', array('label'=>'Documento'));?>
            <?php echo $form->input('nombre', array('type'=>'text', 'label'=>'Nombre'));?>
        </li>
        <li>
            <?php echo $form->input('apellido', array('type'=>'text', 'label'=>'Apellido'));?>
            <?php echo $form->input('direccion', array('type'=>'text', 'label'=>'Direccion'));?>
        </li>
        <li>
            <?php echo $form->input('telefono', array('type'=>'text', 'label'=>'Telefono'));?>
            <?php echo $form->input('email', array('type'=>'text', 'label'=>'Email'));?>
        </li>
        <li>
            <?php echo $form->input('estado', array('type'=>'text', 'label'=>'Estado'));?>
            <?php echo $form->input('ciudades', array('type'=>'select', 'options'=> $ciudad, 'id' => 'ciudad'));?>
        </li>
    </ul>
</fieldset>
<?php echo $ajax->submit('Grabar',array('update' => 'content'));?>
<?php echo $form->end(); ?>


