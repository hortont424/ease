{
	"name": "1",
	"actors": [
		{
			"ease_name": "background",
			"type": "Ease.ImageActor",
			"filename": "blobs/bkg.png",
			"x": 0,
			"y": 0
		},
		{
			"ease_name": "charmander-017",
			"type": "Ease.TextActor",
			"text": "Ease",
			"x": "_(- (/ (send slide width) 2) (/ (send self width) 2))",
			"y": 0,
			"font_name": "Bitstream Vera Sans 50",
			"color": {"red": 255, "green": 141, "blue": 61, "alpha": 255}
		},
		{
			"ease_name": "charmander-018",
			"type": "Ease.TextActor",
			"text": "Hillaribad",
			"x": 0,
			"y": 70,
			"font_name": "Bitstream Vera Sans 20"
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
					"duration": 3000
				},
				{
					"type": "EaseAnimations.Fade",
					"actor": "charmander-018",
					"direction": "in",
					"duration": 3000
				}]
		}]
}

