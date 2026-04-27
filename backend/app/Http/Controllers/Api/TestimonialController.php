<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\JsonResponse;

class TestimonialController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data'    => Testimonial::where('is_active', true)->orderBy('sort_order')->get(),
        ]);
    }
}
