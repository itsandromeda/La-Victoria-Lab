const Talks2 = (update) => {
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
<p>3er Turno</p>
</div>
<div class="col-xs-12">
<i class="fa fa-chevron-left"></i>
<span> ${state.talks[9].schedule.start + ` - ` +state.talks[9].schedule.finish}</span>
<i class="fa fa-chevron-right"></i>
</div>
</div>
</div>
</header>`),
          section = $(`<section class="speaker"></section>`),
          block_1 = $(`<div class="block row"></div>`),
          icon_wrap1 = $(`<div class="col-xs-3 text-center"><i class="fa fa-users"></i><p>Carpa User</p></div>`),
          content_wrap1 = $(`<div class="col-xs-9">
<div class="col-xs-12">
<p> ${state.talks[18].name} </p>
<p> ${state.speakers[5].speaker_name}</p>
</div>
<div class="col-xs-6">
<i class="fa fa-info"></i>
</div>
<div class="col-xs-6">
<button class="assist">Asistir</button>
</div>
</div>`),
          block_2 = $(`<div class="block pink row"></div>`),
          icon_wrap2 = $(`<div class="col-xs-3 text-center"><i class="fa fa-globe"></i><p>Carpa Tech</p></div>`),
          content_wrap2 = $(`<div class="col-xs-9">
<div class="col-xs-12">
<p> ${state.talks[15].name} </p>
<p> ${state.speakers[10].speaker_name}</p>
</div>
<div class="col-xs-6">
<i class="fa fa-info"></i>
</div>
<div class="col-xs-6">
<button class="assist">Asistir</button>
</div>
</div>`),
          block_3 = $(`<div class="block orange row"></div>`),
          icon_wrap3 = $(`<div class="col-xs-3 text-center"><i class="fa fa-users"></i><p>Carpa mix</p></div>`),
          content_wrap3 = $(`<div class="col-xs-9">
<div class="col-xs-12">
<p> ${state.talks[6].name} </p>
<p> ${state.speakers[7].speaker_name}</p>
</div>
<div class="col-xs-6">
<i class="fa fa-info"></i>
</div>
<div class="col-xs-6">
<button class="assist">Asistir</button>
</div>
</div>`),
          block_4 = $(`<div class="block lilac row"></div>`),
          icon_wrap4 = $(`<div class="col-xs-3 text-center"><i class="fa fa-users"></i><p>Carpa Org</p></div>`),
          content_wrap4 = $(`<div class="col-xs-9">
<div class="col-xs-12">
<p> ${state.talks[7].name} </p>
<p> ${state.speakers[20].speaker_name}</p>
</div>
<div class="col-xs-6">
<i class="fa fa-info"></i>
</div>
<div class="col-xs-6">
<button class="assist">Asistir</button>
</div>
</div>`);

    mainWrap.append(header, section);
    section.append(block_1, block_2, block_3, block_4);
    block_1.append(icon_wrap1, content_wrap1);
    block_2.append(icon_wrap2, content_wrap2);
    block_3.append(icon_wrap3, content_wrap3);
    block_4.append(icon_wrap4, content_wrap4);
    
    return mainWrap;
};