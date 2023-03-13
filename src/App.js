
import BottomPage from './components/BottomPage';
import BusinessLaw from './components/BusinessLaw';
import CivilDispute from './components/CivilDispute';
import ConstitutionalLaw from './components/ConstitutionalLaw';
import CriminalLaw from './components/CriminalLaw';
import Home from './components/Home';
import NavBar from './components/NavBar';
import TopPage from './components/TopPage';


function App() {
  return (
    <div>
      <TopPage />
      <NavBar /> 
      <Home />
      <BusinessLaw />
      <CivilDispute />
      <ConstitutionalLaw />
      <CriminalLaw />
      <BottomPage />
    </div>
  );
}

export default App;
