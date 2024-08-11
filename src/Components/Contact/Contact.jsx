import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="innerWidth paddings flexCenter c-container">
        {/* Left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We are always ready to assist by providing top-notch services for
            you. We believe that high-quality printing can elevate your
            environment and enrich your experience.
          </span>
          <div className="flexColStart contactModes">
            {/* First row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                  </div>
                </div>
                <a href="tel:8630228315" className="flexCenter button">
                  Call Now
                </a>
              </div>

              {/* Second Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Mail</span>
                  </div>
                </div>
                <a
                  href="mailto:anandtraders0007@gmail.com"
                  className="flexCenter button"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.221885263379!2d77.70233747582326!3d28.980795275476407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64f9862806db%3A0x6cab6f9a65380619!2sAnand%20Enterprises!5e0!3m2!1sen!2sin!4v1723120453016!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.webp" alt="contact/jpeg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
