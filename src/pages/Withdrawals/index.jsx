import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";

import UserWithdrawalCards from "../../components/Cards/UserWithdrawalCards";
import WithdrawalTable from "../../components/Tables/WithdrawalTable";
import useApi from "../../hooks/useApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Withdrawals = () => {
  const [data] = useApi(
    "https://thriftandloan.onrender.com/api/member/userprofile"
  );
  console.log("hmm", data);
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = useAuthContext();
  const token = user?.user?.token;
 

  async function handleSubmit(e) {
   
    
      setLoading(true)
      e.preventDefault();
      try{
        const response = await axios
           .post(
             `https://thriftandloan.onrender.com/api/transaction/withdraw`,
             { amount: amount, beneficiaryAccount: account },
             {
               headers: {
                 "x-auth-token": token,
               },
             }
           )
         const res = response.data
           console.log(res);
           setLoading(false)
           setSuccess("Submitted Successfully")
           setAmount("")
           setAccount("")
         }
           catch(error) {
             const res = error.response;
           setLoading(false);
           setError(res.data);
           setAmount("")
           setAccount("")
           }
           finally{
             setLoading(false)
           }
    
   

  }

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (success) {
      toast.success(success, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [error, success]);
  return (
    <>
      <main className="bg-white  p-5 lg:p-10">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <div>
          <UserWithdrawalCards />
        </div>
        <header className="py-2">
          <h1 className="text-3xl font-semibold text-[#1E4CA1] pt-5">
            Withdraw
          </h1>
          <p className="text-lg font-medium text-black">{`Your total available amount for withdrawal is : ${data?.contri_amount}`}</p>
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
            required
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
                  Beneficary Account
                </label>
                <input
                required
                  placeholder="Account Number"
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-lg placeholder:text-black  py-2 text-black transition focus:outline-none"
                  type="number"
                  name="term"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                />
              </div>

              <div className=" pt-2 md:pt-5  rounded-b-lg border-t border-gray-200 flex justify-end">
                <button
                disabled={loading}
                  className={
                    "bg-gradient-to-r from-[#6DBF58] to-[#1E4CA0] hover:bg-gradient-to-l hover:from-[#6DBF58] hover:to-[#1E4CA0] transition-colors ease-in-out rounded-md text-white px-4 py-2 flex justify-center"
                  }
                >
                 {loading ?"Loading": "Submit"}
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="pt-10">
          <WithdrawalTable />
        </div>
      </main>
    </>
  );
};

export default Withdrawals;
