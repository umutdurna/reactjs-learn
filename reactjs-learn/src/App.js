import './App.css';

function App() {

  const title = "React Öğrenme Yerimize Hoş Geldiniz";
  const likes = 50;

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>{ likes } Kez Beğenildi.</p>
      </div>
    </div>
  );
}

export default App;
