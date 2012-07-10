<?php

    #doc
    #    classname:    ClassName
    #    scope:        PUBLIC
    #
    #/doc
    
    class Cita extends AppModel
    {
        #    internal variables
        var $name = 'Cita';
        var $hasAndBelongsToMany = array(
            'Tratamiento' => array(
            'classname' => 'CitaTipoTratamiento',
            'joinTable'=>'citas_tipo_tratamientos',
            'foreignKey'=>'id_cita',
            'associationForeignKey'=>'tratamiento_id')
        );
        
        ###    
    
    }
    ###

?>
