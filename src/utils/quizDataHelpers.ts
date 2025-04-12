import { Question as BaseQuestion } from "@/data/quizData";

// Define Category type based on BaseQuestion
type Category = "frontend" | "backend" | "general" | "database";

// Extend the Question type to include 'type' and 'language' properties
export interface Question extends BaseQuestion {
  type?: string;
  language?: Language;
  category: Category;  // Using the correct type
}

// Define Language type based on existing questions
export type Language = 
  | "JavaScript" 
  | "Java" 
  | "HTML" 
  | "CSS" 
  | "React" 
  | "Next.js" 
  | "Python" 
  | "TypeScript" 
  | "Tailwind CSS" 
  | "Bootstrap" 
  | "C" 
  | "C++" 
  | "Ruby" 
  | "Rust" 
  | "Other";

// Define Comment type
export interface Comment {
  id: string;
  questionId: string;
  username: string;
  comment: string;
  timestamp: string;
}

// Define QuizResult type
export interface QuizResult {
  id: string;
  username: string;
  language: Language;
  score: number;
  totalQuestions: number;
  timeSpent: number;
  timestamp: string;
}

// Mock leaderboard data
export const leaderboard: QuizResult[] = [
  {
    id: "r1",
    username: "CodeMaster",
    language: "JavaScript",
    score: 9,
    totalQuestions: 10,
    timeSpent: 150,
    timestamp: new Date().toISOString(),
  },
  {
    id: "r2",
    username: "DevNinja",
    language: "Python",
    score: 8,
    totalQuestions: 10,
    timeSpent: 180,
    timestamp: new Date().toISOString(),
  },
  {
    id: "r3",
    username: "WebWizard",
    language: "HTML",
    score: 10,
    totalQuestions: 10,
    timeSpent: 160,
    timestamp: new Date().toISOString(),
  }
];

// Mock comments
const comments: Comment[] = [
  {
    id: "c1",
    questionId: "js1",
    username: "CodeExplorer",
    comment: "This question is great for understanding closures!",
    timestamp: new Date().toISOString(),
  },
  {
    id: "c2",
    questionId: "js1",
    username: "JSEnthusiast",
    comment: "I found a simpler way to approach this problem.",
    timestamp: new Date().toISOString(),
  },
];

