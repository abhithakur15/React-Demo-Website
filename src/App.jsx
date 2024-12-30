import { useState } from "react";

import "./App.css";
import Header from "./Component/Header";
import Button1 from "./Component/Button1";
import banner1 from "./assets/banner-img-1.png";
import shape1 from "./assets/banner-shape-1-1.png";
import shape2 from "./assets/banner-shape-1-2.png";
import Title from "./Component/Title";
import Card1 from "./Component/Card1";
import Mockup1 from "./assets/cat-1-moc-1.png";
import Mockup2 from "./assets/cta-1-shape-3.png";
import Mockup3 from "./assets/cta-1-shape-2.png";
import Mockup4 from "./assets/cta-2-moc-1.png";
import VideoBox from "./Component/Video";
import Pricecard from "./Component/Pricecard";
import Testi1 from "./assets/testimonials-1-shape-5.png";
import Testimonial from "./Component/Testimonial";
import Screenshot from "./Component/Screenshoot";
import Footer from "./Component/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>

      <section className="hero" id="home-1">
        <img src={shape1} alt="" class="shape-1" />
        <img src={shape2} alt="" class="shape-2" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-text">
                <h1>
                  We help to
                  <br />
                  achieve big
                  <br />
                  goals
                </h1>
                <p>
                  Nulla facilisi. Proin felis neque, suscipit egestas erat a
                  tin- <br />
                  cidunt finibus magna consectetur lacus.
                </p>
                <Button1 path="#" name="Download App"></Button1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image text-center">
                <img src={banner1} alt="" className="img-fluid " />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <Title
                  sub_title="Our App Feature Lists"
                  main_title="Piloz Great Features"
                ></Title>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <Card1
                bgColor="bg-color-1"
                iconClass="fa-regular fa-note-sticky"
                text="Easy to edit"
                para="Lorem ipsum is are many variations of pass majy."
              ></Card1>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <Card1
                bgColor="bg-color-2"
                iconClass="fa-solid fa-anchor"
                text="Fully secure"
                para="Lorem ipsum is are many variations of pass majy."
              ></Card1>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <Card1
                bgColor="bg-color-3"
                iconClass="fa-solid fa-user"
                text="Manage user"
                para="Lorem ipsum is are many variations of pass majy."
              ></Card1>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <Card1
                bgColor="bg-color-4"
                iconClass="fa-solid fa-gear"
                text="Free trial"
                para="Lorem ipsum is are many variations of pass majy."
              ></Card1>
            </div>
          </div>
        </div>
      </section>

      <section className="our-feature">
      <img src={Mockup2} alt="" class="cta-1" />
      <img src={Mockup3} alt="" class="cta-2" />
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-6">
              <div className="our-features-image">
             
                <img src={Mockup1} alt="" className="img-fluid mobile-1" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-features-text ms-lg-4">
                <Title
                  sub_title="Our App Feature Lists"
                  main_title={
                    <>
                      Powerful App
                      <br /> for
                      <br /> Your Mobile
                    </>
                  }
                ></Title>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eufugiat nulla pariatur. Lorem Ipsum is simply
                  dummy text of the printing laborum perspiciatis unde.
                </p>
                <Button1 path="#" name="Download App"></Button1>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="video-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-12">

<VideoBox></VideoBox>

   
      </div>
    </div>
  </div>
</section>

<section className="discover-tool">
  <div className="container">
    <div className="row align-items-center flex-lg-row flex-column-reverse">
      <div className="col-lg-6">
        <div className="tool-text">
        <Title
                  sub_title="Our App Feature Lists"
                  main_title="Discover Tools for
Your Customers"
                ></Title>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum lorem ipsum is simply free.</p>
                <ul>
                  <li><p> Refresing to get such a personal touch.</p></li>
                  <li><p> Duis aute irure dolor in reprehenderit in voluptate.</p></li>
                  <li><p> Velit esse cillum dolore eu fugiat nulla pariatur.</p></li>
                </ul>
                <Button1 path="#" name="Discover More"></Button1>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="tool-image">
          <img src={Mockup4} alt="" className="img-fluid"/>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="price" id="pricing">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-4 col-sm-6 col-md-6 mb-4">
<Pricecard num="01" bgColor="red-bg" heading="$20.00" para="Basic Pack" para1="Extra features" para2="Lifetime free support" para3="Upgrate options" para4="Full access"></Pricecard>
      </div>
      <div className="col-lg-4 col-sm-6 col-md-6 mb-4">
<Pricecard num="02" bgColor="blue-bg" heading="$30.00" para="Basic Pack" para1="Extra features" para2="Lifetime free support" para3="Upgrate options" para4="Full access"></Pricecard>
      </div>
      <div className="col-lg-4 col-sm-6 col-md-6 mb-4">
<Pricecard num="03" bgColor="green-bg" heading="$60.00" para="Basic Pack" para1="Extra features" para2="Lifetime free support" para3="Upgrate options" para4="Full access"></Pricecard>
      </div>
    </div>
  </div>
</section>

<section className="testimonial" id="Testimonials">
  <img src={Testi1} alt="" className="test-shape"/>
  <div className="container">
  <div className="row">
    <div className="col-12">
      <div className="text-center">
      <Title
                  sub_title="Our Testimonials"
                  main_title="What They Says"></Title>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12">
<Testimonial></Testimonial>
    </div>
  </div>
  </div>

</section>

<section className="screenshoot" id="Screen">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center">
        <Title
                  sub_title="Check Before Choosing"
                  main_title="App Screenshots"></Title>
        </div>

      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
<Screenshot></Screenshot>
      </div>
    </div>
  </div>
</section>


<section className="faq" id="FAQs">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="text-center">
        <Title
                  sub_title="Frequently Asked Questions"
                  main_title="Have Any Question?"></Title>
        </div>

      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-10">
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Pre and post launch mobile app marketing pitfalls to avoid
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><p>There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.</p></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Boostup your application traffic is just a step away
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body"><p>There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.</p></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How to update application new features
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body"><p>There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.</p></div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</section>

<Footer></Footer>
    </>
  );
}

export default App;
