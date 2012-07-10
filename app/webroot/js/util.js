
 var nav4          = window.Event ? true : false; 
 function valdNumber(evt) {
    // Backspace = 8, Enter = 13, ‘0′ = 48, ‘9′ = 57, ‘.’ = 46
    var key = nav4 ? evt.which : evt.keyCode;
    return (key <= 9 || (key >= 48 && key <= 57));
 }

function addCommas(nStr)
{
	nStr = nStr.replace( ',' ,'');
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function round ( val, precision ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Philip Peterson
    // *     example 1: round(1241757, -3);
    // *     returns 1: 1242000
    // *     example 2: round(3.6);
    // *     returns 2: 4
 
    var precision = (round.arguments.length > 1) ? round.arguments[1] : 0;
    return Math.round(val * Math.pow(10, precision))/Math.pow(10, precision);
}

/**
 * Prints the content of a given div
 * @return void
 * @author Mauricio Morales
 */
function pleasePrint(divCont) {
    vWin = window.open('', 'printSpecial', 'left=0,top=0,width=1,height=1,toolbar=0,scrollbars=0,status=0');
    vWin.document.open();
    vWin.document.write('<html><body onload="window.print()">'+ $(divCont).innerHTML +'</body></html>');
    vWin.document.close();
    setTimeout(function(){vWin.close();},1000);
}

function doAjaxItem(itemId, type) {
    var url = (tree.getUserData(itemId, "url")!=null?tree_smpl.getUserData(itemId, "url").toString()._dhx_trim():"");
/*
    if (!tree.hasChildren(itemId)) {
        if (itemId.search('/') > 0) {
console.log('XXXX2'); 
console.log(itemId.search('/')); 
console.log(tree.getUserData(itemId, "iframe")); 

            if (tree.getUserData(itemId, "iframe")) {
console.log('XXXX3'); 
console.log(tree.getUserData(itemId, "iframe")); 
                loadIframe(itemId);
            } else {
console.log('XXXX4'); 
                $Ajax(itemId);
            }
            
        } else {
            eval(itemId);
        }
        url = url+"#"+itemId;
    }
*/
    
    if (!tree.hasChildren(itemId)) {
        if (itemId.search('/') > 0) {
            $Ajax(itemId);
        } else {
            eval(itemId);
        }
        url = url+"#"+itemId;
    }
    
    
    
    
    
    
    var itemIdTmp = itemId;
    var i = 0;
    do {
        itemIdTmp = tree.getParentId(itemIdTmp);
        if (tree.getUserData(itemIdTmp, "url") != null) {
            url = tree.getUserData(itemIdTmp, "url").toString()._dhx_trim() + ((url.indexOf("#")!==0)?"/":"") + url;
        }
        i++;
    } while (itemIdTmp != 0)
}


/**
 * Created Select Ajax
 * @param char select Id for field select
 * @param char table  Table from list
 * @param char fields for return
 * @param char changeselect Id from change select
 * @param char fieldname Field key from table
 * @param int type Type conection database
 * @return char
 *
 *
 */
function select(select,table,fields,changeselect,fieldname,type) {
    $j(select).change(function(){
        $j.post(url+'affiliates/createselect',{'data[fieldname]':fieldname,'data[type]':type,'data[table]':table,'data[field]':fields,'data[value]':$j(this).attr('value')},function (data){
            $j(changeselect).html(data);
        });
    });
}

/**
 * Load iframe data
 * 
 */
function loadIframe (item) {    
console.log('XXXX5'); 
    window.iframeLoad.location.href = url+item;
}


function loadMsn(div,state,msn) {
     var style,icon = null;
      if (state == '1') {
          style = 'ui-state-highlight ui-corner-all';
          icon  = 'ui-icon ui-icon-info';
      } else {
          style = 'ui-state-error ui-corner-all';
          icon  = 'ui-icon ui-icon-alert';
      }
      errorTest = msn;
      $j("#"+div).html("<div style='padding: 0pt 0.5em; margin-top: 20px;' class='"+style+"'><p><span style='float: left; margin-right: 0.3em;' class='"+icon+"'></span>"+msn+"</p></div>");
  }

  function in_array (needle, haystack, argStrict) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: vlado houba
    // +   input by: Billy
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: true
    // *     example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
    // *     returns 2: false
    // *     example 3: in_array(1, ['1', '2', '3']);
    // *     returns 3: true
    // *     example 3: in_array(1, ['1', '2', '3'], false);
    // *     returns 3: true
    // *     example 4: in_array(1, ['1', '2', '3'], true);
    // *     returns 4: false
    var key = '',
        strict = !! argStrict;

    if (strict) {
        for (key in haystack) {
            if (haystack[key] === needle) {
                return true;
            }
        }
    } else {
        for (key in haystack) {
            if (haystack[key] == needle) {
                return true;
            }
        }
    }

    return false;
}


