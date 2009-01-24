#ifndef __EASE_TEXT_ACTOR_H__
#define __EASE_TEXT_ACTOR_H__

#include <glib-object.h>
#include <clutter/clutter.h>

#define EASE_TYPE_TEXT_ACTOR				(ease_text_actor_get_type ())
#define EASE_TEXT_ACTOR(obj)				(G_TYPE_CHECK_INSTANCE_CAST ((obj), EASE_TYPE_TEXT_ACTOR, EaseTextActor))
#define EASE_IS_TEXT_ACTOR(obj)				(G_TYPE_CHECK_INSTANCE_TYPE ((obj), EASE_TYPE_TEXT_ACTOR))
#define EASE_TEXT_ACTOR_CLASS(klass)		(G_TYPE_CHECK_CLASS_CAST ((klass), EASE_TYPE_TEXT_ACTOR, EaseTextActorClass))
#define EASE_IS_TEXT_ACTOR_CLASS(klass)		(G_TYPE_CHECK_CLASS_TYPE ((klass), EASE_TYPE_TEXT_ACTOR))
#define EASE_TEXT_ACTOR_GET_CLASS(obj)		(G_TYPE_INSTANCE_GET_CLASS ((obj), EASE_TYPE_TEXT_ACTOR, EaseTextActorClass))

typedef struct _EaseTextActor		 EaseTextActor;
typedef struct _EaseTextActorClass	 EaseTextActorClass;

struct _EaseTextActor
{
	ClutterText parent_instance;
};

struct _EaseTextActorClass
{
	ClutterTextClass parent_class;
};

GType ease_text_actor_get_type (void);

#endif /* __SEED_TEXT_ACTOR_H__ */

