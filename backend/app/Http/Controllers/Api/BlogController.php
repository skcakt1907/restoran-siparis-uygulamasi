<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use Illuminate\Http\JsonResponse;

class BlogController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data'    => BlogPost::orderByDesc('published_at')->get(),
        ]);
    }

    public function show(string $slug): JsonResponse
    {
        $post = BlogPost::where('slug', $slug)->firstOrFail();
        $post->increment('views');

        return response()->json([
            'success' => true,
            'data'    => $post,
        ]);
    }
}
