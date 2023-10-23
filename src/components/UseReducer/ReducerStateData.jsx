// import React,{useEffect} from 'react'
// import { useReducer } from 'react';
// import reducer from './Reducer';

// const initialState = {
//     myData:[]
// }
// const ReducerStateData = () => {
//     const [state,dispatch] = useReducer(reducer,initialState)
//     const getApiData=async()=>{
//         const response=await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         console.log(data);
//         dispatch({
//             type:"GET_DATA",
//             payload:data
//         })

//     }
//     useEffect(()=>{
//         getApiData();
//     },[])
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//             {state.myData.map((val) => {
//          const{id,title,body}=val;
//          return (
//            <>
//            <div className="col-lg-4 col-12 col-md-6 ">
//            <div className="card" key={id} style={{width: "18rem"}}>
//                <div className="card-body">
//                  <h5 className="card-title">{title}</h5>
//                  <p className="card-text">
//                    {id}
//                  </p>
//                  <p className="card-text">
//                    {body}
//                  </p>
//                  <a href="#" className="btn btn-primary">
//                    Go somewhere
//                  </a>
//                </div>
//              </div>
//            </div>
            
//            </>
//          );
//        })}
//          </div>
//      </div>
//     </>
//   )
// }

// export default ReducerStateData
