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
			"text": "Seed",
			"font_name": "Bitstream Vera Sans Bold 60",
			"x": "_(+ (- (/ (send slide width) 2) (/ (send self width) 2)) 2)",
			"y": 102,
			"color": {"red":0, "green":0, "blue":0, "alpha":128}
		},
		{
			"ease_name": "charmander-018",
			"type": "Ease.TextActor",
			"text": "Seed",
			"font_name": "Bitstream Vera Sans Bold 60",
			"x": "_(- (/ (send slide width) 2) (/ (send self width) 2))",
			"y": 100,
			"color": {"red":255, "green":255, "blue":255, "alpha":255}
		},
		{
			"ease_name": "main-text",
			"type": "Ease.TextActor",
			"text": "Strategically inserting Seed dependencies:",
			"font_name": "Bitstream Vera Sans 24",
			"y": "_(+ (- (/ (- (send slide height) (+ (send charmander-018 height) 100)) 2) (/ (send self height) 2)) 80)",
			"x": 100,
			"color": {"red":255, "green":255, "blue":255, "alpha":255}
		},
		{
			"ease_name": "ephy",
			"type": "Ease.TextActor",
			"text": "  • Epiphany",
			"font_name": "Bitstream Vera Sans 24",
			"y": "_(+ (send main-text height) (send main-text y))",
			"x": 100,
			"color": {"red":255, "green":255, "blue":255, "alpha":255}
		},
		{
			"ease_name": "ggames",
			"type": "Ease.TextActor",
			"text": "  • GNOME Games",
			"font_name": "Bitstream Vera Sans 24",
			"y": "_(+ (send ephy height) (send ephy y))",
			"x": 100,
			"color": {"red":255, "green":255, "blue":255, "alpha":255}
		},
		{
			"ease_name": "nautilus",
			"type": "Ease.TextActor",
			"text": "  • Nautilus",
			"font_name": "Bitstream Vera Sans 24",
			"y": "_(+ (send ggames height) (send ggames y))",
			"x": 100,
			"color": {"red":255, "green":255, "blue":255, "alpha":255}
		},
		{
			"ease_name": "gnomeshell",
			"type": "Ease.TextActor",
			"text": "  • GNOME Shell?",
			"font_name": "Bitstream Vera Sans 24",
			"y": "_(+ (send nautilus height) (send nautilus y))",
			"x": 100,
			"color": {"red":255, "green":255, "blue":255, "alpha":255}
		}],
	"actions": [
	{
		"wait": "click",
		"effects":[
			{
				"type": "EaseAnimations.Slide",
				"actor": "ephy",
				"direction": "in",
				"from_direction": "left",
				"alpha": "Clutter.AnimationMode.EASE_OUT_ELASTIC",
				"duration": 1000
			}]
	},
	{
		"wait": "time",
		"duration": 500,
		"effects":[
			{
				"type": "EaseAnimations.Slide",
				"actor": "ggames",
				"direction": "in",
				"from_direction": "right",
				"alpha": "Clutter.AnimationMode.EASE_OUT_ELASTIC",
				"duration": 1000
			}]
	},
	{
		"wait": "time",
		"duration": 1000,
		"effects":[
			{
				"type": "EaseAnimations.Slide",
				"actor": "nautilus",
				"direction": "in",
				"from_direction": "left",
				"alpha": "Clutter.AnimationMode.EASE_OUT_ELASTIC",
				"duration": 1000
			}]
	},
	{
		"wait": "time",
		"duration": 1500,
		"effects":[
			{
				"type": "EaseAnimations.Slide",
				"actor": "gnomeshell",
				"direction": "in",
				"from_direction": "right",
				"alpha": "Clutter.AnimationMode.EASE_OUT_ELASTIC",
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

