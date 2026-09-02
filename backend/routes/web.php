<?php

use Illuminate\Support\Facades\Route;

Route::fallback(function () {
    $path = public_path('index.html');
    if (file_exists($path)) {
        return response()->file($path);
    }
    abort(404);
});
