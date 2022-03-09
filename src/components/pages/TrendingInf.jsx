import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MyContext from "../../context/context";

const TrendingInf = () => {
  const context = useContext(MyContext);
  const { auth } = context;
  const [readMore, setReadMore] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { date, original, overview } = location.state;

  useEffect(() => {
    !auth && navigate("/");
  }, [auth, navigate]);

  return (
    <section>
      <p>{readMore ? overview : `${overview.substring(0, 100)}... `}</p>
      <button className="read" onClick={() => setReadMore(!readMore)}>
        {readMore ? "show less" : "read more"}
      </button>

      <h6>Language:{original}</h6>
      <h6>Release-Date:{date}</h6>

      <button onClick={() => navigate(-1)}>Return</button>
    </section>
  );
};

export default TrendingInf;
