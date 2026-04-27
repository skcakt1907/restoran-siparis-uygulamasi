<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $fillable = ['title', 'price', 'period', 'features', 'is_featured', 'sort_order'];

    protected $casts = [
        'features'    => 'array',
        'price'       => 'float',
        'is_featured' => 'boolean',
    ];
}
