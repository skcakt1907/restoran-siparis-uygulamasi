<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MenuCategory;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data'    => MenuCategory::orderBy('sort_order')->get(),
        ]);
    }

    public function show(string $slug): JsonResponse
    {
        $category = MenuCategory::where('slug', $slug)->firstOrFail();
        $category->load(['items' => fn ($q) => $q->orderBy('sort_order')]);

        return response()->json([
            'success' => true,
            'data'    => $category,
        ]);
    }
}
