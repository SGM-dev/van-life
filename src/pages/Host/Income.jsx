import Charts from "../../assets/charts.png";
function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];

  return (
    <main className=" justify-center py-6 font-inter">
      <h1 className=" text-4xl font-bold text-black-910">Income</h1>
      <p className=" mt-8 text-base font-medium text-gray-510">
        Last{" "}
        <span className=" font-bold underline underline-offset-auto">
          30 days
        </span>
      </p>
      <h2 className="mt-5 text-5xl font-extrabold">$2,260</h2>
      <img src={Charts} className=" mt-14 max-h-80" alt="Income graph" />
      <div className=" mt-16 flex items-center justify-between font-inter text-2xl font-bold">
        <h3>Your transactions (3)</h3>
        <p className="text-base font-medium">
          Last <span className=" font-bold underline">30 days</span>
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4">
        {transactionsData.map((item) => {
          return (
            <div
              key={item.id}
              className=" flex max-w-full items-center justify-between rounded bg-white p-4"
            >
              <h3 className=" text-2xl font-semibold">${item.amount}</h3>

              <p className=" justify-self-end text-lg font-medium text-gray-510">
                {item.date}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Income;
