<?php

$frm_name  = "Youname";
$recepient = "info@artpress.biz";
$sitename  = "ArtPress.biz";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = trim($_POST["message"]);

$message = "
Имя: $name <br>
Телефон: $phone <br>
Сообщение: $message
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
