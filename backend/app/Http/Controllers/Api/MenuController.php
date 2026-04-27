<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MenuItem;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = MenuItem::query();

        if ($request->filled('category')) {
            $query->where('category', $request->string('category'));
        }

        if ($request->has('featured')) {
            $query->where('is_featured', $request->boolean('featured'));
        }

        $items = $query->orderBy('sort_order')->orderBy('id')->get();

        return response()->json([
            'success' => true,
            'count'   => $items->count(),
            'data'    => $items,
        ]);
    }

    public function show(MenuItem $menuItem): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data'    => $menuItem,
        ]);
    }
}
