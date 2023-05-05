import { useContext } from "react";
import { ModalsContext } from "../../contexts/ModalsContext";


import UsersTable from "../../components/Tables/UsersTable";
import UsersModal from "../../components/Modals/UsersModal";
import useApi from "../../hooks/useApi";
import UserCards from "../../components/Cards/UserCards";


const ViewUsers = () => {
  const [data] = useApi(
    "https://thriftandloan.onrender.com/api/member/alluser"
  );
  console.log("users", data, );

    const { usersModal,setUsersModal,usersId,setUsersId} = useContext(ModalsContext);
   
  return (
    <>
      <main className="bg-white  p-5 lg:p-10">
        {/* <header>
          <h1 className="text-4xl font-semibold text-[#1E4CA1]">
            Welcome,
          </h1>
        </header> */}
        <div>
          <UserCards data={data}/>
        </div>
     <UsersModal usersModal={usersModal}  setUsersModal={setUsersModal} id={usersId}/>
        <div className="pt-10">
          <UsersTable setUsersModal={setUsersModal} data={data} setUsersId={setUsersId}/>
        </div>
      </main>
    </>
  );
}

export default ViewUsers