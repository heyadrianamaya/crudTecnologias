<?php

$router->group(['prefix' => 'personas'], function () use ($router) {

    $router->get('/', function (){
       return 'Conectado a personas';
    });

    $router->post('altaPersona','PersonaController@crear');


    $router->put('editarPersona/{slug}','PersonaController@editarPersona');


    $router->post('subirFotografia','PersonaController@subirFotografia');


    $router->get('obtenerPersonas','PersonaController@obtenerPersonas');


    $router->get('obtenerPersona/{slug}','PersonaController@obtenerPersona');


    $router->delete('eliminar/{slug}','PersonaController@eliminarPersona');

});
