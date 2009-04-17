EaseAnimations = {};

EaseAnimations.Fade = {};

EaseAnimations.Fade.Pre = function (a, obj)
{
	if(a.direction == "in")
		obj.opacity = 0;
	//else if(a.direction == "out")
	//	obj.opacity = 255;
};

EaseAnimations.Fade.Run = function (a, obj)
{
	var target = 0;
	
	if(a.direction == "in")
		target = 255;

	obj.anim = obj.animate(Clutter.AnimationMode.LINEAR, a.duration,
	{
		opacity: [GObject.TYPE_UCHAR, target]
	});
	obj.anim.timeline.start();
};

EaseAnimations.Slide = {};

EaseAnimations.Slide.Pre = function (a, obj)
{
	obj.original_x = obj.x;
	obj.original_y = obj.y;
	
	if(a.from_direction.match("top"))
		obj.y = -obj.height;
	else if(a.from_direction.match("bottom"))
		obj.y = stage.height + obj.height;
	else if(a.from_direction.match("left"))
		obj.x = -obj.width;
	else if(a.from_direction.match("right"))
		obj.x = stage.width + obj.width;
};

EaseAnimations.Slide.Run = function (a, obj)
{
	obj.anim = obj.animate(eval(a.alpha), a.duration,
	{
		x: [GObject.TYPE_INT, obj.original_x],
		y: [GObject.TYPE_INT, obj.original_y]
	});
	obj.anim.timeline.start();
};

EaseAnimations.Scale = {};

EaseAnimations.Scale.Pre = function (a, obj)
{
	/*obj.original_x = obj.x;
	obj.original_y = obj.y;
	
	if(a.from_direction.match("top"))
		obj.y = -obj.height;
	else if(a.from_direction.match("bottom"))
		obj.y = stage.height + obj.height;
	else if(a.from_direction.match("left"))
		obj.x = -obj.width;
	else if(a.from_direction.match("right"))
		obj.x = stage.width + obj.width;*/
	obj.opacity = 0;
	obj.scale_x = 0;
	obj.scale_y = 0;
};

EaseAnimations.Scale.Run = function (a, obj)
{
	obj.anim = obj.animate(eval(a.alpha), a.duration,
	{
		scale_x: [GObject.TYPE_DOUBLE, 1],
		scale_y: [GObject.TYPE_DOUBLE, 1],
		opacity: [GObject.TYPE_UCHAR, 255]
	});
	obj.anim.timeline.start();
};























EaseTransitions = {};

EaseTransitions.Push = function (t)
{
	with(t)
	{
		var sign = (direction == "up" || direction == "left") ? -1 : 1;

		if(direction == "up" || direction == "down")
		{
			b.y = stage.height * (-sign);
			
			a.anim = a.animate(alpha, duration,
			{
				x: [GObject.TYPE_INT, 0],
				y: [GObject.TYPE_INT, stage.height * sign]
			});
			a.anim.timeline.start();
		}
		else
		{
			b.x = stage.width * sign;
				
			a.anim = a.animate(alpha, duration,
			{
				x: [GObject.TYPE_INT, stage.width * (-sign)],
				y: [GObject.TYPE_INT, 0]
			});
			a.anim.timeline.start();
		}

		b.anim = b.animate(alpha, duration,
		{
			x: [GObject.TYPE_INT, 0],
			y: [GObject.TYPE_INT, 0]
		});
		b.anim.timeline.start();
	}
	
	return t.b.anim.timeline;
}

EaseTransitions.Scale = function(t)
{
	with(t)
	{
		a.anchor_x = a.width/2;
		a.anchor_y = a.height/2;

		a.x = stage.width/2;
		a.y = stage.height/2;

		var s = (direction == "in") ? 0 : 10;
		
		a.anim = a.animate(alpha, duration,
		{
			scale_x: [GObject.TYPE_DOUBLE, s],
			scale_y: [GObject.TYPE_DOUBLE, s],
			opacity: [GObject.TYPE_UCHAR, 0]
		});
		a.anim.timeline.start();
	}
	
	return t.a.anim.timeline;
}

EaseTransitions.Fade = function(t)
{
	with(t)
	{
		a.anim = a.animate(alpha, duration,
		{
			opacity: [GObject.TYPE_UCHAR, 0]
		});
		a.anim.timeline.start();
	}
	
	return t.a.anim.timeline;
}
