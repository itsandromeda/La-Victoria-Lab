const Login = (update) => {
    const container = $(`<div class="login container text-center">
                             <div class="row">
                                <div class="login__title col-xs-12">
                                    <h1>FEST_17</h1>
                                    <p><span>INTERCORP</span> INNOVATION FEST</p>
                                </div>
                                <div class="col-xs-12">
                                    <form class="login__form">
                                        <i class="fa fa-user-o"></i>
                                        <input placeholder="DNI">
                                        <button class="btn btn-danger" type="submit">Sign In</button>
                                    </form>
                                </div>
                             </div>
                         </div>`);

    return container;
};