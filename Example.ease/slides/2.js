{
	"name": "2",
	"actors": [
		{
			"ease_name": "background",
			"type": "Ease.ImageActor",
			"filename": "blobs/blue.jpg",
			"x": 0,
			"y": 0,
			"width": "_(send slide width)",
			"height": "_(send slide height)",
		},
		{
			"ease_name": "charmander-019",
			"type": "Ease.TextActor",
			"text": "What We Finished",
			"font_name": "Bitstream Vera Sans Bold 60",
			"x": "_(+ (- (/ (send slide width) 2) (/ (send self width) 2)) 2)",
			"y": 102,
			"color": {"red":0, "green":0, "blue":0, "alpha":128}
		},
		{
			"ease_name": "charmander-018",
			"type": "Ease.TextActor",
			"text": "What We Finished",
			"font_name": "Bitstream Vera Sans Bold 60",
			"x": "_(- (/ (send slide width) 2) (/ (send self width) 2))",
			"y": 100,
			"color": {"red":255, "green":255, "blue":255, "alpha":255}
		},
		{
			"ease_name": "main-text",
			"type": "Ease.TextActor",
			"text": "• Viewer\n    • Semi-cross-platform (runs on Linux & OS X)\n    • Seed-based, with some C\n    • Depends on WebKit and Clutter\n\n• Miniscule\n    • Small s-expression evaluator\n    • Used to address security issues",
			"font_name": "Bitstream Vera Sans 24",
			"y": "_(+ (- (/ (- (send slide height) (+ (send charmander-018 height) 100)) 2) (/ (send self height) 2)) 160)",
			"x": 100,
			"color": {"red":255, "green":255, "blue":255, "alpha":255}
		}],
	"actions": [
	{
		"wait": "click",
		"effects":[
			{
				"type": "EaseAnimations.Slide",
				"actor": "charmander-018",
				"direction": "in",
				"from_direction": "left",
				"alpha": "Clutter.AnimationMode.EASE_OUT_SINE",
				"duration": 1000
			},
			{
				"type": "EaseAnimations.Slide",
				"actor": "charmander-019",
				"direction": "in",
				"from_direction": "left",
				"alpha": "Clutter.AnimationMode.EASE_OUT_SINE",
				"duration": 1000
			}]
	},
	{
		"wait": "time",
		"duration": 1000,
		"effects":[
			{
				"type": "EaseAnimations.Scale",
				"actor": "main-text",
				"direction": "up",
				"alpha": "Clutter.AnimationMode.EASE_OUT_ELASTIC",
				"duration": 2000
			}]
	}],
	"transition": {
		"type": "EaseTransitions.Fade",
		"direction": "right",
		"duration": 1000,
		"alpha": "Clutter.AnimationMode.LINEAR"
	}
}

