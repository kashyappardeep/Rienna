<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Package;

class PagesController extends Controller
{
   public function index()
    {
        $packages = Package::all(); // Get all packages from the database
        // dd($packages); // Dump the packages to check if they are retrieved correctly
    
        return view('welcome' , compact('packages')); // ya koi bhi page
    }

     public function checkout($id)
{
    $package = Package::findOrFail($id);

    return view('checkout', compact('package'));
}
    public function product($id)
        {
            $package = Package::findOrFail($id); // ID se data fetch
            // dd($package); // Dump the package to check if it's retrieved correctly
            return view('product-details', compact('package'));
        }
}
