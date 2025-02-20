import { LogInForm } from "./components/loginform";
import LoginPage from "./pages/loginpage";

function MyButton(){
  return (
      <button>Press me!</button>
  );
}

export default function MyApp(){
  return(
      <div>
          <h1> Welcome to My BOOK KEEPING APP NEEEEHEHEHEHEH </h1>
          <LoginPage />
          <MyButton />
      </div>
  );
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
