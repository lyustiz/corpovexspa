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


Route::get('/', function () {
    return view('welcome');
});
*/

/*Route::get('/', function () {
    return view('home');
});
*/

Route::get('/{vue_capture?}', function () {
	return view('home');
})->where('vue_capture', '[\/\w\.-]*');
/*
Route::get('{path}', function () {
    return view('home');
})->where('path', '(.*)');
*/
Auth::routes();
/*
Route::get('/home', 'HomeController@index')->name('home');
*/