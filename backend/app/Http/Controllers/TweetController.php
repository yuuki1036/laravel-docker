<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTweetRequest;
use App\Http\Requests\UpdateTweetRequest;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Models\Tweet;
use Inertia\Inertia;

class TweetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Inertia::render('Index', [
          'tweets' => Tweet::latest('created_at')->get(),
          'canLogin' => Route::has('login'),
          'canRegister' => Route::has('register'),
          'laravelVersion' => Application::VERSION,
          'phpVersion' => PHP_VERSION,
      ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Tweet/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTweetRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTweetRequest $request)
    {
        $request->validate([
          'userId' => ['required'],
          'userName' => ['required'],
          'content' => ['required'],
          'type' => ['required'],
          'replay' => ['required'],
          'likes' => ['required'],
          'retweet' => ['required'],
        ]);

        Tweet::create($request->all());
        return redirect()->route('tweet.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tweet  $tweet
     * @return \Illuminate\Http\Response
     */
    public function show(Tweet $tweet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tweet  $tweet
     * @return \Illuminate\Http\Response
     */
    public function edit(Tweet $tweet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTweetRequest  $request
     * @param  \App\Models\Tweet  $tweet
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTweetRequest $request, Tweet $tweet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tweet  $tweet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tweet $tweet)
    {
        //
    }
}
