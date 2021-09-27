import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header/Header";
import News from "./components/News/News";

const App = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7342f379e9d74ba88c7ede459e81ebfc"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="App p-5">
      <Header></Header>
      {news.length === 0 ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row xs={1} md={3} className="g-5">
          {news.map((nw) => (
            <News news={nw}></News>
          ))}
        </Row>
      )}
    </div>
  );
};

export default App;
