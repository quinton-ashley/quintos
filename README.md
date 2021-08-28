# QuintOS

Learn how to make games with QuintOS by taking Quinton's [IntroToJS](https://github.com/quinton-ashley/IntroToJS/blob/main/README.md) course. Contact me <mailto:qashto@gmail.com> for JavaScript lessons!

Use the QuintOS [template project](https://github.com/quinton-ashley/quintos-template) to get started making your own retro games.

## alert window

```js
await pc.alert(txt, x, y, w, h, speed);
```

## prompt window

```js
await pc.prompt(txt, x, y, w, h, speed);
```

returns a string with the user's input or `null` if the user pressed cancel

## display text

```js
await pc.text(txt, x, y, w, h, speed);
```

returns the height of the text

## create a button

```js
let btn = pc.button(txt, x, y, action);
```

returns the `Button` object created

`action` is a function that will run if the user presses the button

## erase your program's screen

```js
pc.erase();
```

## draw the lines of a rectangle

```js
await pc.rect(x, y, w, h, speed, c);
```

## erase a specific area

```js
await pc.eraseRect(x, y, w, h);
```

## create an input

```js
let inp = pc.input(value, x, y, onSubmit, onChange);
```

returns the `Input` object created

- `value` is the initial text in the input, set to an empty string by default
- `onSubmit` called when the user presses the enter key
- `onChange` called when the user types any key that changes the input's value

## draw sprite art in p5.js

```js
let img = spriteArt(txt, scale, palette);
```

returns the p5 graphics object created

- `txt` is the sprite to paint
- `scale` is the scale the sprite should be, `2` by default
- `palette` is the color palette that should be used, C64 palatte object by default

```js
{
	' ': '',
	'.': '',
	k: '#000000', // blacK
	d: '#626252', // Dark-gray
	m: '#898989', // Mid-gray
	l: '#adadad', // Light-gray
	w: '#ffffff', // White
	c: '#cb7e75', // Coral
	r: '#9f4e44', // Red
	n: '#6d5412', // browN
	o: '#a1683c', // Orange
	y: '#c9d487', // Yellow
	e: '#9ae29b', // light grEEn
	g: '#5cab5e', // Green
	t: '#6abfc6', // Teal
	b: '#50459b', // Blue
	i: '#887ecb', // Indigo
	p: '#a057a3' // Purple
}
```

## get a color letter's p5.js color

```js
color16(c, palette);
```

- `c` is the color letter

## Credits

Quinton Ashley (quinton-ashley) is the creator of QuintOS

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
