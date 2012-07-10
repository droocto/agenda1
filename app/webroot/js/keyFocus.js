/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/**
 * keyFocus.js
 *
 * Key changes the focus between
 *
 * LICENSE: Este archivo y los relacionados son propiedad intelectual
 * de Puntoexe Ltda. Prohibida la reproduccion parcial o total del contenido, asi
 * como el uso en otras aplicaciones sin autorizacion escrita de Puntoexe Ltda.
 *
 * @category   JavaScript
 * @package    1.2.1
 * @author     Adrian Rivera <arivera@sisfo.com>
 * @copyright  2010 Puntoexe S.AS.
 * @version    CVS: $Id:keyFocus.js$
 * @since      File available since Release 1.2.1
 * @example
 * $j('input').bind('keydown', 'return',function (e) {
       Keyfocus.init(e,'formDatos',this);
   });
 */

var Keyfocus = {
    idForm: null,
    countForm: 0,
    objectForm: null,
    Idthis:null,
    numFields:1,
    debug: false,
    field: null,
    setIdForm: function (val) {
        Keyfocus.idForm = val;
        return true;
    },
    setObject: function (object) {        
        Keyfocus.Idthis = object;
        return true;
    },
    setField: function (val) {
        Keyfocus.field = val;
    },
    instanceForm: function (){
        Keyfocus.objectForm = document.getElementById(Keyfocus.idForm);        
        Keyfocus.countForm  = Keyfocus.objectForm.length-Keyfocus.numFields;
        return true;
    },
    valKey: function () {
        return Keyfocus.Idthis.which;
    },
    valField: function () {        
        var campo = 0;       
        
        for (var i=1; i<Keyfocus.countForm; i++) {

            if ($j(Keyfocus.field).attr('id') == Keyfocus.objectForm[i].id) {

                if (Keyfocus.countForm == i + 1) {
                    campo = 1;

                } else {
                    campo = i + 1;
                }
            }
        }
        return campo;
    },
    focusFiel: function () {
        Keyfocus.instanceForm();

        var campo = Keyfocus.valField();
        var tecla = Keyfocus.valKey();

        campo = this.numFielVisible(campo);       

                
        switch(tecla) {        
        case 13:
            Keyfocus.objectForm[campo].focus();
            return false;
            break;
        case 39:
            Keyfocus.objectForm[campo].focus();
            return false;
            break;

        case 37:
            var valor = campo;
            valor--;
            valor--;
            valor = this.numFielVisible(valor);
            //console.log(valor+' '+$j(Keyfocus.objectForm[valor]).attr('id'));
            Keyfocus.objectForm[valor].focus();
            return false;
            break;
        }
        return true;
    },

    /**
     * Verifica que el campo sea visible
     * @param {int} campo
     * @return {int}
     */
    numFielVisible: function (campo,accion){

         // si  el campo no es visible avanzo al otro campo
        while ( $j(Keyfocus.objectForm[campo]).is (':hidden') || $j(Keyfocus.objectForm[campo]).is ('name')) {
            campo++;
        }  
        return campo;
    },

    init: function (object,idForm,field) {
        Keyfocus.setIdForm(idForm);
        Keyfocus.setObject(object);
        Keyfocus.setField(field);
        Keyfocus.focusFiel();        
    }
    
}




