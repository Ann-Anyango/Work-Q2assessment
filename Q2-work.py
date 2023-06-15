# sudo code

# input

# output

# steps


# Story class
class Story:
    def __init__(self, title, content, age_group):
        self.title = title
        self.content = content
        self.age_group = age_group


class StoryTeller:
    def __init__(self, name, stories):
        self.name = name
        self.stories = stories

    def tell_story(self, title):
        story = next((s for s in self.stories if s.title == title), None)
        if story:
            print(f"Story Title: {story.title}")
            print(f"Age Group: {story.age_group}")
            print(f"Content: {story.content}")
        else:
            print(f"Story with title '{title}' not found.")

class Translator:
    def __init__(self, language):
        self.language = language

    def translate(self, story, target_language):
     
        print(f"Translating '{story.title}' to {target_language}")
        print(f"Translated content: {story.content} (in {self.language} translated to {target_language})")


story1 = Story("The Lion and the Mouse", "Once upon a time...", "Children")
story2 = Story("The Tortoise and the Hare", "In a forest, there lived...", "Children")

storyteller = StoryTeller("John", [story1, story2])
storyteller.tell_story("The Lion and the Mouse")

translator = Translator("English")
translator.translate(story1, "French")



# **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# The app needs to handle recipes from different African countries, each with its
# unique ingredients, preparation time, cooking method, and nutritional
# information. Consider creating a `Recipe` class, and think about how you might
# create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# methods.
#  Sudo code



# steps
# Class Recipe
# attributies( name,country,ingredients,preparation_time, cooking_method, nutritional_info)
# subClasses(MoroccanRecipe,EthiopianRecipe,NigerianRecipe)All this will be inheriting from the main Class
# craete a variable recipy for each country and call it 





class Recipe:
    def __init__(self, name, country, ingredients, preparation_time, cooking_method, nutritional_info):
        self.name = name
        self.country = country
        self.ingredients = ingredients
        self.preparation_time = preparation_time
        self.cooking_method = cooking_method
        self.nutritional_info = nutritional_info

class MoroccanRecipe(Recipe):
    def __init__(self, name, ingredients, preparation_time, cooking_method, nutritional_info):
        super().__init__(name, "Morocco", ingredients, preparation_time, cooking_method, nutritional_info)

class EthiopianRecipe(Recipe):
    def __init__(self, name, ingredients, preparation_time, cooking_method, nutritional_info):
        super().__init__(name, "Ethiopia", ingredients, preparation_time, cooking_method, nutritional_info)


class NigerianRecipe(Recipe):
    def __init__(self, name, ingredients, preparation_time, cooking_method, nutritional_info):
        super().__init__(name, "Nigeria", ingredients, preparation_time, cooking_method, nutritional_info)

recipe1 = MoroccanRecipe("Vegetables", ["couscous", "carrots", "water", "onions"], 40, "Steaming", "High in fiber")
recipe2 = EthiopianRecipe("Banana", ["chicken", "onions", "spice mix"], 90, "Stewing", "Spicy and flavorful")
recipe3 = NigerianRecipe("Rice", ["rice", "tomatoes", "onions", " peppers"], 15, "Simmering", "Rich and aromatic")

def work():
    print(f"Recipe: {recipe1.name}")
    print(f"Country: {recipe1.country}")
    print(f"Ingredients: {', '.join(recipe1.ingredients)}")
    print(f"Preparation Time: {recipe1.preparation_time} minutes")
    print(f"Cooking Method: {recipe1.cooking_method}")
    print(f"Nutritional Info: {recipe1.nutritional_info}")

    print()

    print(f"Recipe: {recipe2.name}")
    print(f"Country: {recipe2.country}")
    print(f"Ingredients: {', '.join(recipe2.ingredients)}")
    print(f"Preparation Time: {recipe2.preparation_time} minutes")
    print(f"Cooking Method: {recipe2.cooking_method}")
    print(f"Nutritional Info: {recipe2.nutritional_info}")

    print()

    print(f"Recipe: {recipe3.name}")
    print(f"Country: {recipe3.country}")
    print(f"Ingredients: {', '.join(recipe3.ingredients)}")
    print(f"Preparation Time: {recipe3.preparation_time} minutes")
    print(f"Cooking Method: {recipe3.cooking_method}")
    print(f"Nutritional Info: {recipe3.nutritional_info}")

if __name__ == "__work__":
    work()
#  **Wildlife Preservation:** You're a wildlife conservationist working on a
# program to track different species in a national park. Each species has its own
# characteristics and behaviors, such as its diet, typical lifespan, migration
# patterns, etc. Some species might be predators, others prey. You'll need to

# create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# these classes might relate to each other through inheritance.

#  sudo code
# main class Species
# Predator subclass
# Prey subclass

class Species:
    def __init__(self, name, diet, lifespan):
        self.name = name
        self.diet = diet
        self.lifespan = lifespan

class Predator(Species):
    def __init__(self, name, diet, lifespan, hunting_method):
        super().__init__(name, diet, lifespan)
        self.hunting_method = hunting_method

