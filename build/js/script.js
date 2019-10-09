
//Highlight the menu when scroll to section

$(window).scroll(function() {
  var position = $(this).scrollTop();
  var section1 = $('#section1');
  $(section1).each(function() {
      var target = $(this).offset().top;
      var id = $(this).attr('id');
      if (position >= target) {
        $('nav > .main_menu > .main_menu_list > .main_menu_item').removeClass('active');
       
        $('nav > ul > li > a[href=#' + id + ']').addClass('active');
    } else {
      $('nav > ul > li > a[href=#' + id + ']').removeClass('active');
    }
  });
});

$(window).scroll(function() {
  var position = $(this).scrollTop();
  var section2 = $('#section2');
  $(section2).each(function() {
      var target = $(this).offset().top - 150;
      var id = $(this).attr('id');
      if (position >= target) {
        $('nav > .main_menu > .main_menu_list > .main_menu_item').removeClass('active');
      
        $('nav > ul > li > a[href=#' + id + ']').addClass('active');
    } else {
      $('nav > ul > li > a[href=#' + id + ']').removeClass('active');
    }
  });
});

$(window).scroll(function() {
  var position = $(this).scrollTop();
  var section3 = $('#section3');
  $(section3).each(function() {
      var target = $(this).offset().top - 150;
      var id = $(this).attr('id');
      if (position >= target) {
        $('nav > .main_menu > .main_menu_list > .main_menu_item').removeClass('active');
     
        $('nav > ul > li > a[href=#' + id + ']').addClass('active');
    } else {
      $('nav > ul > li > a[href=#' + id + ']').removeClass('active');
    }
  });
});

$(window).scroll(function() {
  var position = $(this).scrollTop();
  
  var section4 = $('#section4');
  $(section4).each(function() {
      var target = $(this).offset().top - 150;
      var id = $(this).attr('id');
      if (position >= target) {
        $('nav > .main_menu > .main_menu_list > .main_menu_item').removeClass('active');
        $('nav > ul > li > a[href=#' + id + ']').addClass('active');
    } else {
      $('nav > ul > li > a[href=#' + id + ']').removeClass('active');
    }
  });
});


//menu click active state

// var btnContainer = document.querySelector('.main_menu');
// var btns = btnContainer.getElementsByClassName('main_menu_list');
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//   });
// }

//slick slider for main section

$(document).ready(function(){
    $('.section_main_slider').slick({
        slidesToShow: 1,
        dots: true,
        infinite: true,
        speed: 2000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true
    });
});

//Dynamic progress bars

$('#progressbar1').LineProgressbar();
$('#progressbar2').LineProgressbar();
$('#progressbar3').LineProgressbar();
$('#progressbar4').LineProgressbar();

//custom checkbox

var checked = document.getElementById('contact_checkbox');
var checkicon = document.getElementById('checkbox_active');

checked.onclick = function () {
  if (checkicon.style.display === "block"){
    checkicon.style.display = "none";
  } else {
    checkicon.style.display = "block";
  } 
}

//burger menu

$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });
  
    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });
});

//Form validation
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('text').addEventListener('blur', validateText);

function validateName () {
  const name = document.getElementById('name');
  const re = /^[A-Za-zА-Яа-я]{2,10}$/;
  if (!re.test(name.value) || name.value === ""){
      name.classList.add('notValid');
  } else {
      name.classList.remove('notValid');
  }
}

function validateEmail (e) {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!re.test(email.value) || email.value === "") {
    email.classList.add('notValid'); 
  } else {
    email.classList.remove('notValid');
    e.preventDefault();
  }
}

function validateText () {
  const text = document.getElementById('text');
  if (text.value === "") {
    text.classList.add('notValid');
  } else {
    text.classList.remove('notValid');
  }
}

  


