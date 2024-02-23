import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <p>
          <h1>ASSIGNMENT</h1>
          <h2>A Composition About Myself</h2>
          <h5>I am a bit funny to get to know</h5>
          <div>I began my life with a passion for computers and coding. I just gives me joy. 
          I can't clearly explain it though.</div>
          <h4>My Background</h4>
          <div>I was born in Lagos State. Schooled in Lagos State also but when to Rivers State for 
          tertiary education.</div>
          <div>I was encourage to study computer science because i was learning HTML at that time
          and buiding single pages from it with joy. But sadly, I didn't listen as i always do.</div>
          <h4>My Hobbie</h4>
          <div>I like poetry. I like reading and writing it.</div>
          <div>I Also like watching very good movies</div>
          <div>I am an enthusiatic Chelsea Football fan</div>
          <h4>My Education</h4>
          <div>I studied Pharmacy from Madonna University, Nigeria.</div>
          <div>I also in the process of learning front-end engineering from codecademy but
            i wasn't able to complete it. I only learnt html, css, javascript which i didn't 
            fully understant till I read your book again on it. Seems to be more clear now but 
            I know I still have a long way to go.
          </div>
          <h4>What I am Presently Doing</h4>
          <div>Learning javascript as you can see below.</div>
          <div>Also, below is a link to get to more about me but i guess it is outdated also.</div>
        </p>
        </section>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://output.jsbin.com/yifezec/5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Know so more about me.
        </a>
      </header>
    </div>
  );
}

export default App;
