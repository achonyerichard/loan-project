import { useContext } from "react";
import { ModalsContext } from "../../contexts/ModalsContext";


import UsersTable from "../../components/Tables/UsersTable";
import UsersModal from "../../components/Modals/UsersModal";


const ViewUsers = () => {
    const { usersModal,setUsersModal} = useContext(ModalsContext);
   
  return (
    <>
      <main className="bg-white  p-5 lg:p-10">
        {/* <header>
          <h1 className="text-4xl font-semibold text-[#1E4CA1]">
            Welcome,
          </h1>
        </header> */}
     <UsersModal loanModal={usersModal}  setUsersModal={setUsersModal}/>
        <div className="pt-10">
          <UsersTable setUsersModal={setUsersModal}/>
        </div>
      </main>
    </>
  );
}

export default ViewUsers