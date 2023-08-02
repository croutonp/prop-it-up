import logo from './logo.svg';
import './App.css';
import PersonCard from './components/MyFirstComponents';

function App() {
  return (
    <div className="App">
      <PersonCard lastName = "doe" firstName = "jane" age = {100} hairColor = "black"></PersonCard>
      
      <PersonCard lastName = "gojo" firstName = "satoru" age = {100} hairColor = "black"></PersonCard>
      
      <PersonCard lastName = "james" firstName = "kevin" age = {100} hairColor = "black"></PersonCard>
      
      <PersonCard lastName = "apple" firstName = "bottom" age = {100} hairColor = "black"></PersonCard>
      
      
    </div>
  );
}

export default App;
