<?php             
require 'vendor/autoload.php';

$cliente = new MongoDB\Client('mongodb+srv://diegointernacional2017:74085046Estranged@cluster0.2nrimen.mongodb.net/login');
$baseDeDatos = $cliente->login;



?>