<?php

namespace App\Filament\Resources\ContactMessages;

use App\Filament\Resources\ContactMessages\Pages\CreateContactMessage;
use App\Filament\Resources\ContactMessages\Pages\EditContactMessage;
use App\Filament\Resources\ContactMessages\Pages\ListContactMessages;
use App\Filament\Resources\ContactMessages\Schemas\ContactMessageForm;
use App\Filament\Resources\ContactMessages\Tables\ContactMessagesTable;
use App\Models\ContactMessage;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ContactMessageResource extends Resource
{
    protected static ?string $model = ContactMessage::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-envelope';

    protected static ?string $navigationLabel = 'Mesajlar';

    protected static \UnitEnum|string|null $navigationGroup = 'Sipariş & Mesaj';

    protected static ?int $navigationSort = 2;

    protected static ?string $modelLabel = 'Mesaj';

    protected static ?string $pluralModelLabel = 'Mesajlar';

    public static function form(Schema $schema): Schema
    {
        return ContactMessageForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ContactMessagesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListContactMessages::route('/'),
            'create' => CreateContactMessage::route('/create'),
            'edit' => EditContactMessage::route('/{record}/edit'),
        ];
    }
}
