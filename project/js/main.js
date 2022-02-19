// MENU CHANGE

const nav = document.querySelector(".nav");
window.addEventListener("scroll", function () {
  if (scrollY > nav.offsetHeight) {
    nav.classList.add("add");
  } else {
    nav.classList.remove("add");
  }
});

// ADD ANIMATION TO PROJECT BOXES

const projectImgWrapper = document.querySelectorAll(".project-img-wrapper");
const projectImgWrapperTop =
  document.querySelector(".projects-wrapper").offsetTop;

window.addEventListener("scroll", function () {
  if (scrollY > projectImgWrapperTop + 400) {
    for (i = 0; i < projectImgWrapper.length; i++) {
      projectImgWrapper[i].classList.add("add-flip");
    }
  }
});

// SHOW MODAL
const modal = document.querySelector(".modal");
const sliderWrapper = document.querySelector(".slider-wrapper");
const changeSlide = document.querySelectorAll(".change-slide");

for (let i = 0; i < projectImgWrapper.length; i++) {
  projectImgWrapper[i].addEventListener("click", function () {
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
  });
}
sliderWrapper.addEventListener("click", function (e) {
  e.stopPropagation();
});

modal.addEventListener("click", function (e) {
  this.style.opacity = "0";
  this.style.visibility = "hidden";
});

for (i = 0; i < changeSlide.length; i++) {
  changeSlide[i].addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

let indexSlide = 0;

function changeSlides(n) {
  slideShow((indexSlide += n));
}
function slideShow(n) {
  const slides = document.querySelectorAll(".slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (indexSlide >= slides.length) {
    indexSlide = 0;
  }
  if (indexSlide < 0) {
    indexSlide = slides.length - 1;
  }
  slides[indexSlide].style.display = "block";
}

// ADD ANIMATION TO SINGLE-SERVICE

const services = document.querySelectorAll(".single-service");

const serviceWrapper = document.querySelector(".service-wrapper");
const serviceWrapperTop = document.querySelector(".service-wrapper").offsetTop;
window.addEventListener("scroll", function () {
  if (scrollY > serviceWrapperTop - 400) {
    for (i = 0; i < services.length; i++) {
      services[i].classList.add("add-scale");
    }
  }
});

// ADD PROGRESS TO PROGRESSBAR

const skillTop = document.querySelector(".skill-box").offsetTop - 500;
let j = 0;
let x = 0;
let z = 0;
let counted = 0;

const progresses = document.querySelectorAll(".percent");
const skill1 = document.querySelector(".skill1-percent");
const skill2 = document.querySelector(".skill2-percent");
const skillF = document.querySelector(".skillF-percent");

window.addEventListener("scroll", function () {
  if (counted == 0 && scrollY > skillTop) {
    let skillFPercent = setInterval(() => {
      z++;
      skillF.innerHTML = z + "%";
      document.querySelector(".progressF").style.width = `${z}%`;
      if (z === 100) {
        clearInterval(skillFPercent);
        z = 0;
      }
    }, 10);
    let skill2Percent = setInterval(() => {
      j++;
      skill2.innerHTML = j + "%";
      document.querySelector(".progress2").style.width = `${j}%`;
      if (j === 90) {
        clearInterval(skill2Percent);
        j = 0;
      }
    }, 10);

    let skill1Percent = setInterval(() => {
      x++;
      skill1.innerHTML = x + "%";
      document.querySelector(".progress").style.width = `${x}%`;
      if (x === 80) {
        clearInterval(skill1Percent);
        x = 0;
      }
    }, 10);

    counted = 1;
  }
});

// ELEVATOR
const elv = document.querySelector(".elevator");
window.addEventListener("scroll", function () {
  if (scrollY < 300) {
    elv.style.opacity = 0;
  } else {
    elv.style.opacity = 1;
  }
});
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() < 300) {
      $(".elevator").fadeOut();
    } else {
      $(".elevator").fadeIn();
    }
  });

  $(".elevator").click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // MENU SLIDE DOWN
  $(".menu-items").hide();
  $(".icon-menu").click(function () {
    $(".menu-items").slideDown(function () {
      $(".items li a").click(function () {
        $(".menu-items").slideUp();
        console.log($(this.hash).offset().top);
        console.log($(".nav").height());
        const sectionTop = $(this.hash).offset().top - $(".nav").height();
        $("body, html").animate({
          scrollTop: sectionTop,
        });
      });
    });
  });
  $(".close").click(function () {
    $(".menu-items").slideUp();
  });
});

// LOADER
$("body").css("overflow", "hidden");
$(window).on("load", function () {
  $(".loader-wrapper").fadeOut();
  $("body").css("overflow", "auto");
});
