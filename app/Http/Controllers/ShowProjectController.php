<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShowProjectController extends Controller
{
    public function data()
    {
        $limit = Project::with('category')->orderBy('id', 'DESC')->limit(6)->get();
        $all = Project::with('category')->orderBy('id', 'DESC')->get();
        return Inertia::render('Index', [
            'project' => [
                'limitData' => $limit,
                'allData' => $all
            ],
        ]);
    }
}
