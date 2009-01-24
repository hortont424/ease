#ifndef __EASE_ACTOR_H__
#define __EASE_ACTOR_H__

#include <glib-object.h>
#include <glib.h>

#define EASE_TYPE_ACTOR                 (ease_actor_get_type ())
#define EASE_ACTOR(obj)                 (G_TYPE_CHECK_INSTANCE_CAST ((obj), EASE_TYPE_ACTOR, EaseActor))
#define EASE_IS_ACTOR(obj)              (G_TYPE_CHECK_INSTANCE_TYPE ((obj), EASE_TYPE_ACTOR))
#define EASE_ACTOR_GET_INTERFACE(inst)  (G_TYPE_INSTANCE_GET_INTERFACE ((inst), EASE_TYPE_ACTOR, EaseActorInterface))


typedef struct _EaseActor               EaseActor; /* dummy object */
typedef struct _EaseActorInterface      EaseActorInterface;

struct _EaseActorInterface
{
    GTypeInterface parent_iface;
    
    GValue * (*do_message) (EaseActor *self, GQuark type, gchar *message);
    gchar * (*serialize) (EaseActor *self);
};

GType ease_actor_get_type (void);

GValue * ease_actor_do_message (EaseActor *self, GQuark type, gchar *message);
gchar * ease_actor_serialize (EaseActor *self);


#endif // __EASE_ACTOR_H__                      
