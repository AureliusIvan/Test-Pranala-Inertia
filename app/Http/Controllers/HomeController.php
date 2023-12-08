<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Product;
use App\Models\Testimony;
use App\Models\Webconfig;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class HomeController extends Controller
{
    public function __invoke()
    {

        $productData = Product::getAllProduct();
        foreach ($productData as $key => $value) {
            $productData[$key]->description = strip_tags($value->description);
        }
        return inertia('Home/HomePage', [
            // 'ProductData' => $productData,
        ]);
    }


    public function pyramid(Request $request)
    {
        # pyramid
        $val =  strval($request->num);
        $length = strlen($val);
        $data = "test";
        $arrnum = str_split($val);
        return response()->json([
            "data" => $data,
            "type" => $request->type,
            "num" => $request->num,
            "lenght" => $length,
            "array" => $arrnum
        ], 200);
    }

    public function generateodd(Request $request)
    {
        $max = intval($request->num);
        $arrnum = [];
        for ($i = 0; $i < $max; $i++) {
            $arr = array($i);
            if ($i % 2 == 0) {
                // $arrnum  = $arrnum.array_push($arr);
                $arrnum  = Arr::add($arrnum, $i, $i);
            }
        }
        return response()->json([
            "num" => $max,
            "array" => $arrnum
        ]);
    }


    public function generateprime(Request $request)
    {
        function isPrime($num)
        {
            if ($num == 1) {
                return false;
            }

            for ($i = 2; $i < $num; $i++) {
                if ($num % $i === 0 && $i !== $num) {
                    return false;
                }
            }

            return true;
        }

        $max = intval($request->num);
        $arrnum = [];
        for ($i = 0; $i < $max; $i++) {
            $arr = array($i);
            if (isPrime($i)) {
                $arrnum  = Arr::add($arrnum, $i, $i);
            }
        }
        return response()->json([
            "num" => $max,
            "array" => $arrnum
        ]);
    }
}
