<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use App\Models\MenuCategory;
use App\Models\Service;
use App\Models\Stat;
use App\Models\Testimonial;
use Illuminate\Http\JsonResponse;

class HomepageController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => [
                'categories'   => MenuCategory::orderBy('sort_order')->limit(8)->get(),
                'services'     => Service::orderBy('sort_order')->limit(5)->get(),
                'stats'        => Stat::orderBy('sort_order')->get(),
                'testimonials' => Testimonial::where('is_active', true)->orderBy('sort_order')->limit(6)->get(),
                'blog'         => BlogPost::orderByDesc('published_at')->limit(3)->get(),
            ],
        ]);
    }
}
