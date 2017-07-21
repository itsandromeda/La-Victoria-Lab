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
		console.log(state.data)

		const root = $('#root');
		render(root)
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

const schedule = (update) => {
    const container = $(`<header class="container-fluid">
                            <nav class="row">
                                <h1>MYFEST</h1>
                                <i class="fa fa-bars"></i>
                            </nav>
                            <div class="row">
                                <div class="col-xs-3">
                                    <img src="" alt="avatar">
                                </div>
                                <div class="col-xs-9">
                                    <h3>Ana Izquierdo</h3>
                                    <p>Oeschle</p>
                                </div>
                            </div>
                         </header>
                         <section class="schedule-wrap">
                            <div class="container">
                                <div class="row">
                                    
                                </div>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <p>15:00</p>
                                        <p>What is Digital Transformation</p>
                                        <p>Mike Bracken</p>
                                        <div>
                                            <i class="fa fa-location"></i>
                                            <p>Carpa Mixta</p>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <p>15:00</p>
                                        <p>What is Digital Transformation</p>
                                        <p>Mike Bracken</p>
                                        <div>
                                            <i class="fa fa-location"></i>
                                            <p>Carpa Mixta</p>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <p>15:00</p>
                                        <p>What is Digital Transformation</p>
                                        <p>Mike Bracken</p>
                                        <div>
                                            <i class="fa fa-location"></i>
                                            <p>Carpa Mixta</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </section>
                         <footer>
                            <button class="text-center">CAMBIAR MIS CHARLAS REGISTRADAS</button>
                         </footer>`);

    return container;
};
'use strict';

const getJSON = (url, cb) => {

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {

    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }

    cb(null, xhr.response);
    
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();

};
