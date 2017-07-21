'use strict';

const render = (root) => {

	root.empty();

	const wrapper = $('<div class="wrapper"></div>');

	const update = function() {
		render(root);
	}

	if(state.screen == null) {
		wrapper.append(schedule(update))
	}

	root.append(wrapper);

}

const state = {
	screen: null,
	data: null,
	id: null
};

$( _ => {

	getJSON('test.json', (err, json) => {

		if(err){ return alert(err.message);}
		state.data = json.charlas
		console.log(state.data)

		const root = $('#root');
		render(root);

	});
});