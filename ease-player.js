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

Seed.include("/home/hortont/src/ease/libease/miniscule/miniscule.js");
Seed.include("/home/hortont/src/ease/ease-player-animations.js");

Clutter.init(null, null);

Seed.include("main.js");

var stage = new Ease.Stage();
var sn = 0;
var named_actors = {};
var waiting_to_animate = false;
var wait_effects = [];

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
			display_slide(++sn);
		}
	}
	
	return true;
});

function display_slide(slide_num)
{
	Seed.print("Display Slide " + slide_num);
	
	for(var i in named_actors)
		stage.remove_actor(named_actors[i]);

	var actors = parsed_slides[slide_num].actors;
	var actions = parsed_slides[slide_num].actions;
	Miniscule.expose("slide",stage);
	named_actors = {};

	for(var i in actors)
	{
		Seed.print("Add " + actors[i].type);
		var actor = eval("new " + actors[i].type + "();");
		stage.add_actor(actor);
	
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

		for(var m in deferCalculation)
		{
			actor[m] = Miniscule.eval(deferCalculation[m]);
		}
	
		named_actors[actors[i].ease_name] = actor;
	}

	for(var i in actions)
	{
		var action = actions[i];
	
		for(var i in action.effects)
		{
			var effect = action.effects[i];
			var type = effect.type;
		
			eval(type + ".Pre(effect, named_actors[effect.actor])");
		}
	
		// wait
		
		Seed.print("Wait: " + action.wait);
	
		if(action.wait == "click")
		{
			Seed.print("waiting to animate");
			waiting_to_animate = true;
			wait_effects = action.effects;
			// HANG
			while(waiting_to_animate)
				GLib.main_context_iteration();
		}
	}
}

display_slide(0);

stage.width = 1024;
stage.height = 768;
stage.show_all();

Clutter.main();
