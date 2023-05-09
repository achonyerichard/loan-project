/* eslint-disable no-unused-vars */

import { useAuthContext } from "../../hooks/useAuthContext";

import useApi from "../../hooks/useApi";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { useState } from "react";

const Dividend = () => {
  const [data] = useApi(
    "https://thriftandloan.onrender.com/api/dividend/alldividend"
  );
  console.log("dividend", data);

  const user = useAuthContext();
  const token = user?.user?.token;
  console.log(token);

  const options = {
    chart: {
      type: "pie",
      height: 350,
    },
    labels: data.map((item) => `${item?.firstname}  ${item?.lastname}`),
    style: {
      fontSize: "12px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: 400,
      colors: undefined,
    },
    colors: data.map((item, index) => {
      const colorOptions = [];
      for (let i = 0; i < data?.length; i++) {
        const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        colorOptions.push(color);
      }
      const randomColor =
        colorOptions[Math.floor(Math.random() * colorOptions.length)];
      return randomColor;
    }),
    title: {
      text: "",
    },
  };
  const series = data.map((item) => item?.amount);

  return (
    <>
      <main className="bg-white  p-5 lg:p-10">
        <header>
          <h1 className="text-3xl font-semibold text-[#1E4CA1] pt-5">
            Dividend
          </h1>
          <div className="">
            <ReactApexChart
              options={options}
              series={series}
              type="pie"
              height={350}
            />
          </div>
        </header>
      </main>
    </>
  );
};

export default Dividend;
