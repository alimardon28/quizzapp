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
  const [data, setData] = useState([]);
  const [test, setTest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setErorr] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
  });

  const fetchTest = async (url) => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log(data);
    // if (data) {
    //   const data = res.data.results;
    //   if (data.length > 0) {
    //     setTest(data);
    //     setLoading(false);
    //   } else {
    //     setErorr(true);
    //   }
    // }
  };

  const hendleSubmit = (e) => {
    e.preventDefault();
    const { amount } = quiz;
    const url = `${API_URL}amount=${amount}&category=22&difficulty=hard&type=multiple`;
    fetchTest(url);
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
