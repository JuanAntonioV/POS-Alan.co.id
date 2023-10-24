<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {

        $products = Product::all();

        return Inertia::render('HomePage', [
            'title' => 'Restaurant POS',
            'products' => $products,
        ]);
    }

    public function chargeBill(Request $request)
    {
        try {
            $order = $request->validate([
                'total' => 'required|numeric',
                'items' => 'required|array',
            ]);

            $order['order_date'] = now();
            $order['status'] = 'paid';

            $order = Order::create($order);

            foreach ($request->items as $item) {
                $order->detail()->create([
                    'product_id' => $item['id'],
                    'quantity' => $item['quantity'],
                ]);
            }

            return to_route('home.index');
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ], 500);
        }

    }
}
