import React from "react";
import contact from "../../assets/Images/contact.png";
function Contact() {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-20 xs:gap-10 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-primary-800 dark:text-primary-100">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl mb-3">
            Let's talk!
          </h2>
          <div className="dark:text-primary-400">
            Have any question? Let's hear you out
          </div>
        </div>
        <img src={contact} alt="contact" className="max-w-full h-auto border mt-20 xs:mt-0 border-primary-500 border-dashed xs:border-none" />
      </div>
      <form
        novalidate=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="mt-40 xs:mt-0">
          <label for="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded dark:bg-primary-800 border border-primary-600"
          />
        </div>
        <div>
          <label for="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded dark:bg-primary-800 border border-primary-600"
          />
        </div>
        <div>
          <label for="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded dark:bg-primary-800 border border-primary-600"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 bg-primary-600 dark:text-primary-900 border text-primary-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