// Create dummy questions for multiple languages
const jsQuestions: Question[] = [
  {
    id: "js1",
    question: "What is a closure in JavaScript?",
    options: [
      "A function that returns another function",
      "A way to protect variables from being accessed outside",
      "A function that has access to variables in its outer scope",
      "A design pattern for object creation"
    ],
    correctAnswer: "2",
    explanation: "A closure is a function that has access to variables in its outer (enclosing) scope, even after the outer function has returned.",
    difficulty: "medium",
    type: "Concept",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js2",
    question: "Which of the following is NOT a primitive type in JavaScript?",
    options: [
      "string",
      "number",
      "boolean",
      "array"
    ],
    correctAnswer: "3",
    explanation: "Array is an object type, not a primitive. JavaScript primitives are: string, number, boolean, null, undefined, symbol, and bigint.",
    difficulty: "easy",
    type: "Fundamentals",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js3",
    question: "What is the output of: console.log(typeof null)?",
    options: [
      "null",
      "undefined",
      "object",
      "string"
    ],
    correctAnswer: "2",
    explanation: "In JavaScript, typeof null returns 'object', which is considered a historical bug.",
    difficulty: "medium",
    type: "Quirks",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js4",
    question: "What is the correct way to check if an object has a property?",
    options: [
      "obj.hasProperty('prop')",
      "obj.hasOwnProperty('prop')",
      "obj.contains('prop')",
      "'prop' in obj"
    ],
    correctAnswer: "1",
    explanation: "obj.hasOwnProperty('prop') checks if the object has the specified property as its own property (not inherited).",
    difficulty: "medium",
    type: "Objects",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js5",
    question: "Which method is used to serialize an object to a JSON string?",
    options: [
      "JSON.serialize()",
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.toString()"
    ],
    correctAnswer: "2",
    explanation: "JSON.stringify() converts a JavaScript object or value to a JSON string.",
    difficulty: "easy",
    type: "API",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js6",
    question: "What is event bubbling in JavaScript?",
    options: [
      "Creating multiple events at once",
      "When an event triggers on a nested element and then triggers on its ancestors",
      "Preventing events from firing",
      "A way to optimize event handling"
    ],
    correctAnswer: "1",
    explanation: "Event bubbling is when an event first triggers on the deepest target element, and then triggers on its ancestors.",
    difficulty: "medium",
    type: "Events",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js7",
    question: "What does the '===' operator do?",
    options: [
      "Checks equality, with type conversion",
      "Checks equality, without type conversion",
      "Assigns values",
      "Checks if one value is greater than another"
    ],
    correctAnswer: "1",
    explanation: "The strict equality operator (===) checks if the values are equal without any type conversion.",
    difficulty: "easy",
    type: "Operators",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js8",
    question: "What is a Promise in JavaScript?",
    options: [
      "A guarantee that a function will execute",
      "A proxy for a value not necessarily known when the promise is created",
      "A callback function",
      "A type of event handler"
    ],
    correctAnswer: "1",
    explanation: "A Promise is an object representing the eventual completion or failure of an asynchronous operation.",
    difficulty: "hard",
    type: "Async",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js9",
    question: "Which of the following is NOT a valid way to create an array?",
    options: [
      "let arr = new Array()",
      "let arr = []",
      "let arr = Array.create()",
      "let arr = Array.from('123')"
    ],
    correctAnswer: "2",
    explanation: "Array.create() is not a valid method. You can create arrays using [] syntax, new Array() constructor, or methods like Array.from().",
    difficulty: "medium",
    type: "Arrays",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js10",
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      "To reference the current HTML document",
      "To reference the current function",
      "To reference the object that the function is a property of",
      "To create new objects"
    ],
    correctAnswer: "2",
    explanation: "The 'this' keyword refers to the object that the function is a property of or the object that is currently being constructed.",
    difficulty: "hard",
    type: "Context",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js11",
    question: "What will console.log(1 + '2' + 3) output?",
    options: [
      "6",
      "123",
      "15",
      "Error"
    ],
    correctAnswer: "1",
    explanation: "JavaScript converts numbers to strings when using + with strings. So 1 + '2' becomes '12' and then '12' + 3 becomes '123'.",
    difficulty: "easy",
    type: "Type Coercion",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js12",
    question: "Which method removes the last element from an array?",
    options: [
      "shift()",
      "unshift()",
      "pop()",
      "push()"
    ],
    correctAnswer: "2",
    explanation: "The pop() method removes the last element from an array and returns that element.",
    difficulty: "easy",
    type: "Arrays",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js13",
    question: "What does the 'use strict' directive do?",
    options: [
      "Forces the browser to render faster",
      "Enables new JavaScript features",
      "Enforces stricter parsing and error handling",
      "Increases performance"
    ],
    correctAnswer: "2",
    explanation: "'use strict' puts the JavaScript engine in strict mode, which catches common coding mistakes and prevents unsafe actions.",
    difficulty: "medium",
    type: "Modes",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js14",
    question: "What is the correct way to define a function in JavaScript?",
    options: [
      "function = myFunction() {}",
      "function:myFunction() {}",
      "function myFunction() {}",
      "def myFunction() {}"
    ],
    correctAnswer: "2",
    explanation: "The correct syntax for function declaration in JavaScript is 'function myFunction() {}'.",
    difficulty: "easy",
    type: "Functions",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js15",
    question: "What is the output of: console.log(0.1 + 0.2 === 0.3)?",
    options: [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    correctAnswer: "1",
    explanation: "Due to floating-point precision issues in JavaScript, 0.1 + 0.2 is actually slightly more than 0.3, so the comparison returns false.",
    difficulty: "medium",
    type: "Numbers",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js16",
    question: "Which of these is NOT a valid JavaScript variable name?",
    options: [
      "_variable",
      "$variable",
      "1variable",
      "variable1"
    ],
    correctAnswer: "2",
    explanation: "Variable names cannot start with a number. They must begin with a letter, an underscore (_), or a dollar sign ($).",
    difficulty: "easy",
    type: "Syntax",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js17",
    question: "What does the map() method do?",
    options: [
      "Modifies the original array",
      "Creates a new array with the results of calling a function on every element",
      "Filters out elements that don't pass a test",
      "Combines all elements into a single value"
    ],
    correctAnswer: "1",
    explanation: "The map() method creates a new array with the results of calling a provided function on every element in the calling array.",
    difficulty: "medium",
    type: "Arrays",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js18",
    question: "What is the correct way to write a comment in JavaScript?",
    options: [
      "<!-- This is a comment -->",
      "// This is a comment",
      "/* This is a comment */",
      "Both B and C"
    ],
    correctAnswer: "3",
    explanation: "JavaScript supports single-line comments with // and multi-line comments with /* */.",
    difficulty: "easy",
    type: "Syntax",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js19",
    question: "What will be the output of: console.log(typeof [])?",
    options: [
      "array",
      "object",
      "undefined",
      "list"
    ],
    correctAnswer: "1",
    explanation: "In JavaScript, arrays are actually objects, so typeof [] returns 'object'.",
    difficulty: "medium",
    type: "Types",
    language: "JavaScript",
    category: "general"
  },
  {
    id: "js20",
    question: "What is a callback function?",
    options: [
      "A function that calls back to the server",
      "A function that gets executed after another function has finished",
      "A function that returns a value",
      "A function that throws an error"
    ],
    correctAnswer: "1",
    explanation: "A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.",
    difficulty: "medium",
    type: "Functions",
    language: "JavaScript",
    category: "general"
  }
];

