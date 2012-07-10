<?php

#doc
#    classname:    ClassName
#    scope:        PUBLIC
#
#/doc

class Cliente extends AppModel
{
    var $name = 'Cliente';
    var $hasMany = array('Cita' => array(
                                        'classname' => 'Cita',
                                        'foreignKey' => 'cliente_id',
                                        'dependent' => true
                                    )
                         ); 


}
###

?>
