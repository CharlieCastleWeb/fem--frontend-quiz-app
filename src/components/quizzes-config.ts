import data from "../assets/data.json";
import type { Subject } from "./subjects-config";

type QuizzesData = Record<Subject, Quiz>;

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

const findQuiz = (title: string) => {
  const quiz = data.quizzes.find((quiz) => quiz.title === title);
  if (!quiz) {
    throw new Error(`Quiz "${title}" not found`);
  }
  return quiz;
};

export const quizzesData: QuizzesData = {
  html: findQuiz("HTML"),
  css: findQuiz("CSS"),
  javascript: findQuiz("JavaScript"),
  accessibility: findQuiz("Accessibility"),
} satisfies QuizzesData;
