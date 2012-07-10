<tree id="0">
    
    <?php if ($auth->checkPerms(array('users.*', 'configurations.*', 'groups.*','scores.*'), 'x')) : ?>
    
    <item text="Modulo de Sistemas / Admon" id="system"
        im0="folderClosed.gif" im1="folderOpen.gif" im2="folderClosed.gif" call="0">
        
        <?php if ($auth->checkPerms('configurations.*', 'x')) : ?>
        <item text="Configuración" id="configurations/globalconf"
              im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
        </item>
        <item text="Limpiar Cache" id="configurations/delCache"
              im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
        </item>
        <?php endif; ?>

        <?php if ($auth->checkPerms(array('users.*', 'groups.*'), 'x')) : ?>
        <item text="Admin. Usuarios" id="users"
            im0="folderClosed.gif" im1="folderOpen.gif" im2="folderClosed.gif">
            
            <?php if ($user['login'] == 'sisfo') : ?>
            <item text="Modulos" id="acomodules/doList"
               im0="folderClosed.gif" im1="folderOpen.gif" im2="folderClosed.gif">
            </item>
            <?php endif; ?>
            
            <?php if ($auth->checkPerms('groups.*', 'x')) : ?>
            <item text="Roles" id="groups/doList"
               im0="folderClosed.gif" im1="folderOpen.gif" im2="folderClosed.gif">
            </item>
            <?php endif; ?>
            
            <?php if ($auth->checkPerms('users.*', 'x')) : ?>
            <item text="Usuarios" id="users/doList"
               im0="folderClosed.gif" im1="folderOpen.gif" im2="folderClosed.gif">
            </item>
            <?php endif; ?>

        </item>
        <?php endif; ?>

        <?php if ($auth->checkPerms('scores.*', 'x')) : ?>
        <item text="Tablas de Nutricion" id="scores/doList"
              im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
        </item>
        <?php endif; ?>
    </item>
    <?php endif; // Modulo Sistemas ?>
    
    <?php if ($auth->checkPerms('programs.*', 'x')) : ?>
        <item text="Programas" id="programs"
            im0="folderClosed.gif" im1="folderOpen.gif" im2="folderClosed.gif">
            <item text="Agregar" id="programs/add"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
             <item text="Listar" id="programs/doList"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>

            <item text="Cupos Disponibles" id="programs/report"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
        </item>
    <?php endif; ?>



     <?php if ($auth->checkPerms('providers.*', 'x')) : ?>
        <item text="Proveedores" id="providers"
            im0="folderClosed.gif" im1="folderOpen.gif" im2="folderClosed.gif">
            <item text="Agregar" id="providers/add"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
             <item text="Listar" id="providers/doList"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
             <item text="Asignar Cupos" id="inscriptionsproviders/doList"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
        </item>
    <?php endif; ?>


    <?php if ($auth->checkPerms('communities.*', 'x')) : ?>
        <item text="Comunidades" id="communities"
            im0="folderClosed.gif" im1="folderOpen.gif" im2="folderClosed.gif">
            
            <item text="Administrar Tipos" id="typestablishments/doList"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
            <item text="Agregar" id="communities/add"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
             <item text="Listar" id="communities/doList"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
            <item text="Asignar Cupos" id="inscriptionscommunities/doList"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
        </item>
    <?php endif; ?>


    <?php if ($auth->checkPerms('peoplegroups.*', 'x')) : ?>
        <item text="Grupos Poblacionales" id="peoplegroups"
            im0="folderClosed.gif" im1="folderOpen.gif" im2="folderClosed.gif">
            <item text="Agregar" id="peoplegroups/add"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
             <item text="Listar" id="peoplegroups/doList"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
        </item>
    <?php endif; ?>


     <?php if ($auth->checkPerms('affiliates.*', 'x')) : ?>
        <item text="Afiliados" id="affiliates"
            im0="folderClosed.gif" im1="folderOpen.gif" im2="folderClosed.gif">
            <item text="Inscripciones" id="inscriptions/index"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>

             <item text="Valoraciones Individuales" id="reviews/create"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>

            <item text="Valoraciones Masivas" id="reviews/reviewmassive"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>


            <item text="Traslados/Retiros" id="inscriptions/listInscriptions"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
            
            <?php if ($auth->checkPerms('affiliates.*', 'update')) : ?>
                <item text="Actualizar datos de afiliados" id="affiliates/index"
                      im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
                </item>
            <?php endif; ?>

            
        </item>
    <?php endif; ?>


    <?php if ($auth->checkPerms('reviews.*', 'x')) : ?>
        <item text="Reportes" id="reviews"
            im0="folderClosed.gif" im1="folderOpen.gif" im2="folderClosed.gif">
            <?php if ($auth->checkPerms('reviews.*', 'x')) : ?>
            <item text="Valoraciones" id="reviews/index"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
             <item text="Listado de Valoraciones" id="reviews/listreviews"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>

            <item text="Usuarios sin segunda valoracion" id="reviews/notreviews"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
             
            <item text="Valoraciones funcionarios por mes" id="reviews/reviewsPerMonth"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
            
            <item text="Inscripciones funcionarios por mes" id="reviews/inscriptionsPerMonth"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>

            <item text="Reporte General" id="reviews/general"
                  im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
            </item>
            
            <?php if ($auth->checkPerms('reviews.*', 'update')) : ?>
                <item text="Usuarios sin valoraciones" id="affiliates/exportNotValorate"
                      im0="book_titel.gif" im1="book.gif" im2="book_titel.gif">
                    <userdata name="iframe">1</userdata>
                </item>
            <?php endif; ?>


            <?php endif; ?>
        </item>
    <?php endif; ?>





    <item text="Mi cuenta de usuario" id="users/myAccount"
                im0="book_titel.gif" im1="book.gif" im2="book_titel.gif"
                tooltip="Editar mi usuario, cambiar clave...">
    </item>
</tree>
