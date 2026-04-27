<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('blog_posts', function (Blueprint $table) {
            $table->id();
            $table->string('slug', 200)->unique();
            $table->string('title', 300);
            $table->text('excerpt')->nullable();
            $table->longText('content')->nullable();
            $table->string('author', 150)->default('OCAK Editör');
            $table->string('category', 100)->default('Lezzet');
            $table->string('image_url', 500)->nullable();
            $table->unsignedInteger('views')->default(0);
            $table->dateTime('published_at')->nullable();
            $table->timestamps();
            $table->index('published_at');
        });
    }
    public function down(): void { Schema::dropIfExists('blog_posts'); }
};
