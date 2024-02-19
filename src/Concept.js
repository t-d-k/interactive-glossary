class concept {
    constructor(tag, details) {
        this.tag = tag;
        this.details = details;
    }
}
/*
 * the data to display 
 */
export const conceptList = [
    new concept('Variable', 'A named storage location in a program\'s memory where data can be stored and manipulated.'),
    new concept('Function', 'A block of reusable code that performs a specific task. Functions help in organizing and modularizing code.'),
    new concept('Loop', 'A control flow statement that allows code to be executed repeatedly based on a condition.'),
    new concept('Conditional Statement', 'A statement that executes different actions depending on whether a condition is true or false.'),
    new concept('Array', 'A data structure that stores a collection of elements, each identified by an index.'),
    new concept('String', 'A sequence of characters, typically used to represent text.'),
    new concept('Integer', 'A data type representing whole numbers without fractional components.'),
    new concept('Boolean', 'A data type with two possible values, true or false. Used for logical operations.'),
    new concept('Algorithm', 'A step-by-step procedure or formula for solving a problem.'),
    new concept('Comment', ' Non-executable text within a program that provides information or explanation about the code. Comments are ignored by the compiler or interpreter.'),
    new concept('Assignment', ' The process of storing a value in a variable.'),
    new concept('Operator', 'A symbol that represents a specific operation to be performed on one or more operands.'),
    new concept('Parameter', 'A variable in a function definition that represents a value passed to the function when it\'s called.'),
    new concept('Return Statement', 'A statement used to exit a function and optionally return a value to the caller.'),
    new concept('Syntax', ' The rules that govern the structure and format of statements in a programming language.'),
    new concept('Compiler', 'A program that translates source code written in a high-level programming language into machine code or intermediate code.'),
    new concept('Interpreter', 'A program that directly executes instructions written in a high-level programming language without the need for compilation.'),
    new concept('Debugging', ' The process of identifying and fixing errors, or bugs, in a program.'),
    new concept('Variable Scope', ' The context in which a variable is defined and can be accessed within a program.'),
    new concept('Library', 'A collection of pre-written code that provides specific functionality, which can be reused by including it in a program.')
];
export function getDetailsFromTag(tag) {
    return conceptList.find(el => el.tag == tag).details;
}

export default concept;
