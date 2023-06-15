// Create a github repository.
// ● Create 1 branch
// ● feat/q2-assessment
// ● Create a folder called Q2-Assessment
// ● Create 3 different files with 3 different extensions(.js, .py, .kt) and tackle each
// question in the 3 different languages. Push to github and submit with a relevant
// commit message for each commit.
// ● Make sure to add the sudo code for each question as comments.


// 1.**Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.
// Story class

// sudo code

// input

// title
// content
// moralLesson
// ageGroup

// Output

// Story 

// steps
// Create a class call Story
// subclasses that will be 1. StoryTell method in it is tellStory
// 2.class Translator method translate


class Story {
  constructor(title, author, length, moralLesson, ageGroup) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.moralLesson = moralLesson;
    this.ageGroup = ageGroup;
  }
}

class Storyteller {
  constructor(name, stories) {
    this.name = name;
    this.stories = stories;
  }

  tellStory(story) {
    console.log(`${this.name} is telling the story of ${story.title}`);
  }
}

class Translator {
  constructor(sourceLanguage, targetLanguage) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
  }

  translate(story) {
    return new Story(
      story.title,
      story.author,
      story.length,
      story.moralLesson,
      story.ageGroup,
      this.sourceLanguage,
      this.targetLanguage
    );
  }
}


//   **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.


// Sudo code
// input


// out put
// steps




//steps
// Class Recipe
//  attributies( name,country,ingredients,preparation_time, cooking_method, nutritional_info)
// subClasses(MoroccanRecipe,EthiopianRecipe,NigerianRecipe)All this will be inheriting from the main Class
// craete a variable recipy for each country and call it 

// Recipe class
class Recipe {
  constructor(name, country, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
    this.name = name;
    this.country = country;
    this.ingredients = ingredients;
    this.preparationTime = preparationTime;
    this.cookingMethod = cookingMethod;
    this.nutritionalInfo = nutritionalInfo;
  }
}

class MoroccanRecipe extends Recipe {
  constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
    super(name, "Morocco", ingredients, preparationTime, cookingMethod, nutritionalInfo);
  }
}

class EthiopianRecipe extends Recipe {
  constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
    super(name, "Ethiopia", ingredients, preparationTime, cookingMethod, nutritionalInfo);
  }
}

class NigerianRecipe extends Recipe {
  constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
    super(name, "Nigeria", ingredients, preparationTime, cookingMethod, nutritionalInfo);
  }
}

 let recipe1 = MoroccanRecipe("Vegetables", ["couscous", "carrots", "water", "onions"], 40, "Steaming", "High in fiber")
let recipe2 = EthiopianRecipe("Banana", ["chicken", "onions", "spice mix"], 90, "Stewing", "Spicy and flavorful")
 let recipe3 = NigerianRecipe("Rice", ["rice", "tomatoes", "onions", " peppers"], 15, "Simmering", "Rich and aromatic")

function work() {
  console.log(`Recipe: ${recipe1.name}`);
  console.log(`Country: ${recipe1.country}`);
  console.log(`Ingredients: ${recipe1.ingredients.join(", ")}`);
  console.log(`Preparation Time: ${recipe1.preparationTime} minutes`);
  console.log(`Cooking Method: ${recipe1.cookingMethod}`);
  console.log(`Nutritional Info: ${recipe1.nutritionalInfo}`);

  console.log();

  console.log(`Recipe: ${recipe2.name}`);
  console.log(`Country: ${recipe2.country}`);
  console.log(`Ingredients: ${recipe2.ingredients.join(", ")}`);
  console.log(`Preparation Time: ${recipe2.preparationTime} minutes`);
  console.log(`Cooking Method: ${recipe2.cookingMethod}`);
  console.log(`Nutritional Info: ${recipe2.nutritionalInfo}`);

  console.log();

  console.log(`Recipe: ${recipe3.name}`);
  console.log(`Country: ${recipe3.country}`);
  console.log(`Ingredients: ${recipe3.ingredients.join(", ")}`);
  console.log(`Preparation Time: ${recipe3.preparationTime} minutes`);
  console.log(`Cooking Method: ${recipe3.cookingMethod}`);
  console.log(`Nutritional Info: ${recipe3.nutritionalInfo}`);
}

work();


// **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to

// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.

  // sudo code 
  // input 

  // out put
  // steps
  // main class Species
  // other class(Predator,Prey)Are inheriting form the main Class


class Species {
  constructor(name, diet, lifespan) {
    this.name = name;
    this.diet = diet;
    this.lifespan = lifespan;
  }
}