/**
 * Calcula Digito de verificacion
 *
 * @author Adrian Rivera *
 * @param {Number} i_rut
 * 
 * @return {Number}
 */

function calcularDigitoVerificacion(i_rut) {
    var pesos = new Array(71,67,59,53,47,43,41,37,29,23,19,17,13,7,3);
    rut_fmt = formatoCeros(i_rut);
    suma = 0;
    for ( i=0; i<=14; i++ )
    suma += rut_fmt.substring(i, i+1) * pesos[i];
    resto = suma % 11;
    if ( resto == 0 || resto == 1 )
    digitov = resto;
    else
    digitov = 11 - resto;
    return(digitov);
}

/**
 * Hace un relleno de datos faltantes
 *
 * @param {Number} Nit
 * 
 * @return {Number}
 */
function formatoCeros(i_valor) {
    var total = new String(i_valor).length;
    if (total == 15) {
        return new String(i_valor);
    } else {
        var num_ceros = 15 - total;
        var relleno = "";
        for (i=0;i<num_ceros;i++) {
            relleno = relleno + "0";
        }
        i_valor = relleno + i_valor;
        return i_valor;
    }
}

/**
 * Convierte los datos en dias
 *
 * @param {int} unidad
 * @param {int} valor
 *
 * @return {int}
 */
function convertDay(unidad,valor) {

    if (!unidad || !valor) {
        return false;
    }

    var rst = null;

    switch (unidad) {
        case '1':
            rst = valor*365;
            break;
        case '2':
            rst = valor*30;
            break;
        case '3':
            rst = valor
            break;
    }

    return rst;


}

function valSubmitReview () {
    $j("#errorEdad").attr('class','');
    if ($j("#AffiliateAge1").val()) {

    
        var day1 = new Number( convertDay($j("#AffiliateUnid1").val(),$j("#AffiliateAge1").val()) );
        var day2 = new Number( convertDay($j("#AffiliateUnid2").val(),$j("#AffiliateAge2").val()) );
       
        if (day1 > day2) {
            $j("#errorEdad").attr('class','error');
            loadMsn('error','0','La edad inicial no puede ser mayor que la final');
            return false;
        }
    }

    $j("#ReviewAgeDay1").val(day1);
    $j("#ReviewAgeDay2").val(day2);

    if ($j("#ReviewExcel").attr('checked')) {
                 
        var form = $j("#form");
        form.attr('target','_blank');
        form.submit();
        return false;
    }

    return true;
    
}

function valSubmitNotreview() {
    
    if ($j("#ReviewExcel").attr('checked')) {
        
        var form = $j("#form");
        form.attr('target','report');
        form.submit();
        return false;
    } 
	else {	
		
		 var mount = $j("#mountOfMonth").val();	  
		  if ( !mount ) {
             loadMsn('error','0','Es obligatorio digitar la cantidad de meses sin valoración')
			 return false; 	    
          }
    }
   
    return true;
}


function ValSub () {
     var form = $j("#form");
          form.submit();
          return true;
}

/**
 * fixed value from field
 *
 * @param field {string}
 * @param value {string}
 * @return {bool}
 */
function selectValue (field,value) {    
    $j("#"+field).val(value);
}


function selectValueArray(object) {
    if (typeof object !='object') {
        return false
    }
    
    for (var key in object) {
        $j("#"+key).val(object[key]);
        $j("#"+key).focus();
    }
    
    return false;
}


function valSubmitSend() {

    if ($j("#InscriptionExport").attr('checked')) {        
        var form = $j("#form");
        form.attr('target','_BLANCK');
        form.submit();
        return false;
    }

    return true;
}

function formexcel() {
    if ( $j("#excel").attr('checked') == true ) {
         jQuery('#sendForm').attr('target','_blank');
         jQuery('#sendForm').submit();
                  
         return false;
    }
        return true;        
}
         
 function validateForm()
{
    if ($j("#excel").attr('checked')) {
        var form = $j("#mainform");
        form.attr('target','_blank');
        form.submit();
        return false;
    }
    return true;
}



function submitInscriptionsPerMonth()
{
    if ($j("#pdf").attr('checked')) {
        var form = $j("#mainform");
        form.attr('target','_blank');
        form.submit();
        return false;
    } 
    return true;
    
}

// Autosuggest options
var formItemCounter = 0;
var asOptions = [];
var asAuto = [];
var asFunctions = [];

