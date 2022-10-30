import React from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UserNotFound from "./UserNotFound";

function ProfessionalInfo() {
  const location = useLocation();
  const state = location.state;
  const { professionalId } = useParams();
  const [ui, setUI] = useState();
  useEffect(() => {
    if (state) {
      setUI(
          <div className="grid grid-rows-2 gap-10 m-4 p-6">
            <div
              id="professional-info"
              className="grid grid-cols-2 xs:grid-cols-1 gap-5"
            >
              <div id="prof-image" className="">
                <img
                  src={state.picture.large}
                  className="object-fill w-1/2 max-w-full h-auto"
                />
              </div>
              <div id="prof-details" className="">
                <p className="font-bold text-4xl mb-5 text-primary-700">
                  Professional's Profile
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold">Name</span>:{" "}
                  {`${state.name.title} ${state.name.first} ${state.name.last}`}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold">Firstname</span>:{" "}
                  {state.name.first}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold">Lastname</span>: {state.name.last}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold">Email</span>: {state.email}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold">Gender</span>: {state.gender}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold">Age</span>: {state.dob.age}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold">Location</span>:{" "}
                  {state.location.city + ", " + state.location.country}
                </p>
              </div>
            </div>
            <div id="professional-bio">
            <p className="font-bold text-6xl mb-5 text-primary-700">Bio</p>
              <p className="mb-20 font-normal text-gray-700 dark:text-gray-400">
                I am a content writer and digital marketing expert with over 10
                years of experience in startups. I specialize in UX design,
                strategy, and development. I'm an enthusiastic data analyst and
                researcher with a keen interest in Artificial Intelligence,
                Machine Learning, and Natural Language Processing.
              </p>
              <div
                id="buttons"
                className="flex xs:justify-between justify-center items-center"
              >
                <Link
                  to="/professionals"
                  className="inline-flex items-center py-2 xs:px-3 px-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Go Back
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center py-2 xs:px-3 px-6 ml-6 xs:ml-0 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Go Home
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="inline-flex items-center py-2 xs:px-3 px-6 xs:ml-0 text-sm ml-auto font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Hire
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
      );
    } else {
      setUI(<UserNotFound />);
    }
  }, []);

  return (
    <>
      {ui}
    </>
  )
}

export default ProfessionalInfo;
