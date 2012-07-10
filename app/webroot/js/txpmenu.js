//******************************************************************************
// ------ Apycom.com Tree-menu Data --------------------------------------------
//******************************************************************************
var tpathPrefix_img = "../../../webroot/img/treemenu/";

var tblankImage      = "../../../webroot/img/treemenu/blank.gif";
var tfontStyle       = "normal 8pt Tahoma";
var tfontColor       = ["#3F3D3D","#7E7C7C"];
var tfontDecoration  = ["none","underline"];

var titemBackColor   = ["#FFFFFF","#FFFFFF"];
var titemAlign       = "left";
var titemBackImage   = ["",""];
var titemCursor      = "hand";
var titemHeight      = 22;

var tmenuBackImage   = "";
var tmenuBackColor   = "";
var tmenuBorderColor = "#FFFFFF";
var tmenuBorderStyle = "solid";
var tmenuBorderWidth = 0;
var tmenuWidth       = '98%';
var tmenuHeight      = 0;

var titemTarget      = "content";
var ticonWidth       = 16;
var ticonHeight      = 16;
var ticonAlign       = "left";

var texpandBtn       =["expandbtn2.gif","expandbtn2.gif","collapsebtn2.gif"];
var texpandBtnW      = 9;
var texpandBtnH      = 9;
var texpandBtnAlign  = "left"

var tpoints       = 0;
var tpointsImage  = "";
var tpointsVImage = "";
var tpointsCImage = "";

var tabsolute        = 1;
var tmoveable        = 0;
var tmoveImage       = "../../../webroot/img/treemenu/movepic.gif";
var tleft            = 5;
var ttop             = 5;

var tfloatable       = 0;
var tfloatIterations = 10;

// XP-Style Parameters
var tXPStyle = 1;
var tXPIterations = 10;                  // expand/collapse speed
var tXPTitleTopBackColor = "";
var tXPTitleBackColor    = "#94A664";
var tXPTitleLeft    = "xptitleleft_o.gif";
var tXPExpandBtn    = ["xpexpand1_o.gif","xpexpand2_o.gif","xpcollapse1_o.gif","xpcollapse2_o.gif"];
var tXPBtnHeight    = 23;
var tXPTitleBackImg = "xptitle_o.gif";

var tstyles =
[
    ["tfontStyle=bold 8pt Tahoma","tfontColor=#FFFFFF,#E0E7B8",
     "tfontDecoration=none,none"],
    ["tfontStyle=bold 8pt Tahoma","tfontColor=#56662D,#72921D",
     "tfontDecoration=none,none"],
    ["tfontDecoration=none,none"],
    ["tfontStyle=bold 8pt Tahoma","tfontColor=#444444,#5555FF"],
];

var tXPStyles =
[
    ["tXPTitleBackColor=#E2E9BC",
     "tXPExpandBtn=xpexpand3_o.gif,xpexpand4_o.gif,xpcollapse3_o.gif,xpcollapse4_o.gif", "tXPTitleBackImg=xptitle2_o.gif"]
];

