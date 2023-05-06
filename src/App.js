import Card from "./components/Card/Card";
import "./components/Card/Card.css";


function App() {
  return (
    <div className="App">
    <Card 
      title = {'Card Title'}
      text = {'Some quick example text to build on the card title and make up the bulk of the card s content.'}
    >
      <img src="https://via.placeholder.com/300x150" alt="alt-test" />
    </Card>

    <Card 
      title = {'Card Title'}
      text = {'With supporting text below as a natural lead-in to additional content.'}
    >

    </Card>
    </div>
  );
}

export default App;
