## Geometric shapes!

1. Create three classes: Square, Rectangle and Circle in separate files:
e.g. Circle.js, Rectangle.js and Square.js. These files have to reside in your solution directory.
Provide them with fields (properties) required to calculate their areas
and encapsulate these fields using getters and setters.

2. Provide each with a method calculateArea() which returns a number.

3. Provide each with a method calculatePerimeter() which returns a number.

4. Create a separate file main.js in your solution directory and import your classes (check how to export them first!)

Once done, create 1 of each object and put them to a list.

5. Write a function that loops through a list of objects and returns a list of
their areas.

6. Write a function that loops through a list of objects and returns a list of their 
perimeters.

7. Call the functions and console.log the outputs.


### BONUS:
8. Write a function that loops throught a lisf of objects and returns a list of 
objects with type as keys (e.g. "square", "circle", "rectangle") and values:
{"perimeter": "actualPerimeterValue", "area": "actualAreaValue"}.

End result should look like this:
```
[
     "square": {
         {
             "perimeter": 10,
             "area": 20
         }
     },
     "circle": {
         {
             "perimeter": 20,
             "area": 40
         }
     },
     ...(etc)
]
```

Cannot create new classes for this!
Once done, call the function and console.log the result.

P.S. Let's say PI is 3.14

Good luck!
