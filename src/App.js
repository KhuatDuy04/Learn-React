import './App.scss';
import Headers from './components/Header/Header';
import { Link } from "react-router-dom";

const App = () => {
  return(
    <div className='app-container'>
      <Headers/>
      <div>
        test link
        <div>
          <button className='btn btn-primary'>
            <Link to="/users">
              go to user page
            </Link>
          </button>
          <button className='btn btn-danger'>
            <Link to="/admins">
              go to admin page
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
