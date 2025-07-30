import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Certificate from './Certificate';

interface Quiz {
  id: number;
  question: string;
  options: string[];
  correct: string;
}

const Quiz: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);
  const [userId] = useState('user123'); // Placeholder

  useEffect(() => {
    axios.get(`/api/quizzes/${i18n.language}`).then(res => setQuizzes(res.data));
  }, [i18n.language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAnswer = (answer: string) => {
    if (answer === quizzes[currentQuiz]?.correct) setScore(score + 1);
    setCurrentQuiz(currentQuiz + 1);
    setTimer(30);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <select onChange={(e) => i18n.changeLanguage(e.target.value)} aria-label="Language selector">
        <option value="en">English</option>
        <option value="de">German</option>
      </select>
      {quizzes.length > 0 && currentQuiz < quizzes.length ? (
        <>
          <h2 className="text-xl font-bold">{t('question')} {quizzes[currentQuiz].question}</h2>
          <p>{t('time_remaining')}: {timer}s</p>
          {quizzes[currentQuiz].options.map(opt => (
            <button
              key={opt}
              onClick={() => handleAnswer(opt)}
              className="block w-full p-2 my-2 bg-blue-500 text-white rounded"
            >
              {opt}
            </button>
          ))}
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold">{t('score')}: {score}/{quizzes.length}</h2>
          <Certificate score={score} userId={userId} />
        </>
      )}
    </div>
  );
};

export default Quiz;
