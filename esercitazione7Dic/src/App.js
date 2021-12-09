
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="foto">
        <img src="https://images.unsplash.com/photo-1610212757181-59faa5a0b098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
        alt="cvimage"/>
        </div>
        <h1 className="Nome">Nome Cognome</h1>
      </header>
      <div className="description">
        <h2>Descrizione</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis dolores vel minima magni odio eligendi quos aliquid officia quisquam. Distinctio, ab provident! Veritatis beatae, nihil quia doloribus incidunt ex! </p>
      </div>
      <div className="info">
        <div className="experience">
          <h2>Esperienze lavorative</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis dolores vel minima magni odio eligendi quos aliquid officia quisquam. Distinctio, ab provident! Veritatis beatae, nihil quia doloribus incidunt ex! </p>
        </div>
        <div className="language">
          <h2>Lingue</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis dolores vel minima magni odio eligendi quos aliquid officia quisquam. Distinctio, ab provident! Veritatis beatae, nihil quia doloribus incidunt ex! </p>
        </div>
        <div className="hobby">
          <h2>Hobby</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis dolores vel minima magni odio eligendi quos aliquid officia quisquam. Distinctio, ab provident! Veritatis beatae, nihil quia doloribus incidunt ex! </p>
        </div>
      </div>
      <div className="contactInfo">
        <h2>Contattami</h2>
        <form className="contact">
          <label htmlFor="ogetto">Oggetto</label>
          <input type="text" id="oggetto" name="oggetto" />
          <label htmlFor="messaggio">Messaggio</label>
          <input type="textarea" id="messaggio" name="messaggio" />
        </form>
      </div>
      <footer>e-mail</footer>
    </div>
  );
}

export default App;
