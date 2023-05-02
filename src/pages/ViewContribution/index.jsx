import AllContributionTable from "../../components/Tables/AllContributionTable";


const ViewContributions = () => {
  

  return (
    <>
      <main className="bg-white  p-5 lg:p-10">
        {/* <header>
          <h1 className="text-4xl font-semibold text-[#1E4CA1]">
            Welcome,
          </h1>
        </header> */}
      
        <div className="pt-10">
          <AllContributionTable />
        </div>
      </main>
    </>
  );
};

export default ViewContributions;
