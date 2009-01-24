#include "ease-stage.h"
#include "ease-actor.h"

#include <glib.h>
#include <glib-object.h>
#include <clutter/clutter.h>

static void ease_actor_interface_init (EaseActorInterface *iface);

G_DEFINE_TYPE_WITH_CODE (EaseStage, ease_stage, CLUTTER_TYPE_STAGE,
						 G_IMPLEMENT_INTERFACE (EASE_TYPE_ACTOR,
												ease_actor_interface_init));

static gboolean 
ease_stage_do_message (EaseActor *self, GQuark type, gchar *message)
{
    g_print ("TODO!\n");
    
    return FALSE;
}

static gchar * 
ease_stage_serialize (EaseActor *self)
{
    g_print ("TODO!\n");
    
    return NULL;
}

static void
ease_actor_interface_init (EaseActorInterface *iface)
{
    iface->do_message = ease_stage_do_message;
    iface->serialize = ease_stage_serialize;
}

static void
ease_stage_init (EaseStage *self)
{
    return;
}
