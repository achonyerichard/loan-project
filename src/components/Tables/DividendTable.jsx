/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const DividendTable = ({  data}) => {
   
    return (
      <>
        {" "}
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <header className="py-4 text-center">
            <h1 className="text-2xl font-semibold text-[#1E4CA1]">User Dividends</h1>
          </header>
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Amount
                  </th>
               
                </tr>
              </thead>
              <tbody>
             
                {data?.map((item, index) => (
                  <tr key={item?.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="ml-3">
                          <p className="text-gray-600 whitespace-no-wrap">
                            {index + 1}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {`${item?.firstname} ${item?.lastname}`}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item?.amount}
                      </p>
                    </td>
                  
                    
                   
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };
  
  export default DividendTable;
  