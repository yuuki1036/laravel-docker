<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tweet extends Model
{
    use HasFactory;

    protected $fillable = [
        'userId',
        'userName',
        'content',
        'type',
        'replay',
        'likes',
        'retweet',
    ];

}
