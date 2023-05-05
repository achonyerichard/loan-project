import { useContext } from "react";
import { ModalsContext } from "../../contexts/ModalsContext";
import LoanModal from "../../components/Modals/LoanModal";
import AllLoanTable from "../../components/Tables/AllLoanTable";

import useApi from "../../hooks/useApi";
import LoanCards from "../../components/Cards/LoanCard";

const ViewLoans = () => {
  const [data] = useApi(
    "https://thriftandloan.onrender.com/api/loan/allloan"
  );
  console.log("loan", data);

  const { loanModal, setLoanModal, setLoanId, loanId } =
    useContext(ModalsContext);

  return (
    <>
      <main className="bg-white  p-5 lg:p-10">
        {/* <header>
          <h1 className="text-4xl font-semibold text-[#1E4CA1]">
            Welcome,
          </h1>
        </header> */}
        <div>
          <LoanCards data={data} />
        </div>
        <LoanModal
          loanModal={loanModal}
          setLoanModal={setLoanModal}
          id={loanId}
        />
        <div className="pt-10">
          <AllLoanTable
            setLoanModal={setLoanModal}
            data={data}
            setLoanId={setLoanId}
          />
        </div>
      </main>
    </>
  );
};

export default ViewLoans;
