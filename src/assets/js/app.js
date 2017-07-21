'use strict';

const render = (root) => {

    root.empty();

    const wrapper = $('<div class="wrapper"></div>');

    const update = function () {
        render(root);
    }

    switch (state.screen) {
    case null:
        wrapper.append(Login(update));
        break;
    case 1:
        wrapper.append(Schedule(update));
        break;
    case 2:
        wrapper.append(Speaker(update));
        break;
    }

    root.append(wrapper);

}

const state = {
    screen: null,
    data: null,
    id: null
};

$(_ => {
    const root = $('#root');
    render(root);
    var config = {
        apiKey: "AIzaSyDnmZ9s2wBY-7wceqy3bdZ8u5623xm_3XU",
        authDomain: "lavictorialab-a98f8.firebaseapp.com",
        databaseURL: "https://lavictorialab-a98f8.firebaseio.com",
        projectId: "lavictorialab-a98f8",
        storageBucket: "lavictorialab-a98f8.appspot.com",
        messagingSenderId: "912917476975"
    };
    firebase.initializeApp(config);

    getJSON('test.json', (err, json) => {

        if (err) {
            return alert(err.message);
        }
        state.data = json
        console.log(state.data)

        const root = $('#root');
        render(root);

    });
});