
import './App.scss';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        test Link
        <div>
          <button>
            <Link to={`users`}>User Page</Link>
          </button>
          <button>
            <Link to={`admin`}>Admin Page</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
