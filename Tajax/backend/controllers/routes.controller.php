<?php

require_once(__DIR__ . '/../config/config.php');

class RoutesController{

    // Main route

    public function index(){

        include(ROOT_PATH . '/routes/routes.php');
    }
}