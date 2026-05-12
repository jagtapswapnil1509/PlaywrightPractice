// Basic Rules
// Starting Characters: An identifier must start with a letter (a-z or A-Z), an underscore (_), or a dollar sign ($).
// Subsequent Characters: After the first character, it can include letters, digits (0-9), underscores, or dollar signs.
// Case Sensitivity: Identifiers are case-sensitive. For example, myVar, MyVar, and myvar are all different identifiers.
// No Spaces or Special Characters: Identifiers cannot contain spaces, hyphens, or other special characters (except _ and $).
// Length: There is no strict limit on length, but very long names can be impractical.

// Examples:
// Valid identifiers:
let name = 'John';           // Starts with letter
let _private = 42;           // Starts with underscore
let $element = 'div';        // Starts with dollar sign
let myVariable123 = 'valid'; // Letters, digits, underscores
let user_name = 'valid';     // Underscore in middle
let data$info = 'valid';     // Dollar sign in middle

// Case sensitivity examples:
let myVar = 'lowercase';
let MyVar = 'PascalCase';    // Different from myVar
let MYVAR = 'UPPERCASE';     // Different from both

// Invalid identifiers (commented out to avoid syntax errors):
// let 123invalid = 'no';     // Starts with digit
// let my-var = 'no';         // Contains hyphen
// let my variable = 'no';    // Contains space
// let var = 'no';            // Reserved word
// let function = 'no';       // Reserved word

// Best practices examples:
const MAX_SIZE = 100;        // UPPER_CASE for constants
function getUserData() {}    // camelCase for functions
class UserClass {}           // PascalCase for classes