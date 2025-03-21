import { Link } from 'react-router-dom';
import Tracking from './Tracking';
import Menu from './Menu';
import MyForm from './FormUsername';

function Home() {
  return (
    <div>
      <div>
        <h1>Bienvenue sur Adalicious</h1>
        <p>Home</p>
        <div>
          <Link to="/Tracking">
            Tracking
          </Link>
          <br/>
          <Link to="/Menu">
            Menu
          </Link>
        </div>
        <MyForm/>
      </div>
    </div>
  );
}

export default Home;