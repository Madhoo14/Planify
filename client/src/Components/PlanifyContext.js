// import React, { useContext, useState, useEffect, createContext } from "react";

// const PlanifyContext = createContext(null);

// const PlanifyProvider = ({ children }) => {
//   //
//   const [quote, setQuote] = useState(quote);
//   let num = Math.floor(Math.random() * 1643);
//   useEffect(() => {
//     if (quote == "") {
//       fetch("https://type.fit/api/quotes")
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (data) {
//           console.log(data[num]);
//           setQuote(data[num]);
//         });
//     }
//   }, []);
//   const [entry, setEntry] = useState("");
//   const handleEntry = (e) => {
//     setEntry(e.target.value);
//   };

//   return <PlanifyContext.Provider>{children}</PlanifyContext.Provider>;
// };
// export default PlanifyProvider;
