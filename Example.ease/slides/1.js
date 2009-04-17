{
	"name": "1",
	"actors": [
		{
			"ease_name": "background",
			"type": "Ease.ImageActor",
			"filename": "blobs/bkg.png",
			"x": 0,
			"y": 0,
			"width": "_(send slide width)",
			"height": "_(send slide height)",
		},
		{
			"ease_name": "charmander-017",
			"type": "Ease.ImageActor",
			"filename": "blobs/Ease-logo.svg",
			"x": "_(- (/ (send slide width) 2) (/ (send self width) 2))",
			"y": "_(- (/ (send slide height) 2) (/ (send self height) 2))"
		},
		{
			"ease_name": "charmander-018",
			"type": "Ease.TextActor",
			"text": "Matt Arsenault\nRobb Carr\nTim Horton\nNate Stedman",
			"font_name": "Bitstream Vera Sans 20",
			"line_alignment": 1,
			"x": "_(- (/ (send slide width) 2) (/ (send self width) 2))",
			"y": "_(+ (- (/ (send slide height) 2) (/ (send self height) 2)) (send charmander-017 height))",
			"color": {"red":255, "green":255, "blue":255, "alpha":255}
		}],
	"actions": [
		{
			"wait": "click",
			"effects":[
				{
					"type": "EaseAnimations.Slide",
					"actor": "charmander-017",
					"direction": "in",
					"from_direction": "top",
					"alpha": "Clutter.AnimationMode.EASE_OUT_ELASTIC",
					"duration": 1500
				}]
		},
		{
			"wait": "time",
			"duration": 500,
			"effects":[
				{
					"type": "EaseAnimations.Fade",
					"actor": "charmander-018",
					"direction": "in",
					"duration": 1500
				}]
		}]
}

