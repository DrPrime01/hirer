import React from "react";
import about from "../../assets/Images/about.png";
function About() {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-20 xs:gap-10 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-primary-800 dark:text-primary-100">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl mb-3">
            Hey!
          </h2>
          <div className="dark:text-primary-400">Want to know us?</div>
        </div>
        <img
          src={about}
          alt="contact"
          className="max-w-full h-auto border mt-20 xs:mt-0 border-primary-500 border-dashed xs:border-none"
        />
      </div>
      <div className="mt-40 xs:mt-0">
        <div className="text-6xl font-bold leading-tight">
          <p>I'm Dr Prime, also known as the Tech Evangelist.</p> 
          <p>I authored this project.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
