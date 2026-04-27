<?php

namespace App\Filament\Resources\BlogPosts\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class BlogPostForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('slug')
                    ->required(),
                TextInput::make('title')
                    ->required(),
                Textarea::make('excerpt')
                    ->columnSpanFull(),
                Textarea::make('content')
                    ->columnSpanFull(),
                TextInput::make('author')
                    ->required()
                    ->default('OCAK Editör'),
                TextInput::make('category')
                    ->required()
                    ->default('Lezzet'),
                FileUpload::make('image_url')
                    ->label('Kapak Görseli')
                    ->image()
                    ->imageEditor()
                    ->disk('public')
                    ->directory('uploads/blog')
                    ->maxSize(4096)
                    ->columnSpanFull(),
                TextInput::make('views')
                    ->required()
                    ->numeric()
                    ->default(0),
                DateTimePicker::make('published_at'),
            ]);
    }
}
