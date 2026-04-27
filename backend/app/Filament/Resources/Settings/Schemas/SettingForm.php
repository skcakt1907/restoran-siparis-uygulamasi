<?php

namespace App\Filament\Resources\Settings\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class SettingForm
{
    public static function configure(Schema $schema): Schema
    {
        $isImage = fn ($get) => Str::contains((string) $get('key'), ['logo', 'favicon', 'image']);

        return $schema
            ->components([
                TextInput::make('label')
                    ->label('Ayar Adı')
                    ->required()
                    ->columnSpanFull(),

                FileUpload::make('value')
                    ->label('Görsel')
                    ->image()
                    ->imageEditor()
                    ->disk('public')
                    ->directory('uploads/branding')
                    ->maxSize(2048)
                    ->columnSpanFull()
                    ->visible($isImage),

                Textarea::make('value')
                    ->label('Değer')
                    ->rows(3)
                    ->columnSpanFull()
                    ->hidden($isImage),

                Select::make('group')
                    ->label('Grup')
                    ->options([
                        'general'  => 'Genel',
                        'contact'  => 'İletişim',
                        'social'   => 'Sosyal Medya',
                        'branding' => 'Marka & Logo',
                    ])
                    ->default('general')
                    ->required()
                    ->native(false),

                TextInput::make('key')
                    ->label('Anahtar (kod tarafında kullanılır)')
                    ->required()
                    ->alphaDash()
                    ->live()
                    ->helperText('Anahtar adında "logo", "favicon" veya "image" geçerse görsel yükleme alanı gösterilir.'),
            ])
            ->columns(2);
    }
}
