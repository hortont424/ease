#!/usr/bin/env seed

Seed.import_namespace("Gio");

actor_name = Seed.argv[2];

actor_names = actor_name.split("-");

for(an in actor_names)
{
	actor_names[an] = actor_names[an][0].toUpperCase()+actor_names[an].slice(1,actor_names[an].length);
}

cc = actor_names.join("");
us = actor_name.replace(/-/g, "_");
up = us.toUpperCase();

function translate(str)
{
	str = str.replace(/TextActor/g, cc);
	str = str.replace(/text_actor/g, us);
	str = str.replace(/TEXT_ACTOR/g, up);
	
	return str;
}

var c_tmpl = "\n\
#include \"ease-text-actor.h\"\n\
#include \"ease-actor.h\"\n\
\n\
#include <glib.h>\n\
#include <glib-object.h>\n\
#include <clutter/clutter.h>\n\
\n\
static void ease_actor_interface_init (EaseActorInterface *iface);\n\
\n\
G_DEFINE_TYPE_WITH_CODE (EaseTextActor, ease_text_actor, CLUTTER_TYPE_TEXT,\n\
						 G_IMPLEMENT_INTERFACE (EASE_TYPE_ACTOR,\n\
												ease_actor_interface_init));\n\
\n\
static GValue *\n\
ease_text_actor_do_message (EaseActor *self, GQuark type, gchar *message)\n\
{\n\
	g_print (\"TODO!\\n\");\n\
	\n\
	return NULL;\n\
}\n\
\n\
static gchar * \n\
ease_text_actor_serialize (EaseActor *self)\n\
{\n\
	g_print (\"TODO!\\n\");\n\
	\n\
	return NULL;\n\
}\n\
\n\
static void\n\
ease_actor_interface_init (EaseActorInterface *iface)\n\
{\n\
	iface->do_message = ease_text_actor_do_message;\n\
	iface->serialize = ease_text_actor_serialize;\n\
}\n\
\n\
static void\n\
ease_text_actor_class_init (EaseTextActorClass *klass)\n\
{\n\
	return;\n\
}\n\
\n\
static void\n\
ease_text_actor_init (EaseTextActor *self)\n\
{\n\
	return;\n\
}\n\
";

var h_tmpl = "\n\
#ifndef __EASE_TEXT_ACTOR_H__\n\
#define __EASE_TEXT_ACTOR_H__\n\
\n\
#include <glib-object.h>\n\
#include <clutter/clutter.h>\n\
\n\
#define EASE_TYPE_TEXT_ACTOR				(ease_text_actor_get_type ())\n\
#define EASE_TEXT_ACTOR(obj)				(G_TYPE_CHECK_INSTANCE_CAST ((obj), EASE_TYPE_TEXT_ACTOR, EaseTextActor))\n\
#define EASE_IS_TEXT_ACTOR(obj)				(G_TYPE_CHECK_INSTANCE_TYPE ((obj), EASE_TYPE_TEXT_ACTOR))\n\
#define EASE_TEXT_ACTOR_CLASS(klass)		(G_TYPE_CHECK_CLASS_CAST ((klass), EASE_TYPE_TEXT_ACTOR, EaseTextActorClass))\n\
#define EASE_IS_TEXT_ACTOR_CLASS(klass)		(G_TYPE_CHECK_CLASS_TYPE ((klass), EASE_TYPE_TEXT_ACTOR))\n\
#define EASE_TEXT_ACTOR_GET_CLASS(obj)		(G_TYPE_INSTANCE_GET_CLASS ((obj), EASE_TYPE_TEXT_ACTOR, EaseTextActorClass))\n\
\n\
typedef struct _EaseTextActor		 EaseTextActor;\n\
typedef struct _EaseTextActorClass	 EaseTextActorClass;\n\
\n\
struct _EaseTextActor\n\
{\n\
	ClutterText parent_instance;\n\
};\n\
\n\
struct _EaseTextActorClass\n\
{\n\
	ClutterTextClass parent_class;\n\
};\n\
\n\
GType ease_text_actor_get_type (void);\n\
\n\
#endif /* __SEED_TEXT_ACTOR_H__ */\n\
";

var c_out = translate(c_tmpl);
Gio.simple_write("ease-" + actor_name + ".c", c_out);

var h_out = translate(h_tmpl);
Gio.simple_write("ease-" + actor_name + ".h", h_out);
