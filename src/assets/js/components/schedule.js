const Schedule = (update) => {
    const mainWrap = $(`<div class="main-wrap"></div>`),
          header = $(`<header class="header-schedule">
<div class="container">
<div class="row">
<div class="col-xs-12 text-center">
<h1>MYFEST</h1>
</div>
<div class="col-xs-3">
<div class="image"></div>
</div>
<div class="col-xs-9">
<h3>Ana Izquierdo</h3>
<p>Oeschle</p>
</div>
</div>
</div>
</header>`),
          section = $(`<section class="schedule-wrap"></section>`),
          container = $(`<div class="container"></div>`),
          row = $(`<div class="row"></div>`),
          wrap = $(`<div class="col-xs-12"></div>`),
          xs3 = $(`<div class="col-xs-3"></div>`),
          sign = $(`<div class="schedule-wrap__sign"></div>`),
          label = $(`<div class="schedule-label text-center">Horario</div>`),
          bar = $(`<div class="long-bar"></div>`),
          schedule_container = $(`<div class="schedule-wrap__container col-xs-9"></div>`),
          box_1 = $(`<div class="schedule-wrap__box col-xs-12"></div>`),
          close_1 = $(`<span class="close">&times;</span>`),
          time_1 = $(`<p class="time">8:00 - 10:00am</p>`),
          circle_1 = $(`<div class="circle"></div>`),
          title_1 = $(`<p class="title">What is Digital Transformation?</p>`),
          speaker_1 = $(`<p>Mike Bracken</p>`),
          text_right1 = $(`<div class="text-right"></div>`),
          marker_1 = $(`<i class="fa fa-map-marker"></i>`),
          place_1 = $(`<span>Carpa Tech</span>`),
          box_2 = $(`<div class="schedule-wrap__box col-xs-12"></div>`),
          close_2 = $(`<span class="close">&times;</span>`),
          time_2 = $(`<p class="time">10:30 - 11:00am</p>`),
          circle_2 = $(`<div class="circle"></div>`),
          title_2 = $(`<p class="title">What is Digital Transformation?</p>`),
          speaker_2 = $(`<p>Mike Bracken</p>`),
          text_right2 = $(`<div class="text-right"></div>`),
          marker_2 = $(`<i class="fa fa-map-marker"></i>`),
          place_2 = $(`<span>Carpa Mixta</span>`),
          box_3 = $(`<div class="schedule-wrap__box col-xs-12"></div>`),
          close_3 = $(`<span class="close">&times;</span>`),
          time_3 = $(`<p class="time">10:30 - 11:30am</p>`),
          circle_3 = $(`<div class="circle"></div>`),
          title_3 = $(`<p class="title">What is Digital Transformation?</p>`),
          speaker_3 = $(`<p>Mike Bracken</p>`),
          text_right3 = $(`<div class="text-right"></div>`),
          marker_3 = $(`<i class="fa fa-map-marker"></i>`),
          place_3 = $(`<span>Carpa Mixta</span>`),
          row_btn = $(`<div class="row text-center"></div>`),
          register_btn = $(`<button id="change-talks" class="text-center">CAMBIAR MIS CHARLAS REGISTRADAS</button>`);

    mainWrap.append(header, section);
    section.append(container);
    container.append(row, row_btn);
    row.append(wrap);
    wrap.append(xs3, schedule_container);
    xs3.append(sign);
    sign.append(label, bar);
    schedule_container.append(box_1, box_2, box_3);
    box_1.append(close_1, time_1, circle_1);
    box_1.append(title_1, speaker_1);
    box_1.append(text_right1);
    text_right1.append(marker_1, place_1);
    box_2.append(close_2, time_2, circle_2);
    box_2.append(title_2, speaker_2);
    box_2.append(text_right2);
    text_right2.append(marker_2, place_2);
    box_3.append(close_3, time_3, circle_3);
    box_3.append(title_3, speaker_3);
    box_3.append(text_right3);
    text_right3.append(marker_3, place_3);
    row_btn.append(register_btn);

    return mainWrap;
};