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
import { Routes , Route, Router } from 'react-router-dom';
import Career from './components/Career';
import ContactUs from './components/ContactUs';
import Landingpage from './components/LandingPage';
import PublicationMedia from './components/PublicationMedia';


function App() {
  return (
    <div>
      {/* <Router>
        <switch>
          <route exact path='/' component = {Landingpage}/>
          <route exact path='/home' component = {Home}/>
          <route exact path='/areapractice' component = {AreaPractice}/>
          <route exact path='/businesslaw' component = {BusinessLaw}/>
          <route exact path='/civildispute' component = {CivilDispute}/>
          <route exact path='/constitutionallaw' component = {ConstitutionalLaw}/>
          <route exact path='/criminallaw' component = {CriminalLaw}/>
          <route exact path='/familylaw' component = {FamilyLaw}/>
          <route exact path='/laborlaw' component = {Labor}/>
          <route exact path='/medicallaw' component = {Medical}/>
          <route exact path='/privacylaw' component = {Privacy}/>
          <route exact path='/whitecollar' component = {WhiteCollar}/>
          <route exact path='/career' component = {Career}/>
          <route exact path='/contactus' component = {ContactUs}/>
          <route exact path='/publicationmedia' component = {PublicationMedia}/>
        </switch>
      </Router> */}
     
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
        <Route path='/publicationmedia' element={<PublicationMedia/>} />


      </Routes>

      
      
    
    </div>
  );
}

export default App;