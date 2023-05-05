/* eslint-disable react/prop-types */
import useApi from "../../hooks/useApi";

const LoanTable = ({ setUserLoanId, setUserLoanModal }) => {
  const [data, isLoading, error] = useApi(
    "https://thriftandloan.onrender.com/api/loan/myloan"
  );
  console.log("dattt", data, isLoading, error);
  const modalClick = (id) => {
    setUserLoanId(id);
    setUserLoanModal(true);
  };
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
                  Transaction ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Balance
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
                      {new Date(item?.end_date).toLocaleString()}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {item?.repayment_amount}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                      className={
                        item?.status === "active"
                          ? "relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                          : "relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight"
                      }
                    >
                      <span
                        aria-hidden
                        className={
                          item?.status === "active"
                            ? "absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            : "absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                        }
                      ></span>
                      <span className="relative capitalize">
                        {item?.status}
                      </span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button
                      onClick={() => modalClick(item?.id)}
                      className={
                        "relative inline-block px-3 py-1 font-semibold text-white leading-tight"
                      }
                    >
                      <span
                        aria-hidden
                        className={
                          "absolute inset-0 bg-green-900  rounded-full"
                        }
                      ></span>
                      <span className="relative capitalize">Pay Loan</span>
                    </button>
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

export default LoanTable;
