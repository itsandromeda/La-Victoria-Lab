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
    screen: null
};

$(_ => {
    const root = $('#root');
    render(root);
});