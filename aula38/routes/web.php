<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/filme/add', 'formController@form');
Route::post('/adicionar', 'formController@adicionar');

Route::get('/filmes', 'formController@exibirFilmes');
Route::get('/filme/edit/{id}', 'formController@editForm');

Route::get('/actors/add', 'formController@formAtores');
Route::post('adicionarAtor', 'formController@adicionarAtor');

