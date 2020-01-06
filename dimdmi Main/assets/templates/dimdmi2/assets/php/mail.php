<?php
$recepient = "dmitryshatalyuk@gmail.com";
$sitename = "template2.shatalyuk.info";

$name = trim($_POST["name"]);
$surname = trim($_POST["surname"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["tel"]);

$message = "Name: $name \n \n Surname: $surname \n \n E-mail: $email \n \n Phone: $phone";

$pagetitle = "'New message from ' \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>

<?php
$recepient = "dmitryshatalyuk@gmail.com";
$sitename = "templates.shatalyuk.info";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["tel"]);
$textarea = trim($_POST["message"]);

$message = "Name: $name \n \n E-mail: $email \n \n Phone: $phone \n \n Message: $textarea";

$pagetitle = "New message from \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>


   
   