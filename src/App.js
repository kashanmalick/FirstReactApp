import './App.css';
import './Component/cvHeading'
import Cvheading from './Component/cvHeading';
import './Component/careerObj'
import CareerObj from './Component/careerObj';
import Personalinfo from './Component/personalInfo';
import Education from './Component/Education';
import FavBooks from './Component/Books';
import Hobbies from './Component/Hobbies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Cvheading />
      </header>
      <div className="body">
       <CareerObj />
       <hr />
       <Personalinfo />
       <hr />
       <Education />
       <hr />
       <FavBooks />
       <hr />
       <Hobbies />
       <br />
       <br />
       <br />
       <br />
      </div>
    </div>
  
  );
}

export default App;
