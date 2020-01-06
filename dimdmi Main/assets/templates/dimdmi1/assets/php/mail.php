<?php
$recepient = "dmitryshatalyuk@gmail.com";
$sitename = "templates.shatalyuk.info";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["tel"]);
$textarea = trim($_POST["message"]);

$message = "Имя: $name \n \n Почта: $email \n \n Телефон: $phone \n \n Сообщение: $textarea";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>


   