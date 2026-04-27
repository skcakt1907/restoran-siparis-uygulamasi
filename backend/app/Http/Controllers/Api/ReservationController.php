<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Reservation;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'full_name'        => ['required', 'string', 'min:2', 'max:150'],
            'email'            => ['required', 'email', 'max:150'],
            'phone'            => ['required', 'string', 'min:5', 'max:30'],
            'reservation_date' => ['required', 'date', 'after_or_equal:today'],
            'reservation_time' => ['required', 'string'],
            'guests'           => ['required', 'integer', 'min:1', 'max:30'],
            'occasion'         => ['nullable', 'string', 'max:100'],
            'notes'            => ['nullable', 'string', 'max:1000'],
        ]);

        $rez = Reservation::create($data);

        return response()->json([
            'success' => true,
            'id'      => $rez->id,
            'message' => 'Rezervasyon talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.',
        ], 201);
    }
}
