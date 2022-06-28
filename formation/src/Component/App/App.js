import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Skeleton from '../Skeleton/Skeleton';
import Select from '../Select/Select';
import './App.scss';
import ColorSwitches from '../ColorSwitch/ColorSwitch';
import CustomizedTooltips from '../Tooltips/Tooltips';
import StandardImageList from '../Image/Image';
import BasicModal from '../ModalTest/ModalTest';


function App() {
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
    </div>
  );
}

export default App;
