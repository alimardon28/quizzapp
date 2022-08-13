import React from "react";
import { axios } from "axios";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const table = {
  num: 30,
  history: 0,
  politics: 24,
};

const API_URL = "https://opentdb.com/api.php?";

const Context = createContext();

const Provider = ({ children }) => {
  const [test, setTest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setErorr] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [index, setIndex] = useState(0);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchTest = async (url) => {
    setLoading(true);
    const res = await axios(url);

    if (res) {
      const data = res.data.results;
      if (data.length > 0) {
        setTest(data);
        setLoading(false);
      } else {
        setErorr(true);
      }
    }
  };

  const hendleNext = () => {
    setIndex((oneIndex) => {
      const index = oneIndex + 1;
      if (index > test.length - 1) {
        isModalOpen();
        return 0;
      } else {
        return index;
      }
    });
  };

  const hendlePrev = () => {
    setIndex((oneIndex) => {
      const index = oneIndex - 1;
      if (index > quiz.length + 1) {
        isModalOpen();
        return 0;
      } else {
        return index;
      }
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const addWorking = () => {
    if (value) {
      setCorrect((oneState) => oneState + 1);
    }

    hendleNext();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuiz({ ...quiz, [name]: value });
  };

  const hendleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;

    const url = `${API_URL}amount=${amount}&difficulty=${difficulty}&category${category}=${table[category]}&type=multiple`;
    fetchTest(url);
    console.log(url);
  };

  return (
    <Context.Provider
      value={{
        loading,
        error,
        correct,
        isModalOpen,
        quiz,
        index,
        test,
        setTest,
        hendleSubmit,
        handleChange,
        closeModal,
        addWorking,
        openModal,
        hendlePrev,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const cloudContext = () => {
  return useContext(Context);
};

export { Context, Provider };
