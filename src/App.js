import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [wpData, setWpData] = useState ([]);
  useEffect(
    () => {
      axios.get('https://thecontentwebsite.com/wp-json/wp/v2/posts?_embed').then(
        (res) => {
          setWpData(res);
          console.log(res.data[0]._embedded['wp:featuredmedia'][0]['source_url']);
        }
      ).catch( 
        () => {} 
      );
    }, []
  );
  return (
    <div className="App">
      {wpData?.data?.map((row) => (
        // <div className="row">{row.content.rendered}</div>
        <div>
          <img src={row._embedded['wp:featuredmedia'][0]['source_url']} />
          <div dangerouslySetInnerHTML={{ __html: row.content.rendered }} />
        </div>
      ))}
    </div>
  );
}

export default App;
