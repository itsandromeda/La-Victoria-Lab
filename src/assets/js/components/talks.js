const Talks = (update) => {
    const mainWrap = $(`<div class="main-wrap"></div>`),
          header = $(`<header>
                            <div class="container">
                                <i class="fa fa-arrow-left"></i>
                                <p>MYFEST_17</p>
                            </div>
                      </header>`);
    
    mainWrap.append(header);
    
    return mainWrap;
};