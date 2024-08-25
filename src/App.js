import './styles/App.css';
import style from './style.module.css'

function App() {
  const handleSubmit = () => {
    fetch('http://127.0.0.1:5500');
  }
  return (
    <div className="App">
      <form className={style.form} onSubmit={handleSubmit} action="#">
        <input type="text" placeholder='Login' />
        <input type="password" placeholder='Password' />
        <input type="submit" value="Registration" />
      </form>
    </div>
  );
}

export default App;
