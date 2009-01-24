#include "ease-actor.h"
#include <glib.h>
#include <glib-object.h>

static void
ease_actor_base_init (gpointer klass)
{
  static gboolean is_initialized = FALSE;
  
  if (!is_initialized)
	{
	  is_initialized = TRUE;
	}
}

GType
ease_actor_get_type (void)
{
  static GType iface_type = 0;

  if (iface_type == 0)
	{
	  static const GTypeInfo info = {
		sizeof (EaseActorInterface),
		ease_actor_base_init, 
		NULL,
	  };
	  
	  iface_type = g_type_registered_static (G_TYPE_INTERFACE,
											 "EaseActor",
											 &info, 0);
	}

  return type;
}

gboolean ease_actor_do_message (EaseActor *self, GQuark type, gchar * message)
{
  g_return_if_fail (EASE_IS_ACTOR (self));
  
  EASE_ACTOR_GET_INTERFACE (self)->do_message(self, type, message);
}

gchar *ease_actor_serialize (EaseActor *self)
{
  g_return_if_fail (EASE_IS_ACTOR (self));
  
  EASE_ACTOR_GET_INTERFACE(self)->serialize(self);
}

