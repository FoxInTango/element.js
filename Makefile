ALL:
	esbuild ElementAPI.js --bundle --outfile=bundle/element.js
	esbuild bundle/element.js --bundle --outfile=bundle/element.min.js --minify

bundle:
	esbuild ElementAPI.js --bundle --outfile=bundle/element.js
server:
	esbuild --servedir=bundle --watch
clean:
	rm bundle/*
