# Playwright Practice

A hands-on learning repository for JavaScript, TypeScript, object-oriented programming, and Playwright automation. The chapters are arranged progressively so learners can move from core syntax to browser automation practice.

## What’s Covered

- JavaScript fundamentals from Chapter 01 through Chapter 15, including variables, operators, conditionals, loops, arrays, functions, strings, objects, and 2D arrays.
- Asynchronous JavaScript examples in Chapter 16, Chapter 17, and Chapter 18, including callbacks, promises, async/await, and promise handling patterns.
- Object-oriented programming examples in Chapter 20 onward, including export/import practice, classes, objects, encapsulation, inheritance, and polymorphism.
- TypeScript practice in Chapter 26_TypeScript, including type annotations, interfaces, and basic TS syntax.
- Playwright automation examples and test scripts in Chapter 19_PlaywrightBasics.
- Extra exercises and practice files in PracticeExcercies.

## Repository Structure

- Chapter_01_Basics to Chapter_15_2D_Array: Core JavaScript concepts and exercises
- Chapter_16_Callback: Callback-based examples
- Chapter_17_Promise: Promise creation, chaining, and promise handling
- Chapter_18_Async_await: Async/await patterns and flow control
- Chapter_19_PlaywrightBasics: Playwright setup, configuration, and tests
- Chapter_20_EXPORT_IMPORT: Module export/import examples
- Chapter_21_CLASS_OBJECT: Classes and objects
- Chapter_22_ENCAPSULATION: Encapsulation examples
- Chapter_23_Inheritance: Inheritance examples
- Chapter_24_Polymorphism: Polymorphism examples
- Chapter_25_OPPS_Interview_Questions: OOP interview practice
- Chapter_26_TypeScript: TypeScript basics and practice files
- PracticeExcercies: Additional exercises
- test-results: Playwright test output

## Getting Started

1. Install Node.js (version 18 or newer is recommended).
2. Clone the repository and open it in your editor.
3. Run a JavaScript file:

```bash
node Chapter_01_Basics/01_Basics.js
```

4. Run a TypeScript example with the TypeScript compiler:

```bash
npx tsc Chapter_26_TypeScript/198_TS_Part3.ts
```

## Running Playwright Tests

From the project root:

```bash
npm install
npx playwright install
npx playwright test
```

To run a single spec file:

```bash
npx playwright test Chapter_19_PlaywrightBasics/tests/example.spec.ts
```

## Notes

- Most files are standalone exercises intended to be studied individually.
- The repository is best used by working through the chapters in order.
- The Playwright configuration points tests to the Chapter_19_PlaywrightBasics test folder.

## License

Educational use only.
