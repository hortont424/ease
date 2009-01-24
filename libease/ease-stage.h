#ifndef __EASE_STAGE_H__
#define __EASE_STAGE_H__

#include <glib-object.h>
#include <clutter/clutter.h>

#define EASE_TYPE_BAZ             (ease_stage_get_type ())
#define EASE_STAGE(obj)             (G_TYPE_CHECK_INSTANCE_CAST ((obj), EASE_TYPE_STAGE, EaseStage))
#define EASE_IS_STAGE(obj)          (G_TYPE_CHECK_INSTANCE_TYPE ((obj), EASE_TYPE_STAGE))
#define EASE_STAGE_CLASS(klass)     (G_TYPE_CHECK_CLASS_CAST ((klass), EASE_TYPE_STAGE, EaseStageClass))
#define EASE_IS_STAGE_CLASS(klass)  (G_TYPE_CHECK_CLASS_TYPE ((klass), EASE_TYPE_STAGE))
#define EASE_STAGE_GET_CLASS(obj)   (G_TYPE_INSTANCE_GET_CLASS ((obj), EASE_TYPE_STAGE, EaseStageClass))


typedef struct _EaseStage        EaseStage;
typedef struct _EaseStageClass   EaseStageClass;


struct _EaseStage
{
    ClutterStage parent_instance;
};

struct _EaseStageClass
{
    ClutterStageClass parent_class;
};

GType ease_stage_get_type (void);

#endif /* __SEED_STAGE_H__ */			\
		
