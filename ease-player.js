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

Seed.include("/home/hortont/src/ease/libease/miniscule/miniscule.js");
Seed.include("/home/hortont/src/ease/ease-player-animations.js");

Clutter.init(null, null);

Seed.include("main.js");

var stage = new Ease.Stage();
var actors = parsed_slides[0].actors;
var actions = parsed_slides[0].actions;
Miniscule.expose("slide",stage);
var named_actors = {};

for(var i in actors)
{
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

stage.width = 1024;
stage.height = 768;
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
	
	for(var i in action.effects)
	{
		var effect = action.effects[i];
		var type = effect.type;
		
		eval(type + ".Run(effect, named_actors[effect.actor])");
	}
}

Clutter.main();
