{
		name: "1",
		actors: [{     
					    ease_name: "charmander-017",
					    type: "Ease.TextActor",
						text: "Ease",
						x: 0,
						y: 0,
						anchor_x: "(/ (send this width) 2)",
 				        anchor_y: "(/ (send this height) 2)",
				        font_name: "Bitstream Vera Sans 50"
			     },
			     {
						ease_name: "charmander-017",
 			            type: "Ease.TextActor",
				        text: "Hillaribad",
				        x:0,
				        y: "(/ (send charmander-017 height) 2)",
						anchor_x: "(/ (send this width) 2)",
 				        anchor_y: "(/ (send this height) 2)",
				        font_name: "Bitstream Vera Sans 20"
		        }]
}

