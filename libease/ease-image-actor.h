#ifndef __EASE_IMAGE_ACTOR_H__
#define __EASE_IMAGE_ACTOR_H__

#include <glib-object.h>
#include <clutter/clutter.h>

#define EASE_TYPE_IMAGE_ACTOR				(ease_image_actor_get_type ())
#define EASE_IMAGE_ACTOR(obj)				(G_TYPE_CHECK_INSTANCE_CAST ((obj), EASE_TYPE_IMAGE_ACTOR, EaseImageActor))
#define EASE_IS_IMAGE_ACTOR(obj)			(G_TYPE_CHECK_INSTANCE_TYPE ((obj), EASE_TYPE_IMAGE_ACTOR))
#define EASE_IMAGE_ACTOR_CLASS(klass)		(G_TYPE_CHECK_CLASS_CAST ((klass), EASE_TYPE_IMAGE_ACTOR, EaseImageActorClass))
#define EASE_IS_IMAGE_ACTOR_CLASS(klass)	(G_TYPE_CHECK_CLASS_TYPE ((klass), EASE_TYPE_IMAGE_ACTOR))
#define EASE_IMAGE_ACTOR_GET_CLASS(obj)		(G_TYPE_INSTANCE_GET_CLASS ((obj), EASE_TYPE_IMAGE_ACTOR, EaseImageActorClass))

typedef struct _EaseImageActor		 EaseImageActor;
typedef struct _EaseImageActorClass	 EaseImageActorClass;

struct _EaseImageActor
{
	ClutterTexture parent_instance;
};

struct _EaseImageActorClass
{
	ClutterTextureClass parent_class;
};

GType ease_image_actor_get_type (void);

#endif /* __SEED_IMAGE_ACTOR_H__ */
