import { useState, useEffect } from "react";
import "./App.css";
// import SocialCard from "./SocialCard";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const OnSubmit=({userData})=>{
    console.log('pl show the name of user  {userData.name.first}  ');
  }
  const SocialCard = ({ userData}) => {
    return (
      <div className="card">
        <div className="card__body">

          <div className="card__image"><img src={userData.picture.medium} /></div>
          <button className="btn btn-sm btn-success" onClick={OnSubmit({userData})} > {userData.name.first} {userData.name.last}</button>
        </div>

      </div>
    )
  };
//   const OnSelect({})=>{
//     return(
//       console.log("I am about to selecting")
//     )
// };
  
  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setUsers(userData.results);
    })();
  }, []);
  return (
    // <>
    //   <Router>
    //     <Routes>
    //       <Route exact path="/" render={() => {
    //         return (
    //           <>
                <div className="App">
                  <h1>Infobook</h1>
                  <div className="cards-container">

                    {users.map((user, index) => (
                      <SocialCard key={index} userData={user} />
                    ))}
                  </div>
                </div>
              // </>
            
    //       }}>
    //       </Route>
    //       {/* <Route exact path="/about">
    //       {users.map((user, index) => (
    //                   <About key={index} userData={user} />
    //                 ))}
    //       </Route>  */}
    //     </Routes>
    //   </Router>
    // </>
  );
}
export default App;
