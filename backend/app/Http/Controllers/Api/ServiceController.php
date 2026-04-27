<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\JsonResponse;

class ServiceController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data'    => Service::orderBy('sort_order')->get(),
        ]);
    }

    public function show(string $slug): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data'    => Service::where('slug', $slug)->firstOrFail(),
        ]);
    }
}
