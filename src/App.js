import './App.css';
 
import {
  ProfileCardCollection 
 } from './ui-components';

 

import {
  NavBarHeader 
 } from './ui-components';

 import {
  NavBarHeader2 
 } from './ui-components';


 import {
  MarketingFooterBrand 
 } from './ui-components';
function App() {
  return (
    <div className="App">
      <header className="App-header">
         
         <NavBarHeader />
         <NavBarHeader2 />
         <ProfileCardCollection />
        
      </header>
      <footer className="App-footer">
      <MarketingFooterBrand />
      </footer>
    </div>
  );
}

export default App