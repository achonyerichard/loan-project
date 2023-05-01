import useApi from "../../hooks/useApi";

const ContributionTable = () => {
  const [data, isLoading, error] = useApi(
    "https://thriftandloan.onrender.com/api/transaction/mycontribution"
  );
  console.log("contru", data, isLoading, error);
  return (
    <>
      {" "}
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <header className="py-4 text-center">
          <h1 className="text-2xl font-semibold text-[#1E4CA1]">
            Transactions
          </h1>
        </header>
        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                   ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                   Date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Trans. Id
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
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
                      {item?.amount}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {new Date(item?.date).toLocaleString()}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {item?.payment_type}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {item?.transaction_code}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                      className={
                        item?.status === "approved"
                          ? "relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                          : "relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight"
                      }
                    >
                      <span
                        aria-hidden
                        className={
                          item?.status === "approved"
                            ? "absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            : "absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                        }
                      ></span>
                      <span className="relative capitalize">
                        {item?.status}
                      </span>
                    </span>
                  </td>
                  {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                   <button
                     type="button"
                     className="inline-block text-gray-500 hover:text-gray-700"
                   >
                     <svg
                       className="inline-block h-6 w-6 fill-current"
                       viewBox="0 0 24 24"
                     >
                       <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                     </svg>
                   </button>
                 </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContributionTable;
