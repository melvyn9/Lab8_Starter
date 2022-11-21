// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Testing isPhoneNumber /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
// (3 digits) OR 3 digits with a - followed by 3 or 4 digits
test('Testing valid phone number 858-123-4292', () => {
    expect(functions.isPhoneNumber("858-123-4292")).toBe(true);
});

test('Testing valid phone number (858)123-4292', () => {
    expect(functions.isPhoneNumber("(858)123-4292")).toBe(true);
});

test('Testing invalid phone number 123', () => {
    expect(functions.isPhoneNumber("123")).toBe(false);
});

test('Testing invalid phone number abc', () => {
    expect(functions.isPhoneNumber("abc")).toBe(false);
});

// Testing isEmail
test('Testing valid email melvyn@gmail.com', () => {
    expect(functions.isEmail("melvyn@gmail.com")).toBe(true);
});

test('Testing valid email test@englishuk.com', () => {
    expect(functions.isEmail("test@englishuk.com")).toBe(true);
});

test('Testing invalid email test@', () => {
    expect(functions.isEmail("test@")).toBe(false);
});

test('Testing invalid email 123', () => {
    expect(functions.isEmail("123@ucsd")).toBe(false);
});

// Testing isStrongPassword
test('Testing valid strong password My_Password', () => {
    expect(functions.isStrongPassword("My_Password")).toBe(true);
});

test('Testing valid strong password Abcdefgh_', () => {
    expect(functions.isStrongPassword("Abc_")).toBe(true);
});

test('Testing invalid strong password 12345', () => {
    expect(functions.isStrongPassword("12345")).toBe(false);
});

test('Testing invalid strong password A$123', () => {
    expect(functions.isStrongPassword("A$")).toBe(false);
});

// Testing isDate
test('Testing valid date 1/1/1111', () => {
    expect(functions.isDate("1/1/1111")).toBe(true);
});

test('Testing valid date 01/01/1111', () => {
    expect(functions.isDate("01/01/1111")).toBe(true);
});

test('Testing invalid date 1/1/11', () => {
    expect(functions.isDate("1/1/11")).toBe(false);
});

test('Testing invalid date 123/123/1234', () => {
    expect(functions.isDate("123/123/1234")).toBe(false);
});

// Testing isHexColor
test('Testing valid isHexColor ABC', () => {
    expect(functions.isHexColor("#ABC")).toBe(true);
});

test('Testing valid isHexColor ABC000', () => {
    expect(functions.isHexColor("#ABC000")).toBe(true);
});

test('Testing invalid isHexColor A', () => {
    expect(functions.isHexColor("#A")).toBe(false);
});

test('Testing invalid isHexColor ABCD000', () => {
    expect(functions.isHexColor("#ABCD000")).toBe(false);
});