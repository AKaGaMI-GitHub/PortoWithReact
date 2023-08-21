<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $project = Project::with('category')->paginate(10);
        // dd($project[0]->category->name_category);

        return Inertia::render('Admin/Project/Index', [
            'project' => $project
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $category = Category::all();
        return Inertia::render('Admin/Project/Create', [
            'category' => $category
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $request->validate([
        //     'title' => 'required',
        //     'description' => 'required',
        //     'category_id' => 'required|numeric',
        //     'link_github' => 'nullable',
        //     'link_behance' => 'nullable',
        //     'link_dribbble' => 'nullable',
        //     'img' => 'mimes:jpg,png|max:2048',
        // ]);
        if (@$request->file('img')) {
            $img = $request->file('img')->store('public/img');
        }
        Project::create([
            'title' => $request->title,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'link_github' => $request->link_github,
            'link_behance' => $request->link_behance,
            'link_dribbble' => $request->link_dribbble,
            'img' => @$img,
        ]);

        return redirect()->route('project.index')->with('success', 'Project berhasil ditambahkan!');
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
        $data = Project::with('category')->findorFail($id);
        $category = Category::all();
        return Inertia::render('Admin/Project/Edit', [
            'project' => $data,
            'category' => $category,
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
        if (@$request->file('img')) {
            $img = $request->file('img')->store('public/img');
            Project::findorFail($id)->update([
                'title' => $request->title,
                'description' => $request->description,
                'category_id' => $request->category_id,
                'link_github' => $request->link_github,
                'link_behance' => $request->link_behance,
                'link_dribbble' => $request->link_dribbble,
                'img' => @$img,
            ]);
        } else {
            Project::findorFail($id)->update([
                'title' => $request->title,
                'description' => $request->description,
                'category_id' => $request->category_id,
                'link_github' => $request->link_github,
                'link_behance' => $request->link_behance,
                'link_dribbble' => $request->link_dribbble,
            ]);
        }

        return redirect()->route('project.index')->with('success', 'Project berhasil dirubah!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Project::findorFail($id)->delete();
        return redirect()->route('project.index')->with('success', 'Project berhasil dihapus!');
    }
}
