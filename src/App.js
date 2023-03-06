import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import data from './data.json'

function App() {
  return (
    <>
    <Header />
    <div className='main'>
      {
        data.map((element, index) => {
          return(
          <Section 
          key={index}
          title={element.Title}
          year={element.Year}
          img={element.Poster}
          />
          )
        })
      }
    </div>
    </>
  );
}

export default App;
