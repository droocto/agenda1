<?php

    #doc
    #    classname:    ClassName
    #    scope:        PUBLIC
    #
    #/doc
    
    class Tipotratamiento extends AppModel
    {
        #    internal variables
        var $useTable = 'tipo_tratamientos';
        var $name = 'TipoTratamiento';

        var $hasMany = array (
                                    'Tratamiento' => array(
                                                                     'className' => 'Tratamiento',
                                                                     'foreignKey' => 'tipo_tratamiento_id'
                                                                     )
                                     );

    }
    ###

?>
