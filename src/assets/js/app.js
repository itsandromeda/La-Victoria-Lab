/*global $, schedule*/
const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    if (settings.screen === null) {
        wrapper.append(schedule(_ => {
            render(root);
        }));
    }
    root.append(wrapper);
};

const settings = {
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
    console.log(firebase);
    
});