import AreaPractice from './components/AreaPractice';
import BottomPage from './components/BottomPage';
import BusinessLaw from './components/BusinessLaw';
import CivilDispute from './components/CivilDispute';
import ConstitutionalLaw from './components/ConstitutionalLaw';
import CriminalLaw from './components/CriminalLaw';
import Home from './components/Home';
import NavBar from './components/NavBar';
import TopPage from './components/TopPage';
import FamilyLaw from './components/FamilyLaw';
import Labor from './components/Labor';
import Medical from './components/Medical';
import Privacy from './components/Privacy';
import WhiteCollar from './components/WhiteCollar';
import { Routes , Route } from 'react-router-dom';
import Career from './components/Career';
import ContactUs from './components/ContactUs';
import Landingpage from './components/LandingPage';


function App() {
  return (
    <div>
     
      <Routes>
        <Route path='/project1' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/areapractice' element={<AreaPractice/>} />
        <Route path='/businesslaw' element={<BusinessLaw/>} />
        <Route path='/civildispute' element={<CivilDispute/>} />
        <Route path='/constitutionallaw' element={<ConstitutionalLaw/>} />
        <Route path='/criminallaw' element={<CriminalLaw/>} />
        <Route path='/familylaw' element={<FamilyLaw/>} />
        <Route path='/laborlaw' element={<Labor/>} />
        <Route path='/medicallaw' element={<Medical/>} />
        <Route path='/privacylaw' element={<Privacy/>} />
        <Route path='/whitecollar' element={<WhiteCollar/>} />
        <Route path='/career' element={<Career/>} />
        <Route path='/contactus' element={<ContactUs/>} />


      </Routes>

      
      
    
    </div>
  );
}

export default App;