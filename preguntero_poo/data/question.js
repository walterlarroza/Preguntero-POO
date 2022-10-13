//@ts-check

import { Question } from "../models/Question.js"
import { data } from '../data/data.js';

data.map(question => new Question(question.question, question.choises, question.answer))