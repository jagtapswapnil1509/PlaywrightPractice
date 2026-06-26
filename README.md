# Playwright Practice

A hands-on study repository for JavaScript fundamentals, asynchronous programming, object-oriented programming, and Playwright automation. The chapters are arranged progressively so learners can move from core syntax to browser automation.

## What’s Covered

- JavaScript basics from Chapter 01 through Chapter 15, including variables, operators, conditionals, loops, arrays, functions, strings, objects, and 2D arrays.
- Asynchronous JavaScript examples in Chapter 16, Chapter 17, and Chapter 18, including callbacks, promises, `finally`, `Promise.all`, and async/await.
- Object-oriented programming examples in Chapter 20, including export/import practice, classes, objects, encapsulation, inheritance, and polymorphism.
- Playwright automation examples and test scripts in Chapter 19.
- Extra exercises and practice files in PracticeExcercies.

## Repository Structure

- Chapter_01_Basics: Basic JavaScript and setup-related scripts
- Chapter_02_JavaScript_Concepts: Core JavaScript concepts
- Chapter_03_Identifier_Literals: Identifiers, literals, and comments
- Chapter_04_Javascript_Basics.js: Variables, hoisting, scope, and functions
- Chapter_05_Literals to Chapter_15_2D_Array: Literals, operators, conditionals, loops, arrays, strings, objects, and arrays of arrays
- Chapter_16_Callback: Callback patterns and callback-based examples
- Chapter_17_Promise: Promise creation, chaining, real API examples, `finally`, and `Promise.all`
- Chapter_18_Async_await: Async/await patterns and sequential/parallel flow examples
- Chapter_19_PlaywrightBasics: Playwright setup, configuration, and tests
- Chapter_20_OOPS_Basics: OOP basics with encapsulation, inheritance, and polymorphism
- PracticeExcercies: Additional practice files and exercises

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/PlaywrightPractice.git
   cd PlaywrightPractice
   ```

2. Install Node.js (version 18 or newer is recommended).

3. Run a JavaScript exercise file:
   ```bash
   node Chapter_01_Basics/01_Basics.js
   ```

## Running Playwright Tests

The Playwright configuration is set up to target the test folder under Chapter_19_PlaywrightBasics.

```bash
cd Chapter_19_PlaywrightBasics
npm install
npx playwright install
npx playwright test
```

To run a single spec file:

```bash
npx playwright test tests/example.spec.ts
```

## Recent Updates

- Added new OOP practice files covering encapsulation, inheritance, and polymorphism.
- Expanded the async programming section with promise and async/await examples.
- Added Playwright test configuration and sample test structure.
- Updated the repository layout to better reflect the current chapter content.

## Notes

- Most files are standalone exercises intended to be studied individually.
- The repository is best used by working through the chapters in order.
- The root Playwright configuration points tests to Chapter_19_PlaywrightBasics/tests.

## License

Educational use only.
