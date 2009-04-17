#!/usr/bin/env seed

/*
 * -*- Mode: C; indent-tabs-mode: t; c-basic-offset: 4; tab-width: 4 -*- 
 */

// This was written with the intent of being the most insecure possible
// presentation file format, for now. Like, really, actually worse than PowerPoint.
// Seriously.

Gio = imports.gi.Gio;
Ease = imports.gi.Ease;
Clutter = imports.gi.Clutter;
GObject = imports.gi.GObject;
GLib = imports.gi.GLib;
Pango = imports.gi.Pango;

Seed.include("/home/hortont/src/ease/libease/miniscule/miniscule.js");
Seed.include("/home/hortont/src/ease/ease-player-animations.js");

Clutter.init(null, null);

Seed.include("main.js");

var stage = new Ease.Stage();
stage.fullscreen = true;
var sn = 0;
var named_actors = {};
var waiting_to_animate = false;
var wait_effects = [];
var thisSlide;

stage.signal.key_release_event.connect(function(a,e,u)
{
	if(e.key.keyval == 32)
	{
		if(waiting_to_animate)
		{
			for(var i in wait_effects)
			{
				var effect = wait_effects[i];
				var type = effect.type;
		
				eval(type + ".Run(effect, named_actors[effect.actor])");
			}
			
			waiting_to_animate = false;
		}
		else
		{
			//transition to slide
			stage.remove_actor(thisSlide);
			display_slide(++sn);
		}
	}
	
	return true;
});

function display_slide(slide_num)
{
	Seed.print("Display Slide " + slide_num);
	
	thisSlide = new Clutter.Group;

	var actors = parsed_slides[slide_num].actors;
	var actions = parsed_slides[slide_num].actions;
	Miniscule.expose("slide",stage);
	named_actors = {};

	for(var i in actors)
	{
		Seed.print("Add " + actors[i].type);
		var actor = eval("new " + actors[i].type + "();");
		thisSlide.add_actor(actor);
	
		var deferCalculation = {};

		for(var m in actors[i])
		{
			Miniscule.expose("self", actor);

			if(actors[i][m][0] == "_")
				deferCalculation[m] = actors[i][m].slice(1);
			else
			    actor[m] = actors[i][m];
		}

		actor.show();
		
		Miniscule.expose(actors[i].ease_name, actor);

		for(var m in deferCalculation)
		{
			actor[m] = Miniscule.eval(deferCalculation[m]);
		}
	
		named_actors[actors[i].ease_name] = actor;
	}
	
	stage.add_actor(thisSlide);
	stage.show_all();

	for(var i in actions)
	{
		var action = actions[i];
	
		for(var i in action.effects)
		{
			var effect = action.effects[i];
			var type = effect.type;
		
			eval(type + ".Pre(effect, named_actors[effect.actor])");
		}
	}
	
	for(var i in actions)
	{
		var action = actions[i];
	
		if(action.wait == "click")
		{
			Seed.print("waiting to animate");
			waiting_to_animate = true;
			wait_effects = action.effects;
			// HANG
			while(waiting_to_animate)
				GLib.main_context_iteration();
		}
		else if(action.wait == "time")
		{
			Seed.print("animate delay: " + action.duration);
			action.timeline = new Clutter.Timeline();
			action.timeline.duration = action.duration;
			action.timeline.signal.completed.connect(doDelayedAnimation, action.effects);
			action.timeline.start();
		}
	}
}

function doDelayedAnimation(timeline, effects)
{
	for(var i in effects)
	{
		var effect = effects[i];
		var type = effect.type;

		eval(type + ".Run(effect, named_actors[effect.actor])");
	}
}

//stage.width = 1024;
//stage.height = 768;
stage.show_all();

display_slide(0);


Clutter.main();
