
import { useContext } from "react";
import ContributionModal from "../../components/Modals/ContributionModal";
import AllContributionTable from "../../components/Tables/AllContributionTable";
import { ModalsContext } from "../../contexts/ModalsContext";


const ViewContributions = () => {
  
    const { contributionModal,setContributionModal} = useContext(ModalsContext);
    console.log("mod",contributionModal);
  return (
    <>
      <main className="bg-white  p-5 lg:p-10">
        {/* <header>
          <h1 className="text-4xl font-semibold text-[#1E4CA1]">
            Welcome,
          </h1>
        </header> */}
     <ContributionModal contributionModal={contributionModal}  setContributionModal={setContributionModal}/>
        <div className="pt-10">
          <AllContributionTable setContributionModal={setContributionModal}/>
        </div>
      </main>
    </>
  );
};

export default ViewContributions;
