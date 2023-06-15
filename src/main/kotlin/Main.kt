fun main() {
    println("Recipe: ${recipe1.name}")
    println("Country: ${recipe1.country}")
    println("Ingredients: ${recipe1.ingredients.joinToString(", ")}")
    println("Preparation Time: ${recipe1.preparationTime} minutes")
    println("Cooking Method: ${recipe1.cookingMethod}")
    println("Nutritional Info: ${recipe1.nutritionalInfo}")

    println()





    println("Schedule:")
    for (performance in stage1.schedule) {
        println("Artist: ${performance.artist.name}")
        println("Country: ${performance.artist.country}")
        println("Musical Style: ${performance.artist.musicalStyle}")
        println("Instruments: ${performance.artist.instruments.joinToString(", ")}")
        println("Start Time: ${performance.startTime}")
        println("End Time: ${performance.endTime}")
        println()
    }
    val products = listOf(product1, product2, product3)

    var totalValue = 0.0
    for (product in products) {
        totalValue += product.calculateTotalValue()
    }

    println("Total value of all products: $$totalValue")
}

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
class Student(val name: String, val age: Int, val grades: List<Int>) {
    fun calculateAverageGrade(): Double {
        return grades.average()
    }

    fun displayStudentInfo() {
        println("Name: $name")
        println("Age: $age")
        println("Grades: ${grades.joinToString(", ")}")
    }

    fun hasPassed(): Boolean {
        val averageGrade = calculateAverageGrade()
        return averageGrade >= 60
    }
}

// Example usage
val student1 = Student("John Doe", 20, listOf(75, 80, 65, 90, 70))
val student2 = Student("Jane Smith", 22, listOf(55, 60,






class Story(
    val title: String,
    val author: String,
    val length: Int,
    val moralLesson: String,
    val ageGroup: Int
)

class Storyteller(
    val name: String,
    val stories: List<Story>
) {
    fun tellStory(story: Story) {
        println("${this.name} is telling the story of ${story.title}")
    }
}

class Translator(
    val sourceLanguage: String,
    val targetLanguage: String
) {
    fun translate(story: Story): Story {
        return Story(
            story.title,
            story.author,
            story.length,
            story.moralLesson,
            story.ageGroup,

        )
    }
}


class Recipe(
    val name: String,
    val ingredients: List<String>,
    val preparationTime: Int,
    val cookingMethod: String,
    val nutritionalInformation: String
)

class MoroccanRecipe(
    val name: String,
    val ingredients: List<String>,
    val preparationTime: Int,
    val cookingMethod: String,
    val nutritionalInformation: String,
    val tagine: Boolean
) : Recipe(name, ingredients, preparationTime, cookingMethod, nutritionalInformation)

class EthiopianRecipe(
    val name1: String,
    val ingredientss: List<String>,
    val preparationTime1: Int,
    val cookingMethod1: String,
    val nutritionalInformation1: String,
    val injera: Boolean
 )
    :Recipe(name1, ingredientss, preparationTime1, cookingMethod1, nutritionalInformation1)

class NigerianRecipe(
    val name2: String,
    val ingredients2: List<String>,
    val preparationTime2: Int,
    val cookingMethod2: String,
    val nutritionalInformation2: String,
    val jollof_rice: Boolean
) : Recipe(name2, ingredients2, preparationTime2, cookingMethod2, nutritionalInformation2)



//**Wildlife Preservation:** You're a wildlife conservationist working on a
//program to track different species in a national park. Each species has its own
//characteristics and behaviors, such as its diet, typical lifespan, migration
//patterns, etc. Some species might be predators, others prey. You'll need to
//
//create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
//these classes might relate to each other through inheritance.
//sudo code
// Recipe class main class
open class Recipe(val name: String, val country: String, val ingredients: List<String>, val preparationTime: Int,
                  val cookingMethod: String, val nutritionalInfo: String)

class MoroccanRecipe(name: String, ingredients: List<String>, preparationTime: Int,
                     cookingMethod: String, nutritionalInfo: String)
    : Recipe(name, "Morocco", ingredients, preparationTime, cookingMethod, nutritionalInfo) {
}

class EthiopianRecipe(name: String, ingredients: List<String>, preparationTime: Int,
                      cookingMethod: String, nutritionalInfo: String)
    : Recipe(name, "Ethiopia", ingredients, preparationTime, cookingMethod, nutritionalInfo) {
}

class NigerianRecipe(name: String, ingredients: List<String>, preparationTime: Int,
                     cookingMethod: String, nutritionalInfo: String)
    : Recipe(name, "Nigeria", ingredients, preparationTime, cookingMethod, nutritionalInfo) {
}


val recipe1 = MoroccanRecipe("Couscous with Vegetables",
    listOf("couscous", "carrots", "zucchini", "onions"),
    30, "Steaming", "High in fiber")
val recipe2 = EthiopianRecipe("Doro Wat",
    listOf("chicken", "onions", "berbere spice mix"),
    60, "Stewing", "Spicy and flavorful")
val recipe3 = NigerianRecipe("Jollof Rice",
    listOf("rice", "tomatoes", "onions", "bell peppers"),
    45, "Simmering", "Rich and aromatic")



//**Wildlife Preservation:** You're a wildlife conservationist working on a
//program to track different species in a national park. Each species has its own
//characteristics and behaviors, such as its diet, typical lifespan, migration
//patterns, etc. Some species might be predators, others prey. You'll need to
//
//create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
//these classes might relate to each other through inheritance.

//sudo  code
// input

//output
//steps



class Artist(val name: String, val country: String, val musicalStyle: String, val instruments: List<String>)

class Performance(val artist: Artist, val startTime: String, val endTime: String)

class Stage(val name: String, val capacity: Int) {
    val schedule = mutableListOf<Performance>()

    fun addPerformance(performance: Performance) {
        schedule.add(performance)
    }
}

var artist1 = Artist("Femi Kuti", "Nigeria", "Afrobeat", listOf("Saxophone", "Trumpet"))
var artist2 = Artist("Youssou N'Dour", "Senegal", "Mbalax", listOf("Guitar", "Sabar"))
var performance1 = Performance(artist1, "19:00", "20:30")
var performance2 = Performance(artist2, "21:00", "22:30")
var stage1 = Stage("Main Stage", 1000)
 var work=stage1.addPerformance(performance1)
 var work2=stage1.addPerformance(performance2)


//
//Create a class called Product with attributes for name, price, and quantity.
//Implement a method to calculate the total value of the product (price * quantity).
//Create multiple objects of the Product class and calculate their total values.

//# sudo code
//
//# input
//# name, price, quantity
//
//# output
//# Product
//# steps
//# class Product
//# attributies(name, price, quantity)
//method calculate_total_value

class Product(val name: String, val price: Double, val quantity: Int) {
    fun calculateTotalValue(): Double {
        return price * quantity
    }
}

val product1 = Product("Apple", 1.5, 10)
val product2 = Product("Banana", 0.75, 5)
val product3 = Product("Orange", 0.9, 8)









