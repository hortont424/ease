try
{
	Gio;
}
catch (e)
{
	Seed.import_namespace("Gio");
}

var slides = new Array();
var parsed_slides = new Array();
var slide_files = new Array();

var enumerator = (Gio.file_new_for_path("./slides")).enumerate_children("standard::name");

while (child = enumerator.next_file())
{
	slide_files.push(child.get_name());
}

slide_files.sort();
for (i in slide_files)
{
	slide = slide_files[i];
	slides.push(Gio.simple_read("./slides/"+slide));
}

for (i in slides)
{
	parsed_slides[i] = JSON.parse(slides[i]);
}



