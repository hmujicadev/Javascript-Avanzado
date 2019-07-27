<?php
$pais = $_POST['pais'];
$response = array();

switch($pais){
	case "ARG":
        $response[0]['provincia'] = 'Santa fe';
        $response[1]['provincia'] = 'Buenos Aires';
        break;
    case "BRA":
        $response[0]['provincia'] = 'Brasilia';
        $response[1]['provincia'] = 'Rio de Janeiro';
        break;
    case "URU":
        $response[0]['provincia'] = 'Montevideo';
        $response[1]['provincia'] = 'Rio de Janeiro';
        break;
    } 
    echo json_encode($response);
    ?>
