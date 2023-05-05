/* eslint-disable react/prop-types */

const UserCards = ({ data }) => {
    console.log("go", data);
    const filterConfirmed = data.filter((item) => item.gender === "male");
    console.log(filterConfirmed);
  
    return (
      <div>
        {" "}
        <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <div>
           
              <span className="block text-2xl font-bold text-gray-500">{data.length}</span>
              <span className="block text-gray-800">Total Users</span>
              
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <div>
            <span className="block text-2xl font-bold text-gray-500">{filterConfirmed.length}</span>
              <span className="block text-gray-800">Male</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <div>
            <span className="block text-2xl font-bold text-gray-500">{data.length - filterConfirmed.length}</span>
              <span className="block text-gray-800">Female</span>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default UserCards;
  