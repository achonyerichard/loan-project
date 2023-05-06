import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import ContributionTable from "../../components/Tables/ContributionTable";
import useApi from "../../hooks/useApi";
import UserContributionCards from "../../components/Cards/UserContributionCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contributions = () => {
  const [data] = useApi(
    "https://thriftandloan.onrender.com/api/transaction/mycontribution"
  );
  console.log("contru", data);

  const [amount, setAmount] = useState("");
  const [transId, setTransId] = useState("");
  const [paymentType, setPaymentType] = useState("");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = useAuthContext();
  const token = user?.user?.token;

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    await axios
      .post(
        `https://thriftandloan.onrender.com/api/transaction/deposit`,
        { amount: amount, transactionCode: transId, paymentType: paymentType },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((result) => {
        console.log("Post request, results", result);
        window.location.reload();
        setLoading(false)
        setSuccess(result.data);
        setAmount("")
        setPaymentType("")
        setTransId("")
      })
      .catch((error) => {
        console.log("Errors", error);
        setError(error.message);
        setLoading(false)
        setAmount("")
        setPaymentType("")
        setTransId("")
      });
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
          <UserContributionCards data={data} />
        </div>
        <header>
          <h1 className="text-3xl font-semibold text-[#1E4CA1] pt-5">
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
                  placeholder="Transacation ID"
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
                <button
                disabled={loading}
                  className={
                    "bg-gradient-to-r from-[#6DBF58] to-[#1E4CA0] hover:bg-gradient-to-l hover:from-[#6DBF58] hover:to-[#1E4CA0] transition-colors ease-in-out rounded-md text-white px-4 py-2 flex justify-center"
                  }
                >
                 {loading?"Loading...": "Submit"}
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="pt-10">
          <ContributionTable data={data} />
        </div>
      </main>
    </>
  );
};

export default Contributions;