var tmenuItems =
[
    ["M&oacute;dulo de Sistemas", "", "","","", "Divisi&oacute;n de Sistemas, Contadores expertos...",,"1","0"],
    ["|Configuraci&oacute;n del Sistema", "", "iconarr.gif"],
        ["||Mantenimiento", "", "iconarr.gif"],
            ["|||Consulta SQL", "../admin/config.php?a=sqlQuery", "iconarr.gif"],
    ["|Administrar la Empresa ", "", "icon5.gif", "icon5o.gif", "", "Mi Empresa"],
        ["||Informaci&oacute;n Corporativa", "", "iconarr.gif"],
            ["|||Ver Informaci&oacute;n", "../admin/company.php", "iconarr.gif"],
            ["|||Actualizar Informaci&oacute;n", "../admin/company.php?a=updform", "iconarr.gif"],
        ["||Dependencias", "", "iconarr.gif"],
            ["|||Agregar Dependencia", "../admin/company.php?a=dependInsForm", "iconarr.gif"],
            ["|||Listar Dependencias", "../admin/company.php?a=dependList", "iconarr.gif"],
        ["||Sucursales", "", "iconarr.gif"],
            ["|||Agregar Sucursal", "javascript:window.top.newAgency();", "iconarr.gif"],
            ["|||Listar Sucursales", "javascript:window.top.agencyList();", "iconarr.gif"],
        ["||Bodegas", "", "iconarr.gif"],
            ["|||Agregar Bodega", "../admin/company.php?a=bganew", "iconarr.gif"],
            ["|||Listar Bodegas", "../admin/company.php?a=bga", "iconarr.gif"],
    ["|Administrar Usuarios", "", "icon2.gif", "icon2o.gif", "", "Usuarios del sistema"],
        ["||Agregar Usuario", "../admin/user.php?a=nuevo", "iconarr.gif"],
        ["||Listar/Buscar Usuarios", "../admin/user.php", "iconarr.gif"],
        ["||Roles de Usuario", "../admin/user.php?a=role", "iconarr.gif"],
        ["||Crear Rol de Usuario", "../admin/user.php?a=newRole", "iconarr.gif"],
    ["|Soporte", "", "icon5.gif", "icon5o.gif", "", "Problemas?"],
        ["||Cont&aacute;ctenos", "http://www.sisfo.com/contactenos.php", "iconarr.gif"],
        ["||Reportar Bug", "../util/bug.report.php", "iconarr.gif"],
    ["Sitio Web / Neptuno CMS", "", "","","", "Sitio Web",,"1","0"],
        ["|Configuraci&oacute;n General", "../neptuno/neptuno.php?a=configForm", "icon3.gif", "icon3o.gif", "", "Configuraci&oacute;n de Neptuno"],
        ["|Administrar Sitio Web v&iacute;a CMS", "../neptuno/neptuno.php?a=main&tree=yes", "icon1.gif", "icon1o.gif", "", "Administrar Sitio Web"],
        ["|Noticias", "", "icon5.gif", "icon5o.gif", "", "Noticias"],
            ["||Publicar Noticia", "../neptuno/noticia/noticia.php?a=form", "iconarr.gif"],
            ["||Listar Noticias", "../neptuno/noticia/noticia.php?a=list", "iconarr.gif"],
        ["|Contratos", "", "icon5.gif", "icon5o.gif", "", "Contratos"],
            ["||Categor&iacute;as", "", "iconarr.gif"],
                ["|||Nueva Categor&iacute;a", "../neptuno/contrato/contrato.php?a=catInsertForm", "iconarr.gif"],
                ["|||Listar Categor&iacute;as", "../neptuno/contrato/contrato.php?a=catList", "iconarr.gif"],
            ["||Estados", "", "iconarr.gif"],
                ["|||Nuevo Estado", "../neptuno/contrato/contrato.php?a=estadoInsertForm", "iconarr.gif"],
                ["|||Listar Estados", "../neptuno/contrato/contrato.php?a=estadoList", "iconarr.gif"],
            ["||Documentos anexos", "", "iconarr.gif"],
                ["|||Listar Documentos", "../neptuno/contrato/contrato.php?a=archivoList", "iconarr.gif"],
            ["||Publicar Contrato", "../neptuno/contrato/contrato.php?a=insertForm", "iconarr.gif"],
            ["||Listar Contratos", "../neptuno/contrato/contrato.php?a=contratoList", "iconarr.gif"],
        ["|Documentos", "", "icon5.gif", "icon5o.gif", "", "Documentos"],
            ["||Categor&iacute;as", "", "iconarr.gif"],
                ["|||Nueva Categor&iacute;a", "../neptuno/documento/documento.php?a=catInsertForm", "iconarr.gif"],
                ["|||Listar Categorias", "../neptuno/documento/documento.php?a=catList", "iconarr.gif"],
            ["||Publicar Documento", "../neptuno/documento/documento.php?a=insertForm", "iconarr.gif"],
            ["||Listar Documentos", "../neptuno/documento/documento.php?a=documentList", "iconarr.gif"],
    ["Herramientas de Intranet", "", "","","", "Agenda de Progrmaciones",,"1","0"],
        ["|Centro de Documentaci&oacute;n", "", "icon5.gif", "icon5o.gif"],
            ["||Categor&iacute;as", "", "iconarr.gif"],
            ["|||Crear Categor&iacute;a", "../intranet/document/document.php?a=catInsertForm", "iconarr.gif"],
            ["|||Listar Categor&iacute;as", "../intranet/document/document.php?a=catList", "iconarr.gif"],
            ["||Publicar Documento", "../intranet/document/document.php?a=insertForm", "iconarr.gif"],
            ["||Listar/Buscar Documentos", "../intranet/document/document.php", "iconarr.gif"],
            ["||Explorador", "../intranet/document/document.php?a=explorer", "iconarr.gif"],
        ["|Sistema de Tickets", "", "icon4.gif", "icon4o.gif"],
            ["||Pendiente por responder", "../intranet/ticket/ticket.php?a=showInbox&pending=true", "iconarr.gif"],
            ["||Tickets recibidos", "../intranet/ticket/ticket.php?a=showInbox", "iconarr.gif"],
            ["||Tickets enviados", "../intranet/ticket/ticket.php?a=showOutbox", "iconarr.gif"],
            ["||Enviar un Ticket", "../intranet/ticket/ticket.php?a=sendForm", "iconarr.gif"],
        ["|Agenda", "", "icon4.gif", "icon4o.gif"],
            ["||Nuevo Evento", "../calendar/calendar.php?a=new", "icon3.gif", "icon3o.gif", "", "Crear nuevo Evento"],
            ["||Listar Eventos", "../calendar/calendar.php", "icon1.gif", "icon1o.gif", "", "Ver Eventos"],
            ["||Buscar Eventos", "../calendar/calendar.php?a=srf", "icon1.gif", "icon1o.gif", "", "Buscar Eventos"],
            ["||Tipos de Eventos", "../calendar/calendar.php?a=evt", "icon1.gif", "icon1o.gif", "", "Administrar Tipos de Eventos"],
            ["||Estados de Eventos", "../calendar/calendar.php?a=evs", "icon1.gif", "icon1o.gif", "", "Administrar Estados de Eventos"],
	["M&oacute;dulo Administrativo", "", "","","", "Gerentes, Administradores, Contadores...",,"1","0"],
        ["|Inteligencia de Negocios", "", "icon1.gif", "icon1o.gif", "", "Indicadores en tiempo real"],
            ["||Indicador de Ventas", "../chart/chart.php?a=salesind", "icon1.gif", "icon1o.gif"],
            ["||Balance de Cartera", "../chart/chart.php?a=wbalance", "icon1.gif", "icon1o.gif"],
            ["||Movimiento de Caja", "../chart/chart.php?a=moneyflow", "icon1.gif", "icon1o.gif"],
        ["|Multimedia", "", "icon3.gif", "icon3o.gif"],
        ["||C&aacute;mara de Vigilancia", "../util/webcam.php", "iconarr.gif"],
        ["||VideoConferencia", "", "iconarr.gif"],
	["M&oacute;dulo Log&iacute;stico", "", "","","", "Almacenista, Bodega, Inventario...",,"1","0"],
        ["|Pedidos", "", "icon5.gif", "icon5o.gif"],
            ["||Nuevo Pedido", "../order/order.php?a=new", "iconarr.gif"],
            ["||Listar/Buscar Pedidos", "../order/order.php", "iconarr.gif"],
        ["|Compras", "", "icon4.gif", "icon4o.gif"],
            ["||Nueva Compra", "../purchase/purchase.php?a=new", "iconarr.gif"],
            ["||Listar/Buscar Compras", "../purchase/purchase.php", "iconarr.gif"],
        ["|Inventario", "", "icon3.gif", "icon3o.gif"],
            ["||Agregar Art&iacute;culos", "../inventory/inventory.php?a=new", "iconarr.gif"],
            ["||Grupos de Art&iacute;culos", "../inventory/groups.php", "iconarr.gif"],
            ["||Listar/Buscar Art&iacute;culos", "../inventory/inventory.php", "iconarr.gif"],
            ["||Movimiento de Inventario", "../inventory/inventory.php?a=mov", "iconarr.gif"],
            ["||Lista de Precios", "../inventory/inventory.php?a=prc", "iconarr.gif"],
            ["||Reporte Movimiento Inv.", "../inventory/inventory.php?a=rpr", "iconarr.gif"],
            ["||Entrada/Salida de Articulos", "../inventory/inventory.php?a=ino", "iconarr.gif"],
        ["|Administrar Proveedores", "", "icon3.gif", "icon3o.gif", "", "Mis Proveedores"],
            ["||Agregar Proveedor", "../providers/providers.php?a=new", "iconarr.gif"],
            ["||Listar/Buscar Proveedor", "../providers/providers.php", "iconarr.gif"],
        ["|Despachos", "", "icon3.gif", "icon3o.gif", "", "Despachos de Mercanc&iacute;a"],
        ["|Seguimiento (Tracking)", "", "icon3.gif", "icon3o.gif", "", "Seguimiento de Mercanc&iacute;a"],
        
    ["M&oacute;dulo Comercial", "", "","","", "Vendedores, Tesorer&iacute;a, Cajeros...",,"1","0"],
    	["|Parametrizaci&oacute;n", "", "icon3.gif", "icon3o.gif", "", "Configuraci&oacute;n del m&oacute;dulo"],
    	["||Ventas", "../sales/config.php?a=form", "icon3.gif", "icon3o.gif", "", "Configuraci&oacute;n de ventas"],
    	["|Administrar Clientes", "", "icon3.gif", "icon3o.gif", "", "Mis Clientes"],
            ["||Agregar Cliente", "../customer/customer.php?a=insertForm", "iconarr.gif"],
            ["||Listar/Buscar Clientes", "../customer/customer.php", "iconarr.gif"],
        ["|Ventas/Facturaci&oacute;n", "", "icon4.gif", "icon4o.gif"],
            ["||Nueva Factura/Venta", "../sales/sales.php?a=new", "iconarr.gif"],
            ["||Listar Facturas/Ventas", "../sales/sales.php", "iconarr.gif"],
        ["|Cotizaciones", "", "icon4.gif", "icon4o.gif"],
            ["||Nueva Cotizaci&oacute;n", "../quote/quote.php?a=new", "iconarr.gif"],
            ["||Listar Cotizaci&oacute;n", "../quote/quote.php", "iconarr.gif"],    
        ["|Hosting y Dominios", "", "icon3.gif", "icon3o.gif"],
            ["||Registrar servicio", "../c.sisfo/hosting/service.php?a=insertForm", "iconarr.gif"],
            ["||Servicios pr&oacute;ximos a vencer", "../c.sisfo/hosting/service.php?a=expired", "iconarr.gif"],
            ["||Servicios en mora", "../c.sisfo/hosting/service.php?a=pending", "iconarr.gif"],
            ["||Reporte Cliente/Servicio", "../c.sisfo/hosting/service.php?a=report", "iconarr.gif"],
        ["|Servicio al Cliente (CRM)", "", "icon3.gif", "icon3o.gif"],
            ["||Crear Encuesta", "../client/client.php?a=newpoll", "iconarr.gif"],
            ["||Listar/Aplicar Encuestas", "../client/client.php?a=listpoll", "iconarr.gif"],
        
    ["M&oacute;dulo de Cartera", "", "","","", "Cuentas por cobrar, recibos...",,"1","0"],
		["|Parametrizaci&oacute;n", "", "icon4.gif", "icon4o.gif", "", "Configuraci&oacute;n del m&oacute;dulo"],
			["||Tipos de Cr&eacute;dito para Clientes", "", "iconarr.gif"],
	            ["|||Agregar Cr&eacute;dito", "../finance/credit.php?a=new", "iconarr.gif"],
    	        ["|||Listar Cr&eacute;ditos", "../finance/credit.php?a=list", "iconarr.gif"],
			["||Configurar Formas de Pago", "../payment/payment.php?a?new", "iconarr.gif"],
        ["|Recibos de Caja", "", "icon4.gif", "icon4o.gif"],
            ["||Nuevo Recibo", "../receipt/receipt.php?a=new", "iconarr.gif"],
            ["||Listar/Buscar Recibos", "../receipt/receipt.php?a=lst", "iconarr.gif"],
        ["|Cuentas por cobrar", "", "icon4.gif", "icon4o.gif"],
            ["||Explorador de deudas", "../wallet/wallet.php?a=debtexplorer", "iconarr.gif"],
            ["||Total por Cobrar", "../wallet/wallet.php?a=totalCXC", "iconarr.gif"],
            ["||Cr&eacute;ditos por Cliente", "../customer/customer.php?cartera=true", "iconarr.gif"],
        
	["M&oacute;dulo de Tesorer&iacute;a", "", "","","", "Divisi&oacute;n de Sistemas, Contadores expertos...",,"1","0"],
		["|Parametrizaci&oacute;n", "", "icon4.gif", "icon4o.gif", "", "Configuraci&oacute;n del m&oacute;dulo"],
            ["||Compras", "../topay/config.php?a=form", "icon3.gif", "icon3o.gif", "", "Configuraci&oacute;n de compras / CxP"],
            ["||Cuentas Bancarias", "", "iconarr.gif"],
	            ["|||Agregar Cuenta", "../admin/bank.php?a=new", "iconarr.gif"],
    	        ["|||Listar Cuentas", "../admin/bank.php?a=list", "iconarr.gif"],
            ["||Chequeras", "", "iconarr.gif"],
            	["|||Agregar Chequera", "../finance/checkbook.php?a=insertForm", "iconarr.gif"],
            	["|||Listar Chequeras", "../finance/checkbook.php?a=list", "iconarr.gif"],
        ["|Administrar Proveedores", "", "icon3.gif", "icon3o.gif", "", "Mis Proveedores"],
            ["||Agregar Proveedor", "../providers/providers.php?a=new", "iconarr.gif"],
            ["||Listar/Buscar Proveedor", "../providers/providers.php", "iconarr.gif"],
        ["|Cuentas por pagar", "", "icon4.gif", "icon4o.gif"],
            ["||Ingresar una factura", "../topay/topay.php?a=insbillform", "iconarr.gif"],
            ["||Realizar un pago", "../topay/topay.php?a=inspaymentform", "iconarr.gif"],
            ["||Explorador de facturas", "../topay/topay.php?a=billexplorer", "iconarr.gif"],
            ["||Total por pagar", "../topay/topay.php?a=totalCXP", "iconarr.gif"],
        ["|Recibos de Caja", "", "icon4.gif", "icon4o.gif"],
            ["||Nuevo Recibo", "../receipt/receipt.php?a=new", "iconarr.gif"],
            ["||Listar/Buscar Recibos", "../receipt/receipt.php?a=lst", "iconarr.gif"],
    
	["M&oacute;dulo de N&oacute;mina", "", "","","", "Empleados, Salarios, N&oacute;mina...",,"1","0"],
        ["|Parametrizaci&oacute;n", "", "icon4.gif", "icon4o.gif", "", "Configuraci&oacute;n del m&oacute;dulo"],
	        ["||General", "../payroll/payroll.php", "iconarr.gif"],
        ["|Administrar Empleados", "", "icon3.gif", "icon3o.gif", "", "Empleados de mi empresa"],
        	["||Agregar Empleado", "../employees/employee.php?a=new", "iconarr.gif"],
        	["||Listar/Buscar Empleados", "../employees/employee.php", "iconarr.gif"],
        ["|N&oacute;mina", "", "icon4.gif", "icon4o.gif", "", "Asignar Salarios, Procesar N&oacute;mina..."],
            ["||Historial de Pagos", "../payroll/payroll.php?a=histnom1", "iconarr.gif"],
            ["||Asignar Salarios", "../payroll/payroll.php?a=aspay", "iconarr.gif"],
            ["||Generar N&oacute;mina", "../payroll/payroll.php?a=nom", "iconarr.gif"],
	
	["M&oacute;dulo de Contabilidad", "", "","","", "Divisi&oacute;n de Sistemas, Contadores expertos...",,"1","0"],
    	["|Parametrizaci&oacute;n", "", "icon4.gif", "icon4o.gif", "", "Configuraci&oacute;n del sistema"],
        ["||Configuraci&oacute;n Global", "../config/config.php", "iconarr.gif"],
        ["||Configurar Impuestos", "../taxes/taxes.php?a=new", "iconarr.gif"],
        ["||Configurar Formas de Pago", "../payment/payment.php?a?new", "iconarr.gif"],
        ["||Centros de Costos", "", "iconarr.gif"],
            ["|||Agregar Centro", "../admin/company.php?a=cctnew", "iconarr.gif"],
            ["|||Listar Centros", "../admin/company.php?a=cct", "iconarr.gif"],
        ["||Plan Contable P.U.C.", "", "iconarr.gif"],
            ["|||Agregar Cuenta", "../puc/config.php?a=accn", "iconarr.gif"],
            ["|||Listar/Buscar Cuentas", "../puc/config.php?a=puc", "iconarr.gif"],
        ["||Documentos Contables", "", "iconarr.gif"],
            ["|||Agregar Tipo", "../finance/finance.php?a=docnew", "iconarr.gif"],
            ["|||Listar Tipos", "../finance/finance.php?a=doc", "iconarr.gif"],
        ["||Conceptos Recibos de Caja", "", "iconarr.gif"],
            ["|||Agregar Concepto", "../receipt/receipt.php?a=coninsnew", "iconarr.gif"],
            ["|||Listar Conceptos", "../receipt/receipt.php?a=conlst", "iconarr.gif"],
        ["|Documentos Contables", "", "icon4.gif", "icon4o.gif"],
            ["||Crear Documento", "../finance/finance.php?a=accv", "iconarr.gif"],
            ["||Ver/Buscar Documentos", "../finance/finance.php?a=doclst", "iconarr.gif"],
        ["|Movimientos de Cuentas", "../finance/finance.php", "iconarr.gif"],
        ["|Reportes", "../finance/finance.php?a=report", "iconarr.gif"],

    /* ["M&oacute;dulo de Producci&oacute;n", "", "","","", "Planta de Producci&oacute;n, Pedidos...",,"1","0"],
        ["|Administrar Operarios", "", "icon5.gif", "icon5o.gif"],
            ["||Agregar Operario", "../operator/operator.php?a=new", "iconarr.gif"],
            ["||Listar Operario", "../operator/operator.php?a=lst", "iconarr.gif"],
        ["|Productos Compuestos", "", "icon5.gif", "icon5o.gif"],
            ["||Agregar P. Compuesto", "../product/product.php?a=new", "iconarr.gif"],
            ["||Listar P. Compuestos", "../product/product.php", "iconarr.gif"],
        ["|Ordenes de Producci&oacute;n", "", "icon5.gif", "icon5o.gif"],
            ["||Agregar Orden", "../prodorders/prodorders.php?a=new", "iconarr.gif"],
            ["||Listar Ordenes", "../prodorders/prodorders.php", "iconarr.gif"],
     */
    ["M&aacute;s M&oacute;dulos", "", "","","", "Almacenista, Bodega, Inventario...",,"1","0"],
        ["|Mi Sistema", "", "icon5.gif", "icon5o.gif"],
        ["|Mi Calendario", "", "icon5.gif", "icon5o.gif"],
        ["|Mis Tareas Por Hacer", "", "icon5.gif", "icon5o.gif"],
        ["|Contact Center", "", "icon5.gif", "icon5o.gif"],
        ["|Help Desk", "", "icon5.gif", "icon5o.gif"],
];



apy_tmenuInit();
