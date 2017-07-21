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
    data: null,
    screen: null,
    users: null
};

$( _ => {

    /*getJSON('api/users', (err, json) => {

		if(err){ return alert(err.message);}
		state.data = json
		console.log(state.data)

		const root = $('#root');
		render(root);

	});*/

    getJSON('/api/users', (err, json) => {
        if(err){ return alert(err.message);}
        state.users = json;
        console.log(state.users);

        getJSON('/api/talks', (err, json) => {
            if(err){ return alert(err.message);}
            state.talks = json;
            console.log(state.talks);

            getJSON('/api/speakers', (err, json) => {
                if(err){ return alert(err.message);}
                state.speakers = json;
                console.log(state.speakers);

                const root = $('#root');
                render(root)
            });
        });
    });


    /*	$.get('https://lavictorialab-a98f8.firebaseio.com', function(data) {
		state.data = data

		const root = $('#root');
		render(root)

	});
*/
    // const root = $('#root');
    // render(root)

    /*	$.get('https://lavictorialab-a98f8.firebaseio.com/', function(data) {

		state.data = data
		console.log(state.data)

		const root = $('#root');
		render(root)
	});*/
});