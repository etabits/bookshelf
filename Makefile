supervise:
	supervisor -e 'js' -i 'node_modules' -x node -n error -- main.js
