import React from "react";
import "./home.scss";
import Navibar from "./Nav";
import { BiBuilding, BiBuildingHouse, BiHome } from "react-icons/bi";
import { CgBee } from "react-icons/cg";
import { TbWindow } from "react-icons/tb";
import { Link } from "react-router-dom";
import FiveStars from "../images/5stars.png";
import BlogImage from "../images/blogimage.png";

function Home() {
  return (
    <div className="home">
      <Navibar />
      <div className="home__content">
        <div className="home__banner">
          <h1>A Price Comparison Site For Home Insurance</h1>
          <a
            href="https://webrater.appliedsystems.com/HarbordInsurance/Default.aspx?LANG=EN&GC=HIP&LOB=PROP&WFW=DTA"
            className="home__getquotes"
            type="button"
          >
            Get Quotes
          </a>
          <div className="home__banner__info">
            <h2>
              Welcome to Harbord – The Home Insurance People™ <br /> Where
              leading insurance companies compete for your business.
            </h2>
          </div>
          <img className="home__banner__stars" src={FiveStars} alt="stars" />
          <div className="home__banner__terms">
            <p>4.9 based on Google reviews</p>
          </div>
        </div>
        <div className="home__types">
          <Link className="home__type" type="button" to="/homeinsurance">
            <h2 className="type__title">Home</h2>
            <BiHome className="type__icon" />
          </Link>
          <Link className="home__type" type="button" to="/condoinsurance">
            <h2 className="type__title condo">Condo</h2>
            <BiBuilding className="type__icon" />
          </Link>
          <Link className="home__type" type="button" to="/tenantinsurance">
            <h2 className="type__title">Tenant</h2>
            <BiBuildingHouse className="type__icon" />
          </Link>
        </div>
        <div className="home__sectiontwo">
          <div className="home__wearetransparent">
            <TbWindow className="home__wearetransparent__logo" />
            <div className="home__wearetransparent__content">
              <div className="home_wearetransparent__transparent">
                <h1>WE’RE TRANSPARENT!</h1>
                <p>
                  Instead of just giving you one price, we show you competing
                  prices from Canada’s leading insurers so you can see how they
                  compare to one another and how they compare to what you’re
                  paying for your existing policy. Then at renewal time, instead
                  of just automatically renewing your policy, we again get the
                  insurers to quote on your business and we show you all of
                  their quotes.
                </p>
              </div>
              <div className="home_wearetransparent__independent">
                <h1>WE’RE INDEPENDENT</h1>
                <p>
                  Most insurance providers are tied to a particular insurer in
                  one way or another and that’s why when they quote they only
                  show you one price. But we’re truly independent and that means
                  we can get the insurance companies competing for your
                  business.
                </p>
              </div>
              <div className="home_wearetransparent__specialists">
                <h1>WE’RE HOME INSURANCE SPECIALISTS!</h1>
                <p>
                  Instead of trying to know all about a whole bunch of different
                  kinds of insurance, we’ve chosen to specialize. Home insurance
                  is all we do and so our clients know they’re getting expert
                  advice from a specialist.
                </p>
              </div>
            </div>
          </div>
          <div className="home__testimonials__container">
            <div className="home__testimonials__title">
              <h1>WHAT OUR CLIENTS ARE SAYING</h1>
            </div>
            <div className="home__testimonials">
              <div className="home__testimonial">
                <h2>lmao</h2>
                <p>this is a test</p>
              </div>
              <div className="home__testimonial">
                <h2>lmao</h2>
                <p>this is a test</p>
              </div>
              <div className="home__testimonial">
                <h2>lmao</h2>
                <p>this is a test</p>
              </div>
              <div className="home__testimonial">
                <h2>lmao</h2>
                <p>this is a test</p>
              </div>
            </div>
          </div>
          <div className="home__blogs__container">
            <h1>LATEST BLOG POSTS</h1>
            <div className="home__blogs">
              <div className="home__blog">
                <img src={BlogImage} alt="blog image" />
                <h1 className="blog__title">Title</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  convallis molestie pretium. Nulla felis massa, vehicula non
                  accumsan sit amet, molestie ac leo. Sed dapibus lectus odio,
                  ac imperdiet tortor pellentesque ut. Pellentesque luctus ipsum
                  nec libero hendrerit, vel pulvinar lorem dignissim. Integer
                  congue metus vel odio malesuada, vitae lobortis ante lobortis.
                  Morbi sit amet tortor et urna imperdiet condimentum a vitae
                  turpis. Sed nulla mi, condimentum et lacinia non, luctus at
                  nulla. Fusce id metus ante. Morbi interdum, ligula ac commodo
                  auctor, lectus nulla aliquet purus, cursus malesuada ipsum
                  purus non mi.
                </p>
                <Link className="blog__button" type="button" to="/blogname">
                  Read More
                </Link>
              </div>
              <div className="home__blog">
                <img src={BlogImage} alt="blog image" />
                <h1 className="blog__title">Title</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  convallis molestie pretium. Nulla felis massa, vehicula non
                  accumsan sit amet, molestie ac leo. Sed dapibus lectus odio,
                  ac imperdiet tortor pellentesque ut. Pellentesque luctus ipsum
                  nec libero hendrerit, vel pulvinar lorem dignissim. Integer
                  congue metus vel odio malesuada, vitae lobortis ante lobortis.
                  Morbi sit amet tortor et urna imperdiet condimentum a vitae
                  turpis. Sed nulla mi, condimentum et lacinia non, luctus at
                  nulla. Fusce id metus ante. Morbi interdum, ligula ac commodo
                  auctor, lectus nulla aliquet purus, cursus malesuada ipsum
                  purus non mi.
                </p>
                <Link className="blog__button" type="button" to="/blogname">
                  Read More
                </Link>
              </div>
              <div className="home__blog">
                <img src={BlogImage} alt="blog image" />
                <h1 className="blog__title">Title</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  convallis molestie pretium. Nulla felis massa, vehicula non
                  accumsan sit amet, molestie ac leo. Sed dapibus lectus odio,
                  ac imperdiet tortor pellentesque ut. Pellentesque luctus ipsum
                  nec libero hendrerit, vel pulvinar lorem dignissim. Integer
                  congue metus vel odio malesuada, vitae lobortis ante lobortis.
                  Morbi sit amet tortor et urna imperdiet condimentum a vitae
                  turpis. Sed nulla mi, condimentum et lacinia non, luctus at
                  nulla. Fusce id metus ante. Morbi interdum, ligula ac commodo
                  auctor, lectus nulla aliquet purus, cursus malesuada ipsum
                  purus non mi.
                </p>
                <Link className="blog__button" type="button" to="/blogname">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="home__reminder__container">
          <div className="home__reminder__content">
            <h1>
              Not ready for quotes? <br /> No Problem
            </h1>
            <p>
              We can contact you later, before your current policy expires, and
              show you some sweet deals!
            </p>
            <Link
              className="home__reminder__button"
              type="button"
              to="/reminder"
            >
              Get A Reminder
            </Link>
          </div>
          {/* <CgBee className="home__reminder__image" /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
