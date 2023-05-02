import LoanTable from "../../components/Tables/LoanTable";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import useApi from "../../hooks/useApi";

const Home = () => {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [collateral, setColleteral] = useState("");

  const [data] = useApi(
    "https://thriftandloan.onrender.com/api/member/userprofile"
  );
console.log("hmm",data);
  const user = useAuthContext();
  const token = user?.user?.token;
 
  async function handleSubmit(e) {
    e.preventDefault();

    await axios
      .post(
        `https://thriftandloan.onrender.com/api/loan/apply/`,
        { amount: amount, term: term, collateral: collateral },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((result) => {
        console.log("Post request, results", result);
      })
      .catch((error) => {
        console.log("Errors", error);
      });
  }

  return (
    <>
      <main className="bg-white  p-5 lg:p-10">
        <header>
          <h1 className="text-4xl font-semibold text-[#1E4CA1]">
           Apply for loan
          </h1>
        </header>
       {data?.has_loan?<h1 className="text-black text-xl pt-5">Sorry you have an unpaid load</h1> :<form onSubmit={handleSubmit}>
          <div className="w-full  rounded-lg mx-auto  flex overflow-hidden  rounded-b-none ">
            <div className=" md:w-1/2 mt-10 md:mt-0">
              <hr className="border-gray-200" />
              <div className="py-4 ">
                <label htmlFor="amount" className="text-sm text-black">
                  Loan Amount
                </label>
                <input
                  placeholder="Amount in Naira"
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-lg placeholder:text-black  py-2 text-black transition focus:outline-none"
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <hr className="border-gray-200" />
              <div className="py-4 ">
                <label htmlFor="term" className="text-sm text-black">
                  Duration in days
                </label>
                <input
                  placeholder="Loan Duration"
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-lg placeholder:text-black  py-2 text-black transition focus:outline-none"
                  type="number"
                  name="term"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
              </div>
              <div className="py-4 ">
                <label htmlFor="collateral" className="text-sm text-black">
                  Collateral
                </label>
                <input
                  placeholder="e.g. car, house,..."
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-lg placeholder:text-black  py-2 text-black transition focus:outline-none"
                  type="text"
                  name="collateral"
                  value={collateral}
                  onChange={(e) => setColleteral(e.target.value)}
                />
              </div>

              <div className=" pt-2 md:pt-5  rounded-b-lg border-t border-gray-200 flex justify-end">
                <button
                  className={
                    "bg-gradient-to-r from-[#6DBF58] to-[#1E4CA0] hover:bg-gradient-to-l hover:from-[#6DBF58] hover:to-[#1E4CA0] transition-colors ease-in-out rounded-md text-white px-4 py-2 flex justify-center"
                  }
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>}
        <div className="pt-10">
          <LoanTable />
        </div>
      </main>
    </>
  );
};

export default Home;
