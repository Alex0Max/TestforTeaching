import { useEffect, useState } from "react"

async function fetchData(setData) {
  const url = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0b94d0b491mshdfe7526a8d17bb3p1e9c2cjsn4ecf85232d24',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    setData(result.data);
  } catch (error) {
    console.error(error);
  }
}
export default function PlayersStat() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetchData(setData);
  }, [])
  return (
    <div>
      {data.map((el)=>{
        return <p key={el.id}>{el.first_name} - {el.last_name}</p>
      })}
    </div>
  )
}
