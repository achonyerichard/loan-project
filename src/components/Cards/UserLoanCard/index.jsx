/* eslint-disable react/prop-types */

import useApi from "../../../hooks/useApi";

const UserLoanCards = () => {
  const [data, isLoading, error] = useApi(
    "https://thriftandloan.onrender.com/api/loan/myloan"
  );
  console.log("dattt", data, isLoading, error);
  console.log("go", data);
  const filterPaid = data.filter((item) =>  item.status.toLowerCase() ==="paid_off");
  console.log("paid",filterPaid);
  const filterConfirmed = data.filter((item) => item.status.toLowerCase() === "active" || item.status.toLowerCase() ==="paid_off");
  console.log(filterConfirmed);
  const totalSum = filterConfirmed.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);
  console.log(totalSum);
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
            <span className="block text-2xl font-bold text-gray-500">
              {totalSum}
            </span>
            <span className="block text-gray-800">Total Loans</span>
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
            <span className="block text-2xl font-bold text-gray-500">
              {filterConfirmed.length}
            </span>
            <span className="block text-gray-800">Confirmed Loans</span>
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
            <span className="block text-2xl font-bold text-gray-500">
              {filterPaid.length}
            </span>
            <span className="block text-gray-800">Paid Loans</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserLoanCards;
