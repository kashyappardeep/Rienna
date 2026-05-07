<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Rank;

class RankController extends Controller
{
    // 🔍 GET ALL
    public function index()
    {
        return response()->json(Rank::orderBy('total_business')->get());
    }

    // ➕ CREATE
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'total_business' => 'required|numeric',
            'reward' => 'required|numeric'
        ]);

        $rank = Rank::create($request->all());

        return response()->json(['message' => 'Rank Created', 'data' => $rank]);
    }

    // ✏️ UPDATE
    public function update(Request $request, $id)
    {
        $rank = Rank::findOrFail($id);

        $rank->update($request->all());

        return response()->json(['message' => 'Rank Updated', 'data' => $rank]);
    }

    // ❌ DELETE
    public function destroy($id)
    {
        Rank::findOrFail($id)->delete();

        return response()->json(['message' => 'Rank Deleted']);
    }
}