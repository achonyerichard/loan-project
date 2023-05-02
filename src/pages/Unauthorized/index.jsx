import { Link } from "react-router-dom";

const UnAuthorized = () => {
  

  return (
    <>
      <main className="bg-white  p-5 lg:p-10">
        <header>
          <h1 className="text-4xl font-semibold text-[#1E4CA1]">
            You arent authorized to view this route
          </h1>
          <p className="text-lg text-black">Back to <span className="text-blue-600"><Link to="/profile">Home</Link></span></p>
        </header>
      
       
      </main>
    </>
  );
};

export default UnAuthorized;
