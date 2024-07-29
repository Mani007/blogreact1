import logo from './logo.svg';
import './App.css';
import Base from './components/Base';
import Login from './components/Login';
import Signup from './components/Signup';
import Userreg from './pages/Userreg';
import DataProvider from './context/DataProvider';
function App() {
  
  return (
    < >
     <DataProvider>

        {/* <Base/> */}
        <Login/>
      {/* <Signup/> */}
        {/* <Userreg/> */}

     </DataProvider>
    </>
  );
}

export default App;
