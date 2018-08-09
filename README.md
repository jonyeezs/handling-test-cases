# Simple Unit Test Tip: Managing Huge repetitive test cases 

Ever had a unit test with an ever-growing logic?

You started of with a single simple unit test for your service.

More test case is spec-ed out. Edge cases needed to be tested.

Now you're repeating the same cookie-cutter code!

SO NOT DRY... - code smell! -

Using basic Javascript knowledge, we are going to manage our tests in a readable and maintainable way.

This lesson is written with Angular and Jasmine Test framework but the principle can be applied to any Javascript framework or tool!

## How to lesson

Follow the commits one by one to see the progression in thought.

The specific spec file you want to look at is [age-verification.service.spec.ts](/src/app/age-verification.service.spec.ts)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
