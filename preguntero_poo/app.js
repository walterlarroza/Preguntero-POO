//@ts-check

import { question } from "./data/question.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

function main() {
    const quiz = new Quiz(question);
    const ui = new UI()

    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choises);
}

main();