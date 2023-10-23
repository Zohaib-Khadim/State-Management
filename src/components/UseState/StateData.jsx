// import React, { useEffect, useState } from "react";

// const StateData = () => {
//     const [card , setCard ] = useState([])

//   const getApiData = async() => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//     setCard(data);
//   };
//   useEffect(() => {
//     getApiData();
//   }, []);
//   return (
//     <>
//     <div className="container">
//         <div className="row">
//         {card.map((val) => {
//         const{id,title,body}=val;
//         return (
//           <>
//           <div className="col-lg-4 col-12 col-md-6 ">
//           <div className="card" key={id} style={{width: "18rem"}}>
//               <div className="card-body">
//                 <h5 className="card-title">{title}</h5>
//                 <p className="card-text">
//                   {id}
//                 </p>
//                 <p className="card-text">
//                   {body}
//                 </p>
//                 <a href="#" className="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>
            
//           </>
//         );
//       })}
//         </div>
//     </div>
     
//     </>
//   );
// };

// export default StateData;
