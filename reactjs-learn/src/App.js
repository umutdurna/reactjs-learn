import './App.css';

function App() {

  const title = "React Öğrenme Yerimize Hoş Geldiniz";
  const likes = 50;
  const links = "https://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>{ likes } Kez Beğenildi.</p>

        <p>{10}</p>
        <p>{"Umut Recep"}</p>

        <p>{[1,2,3,4,5]}</p>

        <a href={links}>Google Site</a>

      </div>
    </div>
  );
}

export default App;
