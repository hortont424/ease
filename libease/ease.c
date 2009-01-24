#include <clutter/clutter.h>
#include <glib.h>
#include "ease.h"

static GHashTable * ease_actor_pool;

void ease_name_actor(EaseActor *actor, gchar *name)
{
	static GStaticMutex mutex = G_STATIC_MUTEX_INIT;
	
	g_return_if_fail (EASE_IS_ACTOR(actor));

	g_static_mutex_lock(&mutex);
	g_hash_table_insert(ease_actor_pool, name, actor);
	g_static_mutex_unlock (&mutex);
}

EaseActor * ease_actor_with_name (gchar * name)
{
	return g_hash_table_lookup(ease_actor_pool, name);
}

void
ease_init (gint * argc, gchar *** argv)
{
	g_thread_init(NULL);
    clutter_init(argc, argv);
	
	ease_actor_pool = g_hash_table_new(NULL, g_str_equal);
}