class Prey(Species):
    def __init__(self, name, diet, lifespan, migration_pattern):
        super().__init__(name, diet, lifespan)
        self.migration_pattern = migration_pattern


species1 = Predator("Zebra", "Herbivores", 17, "hungry")
species2 = Prey("Lion", "canivores", 29, "hunting")

def main():
    print(f"Species: {species1.name}")
    print(f"Diet: {species1.diet}")
    print(f"Lifespan: {species1.lifespan} years")
    print(f"Hunting Method: {species1.hunting_method}")

    print()

    print(f"Species: {species2.name}")
    print(f"Diet: {species2.diet}")
    print(f"Lifespan: {species2.lifespan} years")
    print(f"Migration Pattern: {species2.migration_pattern}")

if __name__ == "__main__":
    main()


    # **African Music Festival:** You're in charge of organizing a Pan-African music
# festival. Many artists from different countries, each with their own musical style
# and instruments, are scheduled to perform. You need to write a program to
# manage the festival lineup, schedule, and stage arrangements. Think about how
# you might model the `Artist`, `Performance`, and `Stage` classes, and consider
# how you might use inheritance if there are different types of performances or
# stages.

# Sudo code 
# input
#  name, country, musical_style, instruments
# output

# steps
# Create a class Artist
# class
#  Performance
# Stage


class Artist:
    def __init__(self, name, country, musical_style, instruments):
        self.name = name
        self.country = country
        self.musical_style = musical_style
        self.instruments = instruments

class Performance:
    def __init__(self, artist, start_time, end_time):
        self.artist = artist
        self.start_time = start_time
        self.end_time = end_time

class Stage:
    def __init__(self, name, capacity):
        self.name = name
        self.capacity = capacity
        self.schedule = []

    def add_performance(self, performance):
        self.schedule.append(performance)

artist1 = Artist("Ann", "Kenyan", "loves ong", ["Malika", "it's ok"])
artist2 = Artist("Nyashinski", "Rwanda", "RMBS", ["sonoko", "imanwela"])
performance1 = Performance(artist1, "30:00", "21:30")
performance2 = Performance(artist2, "20:00", "28:30")
stage1 = Stage("Main Stage", 1000)
stage1.add_performance(performance1)
stage1.add_performance(performance2)

def main():
    print(f"Stage: {stage1.name}")
    print(f"Capacity: {stage1.capacity}")

    print("Schedule:")
    for performance in stage1.schedule:
        print(f"Artist: {performance.artist.name}")
        print(f"Country: {performance.artist.country}")
        print(f"Musical Style: {performance.artist.musical_style}")
        print(f"Instruments: {', '.join(performance.artist.instruments)}")
        print(f"Start Time: {performance.start_time}")
        print(f"End Time: {performance.end_time}")
        print()

if __name__ == "__main__":
    main()
# Create a class called Product with attributes for name, price, and quantity.
# Implement a method to calculate the total value of the product (price * quantity).
# Create multiple objects of the Product class and calculate their total values.\

# sudo code 

# input
# name, price, quantity

# output
# Product
# steps
# class Product
# attributies(name, price, quantity)
# method calculate_total_value

class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def calculate_total_value(self):
        return self.price * self.quantity

product1 = Product("Apple", 5.0, 15)
product2 = Product("Banana", 7.5, 5)
product3 = Product("Mango", 9.0, 18)

def main():
    products = [product1, product2, product3]

    total_value = 0
    for product in products:
        total_value += product.calculate_total_value()

    print(f"Total value of all products: ${total_value}")

if __name__ == "__main__":
    main()
# Implement a class called Student with attributes for name, age, and grades (a
# list of integers). Include methods to calculate the average grade, display the
# student information, and determine if the student has passed (average grade >=
# 60). Create objects for the Student class and demonstrate the usage of these
# methods.


# sudo code 
# input
# name, age, grades
# output 
# avareage grade
# steps
# class Student
# Attribute name, age, grades
# Methods calculate_average_grade,
# display_student_info,
# has_passed,
# has_passed
# variables 
# call it
# 

class Student:
    def __init__(self, name, age, grades):
        self.name = name
        self.age = age
        self.grades = grades

    def calculate_average_grade(self):
        return sum(self.grades) / len(self.grades)

    def display_student_info(self):
        print(f"Name: {self.name}")
        print(f"Age: {self.age}")
        print(f"Grades: {', '.join(map(str, self.grades))}")

    def has_passed(self):
        average_grade = self.calculate_average_grade()
        return average_grade >= 60

student1 = Student("Ann Mwangombe", 15, [70, 80, 54, 90, 70])
student2 = Student("Caroline Mwende", 20, [50, 64, 70, 50, 80])

def main():
    students = [student1, student2]

    for student in students:
        student.display_student_info()
        average_grade = student.calculate_average_grade()
        print(f"Average Grade: {average_grade}")
        if student.has_passed():
            print("Student has passed.")
        else:
            print("Student has not passed.")
        print()

if __name__ == "__main__":
    main()

    
