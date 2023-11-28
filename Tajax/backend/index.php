<?php

// Requirements

require('config/config.php');
require_once(ROOT_PATH . '/controllers/routes.controller.php');

// APi logs

ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', ROOT_PATH . '/php_error_log');

$index = new RoutesController();
$index->index();