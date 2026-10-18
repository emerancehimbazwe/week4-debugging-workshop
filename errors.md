# Exercise 1: Six Broken Snippets

## Snippet 1: Greeting

**Error type:** ReferenceError

**Meaning:** JavaScript cannot find `studentname` because the variable was declared as `studentName`. JavaScript is case-sensitive.

**Fix:**

    console.log("Welcome, " + studentName);

## Snippet 2: Shouting

**Error type:** TypeError

**Meaning:** `toUppercase()` is not a valid string method. The correct method is `toUpperCase()`.

**Fix:**

    console.log(city.toUpperCase());

## Snippet 3: Page title

**Error type:** TypeError

**Meaning:** The selector `#page-titel` does not match the intended HTML element. `querySelector()` returns `null`, so trying to change its `textContent` causes an error.

**Fix:**

    const title = document.querySelector("#page-title");
    title.textContent = "My Tasks";

**Note:** Check `errors.html` to confirm the actual ID of the heading. Use that exact ID in the selector.

## Snippet 4: Score counter

**Error type:** TypeError

**Meaning:** A variable declared with `const` cannot be reassigned. The code tries to change `score` from `0` to `10`.

**Fix:**

    let score = 0;
    score = score + 10;
    console.log(score);

## Snippet 5: Shopping list

**Error type:** SyntaxError

**Meaning:** A comma is missing between `"avocado"` and `"banana"` in the array.

**Fix:**

    const fruits = ["mango", "avocado", "banana"];
    console.log(fruits.length);

## Snippet 6: Countdown

**Error type:** RangeError

**Meaning:** The function calls itself repeatedly without a stopping condition. Eventually, the call stack limit is exceeded.

**Fix:**

    function countdown(n) {
      if (n < 0) return;
      console.log(n);
      countdown(n - 1);
    }
    countdown(5);