import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {
  originals, action,horror,comedy} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner  />
      <RowPost  title='Netflix Originals' url={originals} />
      <RowPost  title='Action Movies' isSmall url={action} />
      <RowPost  title='Comedy Movies' url={comedy} />
      <RowPost  title='Horror Movies' isSmall url={horror} />
    </div>
  );
}

export default App;
