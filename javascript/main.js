/*$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})*/

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
/*=======================================================*/

var listaFilmes = ["https://www.themoviedb.org/t/p/w220_and_h330_face/eO0QV5qJaEngP1Ax9w3eV6bJG2f.jpg","https://www.themoviedb.org/t/p/w220_and_h330_face/izIMqapegdEZj0YVDyFATPR8adh.jpg","https://www.themoviedb.org/t/p/w220_and_h330_face/i0uajcHH9yogXMfDHpOXexIukG9.jpg","https://www.themoviedb.org/t/p/w220_and_h330_face/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
"https://www.themoviedb.org/t/p/w220_and_h330_face/u9QD9ddSVeYJABMSqBwfqe0NmsJ.jpg","https://www.themoviedb.org/t/p/w220_and_h330_face/95kwakZfmUShNLqDfOs3J1XVNep.jpg","https://www.themoviedb.org/t/p/w220_and_h330_face/dpd9aUIUT0tUDIard91nTWLLETV.jpg","https://www.themoviedb.org/t/p/w220_and_h330_face/cxJHiuynVltsIUfGuKg9ZjvXC3r.jpg",
"https://www.themoviedb.org/t/p/w220_and_h330_face/2gL5KB4GV51O6rH9HTeDGeTy0XX.jpg","/img/mini9.jpg","/img/mini8.jpg","https://www.themoviedb.org/t/p/w220_and_h330_face/nmTztGsJIToPkdWbvTgQ4EY6SrR.jpg"]




for (var i = 0; i < listaFilmes.length; i++) {

    var filmes = "<div class='alinhar'><a href='filmes.html'><img src="+listaFilmes[i]+"></a></div>" 
    var list = document.getElementById("listarFilmes")
    list.innerHTML =  list.innerHTML + filmes
    
 }
