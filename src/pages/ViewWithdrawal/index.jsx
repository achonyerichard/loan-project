import { useContext } from "react";

import { ModalsContext } from "../../contexts/ModalsContext";

import useApi from "../../hooks/useApi";
import WithdrawalCards from "../../components/Cards/WithdrawalCards";
import WithdrawalModal from "../../components/Modals/WithdrawalModal";
import AllWithdrawalTable from "../../components/Tables/AllWithdrawalTable";

const ViewWithdrawal = () => {
  const {
    withdrawalModal,
    setWithdrawalModal,
    withdrawalId,
    setWithdrawalId,
  } = useContext(ModalsContext);
  console.log("mod", withdrawalModal);
  const [data,] = useApi(
    "https://thriftandloan.onrender.com/api/transaction/allwithdraw"
  );
console.log("allwith",data);

  return (
    <>
      <main className="bg-white  p-5 lg:p-10">
        {/* <header>
          <h1 className="text-4xl font-semibold text-[#1E4CA1]">
            Welcome,
          </h1>
        </header> */}
        <div>
          <WithdrawalCards data={data}/>
        </div>
        <WithdrawalModal
          withdrawalModal={withdrawalModal}
          setWithdrawalModal={setWithdrawalModal}
          id={withdrawalId}
        />
        <div className="pt-10">
          <AllWithdrawalTable
            setWithdrawalModal={setWithdrawalModal}
            setWithdrawalId={setWithdrawalId}
            data={data}
          />
        </div>
      </main>
    </>
  );
};

export default ViewWithdrawal;
