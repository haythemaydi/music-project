import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/context";

const Trending = () => {
  const context = useContext(MyContext);
  const { results, loading, error, auth } = context;

  const navigate = useNavigate();

  useEffect(() => {
    !auth && navigate("/");
  }, [auth, navigate]);

  if (loading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  if (error) return <p>{error}</p>;

  const items = results.results.map((item) => (
    <ul key={item.id} className="container">
      <li className="photo">
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt=""
        />
        <p>price:2.99$</p>

        <Link
          to="/trendingInf"
          state={{
            date: item.release_date,
            original: item.original_language,
            overview: item.overview,
          }}
        >
          <p>{item.title}</p>
        </Link>
      </li>
    </ul>
  ));

  return <section>{items}</section>;
};

export default Trending;
