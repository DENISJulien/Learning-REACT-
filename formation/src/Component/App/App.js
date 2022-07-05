import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Skeleton from '../Skeleton/Skeleton';
import Select from '../Select/Select';
import './App.scss';
import ColorSwitches from '../ColorSwitch/ColorSwitch';
import CustomizedTooltips from '../Tooltips/Tooltips';
import StandardImageList from '../Image/Image';
import BasicModal from '../ModalTest/ModalTest';
import ModalAxios from '../ModalAxios/ModalAxios';
import UserById from '../UserById/UserById';
import FunctionUserById from '../Functions/FunctionUser/FunctionUserById';

// import { useEffect, useState } from 'react';
// import axios from 'axios';


function App() {

  // const [user, setUser] = useState([])

  // useEffect (() => {
  //   function getData(){
  //     axios.get('http://localhost:8080/api/user')
  //     .then(response => setUser(response.data))
  //     .catch(error => console.log(error, "t'es une grosse merde"))
  //   }
  //   getData()
  // },[])

  return (
    <div className="app">
      <Header/>
      <Skeleton/>
      <Footer/>
      <Select/>
      <ColorSwitches/>
      <CustomizedTooltips/>
      <StandardImageList/>
      <BasicModal/>
      <ModalAxios/>
      <UserById/>
      <FunctionUserById/>
    </div>
  );
}

export default App;
