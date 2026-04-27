<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    protected $fillable = ['full_name', 'title', 'bio', 'specialty', 'photo_url', 'sort_order'];
}
