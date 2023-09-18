// 메뉴바 메뉴 클릭시 스크롤 이동
const menu = ['#Skills','#Education','#Projects', '#Vision'];

for (let i=0; i<menu.length; i++) {
    $('#menu li').eq(i).click(function() {
        $('html, body').animate({
            scrollTop: $(`${menu[i]}`).position().top - 80
        }, 500);
    });
}

// 사이트 제목 클릭시 페이지 새로고침
$('#kee span, #home').click(function() {
    location.href = "index.html";
    // if (window.scrollY != 0) {
    //     $('html, body').animate({
    //         scrollTop: $(this).position().top - 15
    //     }, 500);
    // }
});

// 프로젝트 상단 제목 또는 화살표 클릭시 스크롤 이동
$('#ptitle span, #up').click(function() {
    if (window.scrollY != 0) {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    }
});


//테마 아이콘 적용
if (getCookie('theme') == '' || getCookie('theme') == 'dark') {
    $('#theme .material-symbols-outlined').text("light_mode");
} else if (getCookie('theme') == 'light') {
    $('#theme .material-symbols-outlined').text("dark_mode");
}


// 테마 스위치
$('#theme').click(function() {
    if(getCookie('theme') == 'dark') {
        setCookie('theme', 'light', 365);
        document.documentElement.style.setProperty("--light-color", "#333");
        document.documentElement.style.setProperty("--dark-color", "#EEE");
        $('.openai').attr('src','images/openai1.png');
        $('#theme .material-symbols-outlined').text("dark_mode");
    } else if (getCookie('theme') == 'light') {
        setCookie('theme', 'dark', 365);
        document.documentElement.style.setProperty("--light-color", "#DDD");
        document.documentElement.style.setProperty("--dark-color", "#111");
        $('.openai').attr('src','images/openai2.png');
        $('#theme .material-symbols-outlined').text("light_mode");
    }
});

// 프로젝트 아코디언 UI
// $(function() {
//     $( "#plist" ).accordion({
//         collapsible: true,
//         active: 0
//     });
// });

for (let i=0; i<4; i++) {
    $('#plist h3').eq(i).click(function() {
        $('.pitem').eq(i).slideToggle();
    });
}

window.onscroll = function() {

	if(window.scrollY > 0 ) {
		$('#up').fadeIn(300);
	} else {
		$('#up').fadeOut(300);
	}


    $('.visionbox').each((index, item)=>{
        let y = item.getBoundingClientRect().top;
        if (y < window.screen.availHeight) {
            $(item).css('opacity','0.9');
        } else {
            $(item).css('opacity','0');
        }
    });
};



