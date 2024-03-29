# QuintOS

## log

```js
log(...args);
```

Shortcut for the `console.log` function, which prints any amount of input arguments to the Javascript console.

## delay

```js
await delay(millis);
```

Use the `delay` to have your program wait for a certain amount of time in milliseconds. `delay` can only be used in asynchronous functions.

```js
async function takeFive() {
	log('start!');
	await delay(5000); // waits for a delay of 5000ms aka 5 seconds
	log('5 seconds passed');
}

takeFive();
```

## exit

```js
exit();
```

Closes the QuintOS program. Note that `exit` does not end the code execution of the function it is called in, use `return` to do that.

# ui

## alert

```js
await alert(text, row, col, w, h, speed);
```

Creates an alert window with the specified text. If no optional parameters are provided, defaults are used which are different for each QuintOS computer.

- `row`, `col` (optional) the row and column values of the top left corner of the alert window
- `w`, `h` (optional) width and height
- `speed` (optional) letters drawn per frame

## prompt

```js
await prompt(text, row, col, w, h, speed);
```

Creates a prompt window, which displays a message to the user and allows them to respond with text or press the cancel button.

Returns the user's input. If the user entered a number `prompt` will return a number, otherwise it will return a string unless the user pressed cancel, then `null` will be returned.

- `row`, `col` (optional) the row and column values of the top left corner of the alert window
- `w`, `h` (optional) width and height
- `speed` (optional) letters drawn per frame

## button

```js
let btn = button(text, row, col, action);
```

Returns the `Button` object created.

- `action` is a function that will run if the user presses the button

## upload

```js
let btn = upload(txt, row, col, type, action);
```

Returns a special button for letting the user upload files. When the user clicks the button a file selection window will appear. After the user selects a file it is uploaded and parsed into text data.

- `type` (optional) 'file' by default
- `action(file)` is a function that will run if the user presses the button, it receives a file object as an input
  - `file.name` the file's name
  - `file.data` the file's data

To learn more about `upload` buttons read the QuintOS `button` reference.

## input

```js
let inp = input(value, row, col, onSubmit, onChange);
```

Returns the `Input` object created.

- `value` is the initial text in the input, set to an empty string by default
- `onSubmit` (optional) called when the user presses the enter key
- `onChange` (optional) called when the user types any key that changes the input's value

# textual

## txt

```js
await txt(text, row, col, w, h, speed);
```

Displays text and returns the amount of lines required to display the text after width limiting is performed.

- `text` the text to display
- `row`, `col` (optional) the row and column values of the top left corner of the text
- `w`, `h` (optional) width and height limits
- `speed` (optional) characters drawn per frame

## txtRect

```js
await txtRect(row, col, w, h, style, c, speed);
```

Draws the lines of a rectangle in text.

- `row`, `col` the top left corner of the rectangle
- `w`, `h` the width and height of the rectangle
- `style` (optional) can be either 'dashed', 'outline', or 'solid', the default is 'solid'
- `c` (optional) the character for the rectangle, the default is "-", use "=" for a double line rectangle
- `speed` (optional) characters drawn per frame

## txtLine

```js
await txtLine(row1, col1, row2, col2, style, c, speed);
```

Draws a line in text.

- `row1`, `col1` the starting position of the line
- `row2`, `col2` the ending position of the line
- `style` (optional) can be either 'dashed', 'outline', or 'solid', the default is 'solid'
- `c` (optional) the character for the line, the default is "-"
- `speed` (optional) characters drawn per frame

## erase

```js
erase();
```

Erases any text inside program's frame.

## eraseRect

```js
await eraseRect(row, col, w, h, speed);
```

Erases text within the specified rectangle.

- `row`, `col` the top left corner of the rectangle
- `w`, `h` the width and height of the rectangle
- `speed` (optional) characters erased per frame

## text

```js
text(text, x, y);
```

The p5.js `text` function, use it in the `draw` loop.

<https://p5js.org/reference/#/p5/text>
