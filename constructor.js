//Create a Car class or function constructor that has the following properties: a. make (string):
 //The make of the car, e.g., "Toyota". 
 class Car {
    constructor(make, model, year, isAvailable) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = isAvailable;
    }
  toggleAvailability() {
    this.isAvailable = !this.isAvailable;
  }
}
const toyota = new Car("Isuzu", "Impreza", 2004, true);
console.log(toyota.isAvailable);
toyota.toggleAvailability();
console.log(toyota.isAvailable);

// Create a Rental class or function constructor that has the following properties:
class Rental {
  constructor(car, renterName, rentalStartDate, rentalEndDate) {
    this.car = car;
    this.renterName = renterName;
    this.rentalStartDate = rentalStartDate;
    this.rentalEndDate = rentalEndDate;
  }
  calculateRentalDuration() {
    const durationInMs = this.rentalEndDate - this.rentalStartDate;
    const durationInDays = Math.ceil(durationInMs / (1000 * 60 * 60 * 24));
    return durationInDays;
  }
}
const subaru = new Car("Subaru", "X5", 2006, true);
const subaru2 = new Rental(subaru, "sherly", new Date("2012-01-01"), new Date("2022-01-10"));
console.log(subaru2.calculateRentalDuration())

//Create an instance of the Car class or function constructor for a car in the inventory. 
//Then, create an instance of the Rental class or function constructor for a rental involving the car you created. 
//Finally, calculate the rental duration using the calculateRentalDuration method.

const car = new Car("Mazda", "X5", 2006, true);
console.log({car});
const rental = new Rental(car, "pickup", new Date("2021-02-23"), new Date("2023-05-26"));
const rentalDuration = rental.calculateRentalDuration();
console.log(rentalDuration);

// Create a Question class with the following properties: 
class Question {
  constructor(text, options, correctAnswer){
    this.text = text;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
  checkAnswer(Answer){
  return Answer === this.correctAnswer;
}
};
//Create a Quiz class with the following properties: 
class Quiz {
  constructor() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
  }
  addQuestion(question) {
    this.questions.push(question);
  }
  nextQuestion() {
    this.currentQuestionIndex++;
  }
  submitAnswer(Answer) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (currentQuestion.checkAnswer(Answer)) {
      this.score++;
    }
  }
}
const question1 = new Question("What is your favorite food?", ["Ugali", "Fish", "Meat"], "Meat");
const question2 = new Question("Where do you come from?", ["Kakamega", "Turkana", "Bungoa"], "Kakamega");
const question3 = new Question("Which class are you in", ["Adalab", "AnitaB", "Lovelace"], "AnitaB")
const Quiz = new Quiz();
Quiz.addQuestion(question1);
Quiz.addQuestion(question2);
Quiz.submitAnswer("Meat");
Quiz.submitAnswer("Kakamega");
Quiz.nextQuestion();
Quiz.submitAnswer("Kakamega");
console.log(`Your final score is: ${Quiz.score}`);


  
  
  
 