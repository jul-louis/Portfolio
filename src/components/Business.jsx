import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Waves from "./Waves";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import Video from "./Video";

function Business() {
  return (
    <div className="p-4">
      {/* <Video /> */}
      <section
        className="z-100 text-black fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="font-rm text-light text-4xl pb-4">Kraken Ltd.</h1>
        <h2 className="font-rm text-light text-3xl pb-4">
          To be launched soon
        </h2>
        {/* <h2 className="font-rm text-light text-2xl pb-4">
          Kraken Ltd. is a dynamic and multifaceted organization that operates
          across diverse sectors, offering a comprehensive range of services
          covering software development and creative solutions. With a strong
          emphasis on innovation and quality, we strive to deliver cutting-edge
          technology solutions tailored to meet the unique needs of our clients.
          Our expertise in software development enables us to design, develop,
          and implement robust software applications, utilizing the latest
          industry standards and best practices. Additionally, our creative
          services division combines artistic vision with strategic thinking to
          deliver compelling and engaging designs, branding, and marketing
          collateral. At Kraken Ltd., we are dedicated to providing exceptional
          solutions that empower businesses to thrive in the modern digital
          landscape.
        </h2>
        <h2 className="font-rm text-light text-2xl">
          Kraken Ltd. is a dynamic and multifaceted organization that operates
          across diverse sectors, offering a comprehensive range of services
          covering software development and creative solutions. With a strong
          emphasis on innovation and quality, we strive to deliver cutting-edge
          technology solutions tailored to meet the unique needs of our clients.
          Our expertise in software development enables us to design, develop,
          and implement robust software applications, utilizing the latest
          industry standards and best practices. Additionally, our creative
          services division combines artistic vision with strategic thinking to
          deliver compelling and engaging designs, branding, and marketing
          collateral. At Kraken Ltd., we are dedicated to providing exceptional
          solutions that empower businesses to thrive in the modern digital
          landscape.
        </h2> */}
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default Business;
