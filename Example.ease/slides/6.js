{
	"name": "4",
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
			"ease_name": "main-text2",
			"type": "Ease.TextActor",
			"line_alignment": 1,
			"text": "http://hortont.com/ease/wiki\n\nhttp://live.gnome.org/Seed",
			"font_name": "Bitstream Vera Sans 40",
			"y": "_(+ (- (/ (- (send slide height) (+ (send charmander-018 height) 100)) 2) (/ (send self height) 2)) 82)",
			"x": 102,
			"color": {"red":0, "green":0, "blue":0, "alpha":128}
		},
		{
			"ease_name": "main-text",
			"type": "Ease.TextActor",
			"line_alignment": 1,
			"text": "http://hortont.com/ease/wiki\n\nhttp://live.gnome.org/Seed",
			"font_name": "Bitstream Vera Sans 40",
			"y": "_(+ (- (/ (- (send slide height) (+ (send charmander-018 height) 100)) 2) (/ (send self height) 2)) 80)",
			"x": 100,
			"color": {"red":255, "green":255, "blue":255, "alpha":255}
		}],
	"actions": [
	{
		"wait": "time",
		"duration": 500,
		"effects":[
			{
				"type": "EaseAnimations.Scale",
				"actor": "main-text",
				"direction": "in",
				"alpha": "Clutter.AnimationMode.EASE_OUT_SINE",
				"duration": 1000
			},
			{
				"type": "EaseAnimations.Scale",
				"actor": "main-text2",
				"direction": "in",
				"alpha": "Clutter.AnimationMode.EASE_OUT_SINE",
				"duration": 1000
			}]
	}],
	"transition": {
		"type": "EaseTransitions.Scale",
		"direction": "out",
		"duration": 1000,
		"alpha": "Clutter.AnimationMode.EASE_IN_SINE"
	}
}

