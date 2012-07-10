<?php
class AmbientesController extends AppController {
    //Este controlador no usa ningun modelo
    public $uses = null;
    public $layout = 'ambiente';

    public $helpers = array( 'html' , 'form' ,  'ajax' , 'js' );


    function index() 
    {
        //$this->redirect('/clientes/add/');
    }

    public function treeMenu() 
    {
        $this->layoutPath = 'xml';
        $this->layout = 'default';
    }

}
?>
