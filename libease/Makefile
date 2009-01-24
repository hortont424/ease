all: build-lib gir

build-lib:
	gcc -Wall -fPIC `pkg-config --cflags --libs clutter-0.9` -shared ease-image-actor.c ease-text-actor.c ease-actor.c ease-stage.c ease.c -o libease.so

install:
	cp *.so /usr/local/lib
	cp *.typelib /usr/local/lib/girepository-1.0/

gir: build-lib
	g-ir-scanner -v --namespace Ease --nsversion=0.1 \
	--add-include-path=. --include=Clutter-0.9 -L`pwd` --library ease \
	--pkg clutter-0.9 --output Ease-0.1.gir *.h
	LD_LIBRARY_PATH=`pwd` g-ir-compiler Ease-0.1.gir -o Ease-0.1.typelib
