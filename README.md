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

returns the user's input, if the user entered a number it will return a number, otherwise it will return a string, if the user pressed cancel `null` will be returned

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
await pc.eraseRect(x, y, w, h, speed);
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
- `palette` is the color palette that should be used, C64 palatte object by default

## easy way to load an animation

```js
loadAni(sprite, img, name, width, height, frameCount, line, frameDelay);
```

- `sprite` the p5.play sprite object
- `img` image path
- `name` name of the animation
- `width` width of the animation
- `height` width of the animation
- `frameCount` is the amount of frames in the animation
- `line` is the line that the animation is on in the sprite sheet
- `frameDelay` is the delay between frames when the animation is played

## Credits

Quinton Ashley (quinton-ashley) is the creator of QuintOS

### Fonts

Apple2 https://www.kreativekorp.com/software/fonts/apple2.shtml  
C64 Pro Mono https://style64.org/petscii/  
casio_fx_9860gii https://www.dafont.com/casio-fx-9860gii.font  
Digital7 https://www.dafont.com/digital-7.font?text=digital7  
ZX Spectrum https://www.dafont.com/zx-spectrum-7.font  
basis33 https://www.1001fonts.com/basis33-font.html  
Cyrillic Pixel 7 https://www.1001fonts.com/cyrillic-pixel-7-font.html  
Press Start 2P https://fonts.google.com/specimen/Press+Start+2P#standard-styles

### Pixel Art

SuperJump:
https://www.gamedevmarket.net/asset/slime-pack-4-slime-variants/
https://www.gamedevmarket.net/asset/ancient-city/

Sokoban:
8bit assets
https://www.gamedevmarket.net/asset/oracle-1-bit-asset/

"Hi! That's wonderful! Glad that you liked my assets. Looking forward to seeing some projects using my art! Have a great day!"

- blueapollo\_ Sep 9, 2021, 7:21 PM

https://www.gamedevmarket.net/asset/platform-dirt-rock-tileset-pack-1bit-16x16-8x8-bonus-characters-items/

16bit assets
https://www.gamedevmarket.net/asset/rpg-dungeon-crawl-tileset/
https://www.gamedevmarket.net/asset/pixel-art-adventurer-sprites/

16bit alt assets
https://www.gamedevmarket.net/asset/dungeon-mini-tileset-6382/
https://www.gamedevmarket.net/asset/pixel-tribe-man-2/

OneBit:
https://www.gamedevmarket.net/asset/1bit-house/
https://www.gamedevmarket.net/asset/platform-dirt-rock-tileset-pack-1bit-16x16-8x8-bonus-characters-items/

PigeonSimulator:
https://www.gamedevmarket.net/asset/pigeons-2d-pixel-asset-pack/
https://www.gamedevmarket.net/asset/tiny-tiny-heroes-animals/
https://www.gamedevmarket.net/asset/pixel-sidescroller-background-city/

## Sounds

SpeakAndSpell:
https://sha.nnoncarey.com/

8 Bit sounds:
https://www.gamedevmarket.net/asset/retro-8-bit-sounds-9524/

### Codepens

Calculator https://codepen.io/wiljav/pen/zYrBYKb  
Terminal https://codepen.io/rocknrollinc/pen/MwLMZG  
CSS Old Computer https://codepen.io/rocknrollinc/pen/MwLMZG  
MS-DOS Defrag https://codepen.io/manz/pen/MdErww  
MS-DOS Scandisk https://codepen.io/manz/pen/KLPEby  
90s Web https://codepen.io/bgbraithwaite/pen/vzPrRY
