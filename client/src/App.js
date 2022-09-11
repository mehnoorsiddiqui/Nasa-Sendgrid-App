import { API } from './api';
import './App.css';

function App() {
  const handleChange = async (event) => {
    event.preventDefault();
    const emailImage = await API.emailImg();
    if (emailImage === "email sent") {
      console.log("email sent")
    }
  }
  return (
    <div className="App">
      <button onClick={handleChange}>
        Email me a picture from nasa
      </button>
    </div>
  );
}

export default App;
