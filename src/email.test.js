const fs = require('fs');
const validateEmail = require('./email');

test('banana@ucsc.edu', () => {
  expect(validateEmail('banana@ucsc.edu')).toBeTruthy();
});

test('sluggy@gmail.com', () => {
  expect(validateEmail('sluggy@gmail.com')).toBeTruthy();
});

test('banana@ucsc.gov', () => {
  expect(validateEmail('banana@ucsc.gov')).toBeTruthy();
});

test('bananaucsc.edu', () => {
  expect(validateEmail('bananaucsc.edu')).toBeTruthy();
});

test('bla', () => {
  expect(validateEmail('bla')).toBeTruthy();
});
