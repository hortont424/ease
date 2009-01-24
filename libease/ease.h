#ifndef __EASE_H__
#define __EASE_H__

#include "ease-actor.h"
#include "ease-stage.h"

void ease_init (gint * argc, gchar *** argv);

void ease_name_actor (EaseActor * actor, gchar * name);
EaseActor * ease_actor_with_name (gchar * name);

#endif
