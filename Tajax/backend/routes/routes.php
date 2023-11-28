<?php

$routes_array = explode('/', $_SERVER['REQUEST_URI']);
$routes_array = array_filter($routes_array);

// Empty query to API

if(empty($routes_array)){

    $json = array(

        'status' => 404,
        'message' => 'Not found'
    );

    echo json_encode($json, http_response_code($json['status']));
    return;
}

// Query to API

if(count($routes_array) == 1 && isset($_SERVER['REQUEST_METHOD'])){

    switch($_SERVER['REQUEST_METHOD']){

        case 'GET':
            $json = array(

                'status' => 200,
                'message' => 'GET Request'
            );
        
            echo json_encode($json, http_response_code($json['status']));
            return;

        case 'POST':
            $json = array(

                'status' => 200,
                'message' => 'POST Request'
            );
        
            echo json_encode($json, http_response_code($json['status']));
            return;

        case 'PUT':
            $json = array(

                'status' => 200,
                'message' => 'PUT Request'
            );
        
            echo json_encode($json, http_response_code($json['status']));
            return;

        case 'DELETE':
            $json = array(

                'status' => 200,
                'message' => 'PUT Request'
            );
        
            echo json_encode($json, http_response_code($json['status']));
            return;

        default:
            $json = array(

                'status' => 501,
                'message' => 'Not implemented request'
            );
        
            echo json_encode($json, http_response_code($json['status']));
            return;
    }
    echo '<pre>'; print_r($_SERVER['REQUEST_METHOD']); echo '</pre>';
    return;
}