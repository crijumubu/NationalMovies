<?php

include_once(__DIR__ . '/../config/config.php');
require (ROOT_PATH . '/vendor/autoload.php');

$dotenv = Dotenv\Dotenv::createImmutable(ROOT_PATH);
$dotenv->load();

/* Debugging

error_reporting(E_ALL);
ini_set('display_errors', 1);
*/

class connection {
    
    private $host;
    private $port;
    private $dbname;
    private $user;
    private $password;
    private $driver;
    
    function __construct(){
        
        $this->host = $_ENV['HOST'];
        $this->port = $_ENV['PORT'];
        $this->dbname = $_ENV['DBNAME'];
        $this->user = $_ENV['USER'];
        $this->password = $_ENV['PASSWORD'];
        $this->driver = $_ENV['DRIVER'];
    }

    public function connect(){
        
        try{
            
            $pdo = $this->driver . ':host=' . $this->host . ';dbname=' . $this->dbname;
            echo 'Testing';
            return new PDO($pdo, $this->user, $this->password);
        } 
        catch (PDOException $e) 
        {
            die('La conexion ha fallado: ' . $e->getMessage());
        }
    }
}
?>