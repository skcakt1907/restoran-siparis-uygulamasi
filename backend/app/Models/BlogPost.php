<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    protected $fillable = ['slug', 'title', 'excerpt', 'content', 'author', 'category', 'image_url', 'views', 'published_at'];

    protected $casts = ['published_at' => 'datetime'];
}
