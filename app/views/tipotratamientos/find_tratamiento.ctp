<option value=''>--</option>
<?php if(!$select):?>
<option value=''>Sin Datos</option>
<?endif;?>
<?php foreach($select as $clave => $valor):?>
<option value=<?php echo $clave;?>><?php echo $valor;?></option>
<?php endforeach;?>
