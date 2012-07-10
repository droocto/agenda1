<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
    <title>Ethan</title>
    <?php 
        echo $html->css('cake.generic');
        // Jquery
        echo $javascript->link( "jquery/jquery" );
        echo $javascript->link( "jquery/jquery-ui.js" );

        echo $javascript->link( "prototype/prototype-1.6.0.3.js" );

        // Ajax and effects libraries
        echo $javascript->link( "menu/dhtmlxcommon" );
        echo $javascript->link( "menu/dhtmlxtree" );


        // Util
        echo $javascript->link( "util" );
    ?>
    <script>
         var url = '<?php echo $html->url('/') ?>';
        var $j   = jQuery.noConflict();
        var page = 1;
        
        function $Ajax(action, divCont, eval) {
            divCont = (typeof(divCont) == 'undefined') ? 'content' : divCont;
            eval = (typeof(eval) == 'undefined') ? true : false;
            if (action.indexOf('/') == 0) {
                action = action.substring(1);
            }

            // First we remove the last #__ link
            // TODO: check this feature in IE
            var windowLoc   = window.location.toString();
            windowLoc       = windowLoc.split('#');
            window.location = windowLoc[0] + '#__' + action;

            $j.ajax({
                       type: "POST",
                       url: '<?php echo $html->url('/') ?>' + action,
                       dataType:'html',
                       beforeSend: function (){
                            $j('#dload').fadeIn('slow');

                       },
                       success: function(msg){
                         $j('#'+divCont).html(msg);
                       },
                       complete: function (){
                           $j('#dload').fadeOut('slow');
                       }
            });
        }
        
        function toggleMenu(type) {
            if (type == 'main') {
                //$('treeboxbox_tree').innerHTML = '';
                tree=new dhtmlXTreeObject("treeboxbox_tree","100%","100%",0);
                tree.setImagePath("<?php echo $html->webroot ?>img/treemenu/csh_bluebooks/");
                tree.enableHighlighting(true);
                tree.setOnClickHandler(function(id){doAjaxItem(id, type);});
                tree.loadXML("<?php echo $html->url('/ambientes/treeMenu') ?>");
                //$('titulomenulateral').innerHTML = 'Men&uacute; Principal';
            }
        }
    </script>
</head>
<body>
<div id="header"> Header Elements Will Go Here </div>

        <div id="menu-box">
            <div id="treeboxbox_tree" style="width:229px; height:410; background-color:#FFFFFF; border:0px; overflow-x:hidden; overflow-y:visible;"></div>
            <script>
                    toggleMenu('main');
            </script>
        </div>
        <div id="content-box">
            <div id="content">
            </div>
        <div id='msg'><?php $session->flash(); ?></div>
        </div>
            <div id="footer">Footer Text Goes Here!</div>

</body>
</html>
