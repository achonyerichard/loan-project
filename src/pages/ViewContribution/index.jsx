import { useContext } from "react";
import ContributionModal from "../../components/Modals/ContributionModal";
import AllContributionTable from "../../components/Tables/AllContributionTable";
import { ModalsContext } from "../../contexts/ModalsContext";
import ContributionCards from "../../components/Cards/ContributionCards";
import useApi from "../../hooks/useApi";

const ViewContributions = () => {
  const {
    contributionModal,
    setContributionModal,
    contributionId,
    setContributionId,
  } = useContext(ModalsContext);
  console.log("mod", contributionModal);
  const [data,] = useApi(
    "https://thriftandloan.onrender.com/api/transaction/alltransaction"
  );


  return (
    <>
      <main className="bg-white  p-5 lg:p-10">
        {/* <header>
          <h1 className="text-4xl font-semibold text-[#1E4CA1]">
            Welcome,
          </h1>
        </header> */}
        <div>
          <ContributionCards data={data}/>
        </div>
        <ContributionModal
          contributionModal={contributionModal}
          setContributionModal={setContributionModal}
          id={contributionId}
        />
        <div className="pt-10">
          <AllContributionTable
            setContributionModal={setContributionModal}
            setContributionId={setContributionId}
            data={data}
          />
        </div>
      </main>
    </>
  );
};

export default ViewContributions;
