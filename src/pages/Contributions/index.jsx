
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import ContributionTable from "../../components/Tables/ContributionTable";


const Contributions = () => {
  const [amount, setAmount] = useState("");
  const [transId, setTransId] = useState("");
  const [paymentType, setPaymentType] = useState("");
 


  const user = useAuthContext();
  const token = user?.user?.token;


  async function handleSubmit(e) {
  
    e.preventDefault();

    await axios
      .post(
        `https://thriftandloan.onrender.com/api/transaction/deposit`,
        { amount: amount, transactionCode: transId, paymentType:paymentType },
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
           Start Contributing
          </h1>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="w-full  rounded-lg mx-auto  flex overflow-hidden  rounded-b-none ">
            <div className=" md:w-1/2 mt-10 md:mt-0">
              <hr className="border-gray-200" />
              <div className="py-4 ">
                <label htmlFor="amount" className="text-sm text-black">
                 Amount
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
                  Transaction ID
                </label>
                <input
                  placeholder="Loan Duration"
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-lg placeholder:text-black  py-2 text-black transition focus:outline-none"
                  type="number"
                  name="term"
                  value={transId}
                  onChange={(e) => setTransId(e.target.value)}
                />
              </div>
              <div className="py-4 ">
              <div className="flex flex-col ">
                <label
                  htmlFor="savings"
                  className="text-black text-sm font-semibold pb-2"
                >
                  Payment Type:
                </label>
                <select
                  name="savings"
                  id=""
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-md placeholder:text-black  py-2 text-black transition focus:outline-none"
                  onChange={(e) => setPaymentType(e.target.value)}
                  required
                >
                  <option value="">Select your Type</option>
                  <option value="Transfer">Transfer</option>
                  <option value="Deposit">Deposit</option>
                 
                </select>
              </div>
              </div>

              <div className=" pt-2 md:pt-5  rounded-b-lg border-t border-gray-200 flex justify-end">
                <button  className={ "bg-gradient-to-r from-[#6DBF58] to-[#1E4CA0] hover:bg-gradient-to-l hover:from-[#6DBF58] hover:to-[#1E4CA0] transition-colors ease-in-out rounded-md text-white px-4 py-2 flex justify-center"}>
                Submit
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="pt-10">
          <ContributionTable />
        </div>
      </main>
    </>
  );
};

export default Contributions;
