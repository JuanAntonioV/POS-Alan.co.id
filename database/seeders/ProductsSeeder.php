<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $products = [
            [
                'name' => 'Cumi Tepung',
                'price' => 20000, // Harga dalam format IDR
                'image' => 'https://pict.sindonews.net/dyn/732/pena/news/2021/03/08/185/357390/resep-cumi-goreng-tepung-yang-empuk-krenyes-ghy.jpg',
            ],
            [
                'name' => 'Cumi Bakar',
                'price' => 30000, // Harga dalam format IDR
                'image' => 'https://asset.kompas.com/crops/vkiGYr0m16eCTVHXQXcIzNYUNQE=/0x0:1000x667/750x500/data/photo/2022/03/15/623012d6e0dca.jpg',
            ],
            [
                'name' => 'Cumi Cabe Garam',
                'price' => 20000, // Harga dalam format IDR
                'image' => 'https://img-global.cpcdn.com/recipes/fd3cdd22b9c608e2/680x482cq70/cumi-cabe-garam-goreng-tepung-16122018-foto-resep-utama.jpg',
            ],
            [
                'name' => 'Cumi & Kerang',
                'price' => 30000, // Harga dalam format IDR
                'image' => 'https://img-global.cpcdn.com/recipes/b7ac1a0d695922be/680x482cq70/seafood-kerang-dara-cumi-udang-saos-padang-foto-resep-utama.jpg',
            ],
            [
                'name' => 'Cah Kangkung',
                'price' => 20000, // Harga dalam format IDR
                'image' => 'https://assets.unileversolutions.com/recipes-v3/230520-default.jpg?im=AspectCrop=(720,459);Resize=(720,459)',
            ],
            [
                'name' => 'Tahu Goreng',
                'price' => 10000, // Harga dalam format IDR
                'image' => 'https://cdn1-production-images-kly.akamaized.net/csFeGBYbnzz8llvYCZ4PsVwfrPs=/0x0:5616x3165/680x383/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2901423/original/005536300_1567581573-tips_tahu_HL.jpg',
            ],
            [
                'name' => 'Cah Toge',
                'price' => 10000, // Harga dalam format IDR
                'image' => 'https://img.kurio.network/f3fbH227rIh2-b3LHgUig4lBQWE=/440x440/filters:quality(80)/https://kurio-img.kurioapps.com/22/03/07/411096b0-155f-4b8e-ade9-fdc100d62677.jpe',
            ],
            [
                'name' => 'Kepiting Saus Padang',
                'price' => 50000, // Harga dalam format IDR
                'image' => 'ttps://cdn0-production-images-kly.akamaized.net/_n0w-LsIHw7vPwJqL5g-X2FyVtQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2355329/original/078016000_1536562953-resep-masakan-sehari-hari.jpg',
            ],
            [
                'name' => 'Es Teh Manis',
                'price' => 5000,
                'image' => 'https://akcdn.detik.net.id/community/media/visual/2020/05/14/0af32d8b-36b7-4555-8e79-4fd54c98f795.jpeg?w=700&q=90',
            ],
            [
                'name' => 'Aneka Jus',
                'price' => 10000,
                'image' => 'https://o-cdf.sirclocdn.com/unsafe/o-cdn-cas.sirclocdn.com/parenting/images/3_Perbedaan_Nutrisi_Buah_Utuh_dan.width-800.format-webp.webp',
            ],
            [
                'name' => 'Es Jeruk',
                'price' => 10000,
                'image' => 'https://doktersehat.com/wp-content/uploads/2018/09/jus-jeruk.jpg',
            ],
            [
                'name' => 'Nasi Putih',
                'price' => 5000,
                'image' => 'https://asset.kompas.com/crops/_LjV7fswj8rmE70TvLkPwpSgeCo=/0x0:780x390/1200x800/data/photo/2015/05/07/1030021shutterstock-254781634780x390.jpg',
            ],

        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
