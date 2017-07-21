const Login = (update) => {
    const container = $(`<div class="login container text-center"></div>`),
          row = $('<div class="row"></div>'),
          title = $('<div class="login__title col-xs-12"></div>'),
          h1 = $('<h1>FEST_17</h1>'),
          p = $('<p><span>INTERCORP</span> INNOVATION FEST</p>'),
          col_xs_12 = $('<div class="col-xs-12"></div>'),
          form = $('<div class="login__form"></div>'),
          i = $('<i class="fa fa-user-o"></i>'),
          input = $('<input type="text" maxlength="8" placeholder="DNI">'),
          button = $('<button id="sign-in" class="btn">Sign In</button>');

    container.append(row);
    row.append(title, col_xs_12);
    title.append(h1, p);
    col_xs_12.append(form);
    form.append(i, input);
    form.append(button);


    button.click(_ => {
        var users = state.users.filter(function (e) {
            if(input.val().toString().length === 8  && e.id === input.val()){
                state.screen = 1;
                update();
            }
        });
    });
    return container;
};