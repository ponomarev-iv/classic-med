<?php

$frm_name  = "Заявка с сайта Классик Мед";
$recepient = "c.classmed@yandex.ru";
$sitename  = "Классик Мед";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["mess"]);


$message = "
Имя: $name <br>
Телефон: $phone <br>
Сообщение: $comment
";

mail($recepient, $subject, $message, "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
