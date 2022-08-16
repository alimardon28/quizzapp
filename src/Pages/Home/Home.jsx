import React from "react";
import { NavLink } from "react-router-dom";
import { cloudContext } from "../../Context/context";
import "../Home/Home.scss";

const Home = () => {
  const { quiz, handleChange, hendleSubmit, error } = cloudContext();

  return (
    <div className="home">
      <div className="container ">
        <form action="" className="home__form">
          <input
            className="home__input"
            type="number"
            placeholder="Amount test"
            name="amount"
            value={quiz.amount}
            onChange={handleChange}
            min={1}
            max={30}
            required
          />

          <select className="home__select" name="" id="">
            <option className="home__select_option" value="">
              English
            </option>
          </select>

          <button className="home__button" type="submit" onClick={hendleSubmit}>
            start
          </button>
          {error && <p className="error">Not Found</p>}
        </form>
      </div>
    </div>
  );
};

export default Home;
