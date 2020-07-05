// function click(){
//   $('ul').on('click', '.link', event => {
//     event.preventDefault();
//     $('.aboutmepage').load(about.html);
//   })
// };
//   $('img').click(function(){
//     $('.aboutmepage').load(aboutme.txt);
//   });
// }

/*
function navRouter(i) {
    if (i.id(0)) {
      navAnimation('#0');
     // showAbout();
    } else if (i.id(1)) {
      navAnimation('#1');
      //showProjects();
    }
  }
function navAnimation(selection){
  $('ul').on('click', '.link', event => {
    event.preventDefault();
    $('nav').addClass('topnav') ;
    $('h1').hide();
    
    if (selection === '#0') {
      //$('#1').addClass('hide');
      $('#0').removeClass('hide');
    } else if (selection === '#1') {
     // $('#0').addClass('hide');
     $('#1').removeClass('hide');
    }
    
});
}

 



function showAbout(){
  /*
    click();
    $('ul').on('click', '.aboutme', event => {
        event.preventDefault();
        $('.about-page').fadeIn();
       // $('.projects-page').hide();
       
        $('.about-page').append(
            `  <h1 class="about">This is me</h1>
                    <section class="bio">
                         <p>When I am not coding, I am most likely pc gaming,
                         skateboarding, doing digital art, or reading the Bible. 
                         I find web development interesting because 
                         I love to take on challenges as it excites me.
                         </p>
                    </section>
                    `
                            );
                            
    });

}

function showProjects(){
  /*
    click();
    $('ul').on('click', '.projects', event => {
        event.preventDefault();
        $('.projects-page').fadeIn();
      //  $('.about-page').hide();
      
        $('.projects-page').append(`
        <section class="projects">
        <h2>projects</h2>
        <img class="projectsImg" src="/windowExample.png">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo exercitationem incidunt doloribus quod accusantium magnam sapiente reprehenderit repudiandae, minima vero rerum quos! Sequi neque, nobis sapiente eum libero laborum cumque.</p>
    </section>
        `)
    })
}
*/
var myCustomScrollbar = document.querySelector('.my-custom-scrollbar');
var ps = new PerfectScrollbar(myCustomScrollbar);

var scrollbarY = myCustomScrollbar.querySelector('.ps__rail-y');

myCustomScrollbar.onscroll = function () {
  scrollbarY.style.cssText = `top: ${this.scrollTop}px!important; height: 400px; right: ${-this.scrollLeft}px`;
}
// function make(){
//     click();

// }
// make();