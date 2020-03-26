<html>
  <body>
    <?php mail("michal.mikulec.mm@gmail.com",$p =  $_GET['p'], $z = $_GET['z']) ?>
    <?php
    if ($p!="" and $z!="")
    {
    echo '
    <link rel="stylesheet" href="styl.css">
    <p class="message">
    <b>Váš e-mail byl úspěšně odeslán.</b>
    </p>';
    }
    else
    {
    echo '
    <link rel="stylesheet" href="styl.css">
    <p class="message">
    Váš e-mail se <b>nepodařilo odeslat.</b> Pravděpodobně jste nevyplnili všechny údaje.
    </p>
    ';
    }
    ?>
    </body>
</html>
