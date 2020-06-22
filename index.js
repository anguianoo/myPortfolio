function click(){
    
    $('ul').on('click', '.link', event => {
        event.preventDefault();
        $('nav').addClass('topnav') ;

        
    });
}
function showAbout(){
    click();
    $('ul').on('click', '.aboutme', event => {
        event.preventDefault();
        
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
    
    showAbout();
    showProjects();
}
make();