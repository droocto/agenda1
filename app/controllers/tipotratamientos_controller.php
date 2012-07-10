<?php

    #doc
    #    classname:    ClassName
    #    scope:        PUBLIC
    #
    #/doc
    
    class TipotratamientosController extends AppController
    {
        public $layout = '';

        public $helpers = array( 'html' , 'form' ,  'ajax' , 'js' );
        
        





        /*
         *
         * name
         *
         * @param
         *
         * @return
         */
        
        public function add()
        {
            $this->log('TIPO TRATAMIENTOS');
           $this->log($this->data);
            if ($this->data)
            {
                $this->redirect('/tipotratamientos/add');
                //$this->redirect('/clientes/add');
            }

        }


        /*
         *
         * name
         *
         * @param
         *
         * @return
         */
        
        public function findTratamiento()
        {
            $this->loadModel('Tratamiento');
            $selectTratamiento = $this->Tratamiento->find('list', array('conditions' => array('Tratamiento.tipo_tratamiento_id' => $this->data['typeIndicator']),
                                                    'fields' => array('Tratamiento.nombre')
                                                   )
                                    );
            $this->set('select', $selectTratamiento);
        }
    
    }
    ###

?>
