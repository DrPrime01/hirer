import React from "react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Loading from "./Loading";

function Professionals() {
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfResults = 12;
  const maxNumberOfPages = 10;
  const minNumberOfPages = 1;

  const [professionalDetails, setProfessionalDetails] = useState([]);

  const [loadings, setLoadings] = useState(true);
  useEffect(() => {
    fetch(
      `https://randomuser.me/api/?page=${currentPage}&results=${numberOfResults}&seed=abc`
    )
      .then((res) => res.json())
      .then((data) => {
        const results = data.results;
        setProfessionalDetails(results);
        setTimeout(() => {
          setLoadings(false);
        }, 1500);
      });
  }, []);

  const professionalCards = professionalDetails.map((profCard) => {
    return (
      <div
        className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4"
        key={profCard.login.uuid}
      >
        <a href="#" className="flex justify-center items-center mt-3">
          <img
            className="rounded-full"
            src={profCard.picture.large}
            alt="professionals"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              {profCard.name.first + " " + profCard.name.last}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Email</span>: {profCard.email}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Location</span>:
            {profCard.location.city + ", " + profCard.location.country}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Bio</span>: I am a content writer and
            digital marketing expert with over 10 years of experience in
            startups. I specialize in UX design, strategy, and development.
          </p>
          <a
            href="#"
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
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Navbar />
      <div id="professional-details">
        {loadings ? (
          <Loading type="spin" color="#be185d" />
        ) : (
          <div>
            <h1 className="px-6 mt-6 mb-4 text-5xl font-bold xs:text-5xl">
              Our Professionals
            </h1>
            <div className="grid grid-cols-3 p-6 xs:grid-cols-1">
              {professionalCards}
            </div>
          </div>
        )}
      </div>
      <div id="pagination" className="px-4">
        <Pagination
          minNumberOfPages={minNumberOfPages}
          maxNumberOfPages={maxNumberOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Professionals;
