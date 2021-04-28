<?php  
    function adopt($text){
        return '=?UTF-8?B?' . Base64_encode($text) . '?=';
    }

    $adminEmail = 'mail@kokos.su';
    $messageSubject = "Заявка на обратный звонок ".$_POST['callback-name'];
    
    $messageStrings[] = "Имя: " . $_POST['callback-name'];  
    $messageStrings[] = "Телефон: " . $_POST['callback-phone'];  
    if(strlen($_POST['callback-email'])>3)$messageStrings[] = "Адрес элетронной почты: " . $_POST['callback-email'] . "\n";  
    if(strlen($_POST['callback-description'])>0)$messageStrings[] = "Краткое описание проекта: " . $_POST['callback-description'] . "\n";  

    $html = '
<html>
<head>
    <title> ' . $messageSubject . '</title>
</head>
<body>
    <h3>' . $messageSubject . '</h3>
        <ul>';

$plainText = "";

foreach($messageStrings as $messageString){
   $html .= '<li>'.$messageString.'</li>'; 
   $plainText .= $messageString."\n";
} 

$html .= '      </ul>
    </body>
</html>';

/* Для отправки HTML-почты вы можете установить шапку Content-type. */
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

/* дополнительные шапки */
$headers .= "From: Максим Кох <kokosnv@yandex.ru>\r\n";

    if (!mail($adminEmail, $messageSubject, $html, $headers, '-f kokosnv@yandex.ru')) {
        $error = error_get_last()['message'];
        echo "Ошибка отправки заявки! <br> " . $error;
    } 
    else    echo "Спасибо за обращение, ".$_POST['callback-name']."! <br> Я обязательно Вам перезвоню по телефону " . $_POST['callback-phone'] . "!";
?>