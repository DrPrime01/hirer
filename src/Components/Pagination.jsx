import React from "react";
import { useReducer } from "react";

function Pagination({ maxNumberOfPages, minNumberOfPages, currentPage, setCurrentPage }) {
    let activeBtn = "";
    let activeBtnNumber = "";
    //function to get the number of a clicked btn and set the value to activeBtnNumber's value
    const paginationBtns = document.querySelectorAll(".numPaginationBtn");
    paginationBtns.forEach(paginationBtn => {
        paginationBtn.addEventListener("click", (e) => {
            e.preventDefault();
            activeBtn = e.target;
            activeBtnNumber = parseInt(activeBtn.textContent);
        })
    })
    const initialState = {
        minPageBtn: 1,
        midPageBtn: 2,
        maxPageBtn: 3,
        disableBtn: false
      };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "next": {
        if (currentPage < maxNumberOfPages) {
            setCurrentPage(currentPage + 1);
            return {
                ...state,
                minPageBtn: state.minPageBtn + 1,
                maxPageBtn: state.maxPageBtn + 1,
                midPageBtn: state.midPageBtn + 1,
              };
        } else {
            return {
                ...state,
                disableBtn: true
            }
        }
      }
      case "prev": {
       if (currentPage > minNumberOfPages) {
        setCurrentPage(currentPage - 1);
        return {
            ...state,
            minPageBtn: state.minPageBtn - 1,
            maxPageBtn: state.maxPageBtn - 1,
            midPageBtn: state.midPageBtn - 1,
          };
       } else {
        setCurrentPage(1)
        return {
            ...state,
            disableBtn: true
        }
       }
      }
      default: {
        return state;
      }
    }
  }

  function handleNext(e) {
    e.preventDefault();
    dispatch({ type: "next" });
    
    console.log(currentPage)
  }
  function handlePrev(e) {
    e.preventDefault();
    dispatch({ type: "prev" });
    
    console.log(currentPage)
  }
  function handleClick(e) {
    e.preventDefault()
    setCurrentPage(activeBtnNumber)
    console.log(currentPage)
  }
  return (
    <div id="pager" className="flex flex-row justify-between max-w-xs w-full px-6">
      <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 paginationBtn" id="prev" onClick={handlePrev} aria-disabled={state.disableBtn}>
        Prev
      </button>
      <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 numPaginationBtn" id="minbtn" onClick={handleClick}>
        {state.minPageBtn} 
      </button> 
      <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 numPaginationBtn" id="midbtn" onClick={handleClick}>
        {state.midPageBtn} 
      </button> 
      <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 numPaginationBtn" id="maxbtn" onClick={handleClick}>
        {state.maxPageBtn}
      </button>
      <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 paginationBtn" id="next" onClick={handleNext} aria-disabled={state.disableBtn}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
