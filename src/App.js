//import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import mySrcImage from "./Bill-Gates.jpg" ;



function App() {
  const data = {
    fullName:"Bill Gates",
    bio:"William Henry Gates III, dit Bill Gates, né le 28 octobre 1955 à Seattle (État de Washington), est un informaticien, entrepreneur et milliardaire américain. Il est connu comme le fondateur de Microsoft en 1975 et son principal actionnaire jusqu’en 20142.Grâce au succès commercial de Microsoft il est l’un des hommes les plus riches du monde depuis 1996. En 2021, le magazine Forbes classe Bill Gates 4e fortune avec 124 milliards de dollars.",
    profession:"Président-directeur général Microsoft"
  }
  //function alert profile user
  const handleName = (name) => alert(`Bonjour ${name}`)

  return (
    <div className="App">
     <Profile data_prop={data} funct={handleName}> 
     <img src={mySrcImage} width={'600px'} height={'300px'}/>
     </Profile>
    </div>
  );
}

export default App;
