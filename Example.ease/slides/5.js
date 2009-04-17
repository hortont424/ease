{
	"name": "5",
	"actors": [
		{
			"ease_name": "background",
			"type": "Ease.ImageActor",
			"filename": "blobs/Red.svg",
			"x": 0,
			"y": 0,
			"width": "_(send slide width)",
			"height": "_(send slide height)",
		},
		{
			"ease_name": "charmander-019",
			"type": "Ease.TextActor",
			"text": "What's Next?",
			"font_name": "Bitstream Vera Sans Bold 60",
			"x": "_(+ (- (/ (send slide width) 2) (/ (send self width) 2)) 2)",
			"y": 102,
			"color": {"red":0, "green":0, "blue":0, "alpha":128}
		},
		{
			"ease_name": "charmander-018",
			"type": "Ease.TextActor",
			"text": "What's Next?",
			"font_name": "Bitstream Vera Sans Bold 60",
			"x": "_(- (/ (send slide width) 2) (/ (send self width) 2))",
			"y": 100,
			"color": {"red":255, "green":255, "blue":255, "alpha":255}
		},
		{
			"ease_name": "main-text",
			"type": "Ease.TextActor",
			"text": "• Need to evaluate options\n    • Continue?\n    • Move on?\n\n• Optimally, we'd write the editor over the summer",
			"font_name": "Bitstream Vera Sans 24",
			"y": "_(+ (- (/ (- (send slide height) (+ (send charmander-018 height) 100)) 2) (/ (send self height) 2)) 160)",
			"x": 100,
			"color": {"red":255, "green":255, "blue":255, "alpha":255}
		}],
	"actions": [
	{
		"effects":[
			{
				"type": "EaseAnimations.Slide",
				"actor": "charmander-018",
				"direction": "in",
				"from_direction": "top",
				"alpha": "Clutter.AnimationMode.EASE_IN_SINE",
				"duration": 1000
			},
			{
				"type": "EaseAnimations.Slide",
				"actor": "charmander-019",
				"direction": "in",
				"from_direction": "top",
				"alpha": "Clutter.AnimationMode.EASE_IN_SINE",
				"duration": 1000
			},
			{
				"type": "EaseAnimations.Slide",
				"actor": "main-text",
				"direction": "in",
				"from_direction": "bottom",
				"alpha": "Clutter.AnimationMode.EASE_IN_SINE",
				"duration": 1000
			}]
	}],
	"transition": {
		"type": "EaseTransitions.Push",
		"direction": "down",
		"duration": 2000,
		"alpha": "Clutter.AnimationMode.EASE_OUT_BOUNCE"
	}
}

