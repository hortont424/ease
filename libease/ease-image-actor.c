#include "ease-image-actor.h"
#include "ease-actor.h"

#include <glib.h>
#include <glib-object.h>
#include <clutter/clutter.h>

static void ease_actor_interface_init (EaseActorInterface *iface);

G_DEFINE_TYPE_WITH_CODE (EaseImageActor, ease_image_actor, CLUTTER_TYPE_TEXTURE,
						 G_IMPLEMENT_INTERFACE (EASE_TYPE_ACTOR,
												ease_actor_interface_init));

static GValue *
ease_image_actor_do_message (EaseActor *self, GQuark type, gchar *message)
{
	g_print ("TODO!\n");
	
	return NULL;
}

static gchar * 
ease_image_actor_serialize (EaseActor *self)
{
	g_print ("TODO!\n");
	
	return NULL;
}

static void
ease_actor_interface_init (EaseActorInterface *iface)
{
	iface->do_message = ease_image_actor_do_message;
	iface->serialize = ease_image_actor_serialize;
}

static void
ease_image_actor_class_init (EaseImageActorClass *klass)
{
	return;
}

static void
ease_image_actor_init (EaseImageActor *self)
{
	return;
}
