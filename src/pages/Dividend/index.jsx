/* eslint-disable no-unused-vars */



import useApi from "../../hooks/useApi";

import DividendTable from "../../components/Tables/DividendTable";

const Dividend = () => {
  const [data] = useApi(
    "https://thriftandloan.onrender.com/api/dividend/alldividend"
  );
  console.log("dividend", data);



  
  return (
    <>
      <main className="bg-white  p-5 lg:p-10">
        <DividendTable data={data}/>
      </main>
    </>
  );
};

export default Dividend;
