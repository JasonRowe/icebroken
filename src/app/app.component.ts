import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoButtonComponent } from './go-button/go-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GoButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ice broken';

  // An array of questions
  questions = [
    "What is something you are obsessed with?",
    "What are three things you can't live without?",
    "What is the most interesting thing you learned recently?",
    "What is your favorite hobby or pastime?",
    "What is your favorite movie or TV show?",
    "What are you most afraid of?",
    "What is something you are proud of?",
    "What is the best advice you ever received?",
    "What is something you wish you knew how to do?",
    "What is the weirdest thing you ever ate?",
    "What is your guilty pleasure?",
    "What is your favorite place to visit?",
    "What is something you are looking forward to?",
    "What is your favorite book or genre?",
    "What is your spirit animal and why?",
    "What is your favorite season and why?",
    "What is something that makes you happy?",
    "What is your dream job or career?",
    "What is something you are grateful for?",
    "What is a skill or talent you have or want to learn?"
  ];

    // A variable to store the current question
    question = "";

    // A variable to store the used questions
    usedQuestions = [""];

  // A function to generate a random question from the array
  generateQuestion() {
    // Check if there are any questions left
    if (this.questions.length > 0) {
      // Get a random index from the array
      let index = Math.floor(Math.random() * this.questions.length);
      // Get the question at that index
      let question = this.questions[index];
      // Display the question in the question div
      this.question = question;
      // Remove the question from the array
      this.questions.splice(index, 1);
      // Add the question to the used questions array
      this.usedQuestions.push(question);
    } else {
      // If there are no questions left, display a message
      this.question = "You have answered all the questions. Well done! Refresh the page to start over.";
    }
  }
}
