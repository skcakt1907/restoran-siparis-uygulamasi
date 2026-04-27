<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name'    => ['required', 'string', 'min:2', 'max:150'],
            'email'   => ['required', 'email', 'max:150'],
            'phone'   => ['nullable', 'string', 'max:50', 'regex:/^[\d\s+()\-]{5,30}$/'],
            'message' => ['required', 'string', 'min:5', 'max:5000'],
        ]);

        $msg = ContactMessage::create($validated);

        return response()->json([
            'success' => true,
            'id'      => $msg->id,
            'message' => 'Thank you! Your message has been received. We will reach out shortly.',
        ], 201);
    }
}
