<?php

namespace App\Filament\Widgets;

use App\Models\ContactMessage;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;

class LatestMessages extends TableWidget
{
    protected static ?string $heading = 'Son Mesajlar';

    protected int|string|array $columnSpan = 'full';

    protected static ?int $sort = 3;

    public function table(Table $table): Table
    {
        return $table
            ->query(fn (): Builder => ContactMessage::query()->latest()->limit(6))
            ->columns([
                IconColumn::make('is_read')
                    ->label('')
                    ->boolean()
                    ->trueIcon('heroicon-o-envelope-open')
                    ->falseIcon('heroicon-s-envelope')
                    ->trueColor('gray')
                    ->falseColor('warning'),
                TextColumn::make('name')
                    ->label('Gönderen')
                    ->searchable()
                    ->weight(fn ($record) => $record->is_read ? null : 'bold'),
                TextColumn::make('email')
                    ->label('E-Posta')
                    ->copyable()
                    ->icon('heroicon-m-envelope')
                    ->color('gray')
                    ->size('sm'),
                TextColumn::make('message')
                    ->label('Mesaj')
                    ->limit(70)
                    ->tooltip(fn ($record) => $record->message)
                    ->wrap(),
                TextColumn::make('created_at')
                    ->label('Tarih')
                    ->since()
                    ->color('gray')
                    ->size('sm'),
            ])
            ->paginated(false);
    }
}