class Predator extends Species {
  constructor(name, diet, lifespan, huntingMethod) {
    super(name, diet, lifespan);
    this.huntingMethod = huntingMethod;
  }
}

class Prey extends Species {
  constructor(name, diet, lifespan, migrationPattern) {
    super(name, diet, lifespan);
    this.migrationPattern = migrationPattern;
  }
}


 let species1 = Predator("Zebra", "Herbivores", 17, "hungry")
 let species2 = Prey("Lion", "canivores", 29, "hunting")
 
function main() {
  console.log(`Species: ${species1.name}`);
  console.log(`Diet: ${species1.diet}`);
  console.log(`Lifespan: ${species1.lifespan} years`);
  console.log(`Hunting Method: ${species1.huntingMethod}`);

  console.log();

  console.log(`Species: ${species2.name}`);
  console.log(`Diet: ${species2.diet}`);
  console.log(`Lifespan: ${species2.lifespan} years`);
  console.log(`Migration Pattern: ${species2.migrationPattern}`);
}

main();

// **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.

//  Sudo code 
// input
// name, country, musical_style, instruments
// output

// steps
// Create a class Artist
// class
//  Performance
// Stage


class Artist {
  constructor(name, country, musicalStyle, instruments) {
    this.name = name;
    this.country = country;
    this.musicalStyle = musicalStyle;
    this.instruments = instruments;
  }
}

// Performance class
class Performance {
  constructor(artist, startTime, endTime) {
    this.artist = artist;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

class Stage {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.schedule = [];
  }

  addPerformance(performance) {
    this.schedule.push(performance);
  }
}

let artist1 = Artist("Ann", "Kenyan", "loves ong", ["Malika", "it's ok"])
 let artist2 = Artist("Nyashinski", "Rwanda", "RMBS", ["sonoko", "imanwela"])
 let performance1 = Performance(artist1, "30:00", "21:30")
 let performance2 = Performance(artist2, "20:00", "28:30")
const stage1 = new Stage("Main Stage", 1000);
stage1.addPerformance(performance1);
stage1.addPerformance(performance2);

function main() {
  console.log(`Stage: ${stage1.name}`);
  console.log(`Capacity: ${stage1.capacity}`);

  console.log("Schedule:");
  for (const performance of stage1.schedule) {
    console.log(`Artist: ${performance.artist.name}`);
    console.log(`Country: ${performance.artist.country}`);
    console.log(`Musical Style: ${performance.artist.musicalStyle}`);
    console.log(`Instruments: ${performance.artist.instruments.join(", ")}`);
    console.log(`Start Time: ${performance.startTime}`);
    console.log(`End Time: ${performance.endTime}`);
    console.log();
  }
}

main();


// Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.

// sudo code 

//  input
//  name, price, quantity

// output
// Product
//  steps
// class Product
//  attributies(name, price, quantity)
// method calculatetotalvalue

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotalValue() {
    return this.price * this.quantity;
  }
}

 let product1 = Product("Apple", 5.0, 15)
 let product2 = Product("Banana", 7.5, 5)
 let product3 = Product("Mango", 9.0, 18)
function main() {
  const products = [product1, product2, product3];

  let totalValue = 0;
  for (const product of products) {
    totalValue += product.calculateTotalValue();
  }

  console.log(`Total value of all products: $${totalValue}`);
}

main();
//  Implement a class called Student with attributes for name, age, and grades (a
//   list of integers). Include methods to calculate the average grade, display the
//  student information, and determine if the student has passed (average grade >=
//   # 60). Create objects for the Student class and demonstrate the usage of these
//   # methods.
  
// # sudo code 
// # input
// # name, age, grades
// # output 
// # avareage grade
// # steps
// # class Student
// # Attribute name, age, grades
// # Methods calculate_average_grade,
// # display_student_info,
// # has_passed,
// # has_passed
// # variables 
// # call it
// # 
class Student {
  constructor(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
  }

  calculateAverageGrade() {
    return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
  }

  displayStudentInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Grades: ${this.grades.join(", ")}`);
  }

  hasPassed() {
    const averageGrade = this.calculateAverageGrade();
    return averageGrade >= 60;
  }
}

let student1 = Student("Ann Anyango", 15, [70, 80, 54, 90, 70])
 let student2 = Student("Caroline Mwende", 20, [50, 64, 70, 50, 80])


function main() {
  const students = [student1, student2];

  for (const student of students) {
    student.displayStudentInfo();
    const averageGrade = student.calculateAverageGrade();
    console.log(`Average Grade: ${averageGrade}`);
    if (student.hasPassed()) {
      console.log("Student has passed.");
    } else {
      console.log("Student has not passed.");
    }
    console.log();
  }
}

main();
