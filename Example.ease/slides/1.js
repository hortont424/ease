{
	"name": "1",
	"actors": [
		{
			"ease_name": "charmander-017",
			"type": "Ease.TextActor",
			"text": "Ease",
			"x": "_(- (/ (send slide width) 2) (/ (send self width) 2))",
			"y": 0,
			"font_name": "Bitstream Vera Sans 50",
			"color": {"red": 80, "green": 141, "blue": 61, "alpha": 255}
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
			"effects":[
				{
					"type": "Ease.EffectSlide",
					"actor": "charmander-017",
					"direction": "in",
					"from-direction": "top",
					"alpha": "Clutter.AnimationMode.EASE_OUT_ELASTIC"
				},
				{
					"type": "Ease.EffectFade",
					"actor": "charmander-018",
					"direction": "in"
				}]
		}]
}

