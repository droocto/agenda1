  
  var Review = {
  
    affiliateId : null,
    
    init : function () {
        //console.log(gestation);
        //console.log(elderly);
        //console.log(cephalic);
        $j(".focus").live('focusout', function (ev){
            ev.preventDefault();
            //console.log($j(this).attr('id'));
            Review.getAffiliate($j(this).attr('id'));
            Review.send();            
            return false;
        });    
    },
    
    
    
    /**
     * Obtiene el id del afiliado
     *
     * @return bool
     *
     */
    getAffiliate : function (value) {
        if (value == undefined) {
            return false;
        }    
        
        var val = value.split('_');
        
        if (!val[1]) {
            return false;
        }
        Review.affiliateId = val[1];
        return true;
    
    },
   
    
    /**
     * Obtiene los datos para enviar por post
     * @param {int} affiliateId
     *
     * @return {json}
     */ 
    listFields: function() {
        
        var affiliateId = Review.affiliateId;
        //console.log("AfiliadoId %d ",affiliateId);
        
        var peopleId = $j("#InscriptionPeoplegroupId").val();
        //console.log("PeopleId %d ",peopleId);
        var obj = null;
        if (in_array(peopleId,gestation)) {
            //console.log("Es gestante");
            obj = {'data[Review][affiliate_id]'  :Review.affiliateId,
                   'data[Review][datereview]'    :$j('#InscriptionDatereview').val(),
                   'data[Review][peoplegroup_id]':peopleId,
                   'data[Review][age]'           :$j("#age_"+affiliateId).val(),
                   'data[Data][sex]'             :$j("#sex_"+affiliateId).val(),
                   'data[Review][weight]'        :$j("#weight_"+affiliateId).val(),
                   'data[Review][size]'          :$j("#size_"+affiliateId).val(),
                   'data[Review][weekgestation]' :$j("#weekgestation_"+affiliateId).val()
            };
            
            return obj;            
            
        } else if (in_array(peopleId,elderly) ) {
             //console.log("Es Adulto");
             obj = {'data[Review][affiliate_id]'       :Review.affiliateId,
                    'data[Review][datereview]'         :$j('#InscriptionDatereview').val(),
                    'data[Review][peoplegroup_id]'     :peopleId,
                    'data[Review][age]'                :$j("#age_"+affiliateId).val(),
                    'data[Data][sex]'                  :$j("#sex_"+affiliateId).val(),
                    'data[Review][weight]'             :$j("#weight_"+affiliateId).val(),
                    'data[Review][size]'               :$j("#size_"+affiliateId).val(),
                    'data[Review][hipcircumference]'   :$j("#hipcircumference_"+affiliateId).val(),
                    'data[Review][waistcircumference]' :$j("#waistcircumference_"+affiliateId).val()
            };
            return obj;
            
        } else if (in_array(peopleId,cephalic) ) {
             //console.log("Es infante");
             obj = {'data[Review][affiliate_id]' :Review.affiliateId,
                   'data[Review][datereview]'    :$j('#InscriptionDatereview').val(),
                   'data[Review][peoplegroup_id]':peopleId,
                   'data[Review][age]'           :$j("#age_"+affiliateId).val(),
                   'data[Data][sex]'             :$j("#sex_"+affiliateId).val(),
                   'data[Review][weight]'        :$j("#weight_"+affiliateId).val(),
                   'data[Review][size]'          :$j("#size_"+affiliateId).val(),
                   'data[Review][cephalic]'      :$j("#cephalicval_"+affiliateId).val()
            };
            return obj;
                    
        } 
        //console.log("No aplica");
        obj = {'data[Review][affiliate_id]'  :Review.affiliateId,
               'data[Review][datereview]'    :$j('#InscriptionDatereview').val(),
               'data[Review][peoplegroup_id]':peopleId,
               'data[Review][age]'           :$j("#age_"+affiliateId).val(),
               'data[Data][sex]'             :$j("#sex_"+affiliateId).val(),
               'data[Review][weight]'        :$j("#weight_"+affiliateId).val(),
               'data[Review][size]'          :$j("#size_"+affiliateId).val()              
        };
        return obj;
        
            
    },
    
    
    /**
     * Envia los datos
     *
     * @return bool
     */
    send: function () {
    
        if (!Review.validateFields()) {
            return false;
        }

        $j(".errorJs").css('');
        $j(".errorJs").html('');
        //console.log("#"+Review.affiliateId);
        $j("#result_"+Review.affiliateId).ajaxStart(function (){
            $j("#result_"+Review.affiliateId).html(urlImg);
        });

        console.log("Va a enviar el post");
        
        $j.post(url+'reviews/reviewMassives',Review.listFields(),function (data){
            
            console.log("Datos: "+Review.listFields());
            
            var data  = eval("(" +data+ ")");
            var error = '';
            if (data.result != 1) {
                var count = 1;
                for (a in data) {
                    var element = $j("#error_"+a+'_'+Review.affiliateId);
                    if (element.length > 0) {
                        element.css({backgroundColor: 'red',color: 'white'});
                        element.html(eval("data."+a));
                    } else {
                        if (eval("data."+a) != '0') {
                            error = error+eval("data."+a)+'<br> ';
                            $j("#result_"+Review.affiliateId).css({backgroundColor: 'red', borderLeft: '5px solid #ccc',color: 'white'});
                            $j("#result_"+Review.affiliateId).html(error);
                            count++;
                        }
                    }
                }
                //Review.displayError('');
            } else {
                Review.indicators(data);
                Review.correct();
            }
            
        });
        return true;
           
    
    },
    
    /**
     * Despliega un error en la fila de los campos
     *
     * @param {int}    affiliateId
     * @param {string} messageText
     *
     * @return {bool}
     *
     */
    displayError: function (messageText) {
        if (Review.affiliateId == undefined || messageText == undefined) {
            return false;
        }    
        
        $j("#"+Review.affiliateId).html(messageText);
        
    },
    
    
    /**
     * Verifica que esten definidos los campos principales
     *
     * @return {bool}
     */
    validateFields: function () {
        $j("#error").html('');
        if (!$j("#InscriptionPeoplegroupId").val() || !$j("#InscriptionDatereview").val()) {
            $j("#link").focus();
            loadMsn('error','0','Los campos Fecha de Valoración, Grupo Poblacional y Comunidad son necesarios para la consulta')
            return false;
        }
        
        return true;
    },
    
    
    correct: function () {
        if (Review.affiliateId == undefined) {
            return false;
        }  
        
        $j("#result_"+Review.affiliateId).html('<div class="ui-state-default ui-corner-all" style="width:16px; height:16px; margin: 0px; float: left;"><span class="ui-icon ui-icon-circle-check"></span></div>');
        $j(".fill_"+Review.affiliateId+' input').attr('disabled',true);
        //console.log(".fill_"+Review.affiliateId+' input');
        return true;      
        
    
    },

    /**
     * Organiza el resultado de los indicadores
     *
     * @param {object} data
     *
     * @return {bool}
     *
     */
    indicators: function (data) {

        for (a in data) {
            
            var indicator = $j("#"+a+'_'+this.affiliateId);
            if (indicator.length > 0) {
                //console.log("#"+a+'_'+this.affiliateId+' '+eval("data."+a+'.label'));
                indicator.html(eval("data."+a+'.label'));
            }
            
        }
        return true;
        
    }
  
  };
  
  
  $j(document).ready(function (){
        $j('#InscriptionDatereview').datepicker();
        Review.init();

        $j(".form").live('keydown', 'return',function (e) {
           Keyfocus.numFields = 1;
           Keyfocus.init(e,'mainForm',this);
        });

  });
