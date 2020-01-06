<?php
$recepient = "dmitryshatalyuk@gmail.com";
$sitename = "template5.shatalyuk.info";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$textarea = trim($_POST["message"]);

$message = "Name: $name \n \n E-mail: $email \n \n Message: $textarea";

$pagetitle = "'New message from ' \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
   
   