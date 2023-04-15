$(function(){
    $('#main_menu > ul').hover(function(){
        $('header').stop().animate({
            height : '400px',
        }, 300);
    }, function(){
        $('header').stop().animate({
            height : '100px',
        }, 300);
    });

    let tabBtn = $('#tab_menu > li > a');
    let tabCon = $('#tab_con > section');

    tabBtn.click(function(e) {
        e.preventDefault();
        tabBtn.removeClass('on');
        $(this).addClass('on');

        tabCon.hide();

        let target = $(this).attr('href');
        $(target).show();
    });

    let burger = $('#m_burger');
    let sideMenu = $('#m_menu');

    i = 0;
    burger.click(function(){
        sideMenu.animate({
            right : 0,
        }, 700);
        $('#m_bk').css({
            display : 'block',
        })
        //i++;
    });

    $('#m_close').click(function(){
        sideMenu.animate({
            right : '-100%',
        }, 700);
        $('#m_bk').css({
            display : 'none',
        })
        //i--;
    });
    let menuOpen = $('#m_menu > ul > li')
    menuOpen.click(function(){
        menuOpen.removeClass('open');
        $(this).addClass('open');
    });
}); // end