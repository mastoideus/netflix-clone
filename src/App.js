import Row from './components/Row'
import requests from './requests'
import Banner from './components/Banner'
import Nav from './components/Nav'

function App() {
  return (
    <div >
      <Nav/>
      <Banner />
      <Row title='Trending' fetchURL={requests.fetchNetflixOriginal} isLarger/>
      <Row title='Top Rated' fetchURL={requests.fetchTopRated}/>
      <Row title='Comedies' fetchURL={requests.fetchComedies}/>
      <Row title='Actions' fetchURL={requests.fetchActions} />
      <Row title='Horrors' fetchURL={requests.fetchHorrors} />
      <Row title='Romance' fetchURL={requests.fetchRomance} />
      <Row title='Documentaries' fetchURL={requests.fetchDocumentaries} />
     
    </div>
  );
}

export default App;
