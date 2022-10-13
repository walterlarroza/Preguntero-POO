//@ts-check

export class UI {
    constructor() {}

    showQuestion(text) {
        const questionTitle = document.getElementById("question");
        questionTitle.innerHTML = text;
    }

    showChoices(choises, callback) {
        const choicesConteiner = document.getElementById('choices')

        for (let i = 0; i < choises.length; i++) {
            const button = document.createElement('button');
            button.innerText = choises[i];
            button.className = 'button';
            button.addEventListener("click", () => callback());

            choicesConteiner.append(button);
        }
    }
}