const pythonQuestions: Question[] = [
  {
    id: "py1",
    question: "What is a Python generator?",
    options: [
      "A class that generates new objects",
      "A function that returns an iterable set of items",
      "A tool that automatically generates Python code",
      "A special type of array"
    ],
    correctAnswer: "1",
    explanation: "A generator is a function that returns an iterator that produces a sequence of values when iterated over.",
    difficulty: "medium",
    type: "Functions",
    language: "Python",
    category: "general"
  },
  {
    id: "py2",
    question: "In Python, which of the following is NOT a built-in data type?",
    options: [
      "list",
      "tuple",
      "array",
      "dictionary"
    ],
    correctAnswer: "2",
    explanation: "Arrays are not built-in data types in Python. The array module must be imported. The built-in data types are list, tuple, set, dict, etc.",
    difficulty: "easy",
    type: "Data Types",
    language: "Python",
    category: "general"
  },
  {
    id: "py3",
    question: "What will be the output of: print(2 ** 3)?",
    options: [
      "6",
      "5",
      "8",
      "Error"
    ],
    correctAnswer: "2",
    explanation: "The ** operator in Python represents exponentiation. So 2 ** 3 means 2 raised to the power of 3, which equals 8.",
    difficulty: "easy",
    type: "Operators",
    language: "Python",
    category: "general"
  },
  {
    id: "py4",
    question: "What is the purpose of __init__ method in Python?",
    options: [
      "To initialize a new instance of a class",
      "To destroy an instance of a class",
      "To import modules",
      "To define a static method"
    ],
    correctAnswer: "0",
    explanation: "The __init__ method is a special method (constructor) that gets called when a new instance of a class is created.",
    difficulty: "medium",
    type: "OOP",
    language: "Python",
    category: "general"
  },
  {
    id: "py5",
    question: "How do you create a virtual environment in Python?",
    options: [
      "python create venv",
      "python -m venv myenv",
      "python virtual myenv",
      "pip install venv"
    ],
    correctAnswer: "1",
    explanation: "The command to create a virtual environment is 'python -m venv <name>' where <name> is the name of the environment.",
    difficulty: "medium",
    type: "Tools",
    language: "Python",
    category: "general"
  },
  {
    id: "py6",
    question: "What will be the output of: print([1, 2, 3] + [4, 5, 6])?",
    options: [
      "[1, 2, 3, 4, 5, 6]",
      "[5, 7, 9]",
      "Error",
      "[[1, 2, 3], [4, 5, 6]]"
    ],
    correctAnswer: "0",
    explanation: "In Python, the + operator concatenates lists, so [1, 2, 3] + [4, 5, 6] results in [1, 2, 3, 4, 5, 6].",
    difficulty: "easy",
    type: "Lists",
    language: "Python",
    category: "general"
  },
  {
    id: "py7",
    question: "What is the difference between a list and a tuple in Python?",
    options: [
      "Lists are immutable, tuples are mutable",
      "Lists are ordered, tuples are unordered",
      "Tuples are immutable, lists are mutable",
      "There is no difference"
    ],
    correctAnswer: "2",
    explanation: "Lists are mutable (can be changed after creation), while tuples are immutable (cannot be modified after creation).",
    difficulty: "easy",
    type: "Data Types",
    language: "Python",
    category: "general"
  },
  {
    id: "py8",
    question: "What is a decorator in Python?",
    options: [
      "A design pattern",
      "A function that takes another function and extends its behavior",
      "A class attribute",
      "A type of loop"
    ],
    correctAnswer: "1",
    explanation: "A decorator is a function that takes another function and extends the behavior of the latter function without explicitly modifying it.",
    difficulty: "hard",
    type: "Functions",
    language: "Python",
    category: "general"
  },
  {
    id: "py9",
    question: "What does the len() function do in Python?",
    options: [
      "Returns the largest item in an iterable",
      "Returns the smallest item in an iterable",
      "Returns the length of an object",
      "Returns the data type of an object"
    ],
    correctAnswer: "2",
    explanation: "The len() function returns the number of items in an object (like a string, list, or tuple).",
    difficulty: "easy",
    type: "Built-ins",
    language: "Python",
    category: "general"
  },
  {
    id: "py10",
    question: "How do you open a file in Python for reading?",
    options: [
      "file = open('file.txt', 'r')",
      "file = open('file.txt', 'w')",
      "file = read('file.txt')",
      "file = file.open('file.txt')"
    ],
    correctAnswer: "0",
    explanation: "To open a file for reading in Python, use open() with 'r' mode: open('filename', 'r').",
    difficulty: "easy",
    type: "File I/O",
    language: "Python",
    category: "general"
  },
  {
    id: "py11",
    question: "What is PEP 8?",
    options: [
      "A Python extension package",
      "A style guide for Python code",
      "A Python error protocol",
      "A debugging tool"
    ],
    correctAnswer: "1",
    explanation: "PEP 8 is the style guide for Python code, providing conventions for writing clean, readable code.",
    difficulty: "medium",
    type: "Standards",
    language: "Python",
    category: "general"
  },
  {
    id: "py12",
    question: "What will be the output of: print(bool(''))?",
    options: [
      "True",
      "False",
      "None",
      "Error"
    ],
    correctAnswer: "1",
    explanation: "In Python, empty strings, empty lists, 0, None, etc. are considered False when converted to boolean.",
    difficulty: "easy",
    type: "Booleans",
    language: "Python",
    category: "general"
  },
  {
    id: "py13",
    question: "How do you create a lambda function in Python?",
    options: [
      "def lambda(x): return x*2",
      "lambda = x: x*2",
      "lambda x: x*2",
      "function lambda(x) { return x*2; }"
    ],
    correctAnswer: "2",
    explanation: "Lambda functions are created using the 'lambda' keyword followed by parameters and an expression: lambda x: x*2.",
    difficulty: "medium",
    type: "Functions",
    language: "Python",
    category: "general"
  },
  {
    id: "py14",
    question: "What is the correct way to import a module in Python?",
    options: [
      "import module",
      "#include module",
      "using module",
      "require module"
    ],
    correctAnswer: "0",
    explanation: "The correct way to import a module in Python is 'import module'.",
    difficulty: "easy",
    type: "Modules",
    language: "Python",
    category: "general"
  },
  {
    id: "py15",
    question: "What does the 'self' parameter refer to in a class method?",
    options: [
      "The class itself",
      "The instance of the class",
      "The parent class",
      "The module containing the class"
    ],
    correctAnswer: "1",
    explanation: "In a class method, 'self' refers to the instance of the class that the method is being called on.",
    difficulty: "medium",
    type: "OOP",
    language: "Python",
    category: "general"
  },
  {
    id: "py16",
    question: "What is a list comprehension in Python?",
    options: [
      "A way to understand complex lists",
      "A concise way to create lists",
      "A method to compress lists",
      "A function to explain lists"
    ],
    correctAnswer: "1",
    explanation: "List comprehension provides a concise way to create lists based on existing lists or other iterables.",
    difficulty: "medium",
    type: "Lists",
    language: "Python",
    category: "general"
  },
  {
    id: "py17",
    question: "What will be the output of: print(type(5/2))?",
    options: [
      "<class 'int'>",
      "<class 'float'>",
      "<class 'number'>",
      "<class 'division'>"
    ],
    correctAnswer: "1",
    explanation: "In Python 3, division with / always returns a float, even if the result is a whole number.",
    difficulty: "easy",
    type: "Types",
    language: "Python",
    category: "general"
  },
  {
    id: "py18",
    question: "Which of the following is NOT a valid way to comment in Python?",
    options: [
      "# This is a comment",
      "/* This is a comment */",
      "''' This is a comment '''",
      "\"\"\" This is a comment \"\"\""
    ],
    correctAnswer: "1",
    explanation: "Python does not support C-style comments like /* */. It uses # for single-line comments and triple quotes for multi-line comments.",
    difficulty: "easy",
    type: "Syntax",
    language: "Python",
    category: "general"
  },
  {
    id: "py19",
    question: "What is the purpose of the 'with' statement in Python?",
    options: [
      "To handle exceptions",
      "To define a new scope",
      "To ensure proper resource management",
      "To create conditional blocks"
    ],
    correctAnswer: "2",
    explanation: "The 'with' statement provides a way to ensure that a resource is properly cleaned up when the code using it is done, even if an error occurs.",
    difficulty: "medium",
    type: "Context Managers",
    language: "Python",
    category: "general"
  },
  {
    id: "py20",
    question: "What is the purpose of __name__ in Python?",
    options: [
      "To store the name of the current module",
      "To rename variables",
      "To define private attributes",
      "To create name spaces"
    ],
    correctAnswer: "0",
    explanation: "__name__ is a special variable that stores the name of the current module. It equals '__main__' when the module is run directly.",
    difficulty: "medium",
    type: "Modules",
    language: "Python",
    category: "general"
  }
];

