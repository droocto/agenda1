<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <?php echo $html->charset(); ?>
    <title>
        G-Online
    </title>
    <?php
        echo $html->meta('icon');

        echo $html->css('cake.generic');

        echo $scripts_for_layout;
    ?>
</head>
<body>
hola
    <div id="container">
    <?php echo $content_for_layout ?>
    </div>
    <?php echo $this->element('sql_dump'); ?>
</body>
</html>
