

function toggleIcon() {
  $('.icon').on('click', function(){
      $('.icon').toggleClass('active');
      $('.menu-mobile').slideToggle(300);
      console.log("function ran");
  })
}
function toggleIcon2() {
  $('.dropbtn').on('click', function(){
      $('.dropbtn').toggleClass('active');
      $('.dropdown-content').slideToggle(300);
      console.log("contact section ran");
  })
}

toggleIcon();
toggleIcon2();

// function PerfectScrollbar(param) {
//   $(param).scroll();
// }
// let myCustomScrollbar = document.querySelector('.my-custom-scrollbar');
// let ps = new PerfectScrollbar(myCustomScrollbar);

// let scrollbarY = myCustomScrollbar.querySelector('.projectsImg');

// myCustomScrollbar.onscroll = function () {
 
//   scrollbarY.style.cssText = `top: ${this.scrollTop}px!important; height: 400px; right: ${-this.scrollLeft}px`;
// }


