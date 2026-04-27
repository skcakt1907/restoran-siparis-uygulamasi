<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MenuItem extends Model
{
    protected $fillable = [
        'menu_category_id', 'name', 'description', 'price',
        'image_url', 'is_featured', 'is_vegan', 'is_spicy', 'sort_order',
    ];

    protected $casts = [
        'price'       => 'float',
        'is_featured' => 'boolean',
        'is_vegan'    => 'boolean',
        'is_spicy'    => 'boolean',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(MenuCategory::class, 'menu_category_id');
    }
}
