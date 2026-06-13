import data from "../assets/data.json";

type QuizzesData = {
  html: Quiz;
  css: Quiz;
  javascript: Quiz;
  accessibility: Quiz;
};

type Quiz = {
  title: string;
  icon: string;
  questions: QuizQuestion[];
};

type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
};

export const quizzesData: Partial<QuizzesData> = {};

const titleToSubject = {
  HTML: "html",
  CSS: "css",
  JavaScript: "javascript",
  Accessibility: "accessibility",
} as const;

data.quizzes.forEach((quiz) => {
  const subjectKey = titleToSubject[quiz.title as keyof typeof titleToSubject];
  quizzesData[subjectKey] = quiz;
});
