import React, { useState } from "react";
import Navbar from "../Navbar.js/Navbar";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Footer from "../Footer/Footer";

function Faq() {
  const [clicked, setclicked] = useState(false);
  const [index1, setindex] = useState(null);
  const [faq_cat_index, setfaq_cat_index] = useState(0);
  const faq_cat = ["All", "Price", "Booking", "Location"];
  const ques = [
    {
      ques: "Question 1",
      ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    },
    {
      ques: "Question 2",
      ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    },
    {
      ques: "Question 3",
      ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    },
    {
      ques: "Question 4",
      ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    },
    {
      ques: "Question 5",
      ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    },
    {
        ques: "Question 6",
        ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
      },
  ];
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="w-10/12 min-h-[90vh] mr-auto ml-auto mb-5">
        <div className="p-5 pl-0">
          <Link to={"/"}>Home</Link>{" "}
          <ArrowForwardIosIcon
            className="mr-4 ml-4"
            style={{ fontSize: "10" }}
          />
          <Link to={""}>Faq</Link>
        </div>
        <hr />
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <div className="w-11/12 lg:w-3/4 pr-5 mr-auto ml-auto">
            <h4 className="mt-4 mb-5"> Frequently asked questions. </h4>
            {ques.map((item, index) => {
              return (
                <div
                  key={index}
                  className={clicked && index1 === index ? "auto" : "h-14"}
                >
                  <div className="flex h-full item-center">
                    <button
                      className="text-center flex self-center"
                      onClick={() => {
                        setclicked(true);
                        setindex(index);
                      }}
                    >
                      <span className=" flex justify-center items-center pr-1 pl-1 w-fit h-6 border rounded-full bg-[#0074d9]">
                        {" "}
                        {clicked && index1 === index ? (
                          <RemoveIcon />
                        ) : (
                          <AddIcon />
                        )}{" "}
                      </span>
                      <span className="text-[#0074d9] font-semibold ml-3 -mt-0.5">
                        {item.ques}
                      </span>{" "}
                    </button>
                  </div>
                  {clicked && index1 === index && <span>{item.ans}</span>}
                  <hr />
                </div>
              );
            })}
          </div>
          <div className="w-11/12 lg:w-1/4 lg:ml-5 mr-auto ml-auto">
            <h4 className="mt-4 mb-3">Faq Category</h4>
            <div className="flex flex-col">
              {faq_cat.map((item, index) => {
                return (
                  <button
                    onClick={() => {
                      setfaq_cat_index(index);
                    }}
                    key={index}
                    className={
                      faq_cat_index === index
                        ? "text-justify pl-3 h-10 border-r-[3px] border-[#0074d9] bg-[#e8f2fc]"
                        : "text-justify pl-3 h-10"
                    }
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
     <div>
     <Footer />
     </div>
    </>
  );
}

export default Faq;