const javaQuestions: Question[] = [
  {
    id: "java1",
    question: "What is the main difference between Java and JavaScript?",
    options: [
      "Java is compiled while JavaScript is interpreted",
      "Java is for frontend, JavaScript is for backend",
      "They are the same language with different names",
      "Java is older than JavaScript"
    ],
    correctAnswer: "0",
    explanation: "Java is a compiled language that runs on a virtual machine, while JavaScript is primarily an interpreted language that runs in a browser or with Node.js.",
    difficulty: "easy",
    type: "Concepts",
    language: "Java",
    category: "general"
  },
  {
    id: "java2",
    question: "Which keyword is used to inherit a class in Java?",
    options: [
      "implements",
      "inherits",
      "extends",
      "super"
    ],
    correctAnswer: "2",
    explanation: "In Java, the 'extends' keyword is used to create a subclass that inherits from another class.",
    difficulty: "easy",
    type: "OOP",
    language: "Java",
    category: "general"
  },
  {
    id: "java3",
    question: "What is the purpose of the 'final' keyword in Java?",
    options: [
      "To make a variable constant",
      "To terminate a program",
      "To finalize memory allocation",
      "To define the main method"
    ],
    correctAnswer: "0",
    explanation: "The 'final' keyword is used to make a variable constant (cannot be changed), a method cannot be overridden, or a class cannot be inherited.",
    difficulty: "medium",
    type: "Keywords",
    language: "Java",
    category: "general"
  },
  {
    id: "java4",
    question: "What is a Java package?",
    options: [
      "A collection of classes and interfaces",
      "A type of Java archive",
      "A hardware component",
      "A deployment tool"
    ],
    correctAnswer: "0",
    explanation: "A package in Java is a namespace that organizes a set of related classes and interfaces.",
    difficulty: "easy",
    type: "Basics",
    language: "Java",
    category: "general"
  },
  {
    id: "java5",
    question: "Which of these is NOT a primitive data type in Java?",
    options: [
      "int",
      "boolean",
      "String",
      "char"
    ],
    correctAnswer: "2",
    explanation: "String is not a primitive data type in Java. It's a class. Primitive data types in Java are byte, short, int, long, float, double, boolean, and char.",
    difficulty: "easy",
    type: "Data Types",
    language: "Java",
    category: "general"
  },
  {
    id: "java6",
    question: "What is the purpose of the 'static' keyword in Java?",
    options: [
      "To make a variable thread-safe",
      "To declare a variable or method that belongs to the class, not instances",
      "To prevent inheritance",
      "To improve memory allocation"
    ],
    correctAnswer: "1",
    explanation: "The 'static' keyword is used to declare members (variables and methods) that belong to the class itself rather than to instances of the class.",
    difficulty: "medium",
    type: "Keywords",
    language: "Java",
    category: "general"
  },
  {
    id: "java7",
    question: "What is an interface in Java?",
    options: [
      "A graphical user interface",
      "A collection of abstract methods",
      "A way to connect to databases",
      "A type of Java class"
    ],
    correctAnswer: "1",
    explanation: "An interface in Java is a reference type that contains a collection of abstract methods. Classes can implement interfaces to inherit these methods.",
    difficulty: "medium",
    type: "OOP",
    language: "Java",
    category: "general"
  },
  {
    id: "java8",
    question: "What is the correct way to create an array in Java?",
    options: [
      "int array[5];",
      "int[] array = new int[5];",
      "array int[5] = new array();",
      "int array = new int(5);"
    ],
    correctAnswer: "1",
    explanation: "The correct way to create an array in Java is: int[] array = new int[5]; or int array[] = new int[5];",
    difficulty: "easy",
    type: "Arrays",
    language: "Java",
    category: "general"
  },
  {
    id: "java9",
    question: "Which Java keyword is used to handle exceptions?",
    options: [
      "try",
      "handle",
      "except",
      "catch"
    ],
    correctAnswer: "0",
    explanation: "In Java, the 'try' keyword begins a block of code that might throw an exception, usually followed by catch blocks.",
    difficulty: "easy",
    type: "Exceptions",
    language: "Java",
    category: "general"
  },
  {
    id: "java10",
    question: "What is the Java Virtual Machine (JVM)?",
    options: [
      "A physical computer for running Java",
      "An integrated development environment",
      "A virtual environment that executes Java bytecode",
      "A compiler for Java code"
    ],
    correctAnswer: "2",
    explanation: "The JVM is an abstract computing machine that enables a computer to run Java programs by executing Java bytecode.",
    difficulty: "medium",
    type: "Concepts",
    language: "Java",
    category: "general"
  },
  {
    id: "java11",
    question: "What is method overloading in Java?",
    options: [
      "Defining multiple methods with the same name but different parameters",
      "Using too many methods in a class",
      "Overriding methods from a parent class",
      "A memory management technique"
    ],
    correctAnswer: "0",
    explanation: "Method overloading is defining multiple methods with the same name but different parameter lists in the same class.",
    difficulty: "medium",
    type: "OOP",
    language: "Java",
    category: "general"
  },
  {
    id: "java12",
    question: "What is the purpose of the 'super' keyword in Java?",
    options: [
      "To access methods of a subclass",
      "To call the superclass constructor or methods",
      "To create superior objects",
      "To improve performance"
    ],
    correctAnswer: "1",
    explanation: "The 'super' keyword refers to the parent class. It's used to call the parent class's constructor or access its methods and fields.",
    difficulty: "medium",
    type: "OOP",
    language: "Java",
    category: "general"
  },
  {
    id: "java13",
    question: "Which of the following is true about Java?",
    options: [
      "Java is a purely functional programming language",
      "Java supports operator overloading",
      "Java supports multiple inheritance through classes",
      "Java is platform-independent"
    ],
    correctAnswer: "3",
    explanation: "Java is platform-independent because Java programs are compiled to bytecode that can run on any device with a JVM.",
    difficulty: "medium",
    type: "Concepts",
    language: "Java",
    category: "general"
  },
  {
    id: "java14",
    question: "What is the main method signature in Java?",
    options: [
      "public void main(String args[])",
      "public static void main(String[] args)",
      "public static main(String args[])",
      "static void main(String[] args)"
    ],
    correctAnswer: "1",
    explanation: "The correct main method signature in Java is 'public static void main(String[] args)' or 'public static void main(String args[])'.",
    difficulty: "easy",
    type: "Basics",
    language: "Java",
    category: "general"
  },
  {
    id: "java15",
    question: "What is a Java annotation?",
    options: [
      "A type of comment",
      "A form of metadata about the code",
      "A debugging tool",
      "A way to encrypt code"
    ],
    correctAnswer: "1",
    explanation: "Annotations in Java provide metadata about the code. They can be used by the compiler, at runtime, or by development tools.",
    difficulty: "hard",
    type: "Advanced",
    language: "Java",
    category: "general"
  },
  {
    id: "java16",
    question: "What is a Java Servlet?",
    options: [
      "A small piece of Java code",
      "A server-side program that handles HTTP requests and responses",
      "A GUI component",
      "A type of Java operator"
    ],
    correctAnswer: "1",
    explanation: "A Servlet is a Java program that runs on a Java-enabled web server, handling HTTP requests and generating responses.",
    difficulty: "hard",
    type: "Web",
    language: "Java",
    category: "general"
  },
  {
    id: "java17",
    question: "What is the difference between '==' and 'equals()' in Java?",
    options: [
      "They are identical in function",
      "'==' compares references while equals() compares contents",
      "'==' is for strings, equals() is for other objects",
      "'==' compares primitive values, equals() compares object contents"
    ],
    correctAnswer: "2",
    explanation: "'==' is for strings, equals() is for other objects",
    difficulty: "medium",
    type: "Operators",
    language: "Java",
    category: "general"
  },
];

// Combine all questions into a single array
export const questions: Question[] = [
  ...jsQuestions,
  ...pythonQuestions,
  ...javaQuestions
];

// Function to get questions by language
export const getQuestionsByLanguage = (language: Language): Question[] => {
  return questions.filter(q => q.language === language);
};

// Function to get comments by question ID
export const getCommentsByQuestionId = (questionId: string): Comment[] => {
  return comments.filter(c => c.questionId === questionId);
};
