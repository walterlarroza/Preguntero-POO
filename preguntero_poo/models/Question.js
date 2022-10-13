//@ts-check

export class Question {
    constructor(text, choises, answer) {
            this.text = text;
            this.choises = choises;
            this.answer = answer;
        }
        /**
         * 
         * @param {string} choice algunas texto 
         * @returns {boolean} return verdadero si la respuesta es correcta
         */

    correctAnswer(choice) {
        return choice === this.answer

    }
}