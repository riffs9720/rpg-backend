'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post("/Login", "LoginController.autenticacao")

Route.resource('player', 'PlayerController')
Route.resource('equipamento', 'EquipamentoController')
Route.resource('tipo', 'TipoController')
Route.resource('helmo', 'HelmoController')
Route.resource('armadura', 'ArmaduraController')
Route.resource('maoDireita', 'MaoDireitaController')
Route.resource('maoEsquerda', 'MaoEsquerdaController')
Route.resource('bota', 'BotaController')
