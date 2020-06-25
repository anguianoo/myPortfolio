function click(){
    
    $('ul').on('click', '.link', event => {
        event.preventDefault();
        $('nav').addClass('topnav') ;
 
        
    });
}

/*
function navRouter(i) {
    if (i.css('.about-page')) {
      navAnimation('#0');
      showDefine();
    } else if (i.class('.projects-page')) {
      navAnimation('#1');
      showProjects();
    }
  }
function navAnimation(selection){
    if (selection === '#0') {
        $('#0').addClass('hide');
        $('#1, #2').removeClass('hide');
      } else if (selection === '#1') {
        $('#1').addClass('hide');
        $('#0, #2').removeClass('hide');
      } 
}
*/
function showAbout(){
    click();
    $('ul').on('click', '.aboutme', event => {
        event.preventDefault();
        $('.about-page').fadeIn();
        $('')
        $('.about-page').append(
            `  <h1 class="about">This is me</h1>
                    <section class="bio">
                         <p>When I am not coding, I am most likely pc gaming,
                         skateboarding, doing digital art, or reading the Bible. 
                         I find web development interesting because 
                         I love to take on challenges as it excites me.
                         </p>
                    </section>`
                            );
                            
    });

}
function showProjects(){
    click();
    $('ul').on('click', '.projects', event => {
        event.preventDefault();
        $('.projects-page').fadeIn();
        
        $('.projects-page').append(`
        <section class="projects">
        <h2>projects</h2>
        <img class="projectsImg" src="/windowExample.png">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo exercitationem incidunt doloribus quod accusantium magnam sapiente reprehenderit repudiandae, minima vero rerum quos! Sequi neque, nobis sapiente eum libero laborum cumque.</p>
    </section>
        `)
    })
}
function make(){
    navAnimation('#0');
    
    showAbout();
    showProjects();
}
make();