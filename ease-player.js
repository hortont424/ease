/*
 * -*- Mode: C; indent-tabs-mode: t; c-basic-offset: 4; tab-width: 4 -*- 
 */

// This was written with the intent of being the most insecure possible
// presentation file format, for now. Like, really, actually worse than PowerPoint.
// Seriously.

Seed.import_namespace("Ease");
Seed.import_namespace("Clutter");
Seed.include("/home/hortont/src/ease/libease/miniscule/miniscule.js");

Clutter.init(null, null);

Seed.include("main.js");

var stage = new Ease.Stage();
var actors = parsed_slides[0].actors;
Miniscule.expose("slide",stage);

for(var i in actors)
{
    var actor = eval("new " + actors[i].type + "();");
	stage.add_actor(actor);
	
	var deferCalculation = {};

	for(var m in actors[i])
	{
		Miniscule.expose("self", actor); // lololol

		if(actors[i][m][0] == "_")
		    deferCalculation[m] = actors[i][m].slice(1);
		else
	        actor[m] = actors[i][m];
	}

	Seed.print(JSON.stringify(actor.color));

	actor.show();

	for(var m in deferCalculation)
	{
	    actor[m] = Miniscule.eval(deferCalculation[m]);
	}
}

stage.show_all();

Clutter.main();
