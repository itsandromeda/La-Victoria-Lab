/*global $, schedule*/
const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    switch (state.screen) {
    case null:
        wrapper.append(Login(_ => {
            render(root);
        }));
        break;
    case 1:
        wrapper.append(Schedule(_ => {
            render(root);
        }));
        break;
    case 2:
        wrapper.append(Speaker(_ => {
            render(root);
        }));
        break;
    }
    root.append(wrapper);
};

const state = {
    screen: null
};

$(_ => {
    const root = $('#root');
    render(root);

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAmSJYoXGPyV6lh8kQjiiOP7GQqepnP3uU",
        authDomain: "la-victoria-lab.firebaseapp.com",
        databaseURL: "https://la-victoria-lab.firebaseio.com",
        projectId: "la-victoria-lab",
        storageBucket: "",
        messagingSenderId: "331922178054"
    };
    firebase.initializeApp(config);
    console.log(firebase);

    var database = firebase.database();
});