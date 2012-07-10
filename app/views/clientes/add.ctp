<script type="text/javascript">
$j(document).ready(function()
{
    $j("#documento").blur(function(){
        var valDoc = $j(this).val();

        $j.getJSON(url+"clientes/findClient/"+valDoc, function(data){
            $j("#ClienteNombre").val(data.nombre);
            $j("#ClienteApellido").val(data.apellido);
            $j("#ClienteDireccion").val(data.direccion);
            $j("#ClienteTelefono").val(data.telefono);
            $j("#ClienteEmail").val(data.email);
        })
    })


    $j("#tipo_tratamiento").change(function(){
            var typeIndicator = $j(this).val();

            $j.post(url + 'tipotratamientos/findTratamiento/', {'data[typeIndicator]':typeIndicator}, function(data){
                $j("#tratamiento").html(data);
            })

    })





});



</script>



<?php echo $form->create('Cita', array('url' => '/clientes/add')); ?>
<fieldset>
    <legend>Creaci&oacute;n de Citas</legend>
    <ul>
        <li>
            <?php echo $form->input('Cliente.documento', array('label'=>'Documento', 'id' => 'documento'));?>
            <?php echo $form->input('Cliente.nombre', array('type'=>'text', 'label'=>'Nombre'));?>
        </li>
        <li>
            <?php echo $form->input('Cliente.apellido', array('type'=>'text', 'label'=>'Apellido'));?>
            <?php echo $form->input('Cliente.direccion', array('type'=>'text', 'label'=>'Direccion'));?>
        </li>
        <li>
            <?php echo $form->input('Cliente.telefono', array('type'=>'text', 'label'=>'Telefono'));?>
            <?php echo $form->input('Cliente.email', array('type'=>'text', 'label'=>'Email'));?>
        </li>
        <li>
            <?php echo $form->input('Cliente.0.estado', array('type' =>'checkbox', 'label'=>'Estado'));?>
            <?php echo $form->input('Cita.0.hora_cita', array('type' => 'time', 'label' => 'Hora de Cita'));?>
        </li>
        <li>
            <?php echo $form->input('Cita.0.fecha_cita', array('type' => 'date', 'label' => 'Fecha de Cita'));?>
            <?php echo $form->input('Cita.0.descripcion', array('type' => 'textarea', 'label' => 'Descripcion'));?>
        </li>
        <li>
            <?php echo $form->input('TipoTratamiento.nombre', array(
                                                                    'type' => 'select', 
                                                                    'options' => $selectTipoTratamiento,
                                                                    'label' => 'Tipo de Tratamiento',
                                                                    'id' => 'tipo_tratamiento',
                                                                    'empty' => '----'
                                                             )
                                    ); 
            ?>
        </li>
        <li>
            <?php echo $form->input('Tratamiento.nombre', array('type' => 'select', 'options' => $selectTratamiento, 'label' => 'Tipo de Tratamiento', 'id' => 'tratamiento', 'empty' => '----')); ?>
        </li>
    </ul>
<div id = "tabla"></div>
</fieldset>
<?php echo $ajax->submit('Agregar', array('update'   =>'content'));?>
<?php echo $form->end(); ?>


