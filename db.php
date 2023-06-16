<?php
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
// define('DB_SERVER', 'localhost');
// define('DB_USERNAME', 'mycosang_invest');
// define('DB_PASSWORD', '1RQKrdyir}]s');
// define('DB_NAME', 'mycosang_invest');
@define('DB_SERVER', 'localhost');
@define('DB_USERNAME', 'homewydm_beamuser');
@define('DB_PASSWORD', '7uMQczdCdN.6');
@define('DB_NAME', 'homewydm_beambtc');
 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>