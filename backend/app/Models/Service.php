<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = ['slug', 'title', 'short_desc', 'full_desc', 'image_url', 'icon', 'sort_order'];
}
