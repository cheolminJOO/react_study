import './style.css';
import Column from './component/Column';

const App = () => {
  return (
    <div className='App'>
      <table>
        <tbody>
          <tr>
            <Column />
          </tr>
          <tr>
            <Column />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
