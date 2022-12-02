import './App.css';
import scare from './img/Scarecrow.png'

function App() {
  return (
    <div className="App">
      <header>
        <h1>404 not found</h1>
      </header>
      <main>
        <section className="container">
        <img src={scare} alt="Image" />
          <div className="content">
          <h2>I have bad news for you</h2>
          <p>The page you are looking for might be removed or is temporarily unavailable</p>
          <button>Back to homepage</button>
          </div>
        </section>
      </main>
      <footer>
        <p>created by <a href="https://github.com/Strangeal">Justice Bajeri</a> - devChallenges.io</p>
      </footer>
    </div>
  );
}

export default App;
