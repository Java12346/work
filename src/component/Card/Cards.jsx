import Card from "./Card";
import { useQuery } from "react-query";
import axios from "axios";

const dummy_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12];
const apiKey = '3696444023424ee9614d57ff39e69745'; // Replace with your TMDb API key
const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

const movies_query_key = 'movies'

const Cards = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [movies_query_key],
    queryFn: () => {
      const fetch_movies = async () => {
        try{
          const { data } = await axios.get(url);

          console.log(data)
        }catch(error){
          console.log(error)
        }

      }

      fetch_movies()
    }
  })

  if (isLoading) return <div>Loading......</div>

  if (isError) return <div>Error: {error}</div>

  if (data) {
    console.log(data.results)
  }

    return (
      <div className="container" style={{ width: "80%", margin: "0 auto", padding: "60px 0" }}>
        <div className="posts" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px'
        }}>
          <div className="title">
            <h2>featured movie</h2>
            <p>see more </p>
          </div>
            {dummy_array.map(function (value) {
               return  <Card key={value} />
            })}
        </div>
      </div>
  )
}

export default Cards