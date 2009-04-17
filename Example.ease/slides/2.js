{
	"name": "2",
	"actors": [
		{
			"ease_name": "background",
			"type": "Ease.ImageActor",
			"filename": "blobs/background.jpg",
			"x": 0,
			"y": 0,
			"width": "_(send slide width)",
			"height": "_(send slide height)",
		},
		{
			"ease_name": "charmander-018",
			"type": "Ease.TextActor",
			"text": "Say\nBullshit\nAbout\nEase",
			"font_name": "Bitstream Vera Sans 40",
			"line_alignment": 1,
			"x": "_(- (/ (send slide width) 2) (/ (send self width) 2))",
			"y": "_(- (/ (send slide height) 2) (/ (send self height) 2))",
			"color": {"red":255, "green":255, "blue":255, "alpha":255}
		}]
}

