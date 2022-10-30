import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Body() {
  const offerSectionContainerCount = [0, 1, 2];

  const offerSection = offerSectionContainerCount.map((offerSectionCard) => {
    return (
      <a
        key={offerSectionCard}
        aria-disabled="true"
        href="#"
        className="block p-6 max-w-sm m-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>
    );
  });

  const [professionalDetails, setProfessionalDetails] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3&seed=abc")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results;
        setProfessionalDetails(results);
      });
  }, []);
  const professionalSection = professionalDetails.map((professionals) => {
    return (
      <div
      className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4"
        key={professionals.login.uuid}
      >
        <a href="#" className="flex justify-center items-center mt-3">
          <img
            className="rounded-full"
            src={professionals.picture.large}
            alt="professionals"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              {professionals.name.first + " " + professionals.name.last}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Email</span>: {professionals.email}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Location</span>:
            {professionals.location.city +
              ", " +
              professionals.location.country}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Bio</span>: I am a content writer and digital marketing expert with over 10
            years of experience in startups. I specialize in UX design,
            strategy, and development.
          </p>
          <Link
            to={`/professionals/${professionals.login.uuid}`} state={professionals}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            View details
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col p-6">
      <div id="offers">
        <h2 className="px-6 text-center mb-2 text-4xl font-bold xs:text-left">
          Our Offers
        </h2>
        <div className="flex flex-row xs:flex-col justify-evenly" id="offer">
          {offerSection}
        </div>
      </div>
      <div className="my-14 xs:my-10" id="professionals">
        <h2 className="px-6 text-center my-2 text-4xl font-bold xs:text-left">
          Meet our Highly Ranked Professionals
        </h2>
        <div
          className="flex flex-row xs:flex-col justify-evenly"
          id="meet-profs"
        >
          {professionalSection}
        </div>
        <p className="text-right pr-10 mt-4">
          <Link 
            to="/professionals"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            See more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </p>
      </div>
      <div
        className="flex flex-row xs:flex-col justify-evenly"
        id="testimonial"
      >
        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-gray-900 dark:text-white">
                  "Flowbite is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Micheal Gough
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Body;
