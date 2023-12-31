<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = Category::paginate(10);

        return Inertia::render('Admin/Category/Index', [
            'category' => $category
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Category::create([
            'name_category' => $request->name_category,
        ]);
        $dataCategory = Category::paginate(10);

        return Inertia::render('Admin/Category/Index', [
            'category' => $dataCategory
        ])->with('success', 'Category berhasil ditambahkan!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = Category::findorFail($id);
        return Inertia::render('Admin/Category/Edit', [
            'category' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Category::findorFail($id)->update([
            'name_category' => $request->name_category,
        ]);

        $dataCategory = Category::paginate(10);

        return Inertia::render('Admin/Category/Index', [
            'category' => $dataCategory
        ])->with('success', 'Category berhasil diubah!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Category::findorFail($id)->delete();
        $dataCategory = Category::paginate(10);
        return Inertia::render('Admin/Category/Index', [
            'category' => $dataCategory
        ])->with('success', 'Category berhasil dihapus!');
    }
}
