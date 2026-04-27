<?php

namespace App\Filament\Resources\Settings\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class SettingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('label')
                    ->label('Ayar')
                    ->searchable()
                    ->weight('bold'),
                TextColumn::make('value')
                    ->label('Değer')
                    ->limit(60)
                    ->tooltip(fn ($record) => $record->value)
                    ->wrap(),
                TextColumn::make('group')
                    ->label('Grup')
                    ->badge()
                    ->colors([
                        'primary' => 'general',
                        'success' => 'contact',
                        'warning' => 'social',
                        'info'    => 'branding',
                    ]),
                TextColumn::make('key')
                    ->label('Anahtar')
                    ->color('gray')
                    ->size('sm')
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->label('Son Güncelleme')
                    ->dateTime('d.m.Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->defaultSort('group')
            ->groups([
                'group',
            ])
            ->filters([
                SelectFilter::make('group')
                    ->label('Grup')
                    ->options([
                        'general'  => 'Genel',
                        'contact'  => 'İletişim',
                        'social'   => 'Sosyal Medya',
                        'branding' => 'Marka & Logo',
                    ]),
            ])
            ->recordActions([
                EditAction::make()->label('Düzenle'),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->paginated([25, 50, 100]);
    }
}
