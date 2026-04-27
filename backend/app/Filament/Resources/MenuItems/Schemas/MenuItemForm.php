<?php

namespace App\Filament\Resources\MenuItems\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class MenuItemForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('menu_category_id')
                    ->numeric(),
                TextInput::make('name')
                    ->required(),
                Textarea::make('description')
                    ->columnSpanFull(),
                TextInput::make('price')
                    ->required()
                    ->numeric()
                    ->prefix('$'),
                FileUpload::make('image_url')
                    ->label('Yemek Görseli')
                    ->image()
                    ->imageEditor()
                    ->disk('public')
                    ->directory('uploads/menu-items')
                    ->maxSize(4096)
                    ->columnSpanFull(),
                Toggle::make('is_featured')
                    ->required(),
                Toggle::make('is_vegan')
                    ->required(),
                Toggle::make('is_spicy')
                    ->required(),
                TextInput::make('sort_order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}
