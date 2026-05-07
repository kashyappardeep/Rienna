<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Level;

class LevelController extends Controller
{
    // 🔍 GET ALL
    public function index()
    {
        return response()->json(Level::orderBy('level')->get());
    }

    // ➕ CREATE
    public function store(Request $request)
    {
        $request->validate([
            'level' => 'required|unique:levels',
            'percentage' => 'required|numeric'
        ]);

        $level = Level::create($request->all());

        return response()->json(['message' => 'Level Created', 'data' => $level]);
    }

    // ✏️ UPDATE
    public function update(Request $request, $id)
    {
        $level = Level::findOrFail($id);

        $level->update($request->all());

        return response()->json(['message' => 'Level Updated', 'data' => $level]);
    }

    // ❌ DELETE
    public function destroy($id)
    {
        Level::findOrFail($id)->delete();

        return response()->json(['message' => 'Level Deleted']);
    }
}