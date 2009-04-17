{
	"name": "4",
	"actors": [
		{
			"ease_name": "background",
			"type": "Ease.ImageActor",
			"filename": "blobs/bkg3.png",
			"x": 0,
			"y": 0,
			"width": "_(send slide width)",
			"height": "_(send slide height)",
		},
		{
			"ease_name": "charmander-019",
			"type": "Ease.TextActor",
			"text": "What's Not Done?",
			"font_name": "Bitstream Vera Sans Bold 60",
			"x": "_(+ (- (/ (send slide width) 2) (/ (send self width) 2)) 2)",
			"y": 102,
			"color": {"red":0, "green":0, "blue":0, "alpha":128}
		},
		{
			"ease_name": "charmander-018",
			"type": "Ease.TextActor",
			"text": "What's Not Done?",
			"font_name": "Bitstream Vera Sans Bold 60",
			"x": "_(- (/ (send slide width) 2) (/ (send self width) 2))",
			"y": 100,
			"color": {"red":255, "green":255, "blue":255, "alpha":255}
		},
		{
			"ease_name": "main-text",
			"type": "Ease.TextActor",
			"text": "• Editor\n    • Vital to adoption\n    • Requires much more time\n\n• Clutter 0.9 Port\n    • Most animations not currently available\n       because of API changes",
			"font_name": "Bitstream Vera Sans 24",
			"y": "_(+ (- (/ (- (send slide height) (+ (send charmander-018 height) 100)) 2) (/ (send self height) 2)) 160)",
			"x": 100,
			"color": {"red":255, "green":255, "blue":255, "alpha":255}
		}],
	"transition": {
		"type": "EaseTransitions.Scale",
		"direction": "in",
		"duration": 1000,
		"alpha": "Clutter.AnimationMode.EASE_IN_SINE"
	}
}

