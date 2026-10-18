# Debugging Workshop — Exercise 1

## Error 1: Variable is not defined

**Error type:** ReferenceError

**Meaning:** A variable is used before it has been declared, or its name is incorrect.

**Example:** `console.log(userName);`

**Fix:** `const userName = "Emerance"; console.log(userName);`

## Error 2: Calling something that is not a function

**Error type:** TypeError

**Meaning:** The code tries to call a value as a function, but that value is not callable.

**Example:** `const age = 20; age();`

**Fix:** `const age = 20; console.log(age);`

## Error 3: Reading a property from undefined

**Error type:** TypeError

**Meaning:** The code tries to access a property on a value that does not exist.

**Example:** `const user = undefined; console.log(user.name);`

**Fix:** `const user = { name: "Emerance" }; console.log(user.name);`

## Error 4: Reassigning a constant

**Error type:** TypeError

**Meaning:** A variable declared with `const` cannot be reassigned.

**Example:** `const score = 10; score = 20;`

**Fix:** `let score = 10; score = 20;`

## Error 5: Unexpected token

**Error type:** SyntaxError

**Meaning:** The code contains invalid syntax, such as a missing bracket or quote.

**Example:** `console.log("Hello";`

**Fix:** `console.log("Hello");`

## Error 6: Maximum call stack size exceeded

**Error type:** RangeError

**Meaning:** A function may be calling itself repeatedly without a stopping condition.

**Example:** `function count() { count(); } count();`

**Fix:** `function count(n) { if (n <= 0) return; count(n - 1); } count(3);`

**Note:** These are examples. Replace them with the six actual errors from your instructor's `errors.html` before submitting.
