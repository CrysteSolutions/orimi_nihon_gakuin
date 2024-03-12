<?php

class Database {


    public static $connection;

    public static function setUpConnection() {
        if (!isset(Database::$connection)) {
            Database::$connection = new mysqli("localhost", "root", "", "orimiSasaki");
        }
    }

    public static function iud($q) {
        Database::setUpConnection();
        $result = Database::$connection->query($q);
    
        if (!$result) {
            echo 'Error: ' . Database::$connection->error;
        }
    
        return $result;
    }

    public static function search($q) {
        Database::setUpConnection();
        $resultset = Database::$connection->query($q);
    
        if (!$resultset) {
            echo 'Error executing query: ' . Database::$connection->error;
            // Log the error or handle it as needed
            return false; // Return false to indicate an error
        }
    
        return $resultset;
    }

    public static function prepare($sql) {
        Database::setUpConnection();
        return Database::$connection->prepare($sql);
    }
    
}
?>
