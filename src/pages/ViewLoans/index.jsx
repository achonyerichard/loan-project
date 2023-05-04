import { useContext } from "react";
import { ModalsContext } from "../../contexts/ModalsContext";
import LoanModal from "../../components/Modals/LoanModal";
import AllLoanTable from "../../components/Tables/AllLoanTable";


const ViewLoans = () => {
    const { loanModal,setLoanModal} = useContext(ModalsContext);
   
  return (
    <>
      <main className="bg-white  p-5 lg:p-10">
        {/* <header>
          <h1 className="text-4xl font-semibold text-[#1E4CA1]">
            Welcome,
          </h1>
        </header> */}
     <LoanModal loanModal={loanModal}  setLoanModal={setLoanModal}/>
        <div className="pt-10">
          <AllLoanTable setLoanModal={setLoanModal}/>
        </div>
      </main>
    </>
  );
}

export default ViewLoans