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

Route::get('/meuPrimeiroCaminho', function () {
    return view('caminho');
});

// Route::get('/resultado/{numero}', function ($numero){
//     return view('resultado')->with('numero', $numero);
// });

Route::get('/resultado/{primeiroNumero}/{segundoNumero?}', function ($primeiroNumero, $segundoNumero = null){
    return view('resultado')->with('primeiroNumero', $primeiroNumero)
                            ->with('segundoNumero', $segundoNumero);
});

