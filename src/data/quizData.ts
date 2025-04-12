
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  category: "frontend" | "backend" | "general" | "database";
}

export interface QuizData {
  [language: string]: Question[];
}

const quizData: QuizData = {
  javascript: [
    {
      id: "js1",
      question: "What is the output of: console.log(typeof null)?",
      options: ["null", "object", "undefined", "number"],
      correctAnswer: "object",
      explanation: "In JavaScript, typeof null returns 'object', which is actually a bug that has persisted since the early days of JavaScript.",
      difficulty: "easy",
      category: "frontend"
    },
    {
      id: "js2",
      question: "Which method is used to add elements to the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "push()",
      explanation: "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
      difficulty: "easy",
      category: "frontend"
    },
    {
      id: "js3",
      question: "What does the '===' operator do in JavaScript?",
      options: ["Checks for equality", "Checks for equality and type", "Assigns value", "Checks if greater than"],
      correctAnswer: "Checks for equality and type",
      explanation: "The strict equality operator (===) checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, it doesn't perform type conversion.",
      difficulty: "easy",
      category: "frontend"
    },
    {
      id: "js4",
      question: "What is a closure in JavaScript?",
      options: [
        "A styling property",
        "A function that has access to its outer function's variables",
        "A method to close a window",
        "A data structure"
      ],
      correctAnswer: "A function that has access to its outer function's variables",
      explanation: "A closure is the combination of a function bundled together with references to its surrounding state (lexical environment).",
      difficulty: "medium",
      category: "frontend"
    },
    {
      id: "js5",
      question: "Which of these is NOT a JavaScript data type?",
      options: ["Symbol", "Integer", "BigInt", "Boolean"],
      correctAnswer: "Integer",
      explanation: "JavaScript has no 'Integer' type. Numbers in JavaScript are represented as 'number' type which can be integers or floating points.",
      difficulty: "medium",
      category: "frontend"
    },
    {
      id: "js6",
      question: "What is the purpose of the 'async/await' feature?",
      options: [
        "To make functions run faster",
        "To make asynchronous code look synchronous",
        "To avoid using functions",
        "To prevent errors"
      ],
      correctAnswer: "To make asynchronous code look synchronous",
      explanation: "Async/await is a syntax feature that allows asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need for explicitly configured promise chains.",
      difficulty: "hard",
      category: "frontend"
    },
    {
      id: "js7",
      question: "What is event bubbling in JavaScript?",
      options: [
        "When an event triggers on a nested element and propagates up",
        "When events are queued in the event loop",
        "When events are canceled",
        "When the DOM creates new nodes"
      ],
      correctAnswer: "When an event triggers on a nested element and propagates up",
      explanation: "Event bubbling is a mechanism where an event triggered on the deepest element will also trigger on all its ancestor elements up through the DOM tree.",
      difficulty: "medium",
      category: "frontend"
    },
    {
      id: "js8",
      question: "Which function is used to parse a string into an integer?",
      options: ["Integer.parse()", "parseInteger()", "parseInt()", "Number.parseInt()"],
      correctAnswer: "parseInt()",
      explanation: "The parseInt() function parses a string and returns an integer. Both parseInt() and Number.parseInt() are valid, but parseInt() is more commonly used.",
      difficulty: "easy",
      category: "frontend"
    },
    {
      id: "js9",
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: [
        "It always refers to the global object",
        "It refers to the object on which the current function is called",
        "It refers to the next function in the call stack",
        "It refers to the previous function in the call stack"
      ],
      correctAnswer: "It refers to the object on which the current function is called",
      explanation: "The value of 'this' depends on how the function is called. It can be set explicitly using call(), apply(), or bind().",
      difficulty: "medium",
      category: "frontend"
    },
    {
      id: "js10",
      question: "What is a Promise in JavaScript?",
      options: [
        "A guarantee that a function will execute",
        "An object representing a future value, usually from an asynchronous operation",
        "A way to lock variables",
        "A special type of loop"
      ],
      correctAnswer: "An object representing a future value, usually from an asynchronous operation",
      explanation: "A Promise is an object that may produce a single value sometime in the future: either a resolved value or a reason it wasn't resolved (rejected).",
      difficulty: "hard",
      category: "frontend"
    }
  ],
  typescript: [
    {
      id: "ts1",
      question: "What is TypeScript?",
      options: [
        "A new programming language",
        "A superset of JavaScript that adds static types",
        "A JavaScript framework",
        "A JavaScript compiler"
      ],
      correctAnswer: "A superset of JavaScript that adds static types",
      explanation: "TypeScript is a programming language developed by Microsoft that adds static typing to JavaScript. It is a superset of JavaScript, meaning any valid JavaScript is also valid TypeScript.",
      difficulty: "easy",
      category: "frontend"
    },
    {
      id: "ts2",
      question: "What symbol is used to define a type annotation in TypeScript?",
      options: ["=>", "->", ":", "::"],
      correctAnswer: ":",
      explanation: "In TypeScript, you use a colon (:) followed by the type to annotate variables, parameters, and return types.",
      difficulty: "easy",
      category: "frontend"
    },
    {
      id: "ts3",
      question: "What does the 'interface' keyword do in TypeScript?",
      options: [
        "Creates a new class",
        "Defines a contract that objects must follow",
        "Creates a function",
        "Imports external modules"
      ],
      correctAnswer: "Defines a contract that objects must follow",
      explanation: "An interface in TypeScript defines a structure that objects must adhere to. It specifies what properties and methods an object should have.",
      difficulty: "medium",
      category: "frontend"
    },
    {
      id: "ts4",
      question: "What is a 'generic' in TypeScript?",
      options: [
        "A built-in type",
        "A way to create reusable components that work with multiple types",
        "A method to convert between types",
        "A special kind of class"
      ],
      correctAnswer: "A way to create reusable components that work with multiple types",
      explanation: "Generics allow you to create reusable functions, classes, or interfaces that can work with different types while maintaining type safety.",
      difficulty: "hard",
      category: "frontend"
    },
    {
      id: "ts5",
      question: "What is the 'any' type in TypeScript?",
      options: [
        "A type that can represent any value with no type checking",
        "A type that represents only numeric values",
        "A type that represents only string values",
        "A type that represents only boolean values"
      ],
      correctAnswer: "A type that can represent any value with no type checking",
      explanation: "The 'any' type is a special type in TypeScript that allows a variable to hold values of any type and disables type checking for that variable.",
      difficulty: "easy",
      category: "frontend"
    },
    {
      id: "ts6",
      question: "What is the purpose of the 'readonly' modifier?",
      options: [
        "It makes a property visible only within its class",
        "It prevents a property from being changed after initialization",
        "It makes a property optional",
        "It prevents a class from being extended"
      ],
      correctAnswer: "It prevents a property from being changed after initialization",
      explanation: "The 'readonly' modifier prevents assignments to a property other than in the constructor, making it immutable after initialization.",
      difficulty: "medium",
      category: "frontend"
    },
    {
      id: "ts7",
      question: "What is a Union Type in TypeScript?",
      options: [
        "A type that can be one of several types",
        "A type that combines all properties of two types",
        "A type that must include all specified types",
        "A special type for arrays"
      ],
      correctAnswer: "A type that can be one of several types",
      explanation: "A Union Type in TypeScript allows a value to be of one of several types, using the | operator (e.g., string | number).",
      difficulty: "medium",
      category: "frontend"
    },
    {
      id: "ts8",
      question: "What is the difference between 'interface' and 'type' in TypeScript?",
      options: [
        "They are exactly the same",
        "Interfaces can be extended, types cannot",
        "Types can use unions, interfaces cannot",
        "Interfaces can be implemented by classes, types cannot"
      ],
      correctAnswer: "Interfaces can be extended, types cannot",
      explanation: "While there is significant overlap between 'interface' and 'type', interfaces can be extended with the 'extends' keyword and can be reopened to add new properties, while types cannot.",
      difficulty: "hard",
      category: "frontend"
    },
    {
      id: "ts9",
      question: "What is the '!' operator used for in TypeScript?",
      options: [
        "Logical NOT",
        "Non-null assertion",
        "Optional chaining",
        "Equality check"
      ],
      correctAnswer: "Non-null assertion",
      explanation: "The non-null assertion operator (!) tells the TypeScript compiler that a variable cannot be null or undefined, even if the type suggests it might be.",
      difficulty: "medium",
      category: "frontend"
    },
    {
      id: "ts10",
      question: "What is a TypeScript enum?",
      options: [
        "A way to define a set of named constants",
        "A type of function",
        "A special class that cannot be instantiated",
        "A type of array"
      ],
      correctAnswer: "A way to define a set of named constants",
      explanation: "Enums in TypeScript allow you to define a set of named constants, making it easier to document intent or create a set of distinct cases.",
      difficulty: "medium",
      category: "frontend"
    }
  ],
  python: [
    {
      id: "py1",
      question: "What is Python?",
      options: [
        "A snake species",
        "A high-level, interpreted programming language",
        "A database management system",
        "A web framework"
      ],
      correctAnswer: "A high-level, interpreted programming language",
      explanation: "Python is a high-level, interpreted programming language known for its readability and versatility.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "py2",
      question: "How do you create a list in Python?",
      options: [
        "list = (1, 2, 3)",
        "list = [1, 2, 3]",
        "list = {1, 2, 3}",
        "list = <1, 2, 3>"
      ],
      correctAnswer: "list = [1, 2, 3]",
      explanation: "In Python, lists are created using square brackets [].",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "py3",
      question: "What is the correct way to define a function in Python?",
      options: [
        "function myFunc():",
        "def myFunc():",
        "func myFunc():",
        "define myFunc():"
      ],
      correctAnswer: "def myFunc():",
      explanation: "In Python, functions are defined using the 'def' keyword followed by the function name and parameters.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "py4",
      question: "What is a dictionary in Python?",
      options: [
        "A book that contains word definitions",
        "A data structure that stores key-value pairs",
        "A list of functions",
        "A type of loop"
      ],
      correctAnswer: "A data structure that stores key-value pairs",
      explanation: "A dictionary in Python is a collection of key-value pairs, where each key is unique and maps to a value.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "py5",
      question: "What is a decorator in Python?",
      options: [
        "A function that modifies another function",
        "A design pattern",
        "A type of comment",
        "A special variable"
      ],
      correctAnswer: "A function that modifies another function",
      explanation: "A decorator is a function that takes another function as an argument, extends its behavior, and returns the modified function.",
      difficulty: "hard",
      category: "backend"
    },
    {
      id: "py6",
      question: "What does the 'self' parameter in a class method represent?",
      options: [
        "The class itself",
        "The current instance of the class",
        "A required parameter name",
        "The parent class"
      ],
      correctAnswer: "The current instance of the class",
      explanation: "In Python class methods, 'self' refers to the instance of the class that is calling the method.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "py7",
      question: "What is a list comprehension in Python?",
      options: [
        "A way to understand lists better",
        "A compact way to create lists based on existing lists",
        "A method to sort lists",
        "A way to concatenate lists"
      ],
      correctAnswer: "A compact way to create lists based on existing lists",
      explanation: "List comprehension provides a concise way to create lists based on existing lists or other iterables.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "py8",
      question: "What is the difference between '==' and 'is' in Python?",
      options: [
        "They are exactly the same",
        "'==' compares values, 'is' compares object identity",
        "'==' is for numbers, 'is' is for strings",
        "'==' is slower than 'is'"
      ],
      correctAnswer: "'==' compares values, 'is' compares object identity",
      explanation: "The '==' operator compares if two objects have the same value, while 'is' checks if they are the same object in memory.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "py9",
      question: "What are Python generators?",
      options: [
        "Functions that produce electricity",
        "Functions that generate random numbers",
        "Functions that return an iterable set of items",
        "Classes that create objects"
      ],
      correctAnswer: "Functions that return an iterable set of items",
      explanation: "Generators are functions that can yield values one at a time, allowing for efficient iteration over a potentially large sequence.",
      difficulty: "hard",
      category: "backend"
    },
    {
      id: "py10",
      question: "What is PEP 8?",
      options: [
        "A Python version",
        "A Python style guide",
        "A Python error code",
        "A Python framework"
      ],
      correctAnswer: "A Python style guide",
      explanation: "PEP 8 is the style guide for Python code, providing conventions for writing readable code.",
      difficulty: "medium",
      category: "backend"
    }
  ],
  java: [
    {
      id: "java1",
      question: "What is Java?",
      options: [
        "A type of coffee",
        "An object-oriented programming language",
        "A scripting language",
        "A markup language"
      ],
      correctAnswer: "An object-oriented programming language",
      explanation: "Java is a popular object-oriented programming language designed to be platform-independent through the use of the Java Virtual Machine (JVM).",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "java2",
      question: "What is the main method signature in Java?",
      options: [
        "public void main(String[] args)",
        "public static void main(String[] args)",
        "static void main(String args[])",
        "void main(String args[])"
      ],
      correctAnswer: "public static void main(String[] args)",
      explanation: "The main method in Java must be declared as public static void main with a String array parameter, which serves as the entry point of a Java application.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "java3",
      question: "What is inheritance in Java?",
      options: [
        "The process of acquiring properties",
        "A mechanism where a class can inherit properties and behaviors from another class",
        "A way to initialize objects",
        "A type of variable"
      ],
      correctAnswer: "A mechanism where a class can inherit properties and behaviors from another class",
      explanation: "Inheritance is a fundamental OOP concept in Java where a class can inherit fields and methods from another class, promoting code reuse and establishing a relationship between classes.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "java4",
      question: "What is polymorphism in Java?",
      options: [
        "The ability to create multiple methods",
        "The ability to create multiple classes",
        "The ability of an object to take on many forms",
        "The ability to create multiple variables"
      ],
      correctAnswer: "The ability of an object to take on many forms",
      explanation: "Polymorphism in Java allows methods to do different things based on the object it is acting upon, allowing a single interface to be used for different underlying forms.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "java5",
      question: "What is the difference between == and equals() in Java?",
      options: [
        "There is no difference",
        "== compares references, equals() compares contents",
        "== compares contents, equals() compares references",
        "== is for primitives, equals() is for objects"
      ],
      correctAnswer: "== compares references, equals() compares contents",
      explanation: "In Java, == operator compares whether two references point to the same object, while the equals() method compares the contents of objects.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "java6",
      question: "What is the purpose of the 'final' keyword in Java?",
      options: [
        "To indicate the last variable in a program",
        "To make a variable, method, or class unchangeable",
        "To finalize memory allocation",
        "To mark the end of a program"
      ],
      correctAnswer: "To make a variable, method, or class unchangeable",
      explanation: "The 'final' keyword in Java is used to restrict the user from changing the value of a variable, overriding a method, or extending a class.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "java7",
      question: "What is an interface in Java?",
      options: [
        "A graphical user interface",
        "A blueprint of a class that has static constants and abstract methods",
        "A type of class that contains only fields",
        "A way to access private methods"
      ],
      correctAnswer: "A blueprint of a class that has static constants and abstract methods",
      explanation: "An interface in Java is a reference type that can contain abstract methods, default methods, static methods, and constants. It is used to achieve abstraction and multiple inheritance.",
      difficulty: "hard",
      category: "backend"
    },
    {
      id: "java8",
      question: "What is the purpose of the 'super' keyword in Java?",
      options: [
        "To access supercomputer functionality",
        "To call the superclass constructor or methods",
        "To create a superior quality object",
        "To mark a variable as important"
      ],
      correctAnswer: "To call the superclass constructor or methods",
      explanation: "The 'super' keyword in Java is used to refer to the immediate parent class object, allowing you to call superclass methods and constructors.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "java9",
      question: "What is a Java package?",
      options: [
        "A physical box containing Java code",
        "A namespace that organizes a set of related classes and interfaces",
        "A compressed file of Java code",
        "A delivery service for Java applications"
      ],
      correctAnswer: "A namespace that organizes a set of related classes and interfaces",
      explanation: "A package in Java is a namespace that organizes a set of related classes and interfaces, helping to avoid naming conflicts and providing access control.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "java10",
      question: "What is an exception in Java?",
      options: [
        "A rule that doesn't apply to everyone",
        "An error that occurs during program execution",
        "A special permission granted to a program",
        "A type of variable that can hold any value"
      ],
      correctAnswer: "An error that occurs during program execution",
      explanation: "An exception in Java is an event that disrupts the normal flow of program execution. Java provides mechanisms to handle exceptions using try, catch, finally, throw, and throws keywords.",
      difficulty: "medium",
      category: "backend"
    }
  ],
  "c++": [
    {
      id: "cpp1",
      question: "What is C++?",
      options: [
        "A markup language",
        "A general-purpose programming language",
        "A database system",
        "A operating system"
      ],
      correctAnswer: "A general-purpose programming language",
      explanation: "C++ is a general-purpose programming language created as an extension of the C programming language, with features like classes and objects.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "cpp2",
      question: "What does 'cout' stand for in C++?",
      options: [
        "Console Output",
        "Character Output",
        "Common Output",
        "Class Output"
      ],
      correctAnswer: "Console Output",
      explanation: "'cout' in C++ stands for 'console output' and is used to output/print information to the standard output device, usually the screen.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "cpp3",
      question: "What is a reference in C++?",
      options: [
        "A pointer to a pointer",
        "An alias for an existing variable",
        "A memory location",
        "A new type of variable"
      ],
      correctAnswer: "An alias for an existing variable",
      explanation: "A reference in C++ is an alias for an existing variable. Once initialized, a reference cannot be changed to refer to another variable.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "cpp4",
      question: "What is the difference between 'new' and 'malloc' in C++?",
      options: [
        "They are exactly the same",
        "'new' calls constructors, 'malloc' does not",
        "'malloc' is faster than 'new'",
        "'new' is for classes, 'malloc' is for primitives"
      ],
      correctAnswer: "'new' calls constructors, 'malloc' does not",
      explanation: "In C++, 'new' is an operator that allocates memory and calls constructors for object initialization, while 'malloc' is a function that only allocates memory without calling constructors.",
      difficulty: "hard",
      category: "backend"
    },
    {
      id: "cpp5",
      question: "What is polymorphism in C++?",
      options: [
        "The ability to create multiple classes",
        "The ability to have multiple forms",
        "The ability to create multiple objects",
        "The ability to use multiple compilers"
      ],
      correctAnswer: "The ability to have multiple forms",
      explanation: "Polymorphism in C++ allows objects of different classes to be treated as objects of a common base class, enabling functions to handle objects differently based on their actual types.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "cpp6",
      question: "What is a virtual function in C++?",
      options: [
        "A function that doesn't exist",
        "A function declared with the 'virtual' keyword that can be overridden in derived classes",
        "A function that runs virtually on a VM",
        "A placeholder function"
      ],
      correctAnswer: "A function declared with the 'virtual' keyword that can be overridden in derived classes",
      explanation: "A virtual function in C++ is a member function declared within a base class and redefined in derived classes. It ensures that the correct function is called for an object, regardless of the reference type used.",
      difficulty: "hard",
      category: "backend"
    },
    {
      id: "cpp7",
      question: "What is a constructor in C++?",
      options: [
        "A function that builds computer hardware",
        "A special member function that initializes objects of its class",
        "A function that constructs data structures",
        "A compiler directive"
      ],
      correctAnswer: "A special member function that initializes objects of its class",
      explanation: "A constructor in C++ is a special member function that is automatically called when an object is created, used to initialize the object's data members.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "cpp8",
      question: "What is the purpose of the 'const' keyword in C++?",
      options: [
        "To make variables changeable",
        "To declare constant variables that cannot be modified",
        "To create constant functions",
        "To allocate memory"
      ],
      correctAnswer: "To declare constant variables that cannot be modified",
      explanation: "The 'const' keyword in C++ is used to declare objects or variables that cannot be modified after initialization, or to indicate that a method does not modify the state of an object.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "cpp9",
      question: "What is a namespace in C++?",
      options: [
        "A naming convention",
        "A container for variables and functions with a specific scope",
        "A memory allocation technique",
        "A type of class"
      ],
      correctAnswer: "A container for variables and functions with a specific scope",
      explanation: "A namespace in C++ is a feature that allows grouping of entities like classes, objects, and functions under a specific name, helping to avoid naming conflicts.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "cpp10",
      question: "What is an STL in C++?",
      options: [
        "Standard Template Library",
        "Simple Type Language",
        "System Type Locator",
        "String Translation Layer"
      ],
      correctAnswer: "Standard Template Library",
      explanation: "The Standard Template Library (STL) in C++ is a set of template classes that provide general-purpose classes and functions with templates that implement many common data structures and algorithms.",
      difficulty: "hard",
      category: "backend"
    }
  ],
  ruby: [
    {
      id: "ruby1",
      question: "What is Ruby?",
      options: [
        "A precious gemstone",
        "A dynamic, object-oriented programming language",
        "A database management system",
        "A markup language"
      ],
      correctAnswer: "A dynamic, object-oriented programming language",
      explanation: "Ruby is a dynamic, interpreted, object-oriented programming language designed for simplicity and productivity.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "ruby2",
      question: "What symbol is used for string interpolation in Ruby?",
      options: ["${}", "#{}", "@{}", "<<{}"],
      correctAnswer: "#{}",
      explanation: "In Ruby, string interpolation is done using the #{} syntax within double-quoted strings.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "ruby3",
      question: "What is a Symbol in Ruby?",
      options: [
        "A type of string",
        "An immutable object representing a name or identifier",
        "A special type of array",
        "A function declaration"
      ],
      correctAnswer: "An immutable object representing a name or identifier",
      explanation: "Symbols in Ruby are immutable objects representing names or identifiers, often used as hash keys due to their memory efficiency.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "ruby4",
      question: "What is a block in Ruby?",
      options: [
        "A section of code enclosed in do...end or braces",
        "A type of variable",
        "A database structure",
        "A type of error"
      ],
      correctAnswer: "A section of code enclosed in do...end or braces",
      explanation: "A block in Ruby is a chunk of code enclosed within do...end or {...} that can be passed to methods, often used for iteration or callbacks.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "ruby5",
      question: "What is the difference between puts and print in Ruby?",
      options: [
        "There is no difference",
        "puts adds a newline at the end, print does not",
        "print adds a newline at the end, puts does not",
        "puts prints to STDOUT, print to STDERR"
      ],
      correctAnswer: "puts adds a newline at the end, print does not",
      explanation: "In Ruby, puts automatically appends a newline character after printing output, while print does not add a newline.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "ruby6",
      question: "What is a gem in Ruby?",
      options: [
        "A precious stone",
        "A package containing Ruby code, similar to a library",
        "A variable type",
        "A built-in method"
      ],
      correctAnswer: "A package containing Ruby code, similar to a library",
      explanation: "A gem in Ruby is a packaged library or application that can be installed and used in Ruby projects, similar to packages in other languages.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "ruby7",
      question: "What does attr_accessor do in Ruby?",
      options: [
        "Creates getters and setters for instance variables",
        "Creates only getter methods",
        "Creates only setter methods",
        "Restricts access to instance variables"
      ],
      correctAnswer: "Creates getters and setters for instance variables",
      explanation: "attr_accessor is a Ruby method that automatically creates getter and setter methods for instance variables, making it easier to work with object properties.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "ruby8",
      question: "What is the difference between an Array and a Hash in Ruby?",
      options: [
        "Arrays store key-value pairs, Hashes store ordered lists",
        "Arrays store ordered lists, Hashes store key-value pairs",
        "Arrays can only store strings, Hashes can store any data type",
        "Arrays are mutable, Hashes are immutable"
      ],
      correctAnswer: "Arrays store ordered lists, Hashes store key-value pairs",
      explanation: "In Ruby, Arrays are ordered collections indexed by integers (starting at 0), while Hashes are collections of key-value pairs.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "ruby9",
      question: "What is a module in Ruby?",
      options: [
        "A type of class",
        "A collection of methods and constants that can be included in classes",
        "A way to organize files",
        "A special type of variable"
      ],
      correctAnswer: "A collection of methods and constants that can be included in classes",
      explanation: "A module in Ruby is a collection of methods, constants, and classes that can be mixed into classes using include or extend, facilitating code reuse without inheritance.",
      difficulty: "hard",
      category: "backend"
    },
    {
      id: "ruby10",
      question: "What is the purpose of 'yield' in Ruby?",
      options: [
        "To stop program execution",
        "To call a block passed to a method",
        "To return a value from a method",
        "To import modules"
      ],
      correctAnswer: "To call a block passed to a method",
      explanation: "The 'yield' keyword in Ruby is used within a method to call a block that was passed to the method, allowing for customizable behavior.",
      difficulty: "hard",
      category: "backend"
    }
  ],
  sql: [
    {
      id: "sql1",
      question: "What is SQL?",
      options: [
        "Sequential Query Language",
        "Structured Question Language",
        "Structured Query Language",
        "Simple Query Language"
      ],
      correctAnswer: "Structured Query Language",
      explanation: "SQL (Structured Query Language) is a domain-specific language used for managing and manipulating relational databases.",
      difficulty: "easy",
      category: "database"
    },
    {
      id: "sql2",
      question: "Which SQL command is used to retrieve data from a database?",
      options: ["GET", "RETRIEVE", "SELECT", "FETCH"],
      correctAnswer: "SELECT",
      explanation: "The SELECT statement is used to retrieve data from one or more tables in a database.",
      difficulty: "easy",
      category: "database"
    },
    {
      id: "sql3",
      question: "What does the WHERE clause do in a SQL query?",
      options: [
        "Specifies the table to query",
        "Filters records based on a condition",
        "Orders the result set",
        "Groups the result set"
      ],
      correctAnswer: "Filters records based on a condition",
      explanation: "The WHERE clause in SQL is used to filter records and extract only those that fulfill a specified condition.",
      difficulty: "easy",
      category: "database"
    },
    {
      id: "sql4",
      question: "What is a foreign key in SQL?",
      options: [
        "A key from another country",
        "A password for database access",
        "A field that links to the primary key of another table",
        "The main key of a table"
      ],
      correctAnswer: "A field that links to the primary key of another table",
      explanation: "A foreign key in SQL is a field in one table that refers to the primary key in another table, establishing a relationship between the tables.",
      difficulty: "medium",
      category: "database"
    },
    {
      id: "sql5",
      question: "What is the purpose of the JOIN clause in SQL?",
      options: [
        "To combine rows from two or more tables",
        "To split a table into multiple tables",
        "To join multiple SQL statements",
        "To connect to a database"
      ],
      correctAnswer: "To combine rows from two or more tables",
      explanation: "The JOIN clause in SQL is used to combine rows from two or more tables based on a related column between them.",
      difficulty: "medium",
      category: "database"
    },
    {
      id: "sql6",
      question: "What is the difference between HAVING and WHERE in SQL?",
      options: [
        "They are exactly the same",
        "WHERE filters rows before grouping, HAVING filters after grouping",
        "HAVING filters rows before grouping, WHERE filters after grouping",
        "WHERE is for SELECT, HAVING is for INSERT"
      ],
      correctAnswer: "WHERE filters rows before grouping, HAVING filters after grouping",
      explanation: "In SQL, the WHERE clause filters rows before they are grouped, while the HAVING clause filters groups after the GROUP BY clause has been applied.",
      difficulty: "hard",
      category: "database"
    },
    {
      id: "sql7",
      question: "What is the purpose of the GROUP BY statement in SQL?",
      options: [
        "To sort records in a specific order",
        "To group rows that have the same values into summary rows",
        "To filter out rows that don't meet a condition",
        "To join tables together"
      ],
      correctAnswer: "To group rows that have the same values into summary rows",
      explanation: "The GROUP BY statement in SQL groups rows that have the same values in specified columns into summary rows, often used with aggregate functions.",
      difficulty: "medium",
      category: "database"
    },
    {
      id: "sql8",
      question: "What is an SQL injection attack?",
      options: [
        "When a database is physically damaged",
        "When a malicious code is injected into SQL statements via input data",
        "When too many queries slow down a database",
        "When data is accidentally duplicated"
      ],
      correctAnswer: "When a malicious code is injected into SQL statements via input data",
      explanation: "SQL injection is a code injection technique where malicious SQL statements are inserted into entry fields, usually to gain unauthorized access to a database.",
      difficulty: "hard",
      category: "database"
    },
    {
      id: "sql9",
      question: "What is the purpose of the DISTINCT keyword in SQL?",
      options: [
        "To highlight important columns",
        "To hide specific columns",
        "To return only unique values",
        "To separate query results"
      ],
      correctAnswer: "To return only unique values",
      explanation: "The DISTINCT keyword in SQL is used to return only unique (different) values in the result set, eliminating duplicates.",
      difficulty: "medium",
      category: "database"
    },
    {
      id: "sql10",
      question: "What does the ORDER BY clause do in SQL?",
      options: [
        "Filters rows based on conditions",
        "Sorts the result set in ascending or descending order",
        "Groups rows with the same values",
        "Joins tables together"
      ],
      correctAnswer: "Sorts the result set in ascending or descending order",
      explanation: "The ORDER BY clause in SQL is used to sort the result set in ascending or descending order based on one or more columns.",
      difficulty: "easy",
      category: "database"
    }
  ],
  react: [
    {
      id: "react1",
      question: "What is React?",
      options: [
        "A programming language",
        "A JavaScript library for building user interfaces",
        "A database management system",
        "An operating system"
      ],
      correctAnswer: "A JavaScript library for building user interfaces",
      explanation: "React is a JavaScript library developed by Facebook for building interactive user interfaces, particularly single-page applications.",
      difficulty: "easy",
      category: "frontend"
    },
    {
      id: "react2",
      question: "What is JSX?",
      options: [
        "A database query language",
        "A JavaScript extension syntax that looks similar to HTML",
        "A JavaScript compiler",
        "A React class method"
      ],
      correctAnswer: "A JavaScript extension syntax that looks similar to HTML",
      explanation: "JSX is a syntax extension for JavaScript recommended by React that allows you to write HTML-like code in your JavaScript files.",
      difficulty: "easy",
      category: "frontend"
    },
    {
      id: "react3",
      question: "What is a React component?",
      options: [
        "A function that returns database results",
        "A reusable piece of UI that returns React elements",
        "A CSS framework",
        "A JavaScript variable"
      ],
      correctAnswer: "A reusable piece of UI that returns React elements",
      explanation: "A React component is a reusable piece of code that returns React elements describing what should appear on the screen.",
      difficulty: "easy",
      category: "frontend"
    },
    {
      id: "react4",
      question: "What is the purpose of state in React?",
      options: [
        "To transfer data between servers",
        "To store and manage component-specific data that can change over time",
        "To define CSS styles",
        "To connect to external APIs"
      ],
      correctAnswer: "To store and manage component-specific data that can change over time",
      explanation: "State in React is used to store component data that can change over time and trigger re-renders when updated.",
      difficulty: "medium",
      category: "frontend"
    },
    {
      id: "react5",
      question: "What are props in React?",
      options: [
        "Properties of CSS",
        "Property types for TypeScript",
        "Read-only data passed from parent to child components",
        "JavaScript functions"
      ],
      correctAnswer: "Read-only data passed from parent to child components",
      explanation: "Props (short for properties) are read-only inputs to React components that are passed from parent components to child components.",
      difficulty: "medium",
      category: "frontend"
    },
    {
      id: "react6",
      question: "What is the virtual DOM in React?",
      options: [
        "A direct copy of the browser's DOM",
        "A lightweight copy of the actual DOM that React uses for performance optimization",
        "A special type of component",
        "A database structure for React"
      ],
      correctAnswer: "A lightweight copy of the actual DOM that React uses for performance optimization",
      explanation: "The virtual DOM is a lightweight JavaScript representation of the actual DOM that React uses to improve performance by minimizing direct DOM manipulations.",
      difficulty: "medium",
      category: "frontend"
    },
    {
      id: "react7",
      question: "What are React hooks?",
      options: [
        "Special HTML tags",
        "Functions that enable functional components to use state and lifecycle features",
        "Hardware interfaces for React Native",
        "Methods to connect databases"
      ],
      correctAnswer: "Functions that enable functional components to use state and lifecycle features",
      explanation: "React hooks are functions that allow functional components to use state and lifecycle features previously only available in class components.",
      difficulty: "hard",
      category: "frontend"
    },
    {
      id: "react8",
      question: "What is the purpose of the useEffect hook?",
      options: [
        "To create visual effects",
        "To perform side effects in functional components",
        "To store component state",
        "To style components"
      ],
      correctAnswer: "To perform side effects in functional components",
      explanation: "The useEffect hook in React is used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.",
      difficulty: "hard",
      category: "frontend"
    },
    {
      id: "react9",
      question: "What is Redux?",
      options: [
        "A React component",
        "A state management library often used with React",
        "A React router",
        "A testing framework for React"
      ],
      correctAnswer: "A state management library often used with React",
      explanation: "Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across different environments.",
      difficulty: "hard",
      category: "frontend"
    },
    {
      id: "react10",
      question: "What is the significance of keys in React lists?",
      options: [
        "They are optional and only used for styling",
        "They help React identify which items have changed, are added, or removed",
        "They define the order of elements",
        "They are used for encryption"
      ],
      correctAnswer: "They help React identify which items have changed, are added, or removed",
      explanation: "Keys in React lists help identify which items have changed, been added, or been removed, which is crucial for efficient updates and rendering.",
      difficulty: "medium",
      category: "frontend"
    }
  ],
  php: [
    {
      id: "php1",
      question: "What does PHP stand for?",
      options: [
        "Personal Home Page",
        "PHP: Hypertext Preprocessor",
        "Preprocessed Hypertext Pages",
        "Program Home Protocol"
      ],
      correctAnswer: "PHP: Hypertext Preprocessor",
      explanation: "PHP is a recursive acronym for 'PHP: Hypertext Preprocessor'. It's a widely-used, open-source scripting language especially suited for web development.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "php2",
      question: "How do you start and end a PHP block of code?",
      options: [
        "<?php ... ?>",
        "<php ... >",
        "<script> ... </script>",
        "<? ... ?>"
      ],
      correctAnswer: "<?php ... ?>",
      explanation: "PHP code is enclosed within the <?php and ?> tags. This tells the server to interpret everything between these tags as PHP code.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "php3",
      question: "How do you define a variable in PHP?",
      options: [
        "var x;",
        "let x;",
        "$x;",
        "variable x;"
      ],
      correctAnswer: "$x;",
      explanation: "In PHP, variables are defined by prefixing the variable name with a dollar sign ($).",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "php4",
      question: "What is the difference between == and === in PHP?",
      options: [
        "There is no difference",
        "== checks only value, === checks value and type",
        "== checks value and type, === checks only value",
        "== is for strings, === is for numbers"
      ],
      correctAnswer: "== checks only value, === checks value and type",
      explanation: "In PHP, the == operator checks if values are equal, while the === operator checks if values are equal and of the same type.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "php5",
      question: "How do you create a function in PHP?",
      options: [
        "function myFunction() {}",
        "def myFunction() {}",
        "create myFunction() {}",
        "func myFunction() {}"
      ],
      correctAnswer: "function myFunction() {}",
      explanation: "Functions in PHP are defined using the 'function' keyword followed by the function name and parameters.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "php6",
      question: "What does the die() function do in PHP?",
      options: [
        "Kills the current PHP process",
        "Outputs a message and terminates the current script",
        "Deletes a file",
        "Creates a fatal error"
      ],
      correctAnswer: "Outputs a message and terminates the current script",
      explanation: "The die() function in PHP outputs a message and terminates the current script. It's often used for debugging or error handling.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "php7",
      question: "What is the correct way to connect to a MySQL database in PHP?",
      options: [
        "mysql_connect()",
        "mysqli_connect() or PDO",
        "connect_mysql()",
        "database_connect()"
      ],
      correctAnswer: "mysqli_connect() or PDO",
      explanation: "Modern PHP applications connect to MySQL using either the mysqli extension or PDO (PHP Data Objects). The older mysql_connect() function is deprecated.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "php8",
      question: "What are PHP sessions used for?",
      options: [
        "To store client-side data",
        "To store server-side data across multiple pages",
        "To encrypt data",
        "To compress files"
      ],
      correctAnswer: "To store server-side data across multiple pages",
      explanation: "PHP sessions are used to store data on the server across multiple page visits by the same user, allowing for persistent storage during a user's visit.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "php9",
      question: "What is the purpose of the include statement in PHP?",
      options: [
        "To include JavaScript code",
        "To include external PHP files",
        "To include CSS styles",
        "To include database credentials"
      ],
      correctAnswer: "To include external PHP files",
      explanation: "The include statement in PHP is used to include and evaluate the specified file, allowing you to reuse code across multiple pages.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "php10",
      question: "What is the difference between GET and POST methods in PHP?",
      options: [
        "There is no difference",
        "GET shows data in URL and has limits, POST does not show in URL and has no practical limits",
        "GET is more secure than POST",
        "POST is only for database operations"
      ],
      correctAnswer: "GET shows data in URL and has limits, POST does not show in URL and has no practical limits",
      explanation: "In PHP, the GET method sends data through the URL with size limitations, while POST sends data in the HTTP request body without showing in the URL and with fewer size restrictions.",
      difficulty: "medium",
      category: "backend"
    }
  ],
  csharp: [
    {
      id: "csharp1",
      question: "What is C#?",
      options: [
        "A musical note",
        "A modern, object-oriented programming language developed by Microsoft",
        "A database language",
        "A markup language"
      ],
      correctAnswer: "A modern, object-oriented programming language developed by Microsoft",
      explanation: "C# (pronounced 'C sharp') is a modern, object-oriented programming language developed by Microsoft as part of the .NET initiative.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "csharp2",
      question: "What does the 'static' keyword mean in C#?",
      options: [
        "It means the variable cannot be changed",
        "It means the member belongs to the type itself rather than to instances",
        "It means the method runs faster",
        "It means the variable is stored in static memory"
      ],
      correctAnswer: "It means the member belongs to the type itself rather than to instances",
      explanation: "In C#, the 'static' keyword indicates that a member belongs to the type itself rather than to specific instances, allowing access without creating an object.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "csharp3",
      question: "What is a namespace in C#?",
      options: [
        "A container for classes and other namespaces",
        "A variable that can hold multiple values",
        "A method that can have multiple implementations",
        "A special type of class"
      ],
      correctAnswer: "A container for classes and other namespaces",
      explanation: "A namespace in C# is a container for classes and other namespaces, used to organize code and avoid naming conflicts.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "csharp4",
      question: "What is the difference between 'ref' and 'out' parameters in C#?",
      options: [
        "There is no difference",
        "'ref' requires the variable to be initialized before passing, 'out' does not",
        "'out' requires the variable to be initialized before passing, 'ref' does not",
        "'ref' is for input parameters, 'out' is for output parameters"
      ],
      correctAnswer: "'ref' requires the variable to be initialized before passing, 'out' does not",
      explanation: "In C#, 'ref' parameters must be initialized before being passed to a method, while 'out' parameters don't need to be initialized but must be assigned a value within the method.",
      difficulty: "hard",
      category: "backend"
    },
    {
      id: "csharp5",
      question: "What is an interface in C#?",
      options: [
        "A graphical user interface",
        "A contract that defines a set of methods and properties",
        "A special type of class that cannot be instantiated",
        "A connection between the application and the database"
      ],
      correctAnswer: "A contract that defines a set of methods and properties",
      explanation: "An interface in C# is a contract that defines a set of methods and properties that implementing classes must provide. It enables polymorphism and multiple inheritance of behavior.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "csharp6",
      question: "What is LINQ in C#?",
      options: [
        "A database system",
        "A programming language",
        "Language Integrated Query, a feature for querying data sources",
        "A network protocol"
      ],
      correctAnswer: "Language Integrated Query, a feature for querying data sources",
      explanation: "LINQ (Language Integrated Query) is a feature in C# that adds native data querying capabilities, allowing developers to query diverse data sources using a consistent syntax.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "csharp7",
      question: "What is the difference between a struct and a class in C#?",
      options: [
        "There is no difference",
        "Structs are value types, classes are reference types",
        "Structs can inherit from other structs, classes cannot inherit",
        "Structs are for data, classes are for functions"
      ],
      correctAnswer: "Structs are value types, classes are reference types",
      explanation: "In C#, structs are value types stored on the stack, while classes are reference types stored on the heap. This affects how they're passed (by value vs. by reference) and other behaviors.",
      difficulty: "hard",
      category: "backend"
    },
    {
      id: "csharp8",
      question: "What is a delegate in C#?",
      options: [
        "A representative at a conference",
        "A special variable that holds a reference to a method",
        "A database connection",
        "A type of loop"
      ],
      correctAnswer: "A special variable that holds a reference to a method",
      explanation: "A delegate in C# is a type that represents references to methods with a particular parameter list and return type, enabling methods to be passed as parameters.",
      difficulty: "hard",
      category: "backend"
    },
    {
      id: "csharp9",
      question: "What is the purpose of 'using' statements in C#?",
      options: [
        "To include external libraries",
        "To clean up unmanaged resources",
        "Both to include external libraries and to clean up unmanaged resources",
        "To create loops"
      ],
      correctAnswer: "Both to include external libraries and to clean up unmanaged resources",
      explanation: "In C#, 'using' can be used both as a directive to import namespaces and as a statement to ensure proper disposal of objects that implement IDisposable.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "csharp10",
      question: "What is the 'async/await' pattern in C#?",
      options: [
        "A way to create multithreaded applications",
        "A pattern for asynchronous programming that simplifies working with tasks",
        "A method for database operations",
        "A technique for parallel processing"
      ],
      correctAnswer: "A pattern for asynchronous programming that simplifies working with tasks",
      explanation: "The async/await pattern in C# provides a more readable and maintainable way to write asynchronous code, allowing developers to write asynchronous code that looks like synchronous code.",
      difficulty: "hard",
      category: "backend"
    }
  ],
  kotlin: [
    {
      id: "kotlin1",
      question: "What is Kotlin?",
      options: [
        "A database system",
        "A statically typed programming language that runs on the JVM",
        "A JavaScript framework",
        "A mobile operating system"
      ],
      correctAnswer: "A statically typed programming language that runs on the JVM",
      explanation: "Kotlin is a statically typed programming language developed by JetBrains that runs on the Java Virtual Machine (JVM) and can be used alongside Java.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "kotlin2",
      question: "What company developed Kotlin?",
      options: ["Google", "Apple", "JetBrains", "Microsoft"],
      correctAnswer: "JetBrains",
      explanation: "Kotlin was developed by JetBrains, the company behind IntelliJ IDEA and other development tools.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "kotlin3",
      question: "What is the main advantage of Kotlin over Java?",
      options: [
        "It's faster",
        "It has more libraries",
        "It's more concise and has null safety features",
        "It uses less memory"
      ],
      correctAnswer: "It's more concise and has null safety features",
      explanation: "Kotlin offers more concise syntax than Java and has built-in null safety features to prevent null pointer exceptions, among other modern language features.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "kotlin4",
      question: "What does the 'val' keyword do in Kotlin?",
      options: [
        "Declares a variable that can be reassigned",
        "Declares a read-only (immutable) variable",
        "Validates a function",
        "Creates a value class"
      ],
      correctAnswer: "Declares a read-only (immutable) variable",
      explanation: "In Kotlin, 'val' declares an immutable reference that cannot be reassigned after initialization, similar to 'final' in Java.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "kotlin5",
      question: "What is a data class in Kotlin?",
      options: [
        "A class that stores data in a database",
        "A special class that provides implementations for functions like equals() and hashCode() automatically",
        "A class that only contains static methods",
        "A class that can only be used for data transfer"
      ],
      correctAnswer: "A special class that provides implementations for functions like equals() and hashCode() automatically",
      explanation: "A data class in Kotlin automatically generates useful methods like equals(), hashCode(), and toString() based on the properties declared in the constructor.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "kotlin6",
      question: "What is the Elvis operator (?:) in Kotlin?",
      options: [
        "An operator for string concatenation",
        "A shorthand for an if-else statement",
        "A null-coalescing operator that returns the right-hand value if the left-hand value is null",
        "An operator that swaps two values"
      ],
      correctAnswer: "A null-coalescing operator that returns the right-hand value if the left-hand value is null",
      explanation: "The Elvis operator (?:) in Kotlin is a shorthand for handling nullable values, returning the right-hand value if the left-hand value is null.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "kotlin7",
      question: "What is a coroutine in Kotlin?",
      options: [
        "A design pattern",
        "A database connection",
        "A lightweight thread for asynchronous programming",
        "A special type of class"
      ],
      correctAnswer: "A lightweight thread for asynchronous programming",
      explanation: "Coroutines in Kotlin are light-weight threads that allow asynchronous programming in a sequential style, making asynchronous code more readable and maintainable.",
      difficulty: "hard",
      category: "backend"
    },
    {
      id: "kotlin8",
      question: "What is an extension function in Kotlin?",
      options: [
        "A function that extends another function",
        "A function that adds new functionality to an existing class without inheriting from it",
        "A function that extends the application's runtime",
        "A function that requires extended permissions"
      ],
      correctAnswer: "A function that adds new functionality to an existing class without inheriting from it",
      explanation: "Extension functions in Kotlin allow developers to add new functions to existing classes without modifying their source code or inheriting from them.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "kotlin9",
      question: "What is the difference between 'var' and 'val' in Kotlin?",
      options: [
        "There is no difference",
        "'var' declares a variable that can be reassigned, 'val' declares a read-only variable",
        "'val' declares a variable that can be reassigned, 'var' declares a read-only variable",
        "'var' is for primitive types, 'val' is for objects"
      ],
      correctAnswer: "'var' declares a variable that can be reassigned, 'val' declares a read-only variable",
      explanation: "In Kotlin, 'var' declares a mutable variable that can be reassigned, while 'val' declares an immutable (read-only) variable that cannot be reassigned after initialization.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "kotlin10",
      question: "What are sealed classes in Kotlin?",
      options: [
        "Classes that can't be accessed from outside the package",
        "Classes that represent restricted class hierarchies where a class can only be subclassed by specific classes",
        "Classes that are encrypted",
        "Classes that can't be inherited from"
      ],
      correctAnswer: "Classes that represent restricted class hierarchies where a class can only be subclassed by specific classes",
      explanation: "Sealed classes in Kotlin represent restricted class hierarchies, where a sealed class can only have subclasses that are declared in the same file as the sealed class itself.",
      difficulty: "hard",
      category: "backend"
    }
  ],
  go: [
    {
      id: "go1",
      question: "What is Go?",
      options: [
        "A board game",
        "A statically typed, compiled programming language",
        "A JavaScript framework",
        "A database system"
      ],
      correctAnswer: "A statically typed, compiled programming language",
      explanation: "Go (or Golang) is a statically typed, compiled programming language designed at Google, known for its simplicity, efficiency, and built-in concurrency features.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "go2",
      question: "Who created the Go programming language?",
      options: [
        "Microsoft",
        "Apple",
        "Google engineers (including Rob Pike and Ken Thompson)",
        "Oracle"
      ],
      correctAnswer: "Google engineers (including Rob Pike and Ken Thompson)",
      explanation: "Go was created by Google engineers Robert Griesemer, Rob Pike, and Ken Thompson in 2007 and announced in 2009.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "go3",
      question: "What symbol is used to define a variable in Go?",
      options: ["var", "let", "const", "def"],
      correctAnswer: "var",
      explanation: "In Go, the 'var' keyword is used to define variables, though short variable declarations using := are also commonly used.",
      difficulty: "easy",
      category: "backend"
    },
    {
      id: "go4",
      question: "What is a goroutine in Go?",
      options: [
        "A type of error handling",
        "A lightweight thread managed by the Go runtime",
        "A special data structure",
        "A testing framework"
      ],
      correctAnswer: "A lightweight thread managed by the Go runtime",
      explanation: "A goroutine is a lightweight thread managed by the Go runtime, allowing for concurrent execution of functions.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "go5",
      question: "What is the purpose of channels in Go?",
      options: [
        "To create secure connections",
        "To provide a way for goroutines to communicate with each other",
        "To connect to external APIs",
        "To structure the codebase"
      ],
      correctAnswer: "To provide a way for goroutines to communicate with each other",
      explanation: "Channels in Go are typed conduits that provide a way for goroutines to communicate with each other and synchronize their execution.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "go6",
      question: "What is the difference between 'var x int' and 'x := 0' in Go?",
      options: [
        "There is no difference",
        "'var x int' is a variable declaration, 'x := 0' is a short variable declaration with type inference",
        "'var x int' allocates memory, 'x := 0' doesn't",
        "'var x int' is global, 'x := 0' is local"
      ],
      correctAnswer: "'var x int' is a variable declaration, 'x := 0' is a short variable declaration with type inference",
      explanation: "'var x int' explicitly declares a variable of type int, while 'x := 0' is a short variable declaration that infers the type (int in this case) and initializes the variable.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "go7",
      question: "What is a struct in Go?",
      options: [
        "A special function",
        "A collection of fields with types",
        "A method of error handling",
        "A type of channel"
      ],
      correctAnswer: "A collection of fields with types",
      explanation: "A struct in Go is a user-defined type that contains a collection of named fields/properties, similar to a class in object-oriented programming but without inheritance.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "go8",
      question: "What is the purpose of the 'defer' statement in Go?",
      options: [
        "To delay execution of a function until the surrounding function returns",
        "To handle errors",
        "To define a new function",
        "To skip a section of code"
      ],
      correctAnswer: "To delay execution of a function until the surrounding function returns",
      explanation: "The 'defer' statement in Go schedules a function call to be executed immediately before the surrounding function returns, often used for cleanup operations.",
      difficulty: "medium",
      category: "backend"
    },
    {
      id: "go9",
      question: "What are interfaces in Go?",
      options: [
        "Graphical user interfaces",
        "A way to connect to APIs",
        "A type that defines a set of method signatures",
        "A special kind of struct"
      ],
      correctAnswer: "A type that defines a set of method signatures",
      explanation: "An interface in Go is a type that defines a set of method signatures but doesn't provide implementations, allowing for polymorphism.",
      difficulty: "hard",
      category: "backend"
    },
    {
      id: "go10",
      question: "What is the purpose of the 'go' keyword in Go?",
      options: [
        "To define a new variable",
        "To import packages",
        "To start a new goroutine",
        "To define a new function"
      ],
      correctAnswer: "To start a new goroutine",
      explanation: "The 'go' keyword in Go is used to start a new goroutine, which is a lightweight thread managed by the Go runtime, enabling concurrent execution.",
      difficulty: "hard",
      category: "backend"
    }
  ],
  swift: [
    {
      id: "swift1",
      question: "What is Swift?",
      options: [
        "A type of bird",
        "A programming language developed by Apple",
        "A JavaScript framework",
        "A database management system"
      ],
      correctAnswer: "A programming language developed by Apple",
      explanation: "Swift is a powerful, intuitive programming language developed by Apple for building apps for iOS, Mac, Apple TV, and Apple Watch.",
      difficulty: "easy",
      category: "frontend"
    },
    {
      id: "swift2",
      question: "What does 'let' do in Swift?",
      options: [
        "Declares a variable that can be changed",
        "Declares a constant (immutable variable)",
        "Creates a function",
        "Imports a module"
      ],
      correctAnswer: "Declares a constant (immutable variable)",
      explanation: "In Swift, 'let' is used to declare constants, whose values cannot be changed once they are assigned.",
      difficulty: "easy",
      category: "frontend"
    },
    {
      id: "swift3",
      question: "What is an optional in Swift?",
      options: [
        "A parameter that doesn't need to be provided",
        "A special feature that can be enabled",
        "A type that can hold either a value or nil",
        "A function that may or may not be called"
      ],
      correctAnswer: "A type that can hold either a value or nil",
      explanation: "An optional in Swift is a type that can hold either a value or nil (no value), indicated by appending a question mark to the type (e.g., String?).",
      difficulty: "medium",
      category: "frontend"
    },
    {
      id: "swift4",
      question: "What is the difference between 'var' and 'let' in Swift?",
      options: [
        "There is no difference",
        "'var' declares a variable that can be changed, 'let' declares a constant",
        "'let' declares a variable that can be changed, 'var' declares a constant",
        "'var' is for numbers, 'let' is for strings"
      ],
      correctAnswer: "'var' declares a variable that can be changed, 'let' declares a constant",
      explanation: "In Swift, 'var' is used to declare variables whose values can be changed, while 'let' declares constants whose values cannot be changed after initialization.",
      difficulty: "easy",
      category: "frontend"
    },
    {
      id: "swift5",
      question: "What is a closure in Swift?",
      options: [
        "A way to close an application",
        "A self-contained block of functionality that can be passed around",
        "A method to end a function",
        "A special type of class"
      ],
      correctAnswer: "A self-contained block of functionality that can be passed around",
      explanation: "A closure in Swift is a self-contained block of code that can be passed around and used in your code, similar to a function but with more flexibility.",
      difficulty: "medium",
      category: "frontend"
    },
    {
      id: "swift6",
      question: "What is a struct in Swift?",
      options: [
        "A blueprint for a database table",
        "A value type that can group properties and methods",
        "A special kind of array",
        "A user interface element"
      ],
      correctAnswer: "A value type that can group properties and methods",
      explanation: "A struct in Swift is a value type that can group together properties and methods, making them a good choice for representing simple data structures.",
      difficulty: "medium",
      category: "frontend"
    },
    {
      id: "swift7",
      question: "What is the purpose of 'guard' statements in Swift?",
      options: [
        "To protect code from unauthorized access",
        "To handle unexpected values early and exit the current scope",
        "To prevent memory leaks",
        "To create security features"
      ],
      correctAnswer: "To handle unexpected values early and exit the current scope",
      explanation: "Guard statements in Swift are used to handle unexpected values early, exiting the current scope if a condition is not met, which helps improve code readability by reducing nesting.",
      difficulty: "hard",
      category: "frontend"
    },
    {
      id: "swift8",
      question: "What is the difference between a class and a struct in Swift?",
      options: [
        "There is no difference",
        "Classes are reference types, structs are value types",
        "Structs are reference types, classes are value types",
        "Classes can have methods, structs cannot"
      ],
      correctAnswer: "Classes are reference types, structs are value types",
      explanation: "In Swift, classes are reference types (passed by reference, shared across uses), while structs are value types (passed by value, copied when assigned or passed).",
      difficulty: "hard",
      category: "frontend"
    },
    {
      id: "swift9",
      question: "What is optional chaining in Swift?",
      options: [
        "A way to chain multiple methods together",
        "A process for linking optional values that might be nil",
        "A method for creating linked lists",
        "A security feature"
      ],
      correctAnswer: "A process for linking optional values that might be nil",
      explanation: "Optional chaining in Swift is a process for querying and calling properties, methods, and subscripts on an optional that might be nil, gracefully handling the nil case.",
      difficulty: "medium",
      category: "frontend"
    },
    {
      id: "swift10",
      question: "What is an enum in Swift?",
      options: [
        "A method for counting items",
        "A type that defines a group of related values",
        "A special kind of variable",
        "A way to enumerate through a collection"
      ],
      correctAnswer: "A type that defines a group of related values",
      explanation: "An enum (enumeration) in Swift is a type that defines a group of related values, enabling you to work with those values in a type-safe way.",
      difficulty: "medium",
      category: "frontend"
    }
  ]
};

// Note: Some languages may have fewer or no questions currently.
// This is a continuously growing database of questions.

export default quizData;
