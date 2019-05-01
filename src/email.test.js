const fs = require('fs');
const validateEmail = require('./email');

test('banana@ucsc.edu', () => {
  expect(validateEmail('banana@ucsc.edu')).toBeTruthy();
});

test('sluggy@gmail.com', () => {
  expect(validateEmail('sluggy@gmail.com')).toBeTruthy();
});

test('@.com', () => {
  expect(validateEmail('@.com')).toBeFalsy();
});

test('bananaucsc.edu', () => {
  expect(validateEmail('bananaucsc.edu')).toBeFalsy();
});

test('mn@@.com', () => {
  expect(validateEmail('mn@@')).toBeFalsy();
});
