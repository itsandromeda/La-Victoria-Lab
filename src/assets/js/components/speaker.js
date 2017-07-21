const Speaker = (update) => {
    const mainWrap = $(`<div class="main-wrap"></div>`),
        header = $(`<header class="header-schedule speaker">
                        <div class="container">
                            <div class="row text-center">
                                <div class="col-xs-12">
                                    <h1>MYFEST_17</h1>
                                    <div class="image-absolute"></div>
                                </div>
                                <div class="col-xs-12">
                                    <h3>Registro a charlas</h3>
                                    <p>1er Turno</p>
                                </div>
                                <div class="col-xs-12">
                                    <i class="fa fa-chevron-left"></i>
                                    <span>8am - 10am</span>
                                    <i class="fa fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                     </header>`),
        section = $(`<section></section>`),
        block_1 = $(`<div class="block aqua row"></div>`),
        icon_1 = $(`<i class="fa fa-users"></i>`),
        block_2 = $(`<div class="block lilac row"></div>`),
        icon_2 = $(`<i class="fa fa-globe"></i>`),
        block_3 = $(`<div class="block yellow row"></div>`),
        icon_3 = $(`<i class="fa fa-users"></i>`),
        block_4 = $(`<div class="block purple row"></div>`),
        icon_4 = $(`<i class="fa fa-puzzle-piece"></i>`),
        btn_1 = $(`<div class="attend">Asistir</div>`),
        btn_2 = $(`<div class="attend">Asistir</div>`),
        btn_3 = $(`<div class="attend">Asistir</div>`),
        btn_4 = $(`<div class="attend">Asistir</div>`);

    mainWrap.append(header, section);
    section.append(block_1, block_2, block_3, block_4);

    return mainWrap;
};