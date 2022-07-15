import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css'
function App() {   
  const [mockData, setMockdata] = useState([]);
  const url = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';
  useEffect(() => {
    axios.get(url).then((res) => {
      setMockdata(res.data);
    });
  }, []);
  console.log(mockData);

//   author: "Livemint"
// content: "Post-coronavirus complications, also called long Covid syndrome, induce more symptoms in women than men, a new study has found. \r\nThe new research, published in the Journal of Women's Health, reveale… [+2402 chars]"
// description: "The study found that 91% of patients, who were followed up for five months on average, continued to experience Covid-19 symptoms. Breathlessness was the most common symptom of long Covid-19, followed by fatigue"
// publishedAt: "2022-04-21T11:37:19Z"
// id: null
// name: "Livemint"
// [[Prototype]]: Object
// title: "Long Covid More Severe In Women Than Men, Suggests Study - Mint"
// url: "https://www.livemint.com/news/india/long-covid-more-severe-in-women-than-men-suggests-study-11650538683775.html"
// urlToImage: "https://images.livemint.com/img/2022/04/21/600x338
  return (
    <>
      <div className="App">
        <h1>Today's news</h1>
        {mockData.articles.map((el) => {
          return (
            <>
            <div className="data">
              <h2>{el.title}</h2>
              <img className="img11" src={el.urlToImage} alt="" />
              <div className='cont'>                
                <h3>{el.content}</h3>
                <p>{el.description}</p>                             
                <p className='auth'>Covered By : <strong>{el.author}</strong></p>
              </div>
            </div>
            </>
          );
        })}
      </div>
    </>
  )
}

export default App