import { useContext } from "react";
import MyContext from "../../context/context";

const Movies = () => {
  const context = useContext(MyContext);
  const { form, handleFormInput, handleFormSubmit, auth } = context;
  const { user, password, repeatPassword } = form;
  const logged = !auth ? (
    <form>
      <input
        type="email"
        name="user"
        value={user}
        placeholder="enter email"
        onChange={handleFormInput}
      />
      <input
        name="password"
        value={password}
        type="text"
        placeholder="enter password"
        onChange={handleFormInput}
      />
      <input
        name="repeatPassword"
        value={repeatPassword}
        type="text"
        placeholder="confirm password"
        onChange={handleFormInput}
      />
      <button onClick={(e) => handleFormSubmit(e)}>log in</button>
    </form>
  ) : (
    <button className="logout" onClick={(e) => handleFormSubmit(e)}>
      log out
    </button>
  );

  return logged;
};

export default Movies;
