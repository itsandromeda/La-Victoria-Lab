const Schedule = (update) => {
    const container = $(`<header class="header-schedule">
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
                         </header>
                         <section class="schedule-wrap">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="col-xs-3">
                                            <div class="schedule-wrap__sign">
                                                <div class="schedule-label text-center">Horario</div>
                                                <div class="long-bar"></div>
                                            </div>
                                        </div>
                                        <div class="schedule-wrap__container col-xs-9">
                                            <div class="schedule-wrap__box col-xs-12">
                                                <span class="close">&times;</span>
                                                <p class="time">8:00 - 10:00am</p>
                                                <div class="circle"></div>
                                                <p class="title">What is Digital Transformation?</p>
                                                <p>Mike Bracken</p>
                                                <div class="text-right">
                                                    <i class="fa fa-map-marker"></i>
                                                    <span>Carpa Tech</span>
                                                </div>
                                            </div>
                                            <div class="schedule-wrap__box col-xs-12">
                                                <span class="close">&times;</span>
                                                <p class="time">10:30 - 11:00am</p>
                                                <div class="circle"></div>
                                                <p class="title">What is Digital Transformation</p>
                                                <p>Mike Bracken</p>
                                                <div class="text-right">
                                                    <i class="fa fa-map-marker"></i>
                                                    <span>Carpa Mixta</span>
                                                </div>
                                            </div>
                                            <div class="schedule-wrap__box col-xs-12">
                                                <span class="close">&times;</span>
                                                <p class="time">11:30 - 12:30am</p>
                                                <div class="circle"></div>
                                                <p class="title">What is Digital Transformation</p>
                                                <p>Mike Bracken</p>
                                                <div class="text-right">
                                                    <i class="fa fa-map-marker"></i>
                                                    <span>Carpa Mixta</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row text-center">                                   
                                    <button id="change-talks" class="text-center">CAMBIAR MIS CHARLAS REGISTRADAS</button>
                                </div>
                            </div>
                         </section>`);

    return container;
};