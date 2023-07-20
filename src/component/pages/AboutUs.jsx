import React from "react";
function AboutUs() {
  return (

    <section class="page-section" id="about">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">About</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <ul class="timeline">
            {/* <li>
                <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..."/></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>2009-2011</h4>
                        <h4 class="subheading">Our Humble Beginnings</h4>
                    </div>
                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li> */}
            <li class="timeline-inverted">
                <div class="timeline-image"><img class="rounded-circle img-fluid" src="data:image/jpeg;base64,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" alt="..."/></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>March 2011</h4>
                        <h4 class="subheading">An Agency is Born</h4>
                    </div>
                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li>
            <li>
                <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..."/></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>December 2015</h4>
                        <h4 class="subheading">Transition to Full Service</h4>
                    </div>
                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li>
            <li class="timeline-inverted">
                <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..."/></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>July 2020</h4>
                        <h4 class="subheading">Phase Two Expansion</h4>
                    </div>
                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li>
            <li class="timeline-inverted">
                <div class="timeline-image">
                    <h4>
                        Be Part
                        <br/>
                        Of Our
                        <br/>
                        Story!
                    </h4>
                </div>
            </li>
        </ul>
    </div>
</section>

  );
}

export default AboutUs;
