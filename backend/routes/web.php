<?php

use App\Http\Controllers\TweetController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::resource('/tweets', TweetController::class)
    ->names(
      [
      'index' => 'tweet.index',
      'create' => 'tweet.create',
      'store' => 'tweet.store',
      ]
      )
    ->middleware(['auth']);

Route::get('/', [TweetController::class, 'index'])
    ->name('tweet.index');

require __DIR__.'/auth.php';

// fallback
Route::fallback([TweetController::class, 'index']);