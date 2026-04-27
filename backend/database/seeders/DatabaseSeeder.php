<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\MenuCategory;
use App\Models\MenuItem;
use App\Models\Package;
use App\Models\Setting;
use App\Models\Stat;
use App\Models\TeamMember;
use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // === SETTINGS ===
        $defaults = [
            ['key'=>'site_name',     'value'=>'ÇITIR Tavuk & Cafe',                       'label'=>'Site Adı',          'group'=>'general'],
            ['key'=>'site_tagline',  'value'=>'Çıtır Lezzetler, Sıcak Servis',            'label'=>'Slogan',            'group'=>'general'],
            ['key'=>'site_about',    'value'=>'15 yıllık çıtır tavuk ustalığı.',          'label'=>'Kısa Tanıtım',      'group'=>'general'],
            ['key'=>'site_phone',    'value'=>'0 (212) 000 00 00',                        'label'=>'Telefon',           'group'=>'contact'],
            ['key'=>'site_gsm',      'value'=>'0 (532) 000 00 00',                        'label'=>'GSM',               'group'=>'contact'],
            ['key'=>'site_email',    'value'=>'info@ornek-restoran.com',                      'label'=>'E-Posta',           'group'=>'contact'],
            ['key'=>'site_address',  'value'=>'Kalamış Caddesi No:42, Kadıköy / İstanbul','label'=>'Adres',             'group'=>'contact'],
            ['key'=>'site_hours',    'value'=>'Her gün 11:00 — 00:00',                    'label'=>'Çalışma Saatleri',  'group'=>'contact'],
            ['key'=>'site_facebook', 'value'=>'#',                                         'label'=>'Facebook',          'group'=>'social'],
            ['key'=>'site_twitter',  'value'=>'#',                                         'label'=>'Twitter / X',       'group'=>'social'],
            ['key'=>'site_instagram','value'=>'#',                                         'label'=>'Instagram',         'group'=>'social'],
            ['key'=>'site_youtube',  'value'=>'#',                                         'label'=>'YouTube',           'group'=>'social'],
            ['key'=>'site_linkedin', 'value'=>'#',                                         'label'=>'LinkedIn',          'group'=>'social'],
        ];
        foreach ($defaults as $s) Setting::create($s);

        // === MENU CATEGORIES (Tavuk Odaklı) ===
        $cats = [
            ['slug'=>'citir-tavuk',  'title'=>'Çıtır Tavuk',     'description'=>'Özel baharatlarla marine edilmiş, kıtır kıtır altın sarısı tavuklarımız.','icon'=>'🍗','image_url'=>'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80','sort_order'=>1],
            ['slug'=>'kanat',        'title'=>'Tavuk Kanat',     'description'=>'Acılı, baharatlı veya BBQ — ödüllü kanat çeşitlerimiz.','icon'=>'🔥','image_url'=>'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&q=80','sort_order'=>2],
            ['slug'=>'burger',       'title'=>'Tavuk Burger',    'description'=>'El yapımı ekmekler ve özel soslarla zenginleşen tavuk burgerlerimiz.','icon'=>'🍔','image_url'=>'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80','sort_order'=>3],
            ['slug'=>'sandvic',      'title'=>'Tavuk Sandviç',   'description'=>'Çıtır tavuk, taze sebzeler ve özel soslarla servis edilen sandviçler.','icon'=>'🥪','image_url'=>'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80','sort_order'=>4],
            ['slug'=>'sis',          'title'=>'Tavuk Şiş & Izgara','description'=>'Kömür ateşinde mangal lezzetinde marine tavuk şişlerimiz.','icon'=>'🍢','image_url'=>'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&q=80','sort_order'=>5],
            ['slug'=>'salata',       'title'=>'Tavuklu Salatalar','description'=>'Hafif ama doyurucu — taze sebze ve ızgara tavukla salatalar.','icon'=>'🥗','image_url'=>'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80','sort_order'=>6],
            ['slug'=>'yan-lezzetler','title'=>'Yan Lezzetler',   'description'=>'Patates kızartması, soğan halkası, mozzarella stick ve daha fazlası.','icon'=>'🍟','image_url'=>'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80','sort_order'=>7],
            ['slug'=>'icecek',       'title'=>'İçecekler',       'description'=>'Soğuk içecekler, ev yapımı limonata ve milkshake çeşitleri.','icon'=>'🥤','image_url'=>'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=800&q=80','sort_order'=>8],
        ];
        foreach ($cats as $c) MenuCategory::create($c);

        // === MENU ITEMS ===
        $items = [
            [1,'Çıtır Tavuk Kova (8 Parça)','8 parça baharatlı çıtır tavuk, sıcak sosla.',285,1,0,0,'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80'],
            [1,'Çıtır Tavuk But','Marine edilmiş baharatlı tavuk butu (2 adet).',155,1,0,0,'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80'],
            [1,'Çıtır Göğüs Şerit','İnce şeritler halinde göğüs eti, kıtır kaplama.',135,0,0,0,'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80'],
            [2,'BBQ Kanat (10 Adet)','Tatlı-baharatlı BBQ sosa bulanmış kanatlar.',195,1,0,0,'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600&q=80'],
            [2,'Acılı Buffalo Kanat','Yakıcı acı sos, kremamsı mavi peynir sos eşliğinde.',195,1,0,1,'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&q=80'],
            [2,'Bal-Hardal Kanat','Tatlımsı bal ve dijon hardal sosu.',195,0,0,0,'https://images.unsplash.com/photo-1641957849085-0ddc69d27b89?w=600&q=80'],
            [3,'Çıtır Tavuk Burger','Çıtır göğüs filetosu, marul, turşu, özel sos.',195,1,0,0,'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80'],
            [3,'Acılı Çıtır Burger','Acılı kaplama, jalapeno, eritme cheddar.',215,0,0,1,'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80'],
            [3,'Çift Kat Burger','Çift çıtır göğüs, çift cheddar, jumbo ekmek.',265,1,0,0,'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80'],
            [4,'Klasik Tavuk Sandviç','Izgara göğüs, marul, domates, mayonez.',125,0,0,0,'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80'],
            [4,'Çıtır Sandviç Wrap','Tortilla içinde çıtır şeritler, ranch sos.',135,1,0,0,'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80'],
            [5,'Kömürde Tavuk Şiş','Marine ızgara tavuk, pilav ve közlenmiş sebzelerle.',225,1,0,0,'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&q=80'],
            [5,'Tandır Tavuk','Tandır pişmiş bütün tavuk (1/2), pirinçle.',265,0,0,0,'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80'],
            [6,'Çıtır Tavuklu Sezar','Romaine, parmesan, kruton, sezar sos, çıtır şerit.',155,0,0,0,'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80'],
            [6,'Izgara Tavuklu Akdeniz Salata','Izgara göğüs, zeytin, fetapeyniri, zeytinyağı.',165,1,0,0,'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=600&q=80'],
            [7,'Ev Yapımı Patates','Tuzlu, kıtır, sıcak servis.',55,0,1,0,'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80'],
            [7,'Soğan Halkası','Çıtır kaplama soğan halkaları (8 adet).',75,0,1,0,'https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=80'],
            [7,'Mozzarella Stick','Eritilmiş mozzarella + marinara sos (6 adet).',95,1,1,0,'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=600&q=80'],
            [8,'Ev Yapımı Limonata','Taze sıkım limonata (500ml).',45,0,1,0,'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80'],
            [8,'Milkshake (Çikolatalı)','Yoğun çikolata, dondurma, çırpılmış krema.',75,1,1,0,'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80'],
            [8,'Kola / Fanta / Sprite','Kutu içecek (330ml).',25,0,1,0,'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=600&q=80'],
        ];
        foreach ($items as $i => $r) {
            MenuItem::create([
                'menu_category_id' => $r[0],
                'name'             => $r[1],
                'description'      => $r[2],
                'price'            => $r[3],
                'is_featured'      => $r[4],
                'is_vegan'         => $r[5],
                'is_spicy'         => $r[6],
                'image_url'        => $r[7],
                'sort_order'       => $i + 1,
            ]);
        }

        // === PACKAGES ===
        Package::create(['title'=>'Aile Kovası','price'=>395,'period'=>'Sipariş','features'=>['12 parça çıtır tavuk','4 büyük patates','2L içecek','Mayonez & ketçap','Sıcak servis'],'is_featured'=>false,'sort_order'=>1]);
        Package::create(['title'=>'Süper Combo','price'=>185,'period'=>'Sipariş','features'=>['Çıtır burger','Patates kızartması','İçecek (orta)','Mozzarella stick','Sürpriz tatlı'],'is_featured'=>true,'sort_order'=>2]);
        Package::create(['title'=>'Parti Paketi','price'=>895,'period'=>'Sipariş','features'=>['24 parça çıtır + 20 kanat','3 büyük patates','4 soğan halkası','3L içecek','Şef özel sos seti'],'is_featured'=>false,'sort_order'=>3]);

        // === TEAM ===
        TeamMember::create(['full_name'=>'Şef Hakan ÇITIR','title'=>'Baş Şef','bio'=>'15 yıllık çıtır tavuk uzmanı. ÇITIR\'ın gizli baharat karışımının mimarı.','specialty'=>'Çıtır & Tavuk','photo_url'=>'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80','sort_order'=>1]);
        TeamMember::create(['full_name'=>'Şef Selin KANAT','title'=>'Sos Şefi','bio'=>'BBQ\'dan acılı sosa, ÇITIR\'ın imza soslarının yaratıcısı.','specialty'=>'Soslar & Marinasyon','photo_url'=>'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80','sort_order'=>2]);
        TeamMember::create(['full_name'=>'Şef Mert IZGARA','title'=>'Izgara Şefi','bio'=>'Kömür ateşinde mangal ızgara uzmanı. Tavuk şişimizin imzası.','specialty'=>'Izgara & Şiş','photo_url'=>'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&q=80','sort_order'=>3]);
        TeamMember::create(['full_name'=>'Şef Ayşe TADIM','title'=>'Tatlı & Sıde Şefi','bio'=>'Yan lezzetler ve tatlı bölümünün şefi. Patates kızartmasının formülü ondan!','specialty'=>'Yan Lezzetler','photo_url'=>'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80','sort_order'=>4]);

        // === STATS ===
        Stat::create(['label'=>'Tavuk Çeşidi',  'value'=>32,    'suffix'=>'+','icon'=>'🍗','sort_order'=>1]);
        Stat::create(['label'=>'Sos Çeşidi',     'value'=>18,    'suffix'=>'','icon'=>'🌶️','sort_order'=>2]);
        Stat::create(['label'=>'Yıllık Tecrübe','value'=>15,    'suffix'=>'+','icon'=>'🏆','sort_order'=>3]);
        Stat::create(['label'=>'Mutlu Misafir', 'value'=>25000, 'suffix'=>'+','icon'=>'😊','sort_order'=>4]);

        // === TESTIMONIALS ===
        Testimonial::create(['full_name'=>'Ahmet Yıldız','title'=>'Yazılım Mühendisi','comment'=>'ÇITIR\'ın kanatları hayatımda yediğim en iyi kanatlar! BBQ sosu mükemmel, et sulu kalıyor. Her hafta sipariş veriyorum.','rating'=>5,'sort_order'=>1]);
        Testimonial::create(['full_name'=>'Zeynep Kara','title'=>'Doktor','comment'=>'Aile kovası hafta sonu klasiğimiz oldu. Çocuklar bayılıyor, fiyatı çok makul. Servis hep zamanında.','rating'=>5,'sort_order'=>2]);
        Testimonial::create(['full_name'=>'Mehmet Demir','title'=>'İşletme Sahibi','comment'=>'Çıtır tavuk burger şehirde bir numara. Ekmeği taze, et çok lezzetli. KFC tarihe karıştı benim için!','rating'=>5,'sort_order'=>3]);
        Testimonial::create(['full_name'=>'Elif Şahin','title'=>'Öğretmen','comment'=>'Acılı buffalo kanatları başka bir şey. Mavi peynir sosla yenmesi gerekiyor. Tek başıma 10 tane yedim 😅','rating'=>5,'sort_order'=>4]);
        Testimonial::create(['full_name'=>'Burak Aydın','title'=>'Mimar','comment'=>'Patatesler ve soğan halkaları efsane. Ana yemek geç bile gelse bunlarla idare ediyorum hep!','rating'=>5,'sort_order'=>5]);
        Testimonial::create(['full_name'=>'Selin Öz','title'=>'Pazarlama Uzmanı','comment'=>'Milkshake için bile gelmeye değer. Çıtır tavuk + patates + milkshake combo\'su şehrin en iyisi.','rating'=>5,'sort_order'=>6]);

        // === BLOG POSTS ===
        BlogPost::create(['slug'=>'citir-tavugun-sirri','title'=>'Çıtır Tavuğun Sırrı: Mükemmel Kaplama','excerpt'=>'Mükemmel çıtır kaplama nasıl yapılır? ÇITIR\'ın 15 yıllık tecrübesinden ipuçları.','content'=>'Mükemmel çıtır tavuk yapmak bir sanattır. Önce et marine edilmeli — minimum 4 saat süt-yumurta karışımında bekletilmeli. Kaplama un, mısır unu ve nişastayla yapılmalı. Yağ sıcaklığı 175°C olmalı, ne fazla ne eksik. ÇITIR\'da tavukları iki kez kızartıyoruz: ilk kızartma süreci pişiriyor, ikinci kızartma o muhteşem kıtırlığı veriyor.','category'=>'Mutfak Sırları','image_url'=>'https://images.unsplash.com/photo-1562967914-608f82629710?w=900&q=80','views'=>542,'published_at'=>now()->subDays(45)]);
        BlogPost::create(['slug'=>'kanat-soslari','title'=>'Kanat Sosları Rehberi: Hangisi Sana Uygun?','excerpt'=>'BBQ, Buffalo, Bal-Hardal, Soya... Doğru sosu seçmek için tam rehber.','content'=>'Kanat sosları damak zevkine göre tercih edilir. BBQ tatlı-baharatlı, herkesin sevdiği klasiktir. Buffalo acılı sevenlerin baş tercihidir, mavi peynir sosla balans bulur. Bal-Hardal tatlı-keskin dengesiyle Avrupa\'da çok popülerdir. Soya-Sarımsak Asya esintisiyle daha yoğun bir aroma sunar. ÇITIR\'da hepsini ev yapımı olarak sunuyoruz.','category'=>'Lezzet Rehberi','image_url'=>'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=900&q=80','views'=>378,'published_at'=>now()->subDays(30)]);
        BlogPost::create(['slug'=>'taze-tavuk-secimi','title'=>'Taze Tavuk Nasıl Anlaşılır?','excerpt'=>'Markette ve restoranlarda taze tavuğu ayırt etmenin püf noktaları.','content'=>'Taze tavuk pembe-açık renkli olur, koyu lekeler taze olmadığını gösterir. Kokusu nötr olmalı, ekşi koku bayatlık işaretidir. Eti elastik, basıldığında geri toplanmalıdır. ÇITIR olarak yalnızca o gün kesilen tavuklarla çalışıyoruz, asla dondurulmuş ürün kullanmıyoruz.','category'=>'Sağlıklı Yaşam','image_url'=>'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=900&q=80','views'=>225,'published_at'=>now()->subDays(15)]);
    }
}
