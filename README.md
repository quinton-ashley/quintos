# QuintOS

Make retro games with QuintOS! Requires jquery and p5.js

```
npm i jquery
npm i p5
npm i quintos
```

## alert

```js
async alert(txt, x, y, w, h, speed)
```

## prompt

```js
async prompt(txt, x, y, w, h, speed)
```

returns a string with the user's input or `null` if the user pressed cancel

## text

```js
async text(txt, x, y, w, h, speed)
```

returns the height of the text

## button

```js
button(txt, x, y, action);
```

returns the `Button` object created

`action` is a function that will run if the user presses the button

## erase

```js
async erase(x, y, w, h);
```

## rect

```js
async rect(x, y, w, h, speed, c)
```

## input

```js
input(value, x, y, onSubmit, onChange);
```

returns the `Input` object created

- `value` is the initial text in the input, set to an empty string by default
- `onSubmit` called when the user presses the enter key
- `onChange` called when the user types any key that changes the input's value

## Credits

### Fonts

Apple2 https://www.kreativekorp.com/software/fonts/apple2.shtml  
C64 Pro Mono https://style64.org/petscii/  
casio_fx_9860gii https://www.dafont.com/casio-fx-9860gii.font  
Digital7 https://www.dafont.com/digital-7.font?text=digital7

### Codepens

Calculator https://codepen.io/wiljav/pen/zYrBYKb  
Terminal https://codepen.io/rocknrollinc/pen/MwLMZG  
CSS Old Computer https://codepen.io/rocknrollinc/pen/MwLMZG  
MS-DOS Defrag https://codepen.io/manz/pen/MdErww  
MS-DOS Scandisk https://codepen.io/manz/pen/KLPEby  
90s Web https://codepen.io/bgbraithwaite/pen/vzPrRY
