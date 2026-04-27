<?php

namespace App\Filament\Resources\MenuCategories;

use App\Filament\Resources\MenuCategories\Pages\CreateMenuCategory;
use App\Filament\Resources\MenuCategories\Pages\EditMenuCategory;
use App\Filament\Resources\MenuCategories\Pages\ListMenuCategories;
use App\Filament\Resources\MenuCategories\Schemas\MenuCategoryForm;
use App\Filament\Resources\MenuCategories\Tables\MenuCategoriesTable;
use App\Models\MenuCategory;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class MenuCategoryResource extends Resource
{
    protected static ?string $model = MenuCategory::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-tag';

    protected static ?string $navigationLabel = 'Kategoriler';

    protected static \UnitEnum|string|null $navigationGroup = 'Menü Yönetimi';

    protected static ?int $navigationSort = 1;

    protected static ?string $modelLabel = 'Kategori';

    protected static ?string $pluralModelLabel = 'Kategoriler';

    public static function form(Schema $schema): Schema
    {
        return MenuCategoryForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return MenuCategoriesTable::configure($table);
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
            'index' => ListMenuCategories::route('/'),
            'create' => CreateMenuCategory::route('/create'),
            'edit' => EditMenuCategory::route('/{record}/edit'),
        ];
    }
}
