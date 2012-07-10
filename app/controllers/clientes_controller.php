<?php

    #doc
    #    classname:    ClassName
    #    scope:        PUBLIC
    #
    #/doc
    
    class ClientesController extends AppController
    {
        #    internal variables
        var $name = 'Clientes';
        public $helpers = array('Html', 'Form', 'ajax' , 'js');
        public $layout = '' ;
        
        /**
        * Method to generate an appointment taking client data and parameters of the appointment
        *
        * @return   void
        */

        public function add()
        {
            if ($this->data) {
                if ( $this->Cliente->saveAll($this->data, array('validate' => 'fist')) ) {
                    $this->set('success', 'Cita creada');

                    // Redirect to the same controller can refresh the form
                    $this->redirect('/clientes/add');
                } else {
                    $this->set('error', 'Error en la operación');
                    $this->set('msn', $this->Cliente->validationErrors);
                }
            }


            $this->loadModel('TipoTratamiento');
            $selectTipoTratamiento = $this->TipoTratamiento->find('list', array('fields' => array('TipoTratamiento.nombre'),
                                                                                'recursive' => -1
                                                               )
                                                );
            $this->set('selectTipoTratamiento', $selectTipoTratamiento);


            $this->loadModel('Tratamiento');
            $selectTratamiento = $this->Tratamiento->find('list', array('fields' => array('Tratamiento.nombre'),
                                                                                'recursive' => -1
                                                               )
                                                );
            $this->set('selectTratamiento', $selectTratamiento);



        }


        /**
        * This method retrieves the data from a client according to their number of document
        *
        *@param integer $valDoc
        *
        * @return   void
        */

        public function findClient($valDoc)
        {

            // consulta los datos del cliente que posee el numero de documento enviado
            $result = $this->Cliente->find('all', array(
                                                        'conditions' => array(
                                                                                'Cliente.documento' => $valDoc
                                                                        ),
                                                        'recursive' => -1)
                                            );

            $result = json_encode($result[0]['Cliente']);
            $this->set('result', $result);
        }





        /**
        * Este método es usado para agregar clientes permanentes
        * @param    void
        * @return   void
        */
        public function add_cliente()
        {   
            if ($this->data) {
                if ($this->Cliente->save($this->data)) {
                    //var_dump($this->Cliente->validationErrors);
                    $this->Session->setFlash('Ingreso');
                    $this->redirect('/clientes/add');
                }
            }
            $this->loadModel('Ciudad');
            $this->set('ciudad', $this->Ciudad->find('list'));
        }
        
        
        /**
        * Este método permite editar las propiedades de un cliente
        * @param    integer $id
        * @return   void
        */
        public function edit($id= null)
        {   
            if (empty($this->data)) {
                $this->Cliente->id =  $id;
                $this->set('result', $this->Cliente->findById($id));
            } else {
                    if ($this->Cliente->save($this->data)) {
                        $this->Session->setFlash('Operación exitosa');
                        $this->redirect('/clientes');
                    }
            }
            $this->render('add');
        }
        
        
        /**
        * Este método permite eliminar a un cliente
        * @param    integer $id
        * @return   void
        */
        public function del($id = null)
        {
            if ($this->Cliente->delete($id)) {
                $this->redirect('/clientes/index');
            }
            
        }



        /*
         * This function is for test
         * name: dummyFunction
         *
         * @param void
         *
         * @return void
         */
        
        public function dummyFunction()
        {
            if ($this->data) {
                $this->redirect('/clientes/index');
            }
        }

    
    }
    ###

?>
