let log = console.log; // log becomes a shortcut for console.log

window.QuintOS = {
	levels: [
		/*00*/ ['GuessTheNumber', 'calcu'],
		/*01*/ ['PickAPath', 'cpet'],
		/*02*/ ['Pong', 'zx'], // TODO zx
		/*03*/ ['Hangman', 'a2'],
		/*04*/ ['QuickClicks', 'gridc'],
		/*05*/ ['ClickAPath', 'gridc'],
		/*06*/ ['TicTacToe', 'gridc'],
		/*07*/ ['WorldWideWeb', 'macin'],
		/*08*/ ['WheelOfFortune', 'a2'],
		/*09*/ ['Contain', 'zx'], // TODO arc
		/*10*/ ['AIOs', 'gridc'],
		/*11*/ ['SpeakAndSpell', 'calcu'], // TODO sas
		/*12*/ ['Snake', 'arcv'], // TODO gameboi
		/*13*/ ['Sketchbook', 'c64'],
		/*14*/ ['SuperJump', 'arcv'],
		/*15*/ ['Sokoban', 'arcv']
	]
};

$('head').append('<link rel="icon" href="node_modules/quintos/img/favicon.png" />');

/* PC functions are used to create text based user interfaces */
class PC {
	constructor() {
		let w, h;
		if (QuintOS.sys == 'a2') {
			w = 40;
			h = 24;
		} else if (QuintOS.sys == 'arcv') {
			w = 28;
			h = 34;
		} else if (/(c64|cpet)/.test(QuintOS.sys)) {
			w = 40;
			h = 25;
		} else if (QuintOS.sys == 'calcu') {
			w = 23;
			h = 2;
		} else if (QuintOS.sys == 'gridc') {
			w = 80;
			h = 30;
		} else if (QuintOS.sys == 'zx') {
			w = 32;
			h = 24;
		}
		this.w = w;
		this.h = h;
		this.width = w; // columns
		this.height = h; // rows
		this.gpu = [];

		// default values for alerts and prompts for each system
		this.popup = {
			a2: {
				x: 2,
				y: 2,
				w: 36,
				h: 4
			},
			arcv: {
				x: 4,
				y: 16,
				w: 20,
				h: 4
			},
			c64: {
				x: 10,
				y: 10,
				w: 20,
				h: 4
			},
			calcu: {
				x: 0,
				y: 0,
				w: 23,
				h: 1
			},
			cpet: {
				x: 0,
				y: 2,
				w: 40,
				h: 4
			},
			gridc: {
				x: 3,
				y: 2,
				w: 50,
				h: 4
			},
			zx: {
				x: 0,
				y: 2,
				w: 32,
				h: 4
			}
		};

		let screen0 = document.getElementById('screen0');

		if (QuintOS.sys == 'calcu') {
			this.rows = screen0.childNodes;
			for (let i = 0; i < h; i++) {
				this.rows[i].tiles = this.rows[i].childNodes;
			}
			return;
		}
		// create rows
		for (let i = 0; i < h; i++) {
			let row = document.createElement('row');
			screen0.appendChild(row);
		}
		this.rows = screen0.childNodes;

		// create single character text tiles
		for (let i = 0; i < h; i++) {
			for (let j = 0; j < w; j++) {
				let tile = document.createElement('tile');
				tile.appendChild(document.createTextNode(' '));
				this.rows[i].appendChild(tile);
			}
			this.rows[i].tiles = this.rows[i].childNodes;
		}
		// the rows will all have the same height
		// the tiles will all have the same width
		$('body').append(`
<style>
row {
	height: ${100 / this.h}%;
}
tile {
	width: ${100 / this.w}%;
}
</style>`);

		// if ( != 7) return;

		// // setup the bitmap lcd
		// let lcdBG = document.getElementById('bitmapBG');
		// for (let i = 0; i < 560; i++) {
		// 	let div = document.createElement('div');
		// 	div.classList.add('null');
		// 	// div.appendChild(document.createTextNode('⩀⪽⪾'));
		// 	lcdBG.appendChild(div);
		// }

		// let lcd = document.getElementById('bitmap');
		// for (let i = 0; i < 560; i++) {
		// 	let div = document.createElement('div');
		// 	// div.appendChild(document.createTextNode(' '));
		// 	lcd.appendChild(div);
		// }
		// this.bitmap = lcd.childNodes;
	}

	/* Display the text character at a position */
	drawChar(x, y, char) {
		// out of bounds check
		if (x < 0 || y < 0 || x >= this.w || y >= this.h) return;
		if (QuintOS.sys == 'calcu' && y == 1 && x > 4) return;
		this.rows[y].tiles[x].childNodes[0].nodeValue = char;
	}

	/* Get the value of a character */
	charAt(x, y) {
		if (x < 0 || y < 0 || x >= this.w || y >= this.h || (QuintOS.sys == 'calcu' && y == 1 && x > 4)) {
			this.error(
				`Out of bounds error! Could not retreive character at: ${x},${y}\nThe size of this screen is ${this.w}x${this.h} characters.`
			);
		}
		return this.rows[y].tiles[x].childNodes[0].nodeValue;
	}

	_boundsCheck(x, y, w, h, type) {
		type ??= 'object';
		let x1 = x + w;
		let y1 = y + h;
		let b0 = x < 0 || y < 0 || x >= this.w || y >= this.h;
		let b1 = x1 < 0 || y1 < 0 || x1 >= this.w || y1 >= this.h;
		if (b0 || b1) {
			console.error(
				`ERROR: Out of bounds! Failed to create a ${type} at x: ${x} y: ${y} of width: ${w} and height: ${h}. The size of this screen is: ${this.w}x${this.h} characters.`
			);
			return false;
		}
		return true;
	}

	_textSync(lines, x, y) {
		for (let i = 0; i < lines.length; i++) {
			let line = lines[i];
			for (let j = 0; j < line.length; j++) {
				this.drawChar(x + j, y + i, line[j]);
			}
		}
	}

	/* Display text with a characters per frame speed limit to mimic old computers */
	async _textAsync(lines, x, y, speed) {
		let chars = 0;
		let frames = 1;
		let _speed = speed;
		// checks the accuracy of the speed every four frames
		// adjusts speed to try to take a consistent amount of real time, since
		// some user's computers are not powerful enough to render all these frames in time
		let interval = setInterval(() => {
			if (!chars) return;
			speed = Math.max(1, _speed + (_speed * frames - chars));
			frames += 4;
		}, 64);

		for (let i = 0; i < lines.length; i++) {
			let line = lines[i];
			for (let j = 0; j < line.length; j++) {
				if (chars % speed == 0) await delay(); // wait till the next animation frame is drawn
				this.drawChar(x + j, y + i, line[j]);
				chars++;
			}
		}

		clearInterval(interval);
	}

	/* Display text in one frame */
	_text(txt, x, y, w, h, speed) {
		x ??= 0;
		y ??= 0;
		if (typeof txt != 'string') txt += '';
		w = w || this.w - x;
		if (QuintOS.sys == 'gridc') {
			speed ??= 0;
		} else {
			speed ??= 10;
		}
		txt = txt.replace(/\t/g, '  ');
		txt = txt.split('\n');
		let lines = [];
		for (let i = 0; i < txt.length; i++) {
			let line = txt[i];
			if (line.length > w) {
				// break line if it is too long
				let part0 = line.slice(0, w);
				// try to find space to break at
				let bp = part0.lastIndexOf(' ');
				let part1;
				if (bp < 0) {
					part1 = line.slice(w);
				} else {
					part0 = line.slice(0, bp);
					part1 = line.slice(bp + 1);
				}
				txt.splice(i, 1, part0, part1);
				line = part0;
			}
			lines.push(line);
			// don't write beyond the bounds of the screen
			if ((h && i >= h) || lines.length >= this.h) break;
		}
		return { lines, x, y, speed };
	}

	/* Display text */
	async text(txt, x, y, w, h, speed) {
		txt = this._text(txt, x, y, w, h, speed);
		if (txt.speed) {
			await this._textAsync(txt.lines, txt.x, txt.y, txt.speed);
		} else {
			this._textSync(txt.lines, txt.x, txt.y);
		}
		return txt.lines.length; // returns the height
	}

	/* Displays a block on the lcd bitmap */
	lcd(block, x, y, direction) {
		let idx = y * 28 + x;
		this.bitmap[idx].className = '';
		if (!block || block == 'none') {
			// this.bitmap[idx].childNodes[0].nodeValue = ' ';
			return;
		}
		// this.bitmap[idx].childNodes[0].nodeValue = block;
		let list = block.split(' ');
		if (direction) list.push(direction);
		for (let _class of list) {
			this.bitmap[idx].classList.add(_class);
		}
	}

	/* Display an application window frame */
	async frame(x, y, w, h, speed, c) {
		x ??= 0;
		y ??= 0;
		w ??= this.w;
		h ??= this.h;
		c ??= '─';
		if (QuintOS.sys == 'a2') c = '*';
		if (QuintOS.sys == 'gridc') c = '═';
		await this.rect(x, y, w, h, speed, c);
	}

	/* Display a rectangle with character or character set */
	async rect(x, y, w, h, speed, c) {
		if (QuintOS.sys == 'cpet') {
			c = {
				tl: '/',
				tr: '\\',
				bl: '\\',
				br: '/',
				hori: '-',
				vert: '!'
			};
		} else if (!c || c == '─') {
			c = {
				tl: '┌',
				tr: '┐',
				bl: '└',
				br: '┘',
				hori: '─',
				vert: '│'
			};
		} else if (c == '═') {
			c = {
				tl: '╔',
				tr: '╗',
				bl: '╚',
				br: '╝',
				hori: '═',
				vert: '║'
			};
		} else if (!c.hori) {
			c = {
				tl: c,
				tr: c,
				bl: c,
				br: c,
				hori: c,
				vert: c
			};
		}

		if (speed) await delay();
		this.drawChar(x, y, c.tl);
		this.drawChar(x + w - 1, y, c.tr);
		this.drawChar(x, y + h - 1, c.bl);
		this.drawChar(x + w - 1, y + h - 1, c.br);

		let chars = 0;
		for (let i = x + 1, j = y + 1; i < x + w / 2 || j < y + h / 2; i++, j++) {
			if (speed && chars % speed == 0) await delay();
			// Horizontal Lines
			if (i < x + w / 2) {
				this.drawChar(i, y, c.hori);
				this.drawChar(i, y + h - 1, c.hori);
				this.drawChar(x + w - (i - x + 1), y, c.hori);
				this.drawChar(x + w - (i - x + 1), y + h - 1, c.hori);
			}
			// Vertical Lines
			if (j < y + h / 2) {
				this.drawChar(x, j, c.vert);
				this.drawChar(x + w - 1, j, c.vert);
				this.drawChar(x, y + h - (j - y + 1), c.vert);
				this.drawChar(x + w - 1, y + h - (j - y + 1), c.vert);
			}
			chars++;
		}
	}

	/* Display a line between two points using a character (diagonal lines not supported yet) */
	line(x1, y1, x2, y2, c) {
		if (y1 == y2) {
			c ??= '-';
			this.text(c.repeat(Math.abs(x1 - x2)), x1, y1);
		} else if (x1 == x2) {
			c ??= '|';
			this.text((c + '\n').repeat(Math.abs(y1 - y2)), x1, y1);
		}
	}

	overlap(a, b) {
		if (a.x >= b.x + b.w || b.x >= a.x + a.w) {
			return false;
		}

		if (a.y >= b.y + b.h || b.y >= a.y + a.h) {
			return false;
		}
		return true;
	}

	dist(x0, y0, x1, y1) {
		return 0;
	}

	erase() {
		let eraser = {
			x: 1,
			y: QuintOS.sys != 'arcv' ? 1 : 2,
			w: this.w - 2,
			h: this.h - 2
		};
		for (let i = 0; i < this.gpu.length; i++) {
			let el = this.gpu[i];
			if (QuintOS.sys == 'calcu' || this.overlap(el, eraser)) {
				el.erase();
				i--;
			}
		}
		if (QuintOS.sys == 'calcu') {
			this._textSync([' '.repeat(this.w), ' '.repeat(4)], 0, 0);
			return;
		}
		let lines = [];
		for (let i = 0; i < eraser.h; i++) {
			lines.push(' '.repeat(eraser.w));
		}
		this._textSync(lines, eraser.x, eraser.y);
	}

	async eraseRect(x, y, w, h, speed) {
		if (QuintOS.sys == 'calcu' && (typeof h == 'undefined' || h > 1)) {
			await this.eraseRect(0, 0, this.w, 1, speed);
			await this.eraseRect(0, 1, 4, 1, speed);
			return;
		}
		x = x || 0;
		y = y || 0;
		w = w || this.w;
		h = h || this.h;
		speed ??= 160;

		let eraser = {
			x,
			y,
			w,
			h
		};

		await this.text((' '.repeat(w) + '\n').repeat(h), x, y, w, h, speed);

		for (let i = 0; i < this.gpu.length; i++) {
			let el = this.gpu[i];
			if (this.overlap(el, eraser)) {
				el.erase();
				i--;
			}
		}
	}

	button(txt, x, y, action) {
		// not the game title or username

		let _this = this;
		class Button {
			constructor(txt, x, y, action) {
				txt = _this._text(txt, x, y);
				this.x = txt.x;
				this.y = txt.y;
				let lines = txt.lines;
				if (lines.length == 1 && y != 0) {
					if (QuintOS.sys == 'cpet') {
						lines[0] = '>' + lines[0] + '<';
					} else if (QuintOS.sys == 'a2') {
						lines[0] = '<' + lines[0] + '>';
					}
				}
				this.txt = lines.join('\n');
				let w = 0; // max width of text
				for (let line of lines) {
					if (line.length > w) w = line.length;
				}
				this.w = w;
				this.h = lines.length;

				if (!_this._boundsCheck(this.x, this.y, this.w, this.h, 'button')) {
					return;
				}

				this.action = action;
				this.tiles = [];

				// add all tiles belonging to the button, to the button
				for (let i = 0; i < lines.length; i++) {
					if (i != 0 && QuintOS.sys == 'calcu') break;
					let line = lines[i];
					for (let j = 0; j < line.length; j++) {
						this.tiles.push(_this.rows[this.y + i].tiles[this.x + j]);
					}
				}

				_this._textSync(lines, this.x, this.y);

				for (let tile of this.tiles) {
					// when a tile in the button is clicked, do button action
					$(tile).click(() => {
						if (!this.action) return;
						this.action();
					});

					// when one tile is hovered over, all tiles in the button are highlighted
					let thisBtn = this;
					$(tile).hover(
						() => {
							for (let tile of thisBtn.tiles) {
								$(tile).addClass('hovered');
							}
						},
						() => {
							for (let tile of thisBtn.tiles) {
								$(tile).removeClass('hovered');
							}
						}
					);
				}
			}

			erase() {
				// remove all tiles
				for (let tile of this.tiles) {
					$(tile).off();
					$(tile).removeClass('hovered');
					if (tile) tile.childNodes[0].nodeValue = ' ';
				}
				// remove from gpu stack
				_this.gpu.splice(_this.gpu.indexOf(this), 1);
			}
		}
		let btn = new Button(txt, x, y, action);
		this.gpu.push(btn);
		return btn;
	}

	input(value, x, y, onSubmit, onChange) {
		let _this = this;
		class Input {
			constructor(value, x, y, onSubmit, onChange) {
				this.x = x;
				this.cursorX = x;
				this.y = y;
				this.h = 1;
				this.onSubmit = onSubmit || (() => {});
				this.onChange = onChange || (() => {});
				this.value = '';

				this.blink = setInterval(() => {
					$(_this.rows[this.y].tiles[this.cursorX]).toggleClass('hovered');
					if (QuintOS.sys == 'calcu' && _this.charAt(this.cursorX, this.y) != '_') {
						_this.drawChar(this.cursorX, this.y, '_');
					} else {
						_this.drawChar(this.cursorX, this.y, ' ');
					}
				}, 500);
			}

			erase() {
				clearInterval(this.blink);
				document.removeEventListener('keydown', this.onKeyDown);
				let cursor = _this.rows[this.y].tiles[this.cursorX];
				$(cursor).off();
				$(cursor).removeClass('hovered');
				for (let i = 0; i < this.cursorX - this.x + 1; i++) {
					let tile = _this.rows[this.y].tiles[this.x + i];
					if (tile) tile.childNodes[0].nodeValue = ' ';
				}

				// remove from gpu stack
				_this.gpu.splice(_this.gpu.indexOf(this), 1);
			}

			get w() {
				return this.value.length || 1;
			}
		}
		let input = new Input(value, x, y, onSubmit, onChange);
		input.onKeyDown = (e) => {
			// log(e.key);
			$(_this.rows[input.y].tiles[input.cursorX]).removeClass('hovered');

			if (e.key == 'Enter') {
				input.onSubmit(input.value);
				return;
			} else if (e.key == 'Backspace' && input.value.length > 0) {
				if (QuintOS.sys == 'calcu' && (input.y != 1 || input.value.length != 4)) {
					_this.drawChar(input.cursorX, input.y, ' ');
				}
				input.value = input.value.slice(0, -1);
				input.cursorX--;
				_this.drawChar(input.cursorX, input.y, ' ');
				return;
			} else if (e.key.length != 1) {
				return;
			}
			let c = e.key.charAt(0);
			_this.drawChar(input.cursorX, input.y, c);
			input.value += c;
			input.cursorX++;
			if (e.key != 'Backspace') {
				input.onChange(input.value);
			}
		};

		document.addEventListener('keydown', input.onKeyDown);
		if (value) {
			value += ''; // convert to string
			// when creating the input, type the inital value
			for (let c of value) {
				input.onKeyDown({
					key: c
				});
			}
		}
		this.gpu.push(input);
		return input;
	}

	async alert(txt, x, y, w, h) {
		let pu = this.popup[QuintOS.sys];
		pu ??= this.popup[3];
		x = x || pu.x;
		y = y || pu.y;
		w = w || pu.w;
		h = h || pu.h;

		if (typeof txt != 'string') txt += '';

		let th;
		if (QuintOS.sys != 'calcu') {
			let _txt = this._text(txt, x + 2, y + 1, w - 4);
			th = _txt.lines.length;
			await this.eraseRect(x, y, w, h + th);
			if (_txt.speed) {
				await this._textAsync(_txt.lines, _txt.x, _txt.y, _txt.speed);
			} else {
				this._textSync(_txt.lines, _txt.x, _txt.y);
			}
			await this.rect(x, y, w, h + th);
		} else {
			this.erase();
			th = await this.text(txt, x, y, w);
			await this.text('OKAY', 0, 1);
		}

		let okayX = Math.floor(Math.min(x + w / 2, x + w - 4));
		let okayY = y + 2 + th;
		if (QuintOS.sys == 'calcu') {
			okayX = 0;
			okayY = 1;
		}
		let okayBtn = await this.button('OKAY', okayX, okayY);

		let _this = this;
		return new Promise((resolve) => {
			async function onKeyDown(e) {
				// log(e.key);
				if (erasing) return;
				if (e.key == 'Enter') {
					await erase();
					resolve();
				}
			}
			document.addEventListener('keydown', onKeyDown);

			let erasing = false;
			let erase = async () => {
				erasing = true;
				if (QuintOS.sys != 'calcu') okayBtn.erase();
				document.removeEventListener('keydown', onKeyDown);
				await _this.eraseRect(x, y, w, h + th);
			};

			if (QuintOS.sys == 'calcu') return;

			okayBtn.action = async () => {
				if (erasing) return;
				await erase();
				resolve();
			};
		});
	}

	async prompt(txt, x, y, w, h) {
		let pu = this.popup[QuintOS.sys];
		if (!pu) pu = this.popup.default;
		x = x || pu.x;
		y = y || pu.y;
		w = w || pu.w;
		h = h || pu.h;

		if (typeof txt != 'string') txt += '';

		let th;
		if (QuintOS.sys != 'calcu') {
			let _txt = this._text(txt, x + 2, y + 1, w - 4);
			th = _txt.lines.length;
			await this.eraseRect(x, y, w, h + th);
			if (_txt.speed) {
				await this._textAsync(_txt.lines, _txt.x, _txt.y, _txt.speed);
			} else {
				this._textSync(_txt.lines, _txt.x, _txt.y);
			}
			await this.rect(x, y, w, h + th);
		} else {
			this.erase();
			th = await this.text(txt, x, y, w);
		}
		let inX = x + 2;
		let inY = y + 2 + th;
		if (QuintOS.sys == 'calcu') {
			inX = 0;
			inY = 1;
		}
		let inp = this.input('', inX, inY);
		let enterBtn;
		let cancelBtn;
		if (QuintOS.sys != 'calcu') {
			let ebX = x + w - (QuintOS.sys != 'zx' ? 18 : 4);
			let eLbl = QuintOS.sys != 'zx' ? 'ENTER' : '»';
			enterBtn = this.button(eLbl, ebX, y + 2 + th);

			let cbX = x + w - (QuintOS.sys != 'zx' ? 10 : 2);
			let cLbl = QuintOS.sys != 'zx' ? 'CANCEL' : 'X';
			cancelBtn = this.button(cLbl, cbX, y + 2 + th);
		}

		let _this = this;
		let erasing = false;
		let erase = async () => {
			erasing = true;
			if (QuintOS.sys != 'calcu') {
				enterBtn.erase();
				cancelBtn.erase();
			}
			await _this.eraseRect(x, y, w, h + th);
		};
		return new Promise(async (resolve, reject) => {
			inp.onSubmit = async () => {
				if (erasing) return;
				await erase();
				let val = inp.value;
				val = isNaN(val) ? val : Number(val);
				resolve(val);
			};

			if (QuintOS.sys == 'calcu') return;

			enterBtn.action = inp.onSubmit;

			cancelBtn.action = async () => {
				if (erasing) return;
				await erase();
				resolve(null);
			};
		});
	}

	loadJS(src) {
		return new Promise(async (resolve, reject) => {
			const script = document.createElement('script');
			script.async = false;
			script.onload = function () {
				log('loaded: ' + src);
				resolve();
			};
			script.onerror = () => {
				reject(`
Failed to load file: \n\n${src}\n\n
Check the Javascript console for more info.
To open the console use control+shift+i or
command+option+i then click the Console tab.`);
			};
			// prevent page loading from the browser's cache
			// if (QuintOS.context == 'live') {
			// 	src += '?' + Date.now();
			// }
			if (src.slice(0, 4) != 'http') {
				script.src = src;
			} else {
				script.innerHTML = await (await fetch(src)).text();
			}

			document.body.appendChild(script);
		});
	}

	async preloadData() {
		if (QuintOS?.preload && typeof QuintOS.preload != 'boolean') {
			await QuintOS.preload();
			return;
		}
		let dir = QuintOS.dir || '.';
		let title = QuintOS.gameTitle;
		let src = `${dir}/${title.slice(0, 1).toLowerCase() + title.slice(1)}-preload.js`;
		try {
			await this.loadJS(src);
		} catch (error) {
			this.error(error);
		}
	}

	async loadGame() {
		let title = QuintOS.gameTitle;
		if (QuintOS.game) {
			QuintOS.game();
		} else {
			let dir = QuintOS.dir || '.';
			let file = `${title.slice(0, 1).toLowerCase() + title.slice(1)}.js`;
			let src = dir + '/' + file;
			try {
				await this.loadJS(src);
			} catch (error) {
				try {
					dir = dir.split('/');
					dir.pop();
					dir = dir.join('/');
					src = dir + '/' + file;
					await this.loadJS(src);
				} catch (ror) {
					this.error(error);
				}
			}
		}
		let lvl = QuintOS.level.toString();
		if (lvl.length == 1) lvl = '0' + lvl;
		title = lvl + '_' + title.slice(0, 1).toUpperCase() + title.slice(1);
		$('head title').text(title);
		if (/(a2|gridc)/.test(QuintOS.sys)) this.frame();
		if (QuintOS.sys != 'calcu') {
			this.button(title, 2, 0, () => {
				if (!QuintOS.game) {
					// open the javascript source in new tab
					open(src);
				} else {
					// open the Javascript editor and console in codepen
					open(window.location.href + '?editors=0011');
				}
			});
			if (!QuintOS.username) return;
			this.text(' by ', 2 + title.length, 0);
			let x = QuintOS.sys != 'arcv' ? 6 + title.length : 2;
			let y = QuintOS.sys != 'arcv' ? 0 : 1;
			this.button(QuintOS.username, x, y, () => {
				open('https://github.com/' + QuintOS.username);
			});
		}
	}

	async error(e) {
		console.error(e);
		if (e.stack) {
			let stack = e.stack.split('\n')[0].split('/').pop().split(':');
			stack = stack[0] + ' line ' + stack[1];
			await this.alert('ERROR: ' + e.message + '\n\n' + stack + '\n' + e.stack);
		} else {
			await this.alert('ERROR: ' + e);
		}
	}

	async exit() {
		await this.eraseRect();

		// run a simple eval based calculator program
		if (QuintOS.sys == 'calcu') {
			let inp;
			function calculate(value) {
				let result = eval(value);
				inp.erase();
				inp = pc.input(result, 0, 0, calculate);
			}
			inp = pc.input('', 0, 0, calculate);
			return;
		}

		// create an input the user can move around the screen
		let inp = this.input('', 0, 0, () => {
			inp.y++;
		});
	}
}

function play(sound) {
	return new Promise((resolve, reject) => {
		sound.play();
		sound.onended(() => {
			resolve();
		});
	});
}

// promise based delay function
function delay(millisec) {
	// if no input arg given, delay waits for the next possible animation frame
	if (!millisec) {
		return new Promise(requestAnimationFrame);
	} else {
		// else it wraps setTimeout in a Promise
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve('');
			}, millisec);
		});
	}
}

window.addEventListener('keydown', function (e) {
	if ((e.key == ' ' || e.key == '/') && e.target == document.body) {
		e.preventDefault();
	}
});

/**
 * Gets a color from a color palette
 * c is the color key
 * palette can be a palette object or number index
 *   in the system's palettes array
 */
function color16(c, palette) {
	if (typeof palette == 'number') {
		palette = palettes[palette];
	}
	palette ??= palettes[0];
	c = palette[c];
	if (!c) return color(0, 0, 0, 0);
	return color(c);
}

function spriteArt(txt, scale, palette) {
	scale ??= 1;
	if (typeof palette == 'number') {
		palette = palettes[palette];
	}
	palette ??= palettes[0];
	let lines = txt; // accepts 2D arrays of characters
	if (typeof txt == 'string') {
		txt = txt.replace(/^[\n\t]+|\s+$/g, ''); // trim newlines
		lines = txt.split('\n');
	}
	let x = 0;
	let y = 0;
	let w = 0;
	for (let line of lines) {
		if (line.length > w) w = line.length;
	}
	let h = lines.length;
	let img = createImage(w * scale, h * scale);
	img.loadPixels();

	for (let i = 0; i < lines.length; i++) {
		for (let j = 0; j < lines[i].length; j++) {
			for (let sX = 0; sX < scale; sX++) {
				for (let sY = 0; sY < scale; sY++) {
					let c = color16(lines[i][j], palette);
					img.set(j * scale + sX, i * scale + sY, c);
				}
			}
		}
	}
	img.updatePixels();
	return img; // return the p5 graphics object
}

function loadAni(spriteSheetImg, size, pos, frameCount, frameDelay) {
	let width, height;
	if (typeof size == 'number') {
		width = size;
		height = size;
	} else {
		width = size[0];
		height = size[1];
	}

	// add all the frames in the animation to the frames array
	let frames = [];
	frameCount ??= 1; // set frameCount to 1 by default
	for (let i = 0; i < frameCount; i++) {
		let x, y;
		// if pos is a number, that means it's just a line number
		// and the animation's first frame is at x = 0
		// the line number is the location of the animation line
		// given as a distance in tiles from the top of the image
		if (typeof pos == 'number') {
			x = width * i;
			y = height * pos;
		} else {
			// pos is the location of the animation line
			// given as a [row,column] coordinate pair of distances in tiles
			// from the top left corner of the image
			x = width * (i + pos[1]); // column
			y = height * pos[0]; // row
		}

		frames.push({
			frame: { x: x, y: y, width: width, height: height }
		});
	}
	let ani = loadAnimation(new SpriteSheet(spriteSheetImg, frames));
	if (typeof frameDelay != 'undefined') ani.frameDelay = frameDelay;
	return ani;
}

class Tiles {
	constructor(rows, cols, layers, tileSize, x, y) {
		this.rows = rows;
		this.cols = cols;
		this.layers = layers;
		this.tileSize = tileSize;
		this.x = x;
		this.y = y;
		this.tiles = [];
		for (let row = 0; row < rows; row++) {
			this.tiles.push([]);
			for (let col = 0; col < cols; col++) {
				this.tiles[row].push([]);
				for (let layer = 0; layer < layers; layer++) {
					this.tiles[row][col].push(null);
				}
			}
		}
	}

	tile(row, col, layer, ani) {
		this.addGroup('default');
		return this.default.tile(row, col, layer, ani);
	}

	addGroup(group) {
		let _this = this;
		if (_this[group]) return;
		_this[group] = new Group();
		_this[group].animations = [];
		_this[group].loadAni = function (name, atlas) {
			let { size, pos, line, frames, delay } = atlas;
			size ??= _this.tileSize;
			pos ??= line || 0;
			let sheet = this.spriteSheet || _this.spriteSheet;
			this.animations[name] = loadAni(sheet, size, pos, frames, delay);
		};
		/*
		 * tile(row, col, layer, ani)
		 * layer is optional, defaults to zero
		 */
		_this[group].tile = function (row, col, layer, ani) {
			if (typeof layer != 'number') {
				ani = layer;
				layer = 0;
			}
			let sprite = createSprite(
				_this.x + (col + 0.5) * _this.tileSize,
				_this.y + (row + 0.5) * _this.tileSize,
				_this.tileSize,
				_this.tileSize
			);
			sprite.row = row;
			sprite.col = col;
			sprite.destRow = row;
			sprite.destCol = col;
			sprite.layer = layer;
			sprite.depth = layer;
			// always start animations at frame 0
			// if false, by default p5.play will save which frame an animation is on
			// when the animation is changed so if the animation hadn't finished
			// when the sprite uses that animation again it will continue at the frame
			// it was at before, this is not ideal for most use cases idk why it's
			// the default so I added this boolean flag for changing that behavior
			sprite.autoResetAnimations = true;
			if (ani) sprite.addAnimation(ani, this.animations[ani] || _this.animations[ani]);
			sprite.addToGroup(this);
			_this.tiles[row][col][layer] = sprite;
			return sprite;
		};
	}

	/*
	 * move(sprite | group, speed, direction | destinationRow, destinationcol)
	 * Moves the sprite/group in a direction by one tile
	 * or to a destination row, col
	 */
	move(sprite, speed, destRow, destCol) {
		if (sprite.layer == 0) {
			throw 'QuintOS Error: Only sprites on layer 1 and higher can be moved';
		}
		let direction = true;
		// if destRow is actually the direction
		if (typeof destRow == 'string') {
			direction = destRow;
			destRow = sprite.destRow;
			destCol = sprite.destCol;
			if (direction == 'up') destRow--;
			if (direction == 'down') destRow++;
			if (direction == 'left') destCol--;
			if (direction == 'right') destCol++;
		}
		sprite.destRow = destRow;
		sprite.destCol = destCol;
		if (sprite.isMoving) return;
		sprite.isMoving = direction;
		sprite.attractionPoint(speed, this.x + (destCol + 0.5) * this.tileSize, this.y + (destRow + 0.5) * this.tileSize);
	}

	/*
	 * update()
	 * Updates the row col position of each sprite
	 */
	update(opt) {
		for (let r = 0; r < this.tiles.length; r++) {
			for (let c = 0; c < this.tiles[r].length; c++) {
				for (let l = 1; l < this.tiles[r][c].length; l++) {
					let sprite = this.tiles[r][c][l];
					if (!sprite) continue;
					let row = (sprite.position.y - this.y - 0.5 * this.tileSize) / this.tileSize;
					let col = (sprite.position.x - this.x - 0.5 * this.tileSize) / this.tileSize;
					if (row % 1 > 0.1 || col % 1 > 0.1) continue;
					row = Math.round(row);
					col = Math.round(col);
					sprite.row = row;
					sprite.col = col;
					if (!opt.snap && (sprite.destRow != row || sprite.destCol != col)) continue;
					sprite.velocity.x = 0;
					sprite.velocity.y = 0;
					sprite.y = this.y + (row + 0.5) * this.tileSize;
					sprite.x = this.x + (col + 0.5) * this.tileSize;
					sprite.isMoving = false;
				}
			}
		}
	}
}

/********************************************************************
 ******************************* QUINTOS *****************************
 ********************************************************************/

p5.disableFriendlyErrors = true;

async function preload() {
	if (!QuintOS?.gameTitle) {
		if (QuintOS?.level) {
			QuintOS.gameTitle = QuintOS.levels[QuintOS.level][0];
		} else {
			console.error('ERROR: There was an error in your load file or QuintOS.gameTitle is not defined.');
			QuintOS.gameTitle = 'GuessTheNumber';
		}
	}

	QuintOS.level = QuintOS?.level || QuintOS.levels.findIndex((l) => l[0] == QuintOS.gameTitle);

	let sys = QuintOS?.sys || QuintOS?.system || QuintOS.levels[QuintOS.level][1];
	QuintOS.sys = sys;
	QuintOS.system = sys;

	const pages = {
		a2: `
<div class="bg">
	<div class="🖥️">
		<div class="back-shadow"></div>
		<div class="monitor-shadow"></div>
		<div class="monitor">
			<div class="monitor__soft-shadow"></div>
			<div class="monitor__shadow"></div>
			<div class="monitor__inner"></div>
			<div class="monitor__inner-shadow"></div>
			<div class="monitor__inner-shadow-light"></div>
			<div class="monitor__inner-shadow-dark"></div>
			<div class="monitor__screen"></div>
			<div class="monitor__screen-2 top-shadow"></div>
			<div class="monitor__screen-2 bottom-shadow"></div>
			<div class="monitor__screen-2">
				<div class="monitor__terminal">
					<div id="screen0" class="screen"></div>
				</div>
			</div>
			<div class="monitor__logo-embed"></div>
			<div class="monitor__line"></div>
			<div class="monitor__power-switch">
				<div class="monitor__power-switch__button"></div>
			</div>
		</div>
		<div class="keyboard">
			<div class="middle"></div>
			<div class="top">
				<div class="emboss">
					<div class="logo-label">
						<div class="logo"></div>
						<div class="label">QuintOS</div>
					</div>
					<div class="model-number">II<span>e</span></div>
				</div>
				<div class="embed">
					<div class="keys-container"></div>
				</div>
			</div>
		</div>
		<div class="floppy-drive">
			<div class="left">
				<div class="emboss"></div>
			</div>
			<div class="top">
				<div class="emboss emboss-1"></div>
				<div class="embed embed-1"></div>
				<div class="emboss emboss-2"></div>
				<div class="embed embed-2"></div>
			</div>
			<div class="front">
				<div class="slot-container">
					<div class="slot">
						<div class="hole"></div>
					</div>
				</div>
				<div class="slot-embed">
					<div class="cover"></div>
					<div class="shadow"></div>
				</div>
				<div class="logo"></div>
				<div class="label">disk II</div>
				<div class="light">
					<span>IN USE</span> <span class="arrow">▼</span>
					<div class="led">
						<div class="reflection"></div>
					</div>
				</div>
			</div>
			<div class="bottom"></div>
		</div>
	</div>
</div>`,
		arcv: `
<div id="pc">
	<div id="case">
		<div id="bezel">
			<div id="tube">
				<div id="screen0" class="screen"></div>
			</div>
		</div>
	</div>
</div>`,
		c64: `
<div id="pc">
	<div id="case">
		<div id="bezel">
			<div id="tube" class="clear">
				<div id="screen0" class="screen"></div>
			</div>
		</div>
		<div id="bottom-panel">
			<div id="badge">
				<a id="logo" href="https://github.com/quinton-ashley/quintos">
					<img class="logo" src="https://raw.githubusercontent.com/quinton-ashley/quintos/main/img/logo.png" />
				</a>
				<a id="brand" href="https://github.com/quinton-ashley/quintos">
					<h1>QuintOS</h1>
				</a>
				<div id="refreshLbl">REFRESH</div>
			</div>
			<div id="ident">
				<div>Created using</div>
				<div><a href="https://github.com/quinton-ashley/quintos">QuintOS</a></div>
			</div>
			<div id="refresh"></div>
			<div id="door"></div>
			<div id="video"></div>
			<div id="audio"></div>
		</div>
	</div>
</div>`,
		calcu: `
<div id="pc">
<div class="calculator" aria-hidden="true">
<div class="lcd">
  <p>F+</p><p>ARC</p><p>NYP</p><p>WRT</p><p>DEG</p><p>TRACE</p><p>PRT</p>
	<div id="screen0" class="screen"><row><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile></row><row><tile> </tile><tile> </tile><tile> </tile><tile> </tile></row></div>
</div>
<div class="lcdBorder"></div>
<div class="onoff"></div>
<div class="onoffin"></div>
<div class="onoffinline1"></div>
<div class="onoffinline2"></div>
<div class="onoffinline3"></div>
<div class="onoffinline4"></div>
<div class="onoffinline5"></div>
<div class="horizmain"></div>
<div id="keys">
<div class="white"><p>F1</p></div>
<div class="white"><p>F2</p></div>
<div class="gray"><p>║</p></div>
<div class="gray"><p>#</p></div>
<div class="gray"><p>$</p></div>
<div class="gray"><p>:</p></div>
<div class="gray"><p>;</p></div>
<div class="gray"><p>A</p></div>
<div class="gray"><p>B</p></div>
<div class="gray"><p>C</p></div>
<div class="gray"><p>D</p></div>
<div class="gray"><p>E</p></div>
<div class="gray"><p>F</p></div>
<div class="gray"><p>G</p></div>
<div class="gray"><p>H</p></div>
<div class="gray"><p>I</p></div>
<div class="gray"><p>J</p></div>
<div class="gray"><p>K</p></div>
<div class="gray"><p>L</p></div>
<div class="gray"><p>M</p></div>
<div class="gray"><p>N</p></div>
<div class="gray"><p>O</p></div>
<div class="gray"><p>P</p></div>
<div class="gray"><p>Q</p></div>
<div class="gray"><p>R</p></div>
<div class="gray"><p>S</p></div>
<div class="gray"><p>T</p></div>
<div class="gray"><p>U</p></div>
<div class="gray"><p>V</p></div>
<div class="gray"><p>W</p></div>
<div class="gray"><p>X</p></div>
<div class="gray"><p>Y</p></div>
<div class="gray"><p>Z</p></div>
<div class="gray"><p>=</p></div>
<div class="gray"><p name=" ">SPC</p></div>
<div class="black"><p>MODE</p></div>
<div class="dark"><p>(</p></div>
<div class="dark"><p>)</p></div>
<div class="dark"><p name="Enter">⬆</p></div>
<div class="orange"><p name="Backspace">C</p></div>
<div class="orange"><p name="Clear">AC</p></div>
<div class="dark"><p>7</p></div>
<div class="dark"><p>8</p></div>
<div class="dark"><p>9</p></div>
<div class="dark"><p>/</p></div>
<div class="black"><p>STAT</p></div>
<div class="black"><p onclick="exit();">STOP</p></div>
<div class="dark"><p>4</p></div>
<div class="dark"><p>5</p></div>
<div class="dark"><p>6</p></div>
<div class="dark"><p>*</p></div>
<div class="black"><p name="Enter">ANS</p></div>
<div class="black"><p name="Enter">CONT</p></div>
<div class="dark"><p>1</p></div>
<div class="dark"><p>2</p></div>
<div class="dark"><p>3</p></div>
<div class="dark"><p>-</p></div>
<div class="dark"><p>,</p></div>
<div class="black"><p name="Backspace">⇦</p></div>
<div class="dark"><p>0</p></div>
<div class="dark"><p>.</p></div>
<div class="dark"><p name="Enter">E</p></div>
<div class="dark"><p>+</p></div>
<div class="dark"><p name="Enter">EXE</p></div>
<div class="black"><p name="Enter">⇨</p></div>
</div>
<div class="vertline"></div>
<div class="horzlinewhite1"></div>
<div class="horzlinewhite2"></div>
<div class="horzlinewhite3"></div>
<div class="horzlinewhite4"></div>
<div class="vertline"></div>
<div class="horzlineblack1"></div>
<div class="horzlineblack2"></div>
<div class="horzlineblack3"></div>
<div class="horzlineblack4"></div>
<div class="out" aria-hidden="true"></div>
  <div class="casio">
      <div class="speaker"></div>
      <h1>
				<span>
					<p class="logo">QuintOS</p>
          <p class="type">PROGRAMMABLE CALCULATOR</p>
          <p class="model">FX-702P</p>
      	</span>
			</h1>
  </div>
</div>
</div>`,
		cpet: `
<div id="pc" class="center">
	<div class="screenBox">
		<div class="frame">
			<div class="screenBox2">
				<div class="screenBox3">
					<div class="terminalScreen">
						<div id="screen0" class="screen"></div>
					</div>
				</div>
			</div>
			<div class="bottomFrame">
				<div class="fan">
				</div>
				<a href="https://github.com/quinton-ashley/quintos">
					<img class="logo" src="https://raw.githubusercontent.com/quinton-ashley/quintos/main/img/logo.png" />
				</a>
				<div class="powerButton">
					<div class="powerIcon">
					</div>
				</div>
				<div class="powerLight lightOff">
				</div>
			</div>
		</div>
	</div>
	<div class="screenFoot"></div>
	<div class="computer">
		<div class="computerFrame">
			<div class="computerFan1"></div>
			<div class="computerFan2"></div>
			<div class="screw1"></div>
			<div class="screw2"></div>
			<div class="computerFrame2">
				<div class="floppy">
					<div class="fingerGrip"></div>
					<div class="slot"></div>
				</div>
				<div class="socket1"></div>
				<div class="socket2"></div>
			</div>
			<div class="screw3"></div>
			<div class="screw4"></div>
			<div class="screw5"></div>
			<div class="powerButton">
				<div class="buttonSlide">
					<div class="computerButton computerButtonOff"></div>
				</div>
				<div class="offIndicator"></div>
				<div class="onIndicator"></div>
			</div>
			<div class="powerLight lightOff">
			</div>
		</div>
	</div>
</div>`,
		gameboi: `
<div id="pc">
<div id="container">
	<div id="bitmapBG-container">
		<div id="bitmapBG" style="--grid-size:20; --grid-columns:28; --grid-rows:20;"></div>
		<div class="info-container">
		<div id="screen0" class="screen"></div>
		</div>
		<div class="shine-container">
			<div class="shine"></div>
		</div>
	</div>
	<div id="bitmap-container">
		<div id="bitmap" style="--grid-size:20; --grid-columns:28; --grid-rows:20;"></div>
  </div>
</div>
</div>`,
		gridc: `
<div id="pc" class="center">
	<div class="screenBox">
		<div class="frame">
			<div class="screenBox2">
				<div class="screenBox3">
					<div class="terminalScreen">
						<div id="screen0" class="screen"></div>
					</div>
				</div>
			</div>
			<div class="bottomFrame">
				<div class="fan">
				</div>
				<a href="https://github.com/quinton-ashley/quintos">
					<img class="logo" src="https://raw.githubusercontent.com/quinton-ashley/quintos/main/img/logo.png" />
				</a>
				<div class="powerButton">
					<div class="powerIcon">
					</div>
				</div>
				<div class="powerLight lightOff">
				</div>
			</div>
		</div>
	</div>`,
		macin: `
<div class="container">
	<div class="mac">
		<div class="monitor-frame">
			<div class="monitor">
				<div class="contain">
					<div class="bg" id="bg">
						<div class="menu">
							<div class="click apple"><img ondragstart="return false;" src="https://raw.githubusercontent.com/quinton-ashley/quintos/main/img/favicon.png"/>
								<div class="dropdown"><a href="#">
										<p>About QuintOS...</p>
										<li></li></a></div>
							</div>
							<div class="click">
								<p>File</p>
								<div class="dropdown"><a href="#">
										<p>New Window</p>
										<li>&#x2318;N</li></a><a href="#">
										<p>Open File...</p>
										<li>&#x2318;O</li></a><a href="#">
										<p>Print</p>
										<li>&#x2318;P</li></a><a href="#">
										<p>Close Window</p>
										<li>&#8679;&#x2318;W</li></a></div>
							</div>
							<div class="click">
								<p>Edit</p>
								<div class="dropdown"><a href="#">
										<p>Undo</p>
										<li>&#x2318;Z</li></a><a href="#">
										<p>Redo</p>
										<li>&#8679;&#x2318;Z</li></a><a href="#">
										<p>Cut</p>
										<li>&#x2318;X</li></a><a href="#">
										<p>Copy</p>
										<li>&#x2318;C</li></a><a href="#">
										<p>Paste</p>
										<li>&#x2318;V</li></a></div>
							</div>
							<div class="click">
								<p>View</p>
								<div class="dropdown"><a href="#">
										<p>Bookmarks</p>
										<li>&#x2318;B</li></a><a href="#">
										<p>History</p>
										<li>&#8679;&#x2318;H</li></a></div>
							</div>
							<div class="click">
								<p>Special</p>
								<div class="dropdown"><a href="#">
										<p>Downloads</p>
										<li>&#x2318;J</li></a><a href="#">
										<p>Open Console</p>
										<li>&#8679;&#x2318;I</li></a></div>
							</div>
							<div class="time">
								<p></p>
							</div>
						</div>
						<div class="desktop">
							<div class="window">
								<div class="bar title">
									<h1>Netscape</h1>
									<nav>
										<ul>
											<li class="close"></li>
											<li class="maximize"></li>
										</ul>
									</nav>
								</div>
								<div class="bar info">
									<ul>
										<li>
											<div class="emoji">⬅</div>
											<p>Back</p>
										</li>
										<li>
											<div class="emoji">➡</div>
											<p>Forward</p>
										</li>
										<li>
											<div class="emoji">🔄</div>
											<p>Reload</p>
										</li>
										<li>
											<div class="emoji">🏠</div>
											<p>Home</p>
										</li>
										<li>
											<div class="emoji">✉</div>
											<p>Mail</p>
										</li>
										<li>
											<div class="emoji">🖼</div>
											<p>Images</p>
										</li>
										<li>
											<div class="emoji">📂</div>
											<p>Open</p>
										</li>
										<li>
											<div class="emoji">🖨</div>
											<p>Print</p>
										</li>
										<li>
											<div class="emoji">🔍</div>
											<p>Find</p>
										</li>
										<li>
											<div class="emoji">🛑</div>
											<p>Stop</p>
										</li>
									</ul>
								</div>
								<div class="bar links">
									<ul>
										<li>Welcome</li>
										<li>What's New</li>
										<li>What's Cool</li>
										<li>Questions</li>
										<li>Net Search</li>
										<li>Net Directory</li>
									</ul>
								</div>
								<iframe src="https://web.archive.org/web/19991128125537/http://www.geocities.com/Heartland/Bluffs/4157/hampdance.html"></iframe>
								<div id="screen0" class="screen"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="floppy">
			<div class="sec-1"></div>
			<div class="sec-2"></div>
		</div>
		<div class="logo"><img src="https://raw.githubusercontent.com/quinton-ashley/quintos/main/img/logo.png" height="100%"/></div>
	</div>
</div>`,
		zx: `
<div class="container">
  <div class="tv">
    <div class="television-container">
      <div class="television">
        <div class="television-inner">
          <div class="television-screen-container">
            <div class="television-crt">
              <div class="television-screen">
                <div class="off"></div>
                <div id="screen0" class="screen"></div>
                <div class="noise"></div>
              </div>
            </div>
          </div>
          <div class="television-lateral">
            <div class="dial-container">
              <div class="dial channel-button" style="--value: 0deg">
                <div class="data-container">
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                </div>
                <div class="dial-core"></div>
                <div class="selector"></div>
              </div>
              <div class="dial volume-button" style="--value: 0deg">
                <div class="data-container">
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                  <div class="data">#</div>
                </div>
                <div class="dial-core"></div>
                <div class="selector"></div>
              </div>
            </div>
            <div class="speaker-container">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="buttons">
            <div class="button-container">
              <div class="button"></div>
            </div>
            <div class="button-container">
              <div class="button"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="television-base">
        <div class="slots">
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
        </div>
        <div class="slots">
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
        </div>
      </div>
      <div class="foot-container">
        <div class="foot left"></div>
        <div class="foot right"></div>
      </div>
    </div>
  </div>
</div>
<div class="zx-spectrum">

  <div class="zx-spectrum-top">
    <div class="logos">
      <div class="sinclair-logo">QuintOS</div>
      <div class="model-name">ZX Spectrum</div>
    </div>
  </div>

  <div class="zx-spectrum-border top"></div>

  <div class="zx-spectrum-keyboard">
    <div class="keyboard-container">
      <div class="keyboard-row keyboard-row-1">

        <div class="key-container">
          <div class="first label color-blue">BLUE</div>
          <div class="second label">EDIT</div>
          <div class="key">
            <div class="primary">1</div>
            <div class="secondary">
              <div class="symbol symbol-1"></div>
            </div>
            <div class="tertiary">!</div>
          </div>
          <div class="last label">DEF FN</div>
        </div>

        <div class="key-container">
          <div class="first label color-red">RED</div>
          <div class="second label">CAPS LOCK</div>
          <div class="key">
            <div class="primary">2</div>
            <div class="secondary">
              <div class="symbol symbol-2"></div>
            </div>
            <div class="tertiary">@</div>
          </div>
          <div class="last label">FN</div>
        </div>

        <div class="key-container">
          <div class="first label color-magenta">MAGENTA</div>
          <div class="second label">TRUE VIDEO</div>
          <div class="key">
            <div class="primary">3</div>
            <div class="secondary">
              <div class="symbol symbol-3"></div>
            </div>
            <div class="tertiary">#</div>
          </div>
          <div class="last label">LINE</div>
        </div>

        <div class="key-container">
          <div class="first label">GREEN</div>
          <div class="second label">INV.VIDEO</div>
          <div class="key">
            <div class="primary">4</div>
            <div class="secondary">
              <div class="symbol symbol-4"></div>
            </div>
            <div class="tertiary">$</div>
          </div>
          <div class="last label">OPEN #</div>
        </div>

        <div class="key-container">
          <div class="first label color-cyan">CYAN</div>
          <div class="second label arrow">⇦</div>
          <div class="key">
            <div class="primary">5</div>
            <div class="secondary">
              <div class="symbol symbol-5"></div>
            </div>
            <div class="tertiary">%</div>
          </div>
          <div class="last label">CLOSE #</div>
        </div>

        <div class="key-container">
          <div class="first label color-yellow">YELLOW</div>
          <div class="second label arrow arrow-vertical">⇩</div>
          <div class="key">
            <div class="primary">6</div>
            <div class="secondary">
              <div class="symbol symbol-6"></div>
            </div>
            <div class="tertiary">&</div>
          </div>
          <div class="last label">MOVE</div>
        </div>

        <div class="key-container">
          <div class="first label color-white">WHITE</div>
          <div class="second label arrow arrow-vertical">⇧</div>
          <div class="key">
            <div class="primary">7</div>
            <div class="secondary">
              <div class="symbol symbol-7"></div>
            </div>
            <div class="tertiary">'</div>
          </div>
          <div class="last label">ERASE</div>
        </div>

        <div class="key-container">
          <div class="first label arrow">⇨</div>
          <div class="key">
            <div class="primary">8</div>
            <div class="secondary">
              <div class="symbol symbol-8"></div>
            </div>
            <div class="tertiary">(</div>
          </div>
          <div class="last label">POINT</div>
        </div>

        <div class="key-container">
          <div class="first label color-white">GRAPHICS</div>
          <div class="key">
            <div class="primary">9</div>
            <div class="secondary"></div>
            <div class="tertiary">)</div>
          </div>
          <div class="last label">CAT</div>
        </div>

        <div class="key-container">
          <div class="first label inverted-color">BLACK</div>
          <div class="second label">DELETE</div>
          <div class="key">
            <div class="primary">0</div>
            <div class="secondary"></div>
            <div class="tertiary">_</div>
          </div>
          <div class="last label">FORMAT</div>
        </div>

      </div>
      <div class="keyboard-row keyboard-row-2">

        <div class="key-container">
          <div class="first label">SIN</div>
          <div class="key">
            <div class="primary">Q</div>
            <div class="secondary">&lt;=</div>
            <div class="tertiary">PLOT</div>
          </div>
          <div class="last label">ASN</div>
        </div>

        <div class="key-container">
          <div class="first label">COS</div>
          <div class="key">
            <div class="primary">W</div>
            <div class="secondary">&lt;&gt;</div>
            <div class="tertiary">DRAW</div>
          </div>
          <div class="last label">ACS</div>
        </div>

        <div class="key-container">
          <div class="first label">TAN</div>
          <div class="key">
            <div class="primary">E</div>
            <div class="secondary">&gt;=</div>
            <div class="tertiary">REM</div>
          </div>
          <div class="last label">ATN</div>
        </div>

        <div class="key-container">
          <div class="first label">INT</div>
          <div class="key">
            <div class="primary">R</div>
            <div class="secondary">&lt;</div>
            <div class="tertiary">RUN</div>
          </div>
          <div class="last label">VERIFY</div>
        </div>

        <div class="key-container">
          <div class="first label">RND</div>
          <div class="key">
            <div class="primary">T</div>
            <div class="secondary">&lt;</div>
            <div class="tertiary">RAND</div>
          </div>
          <div class="last label">MERGE</div>
        </div>

        <div class="key-container">
          <div class="first label">STR $</div>
          <div class="key">
            <div class="primary">Y</div>
            <div class="secondary">AND</div>
            <div class="tertiary">RETURN</div>
          </div>
          <div class="last label">[</div>
        </div>

        <div class="key-container">
          <div class="first label">CHR $</div>
          <div class="key">
            <div class="primary">U</div>
            <div class="secondary">OR</div>
            <div class="tertiary">IF</div>
          </div>
          <div class="last label">]</div>
        </div>

        <div class="key-container">
          <div class="first label">CODE</div>
          <div class="key">
            <div class="primary">I</div>
            <div class="secondary">AT</div>
            <div class="tertiary">INPUT</div>
          </div>
          <div class="last label">IN</div>
        </div>

        <div class="key-container">
          <div class="first label">PEEK</div>
          <div class="key">
            <div class="primary">O</div>
            <div class="secondary big">;</div>
            <div class="tertiary">POKE</div>
          </div>
          <div class="last label">OUT</div>
        </div>

        <div class="key-container">
          <div class="first label">TAB</div>
          <div class="key">
            <div class="primary">P</div>
            <div class="secondary big">"</div>
            <div class="tertiary">PRINT</div>
          </div>
          <div class="last label">©</div>
        </div>

      </div>
      <div class="keyboard-row keyboard-row-3">

        <div class="key-container">
          <div class="first label">READ</div>
          <div class="key">
            <div class="primary">A</div>
            <div class="secondary">STOP</div>
            <div class="tertiary">NEW</div>
          </div>
          <div class="last label big">~</div>
        </div>

        <div class="key-container">
          <div class="first label">RESTORE</div>
          <div class="key">
            <div class="primary">S</div>
            <div class="secondary">NOT</div>
            <div class="tertiary">SAVE</div>
          </div>
          <div class="last label">|</div>
        </div>

        <div class="key-container">
          <div class="first label">DATA</div>
          <div class="key">
            <div class="primary">D</div>
            <div class="secondary">STEP</div>
            <div class="tertiary">DIM</div>
          </div>
          <div class="last label">\</div>
        </div>

        <div class="key-container">
          <div class="first label">SGN</div>
          <div class="key">
            <div class="primary">F</div>
            <div class="secondary">TO</div>
            <div class="tertiary">FOR</div>
          </div>
          <div class="last label">{</div>
        </div>

        <div class="key-container">
          <div class="first label">ABS</div>
          <div class="key">
            <div class="primary">G</div>
            <div class="secondary">THEN</div>
            <div class="tertiary">GOTO</div>
          </div>
          <div class="last label">}</div>
        </div>

        <div class="key-container">
          <div class="first label">SQR</div>
          <div class="key">
            <div class="primary">H</div>
            <div class="secondary big">↑</div>
            <div class="tertiary">GOSUB</div>
          </div>
          <div class="last label">CIRCLE</div>
        </div>

        <div class="key-container">
          <div class="first label">VAL</div>
          <div class="key">
            <div class="primary">J</div>
            <div class="secondary big">-</div>
            <div class="tertiary">LOAD</div>
          </div>
          <div class="last label">VAL $</div>
        </div>

        <div class="key-container">
          <div class="first label">LEN</div>
          <div class="key">
            <div class="primary">K</div>
            <div class="secondary big">+</div>
            <div class="tertiary">LIST</div>
          </div>
          <div class="last label">SCREEN $</div>
        </div>

        <div class="key-container">
          <div class="first label">USR</div>
          <div class="key">
            <div class="primary">L</div>
            <div class="secondary big">=</div>
            <div class="tertiary">LET</div>
          </div>
          <div class="last label">ATTR</div>
        </div>

        <div class="key-container">
          <div class="without-label key">ENTER</div>
        </div>

      </div>
      <div class="keyboard-row keyboard-row-4">

        <div class="key-container">
          <div class="key double without-label large">
            <span>CAPS</span>
            <span>SHIFT</span>
          </div>
        </div>

        <div class="key-container">
          <div class="first label">LN</div>
          <div class="key">
            <div class="primary">Z</div>
            <div class="secondary big">:</div>
            <div class="tertiary">COPY</div>
          </div>
          <div class="last label">BLEEP</div>
        </div>

        <div class="key-container">
          <div class="first label">EXP</div>
          <div class="key">
            <div class="primary">X</div>
            <div class="secondary big">£</div>
            <div class="tertiary">CLEAR</div>
          </div>
          <div class="last label">INK</div>
        </div>

        <div class="key-container">
          <div class="first label">L PRINT</div>
          <div class="key">
            <div class="primary">C</div>
            <div class="secondary big">?</div>
            <div class="tertiary">CONT</div>
          </div>
          <div class="last label">PAPER</div>
        </div>

        <div class="key-container">
          <div class="first label">L LIST</div>
          <div class="key">
            <div class="primary">V</div>
            <div class="secondary big">/</div>
            <div class="tertiary">CLS</div>
          </div>
          <div class="last label">FLASH</div>
        </div>

        <div class="key-container">
          <div class="first label">BIN</div>
          <div class="key">
            <div class="primary">B</div>
            <div class="secondary big">*</div>
            <div class="tertiary">BORDER</div>
          </div>
          <div class="last label">BRIGHT</div>
        </div>

        <div class="key-container">
          <div class="first label">IN KEY $</div>
          <div class="key">
            <div class="primary">N</div>
            <div class="secondary big">,</div>
            <div class="tertiary">NEXT</div>
          </div>
          <div class="last label">OVER</div>
        </div>

        <div class="key-container">
          <div class="first label">PI</div>
          <div class="key">
            <div class="primary">M</div>
            <div class="secondary big">.</div>
            <div class="tertiary">PAUSE</div>
          </div>
          <div class="last label">INVERSE</div>
        </div>

        <div class="key-container">
          <div class="key double without-label">
            <span class="color-red">SYMBOL</span>
            <span class="color-red">SHIFT</span>
          </div>
        </div>

        <div class="key-container">
          <div class="key double without-label large-xl">
            <span>BREAK</span>
            <span class="big">SPACE</span>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="zx-spectrum-border bottom"></div>

</div>`
	};

	// `<figure class="icon trash click"><img src="https://dl.dropboxusercontent.com/s/c5w4rhgk2g34de7/icon_trash.png?dl=0" alt=""/>
	// 	<figcaption>Trash</figcaption>
	// </figure>
	// <figure class="icon doc click"><img src="https://dl.dropboxusercontent.com/s/2xofo03j79asxsy/icon_doc.png?dl=0" alt=""/>
	// 	<figcaption>Document</figcaption>
	// </figure>
	// <figure class="icon mail click"><img src="https://dl.dropboxusercontent.com/s/graxq4qm8larlia/icon_mail.png?dl=0" alt=""/>
	// 	<figcaption>Mail</figcaption>
	// </figure>`;

	$('body').append(pages[QuintOS.sys]);
	$('body').addClass(QuintOS.sys);

	if (QuintOS.sys != 'calcu') {
		$('main').css('display', 'none');
	} else {
		$('main').remove();
	}

	if (QuintOS.sys == 'calcu') {
		$('#keys div p').click(function () {
			let $this = $(this);
			let key = $this.attr('name') || $this.text();
			let count = 1;
			if (key == 'Clear') {
				count = 23;
				key = 'Backspace';
			}
			if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(key)) {
				key = key.toLowerCase();
			}
			for (let i = 0; i < count; i++) {
				document.dispatchEvent(
					new KeyboardEvent('keydown', {
						key: key
					})
				);
			}
		});
	} else if (QuintOS.sys == 'macin') {
		setInterval(() => {
			$('.time p').text(
				new Date().toLocaleTimeString('en-US', {
					hour12: false,
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			);
		}, 1000);
		$('.window').draggable({
			handle: '.title.bar'
		});
		$('.window').resizable();
	}

	$('canvas').removeAttr('style');
	pixelDensity(1);

	window.pc = new PC();
	window.prompt = async (msg) => {
		return await pc.prompt(msg);
	};
	window.alert = async (msg) => {
		return await pc.alert(msg);
	};
	window.exit = async () => {
		return await pc.exit();
	};

	let bootScreens = {
		GuessTheNumber: [
			{
				name: 'info',
				x: 0,
				y: 0,
				speed: 1,
				txt: 'Hello! QuintOS v0.0'
			}
		],
		PickAPath: [
			{
				name: 'boot',
				x: 0,
				y: 0,
				speed: 2,
				txt: `
*** QUINTOS JAVASCRIPT 1.0 ***

 2902 BYTES FREE

READY
.
.
.
.`.slice(1)
			},
			{
				name: 'h1',
				x: 5,
				y: 8,
				speed: 3,
				txt: `
 █████                 ██   ██
█     █               █  █ █  
█     █               █  █ █    
█     █ █ █ █ ██  ███ █  █  █
█     █ █ █ █ █ █  █  █  █   █
█  █  █ ███ █ █ █  █  █  █   █`
			},
			{
				name: 'h1-b',
				x: 5,
				y: 14,
				speed: 2,
				txt: `
 █████                 ██  ██
    █                                       `
			},
			{
				name: 'bg',
				x: 0,
				y: 17,
				speed: 5,
				txt: '.\n'.repeat(9)
			}
		],
		Pong: [
			// 			{
			// 				name: 'h1',
			// 				x: 0,
			// 				y: 3,
			// 				speed: 2,
			// 				txt: `
			//   ────────────────▄▄───▐█
			//   ────▄▄▄───▄██▄──█▀───█─▄
			//   ──▄██▀█▌─██▄▄──▐█▀▄─▐█▀
			//   ─▐█▀▀▌───▄▀▌─▌─█─▌──▌─▌
			//   ─▌▀▄─▐──▀▄─▐▄─▐▄▐▄─▐▄─▐▄

			// ████◣             ██◣ ██◣
			// █    █             █  █ █
			// █    █ █ █▐▌██◣██◣ █  █ █
			// █    █ █ █▐▌█ █ █  █  █ ◥██◣
			// █    █ █ █▐▌█ █ █  █  █    █
			// █  ▗ █ ██◤▐▌█ █ █  █  █    █
			// ◥████◤             ◥██◤ ◥██◤
			// 	    ▘`
			// 			},
			{
				name: 'bg',
				x: 0,
				y: 0,
				speed: 20,
				txt: ['§', 'ж', '*', '^', '°', '#', '¤', '‡', '˜', '»'][Math.floor(Math.random() * 10)].repeat(1000)
			},
			{
				name: 'info',
				x: 12,
				y: 20,
				speed: 1,
				txt: `
JavaScript READY
QuintOS version 0.1
CopyLeft 1977`
			}
		],
		Hangman: [
			{
				name: 'bg',
				x: 2,
				y: 0,
				speed: 80,
				txt: `
    _     _     _  _     _     _
(_.' )  .' )  .' )( \`.  ( \`.  ( \`._)
   .' .' .' .' .'  \`. \`. \`. \`. \`.
  (_.' .' .' ,' .'\`. \`, \`. \`. \`._)
     .' .' ,' .'   \`. \`, \`. \`.
   .' .' .' .'       \`. \`. \`. \`.
  (_.' .' .'         \`. \`. \`._)
     .' .'                \`. \`.
   .' .'                  \`. \`.
 .' .'                      \`. \`.
(_.'                         \`._)
( '.                           ,' )
 '. '.                      ,' ,'
   '. '.                  ,' ,'
   _ '. '.                ,' ,' _
  ( '. '. '.            ,' ,' ,' )
   '. '. '. '.     ,' ,' ,' ,'
   _ '. '. \`. '.   ,' ,\` ,' ,' _
  ( '. '. '. \`. '.,' ,\` ,' ,' ,' )
 _ '. '. '. '. '.  ,' ,' ,' ,' ,' _
( '._)  '._)  '._)(_,'  (_,'  ( ,' )`
			},
			{
				name: 'logo',
				x: 15,
				y: 8,
				speed: 1,
				txt: `
▓▓▓ ▓▓▓ 
  ▓ ▓
  ▓ ▓   
  ▓ ▓  
▓▓▓ ▓▓▓ \\_`
			},
			{
				name: 'info',
				x: 15,
				y: 15,
				speed: 1,
				txt: 'QuintOS ][e'
			}
		],
		QuickClicks: [
			{
				name: 'bg',
				x: 5,
				y: 4,
				speed: 100,
				txt: (() => {
					let p = ['\\', ' ', ' ', '\\', '_', '_'];
					let txt = '';
					for (let i = 0; i < 88; i += 4) {
						let pat = '';
						for (let j = 5; j >= 0; j--) {
							pat += p[(i + j) % 6];
						}
						txt += pat.repeat(12).slice(0, -2) + '\n';
					}
					return txt;
				})()
			},
			{
				name: 'logo',
				x: 2,
				y: 2,
				speed: 50,
				txt: `
          ________\n         /\\       \\\n        /  \\       \\
       /    \\       \\\n      /      \\_______\\\n      \\      /       /
    ___\\    /   ____/___\n   /\\   \\  /   /\\       \\
  /  \\   \\/___/  \\       \\\n /    \\       \\   \\       \\
/      \\_______\\   \\_______\\\n\\      /       /   /       /
 \\    /       /   /       /\n  \\  /       /\\  /       /
   \\/_______/  \\/_______/`
			},
			{
				name: 'h1',
				x: 20,
				y: 10,
				speed: 10,
				txt: `
 ██████╗ ██╗   ██╗██╗███╗   ██╗████████╗ ██████╗ ███████╗
██╔═══██╗██║   ██║██║████╗  ██║╚══██╔══╝██╔═══██╗██╔════╝
██║   ██║██║   ██║██║██╔██╗ ██║   ██║   ██║   ██║███████╗
██║▄▄ ██║██║   ██║██║██║╚██╗██║   ██║   ██║   ██║╚════██║
╚██████╔╝╚██████╔╝██║██║ ╚████║   ██║   ╚██████╔╝███████║
 ╚══▀▀═╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚══════╝`
			},
			{
				name: 'title',
				x: 5,
				y: 0,
				speed: 1,
				txt: 'QuintOS'
			},
			{
				name: 'info',
				x: 20,
				y: 23,
				speed: 2,
				txt: `
THE Personal Computer: Powered by JavaScript™
Version 4.0 Copyleft QuintOS ©1981`
			}
		],
		TicTacToe: [
			{
				name: 'logo',
				x: 24,
				y: 4,
				speed: 30,
				txt: `
             ,,,,,,
         o#'9MMHb':'-,o,
      .oH":HH$' "' ' -*R&o,
     dMMM*""'\`'      .oM"HM?.
   ,MMM'          "HLbd< ?&H\\
  .:MH ."\\          \` MM  MM&b
 . "*H    -        &MMMMMMMMMH:
 .    dboo        MMMMMMMMMMMM.
 .   dMMMMMMb      *MMMMMMMMMP.
 .    MMMMMMMP        *MMMMMP .
      \`#MMMMM           MM6P ,
  '    \`MMMP"           HM*\`,
   '    :MM             .- ,
    '.   \`#?..  .       ..'
       -.   .         .-
         ''-.oo,oo.-''`
			},
			{
				name: 'info',
				x: 23,
				y: 24,
				speed: 2,
				txt: `
QUiNT Compass qOS BIOS Version 05
Copyleft © 1983 QUiNT Systems Corp`
			}
		],
		Contain: [
			{
				name: 'boot',
				txt: `
  **** QUINTOS v09 JAVASCRIPT ES12 ****

  64GB RAM SYSTEM 38911 GIGABYTES FREE

READY.
10 PRINT CHR$(205.5+RND(1)); : GOTO 10
  RUN\n`.slice(1)
			},
			{
				name: 'logo',
				x: 12,
				y: 9,
				speed: 2,
				txt: `
┏━━┓ ┏┓ ┏┓┏━┳━━┓
┃┏┓┣┳╋╋━┫┗┫┃┃━━┫
┃┗┛┃┃┃┃┃┃┏┫┃┣━━┃
┗━┓┣━┻┻┻┻━┻━┻━━┛
  ┗┛`
			}
		],
		Snake: [
			{
				name: 'logo',
				x: 0,
				y: 0,
				speed: 1,
				txt: 'QuintOS'
			},
			{
				name: 'version',
				x: 1,
				y: 1,
				speed: 1,
				txt: 'v7'
			}
		],
		Sokoban: [
			{
				name: 'logo',
				x: 6,
				y: 13,
				speed: 1,
				txt: `
┏━┓ ┏┓ ┏┓┏━┳━┓┏┓┏━┓
┃┃┣┳╋╋━┫┗┫┃┃━┫┃┃┃━┫
┃┃┃┃┃┃┃┃┏┫┃┃ ┃┃┃┃ ┃
┃┃┃┃┃┃┃┃┃┫┃┣━┃┃┃┣━┃
┗┓┣━┻┻┻┻━┻━┻━┛┗┛┗━┛
 ┗┛`
			}
		]
	};

	bootScreens.WheelOfFortune = bootScreens.Hangman;
	bootScreens.Sketchbook = bootScreens.Contain;

	async function displayBootscreen() {
		console.log(`QuintOS v${QuintOS.level} size: ${width}x${height} rows: ${pc.w} cols: ${pc.h}`);

		let waitForDraw = () =>
			new Promise((resolve) => {
				let wasDrawn = false;
				window.draw = () => {
					if (!wasDrawn) {
						wasDrawn = true;
						resolve();
					}
				};
			});

		if (QuintOS.sys == 'calcu') {
			let txt0 = "'-.⎽⎽.-'⎺⎺".repeat(3);
			for (let i = 0; i < 30; i++) {
				// pc.text(txt1.slice(0, 12), 0, 0, 0, 0, 12);
				await pc.text(txt0.slice(0, 23), 0, 0, 0, 0, 23);
				txt0 = txt0[txt0.length - 1] + txt0.slice(0, -1);
				// txt1 = txt1.slice(1) + txt1[1];
			}
			return;
		} else if (QuintOS.sys == 'c64') {
			function makeMaze() {
				const STR$ = (val) => String.fromCodePoint((9380 + val) >>> 0);
				const RND = (range) => Math.random() * range;
				let txt = '';
				for (let i = 0; i < pc.h; i++) {
					for (let j = 0; j < pc.w; j++) {
						txt += STR$(205.5 + RND(1));
					}
					txt += '\n';
				}
				return txt;
			}
			await pc.text(makeMaze(), 0, 0, null, null, 20);
		}

		for (let el of bootScreen) {
			let txt = el.txt.charAt(0) == '/n' ? el.txt.slice(1) : el.txt;
			await pc.text(txt, el.x, el.y, 0, 0, el.speed);
		}

		await waitForDraw();

		// $('#screen0').parent().addClass('clear');
		$('#screen0').parent().append($('main'));
		$('main').css('display', 'block');

		if (QuintOS.sys == 'arcv') {
			resizeCanvas(320, 400);
		} else if (QuintOS.sys == 'gridc') {
			resizeCanvas(320, 240);
		} else if (QuintOS.sys == 'zx') {
			resizeCanvas(256, 192);
		}
		camera.position.x = width / 2;
		camera.position.y = height / 2;
		strokeWeight(2);
		$('canvas').removeAttr('style');
	}

	let palettes = {
		zx: [
			{
				0: '#000000', // bright 0 black
				1: '#0000d8', // bright 0 blue
				2: '#d80000', // bright 0 red
				3: '#d800d8', // bright 0 magenta
				4: '#00d800', // bright 0 green
				5: '#00d8d8', // bright 0 cyan
				6: '#d8d800', // bright 0 yellow
				7: '#ffffff', // bright 0 white
				8: '#000000', // bright 1 black
				9: '#0000ff', // bright 1 blue
				A: '#ff0000', // bright 1 red
				B: '#ff00ff', // bright 1 magenta
				C: '#00ff00', // bright 1 green
				D: '#00ffff', // bright 1 cyan
				E: '#ffff00', // bright 1 yellow
				F: '#ffffff' // bright 1 white
			}
		],
		c64: [
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
		],
		gameboi: [
			{
				0: '#0f380f',
				1: '#306230',
				2: '#8bac0f',
				3: '#9bbc0f'
			}
			// {
			// 	0: '#000000',
			// 	1: '#555555',
			// 	2: '#aaaaaa',
			// 	3: '#ffffff'
			// }
		]
	};

	palettes.arcv = palettes.zx;

	/*#0f380f; #306230; #8bac0f; #9bbc0f; */

	// assign palettes to the system's palette
	window.palettes = palettes[QuintOS.sys] || [];

	let _createSprite = createSprite;

	createSprite = (x, y, w, h) => {
		let img;
		if (typeof x == 'object') img = x;
		x ??= width / 2;
		y ??= height / 2;

		let sprite = _createSprite(x, y, w, h);

		if (img) sprite.addImage(img);

		// prettier-ignore
		Object.defineProperty(sprite, 'x', {
				get: function () { return this.position.x },
				set: function (x) { this.position.x = Math.round(x) }
			});
		// prettier-ignore
		Object.defineProperty(sprite, 'y', {
				get: function () { return this.position.y },
				set: function (y) { this.position.y = Math.round(y) }
			});
		// prettier-ignore
		Object.defineProperty(sprite, 'w', {
				get: function () { return this.width },
				set: function (w) { this.width = Math.round(w) }
			});
		// prettier-ignore
		Object.defineProperty(sprite, 'h', {
				get: function () { return this.height },
				set: function (h) { this.height = Math.round(h) }
			});

		sprite.ani = function (name, start, end) {
			return new Promise((resolve, reject) => {
				this.changeAnimation(name);
				if (start) this.animation.changeFrame(start);
				if (end) this.animation.goToFrame(end);
				this.animation.onComplete = () => {
					resolve();
				};
			});
		};

		sprite.loadAni = function (name, atlas) {
			let { size, pos, line, frames, delay } = atlas;
			size ??= [this.w / this.scale, this.h / this.scale];
			pos ??= line || 0;
			this.addAnimation(name, loadAni(this.spriteSheet, size, pos, frames, delay));
		};

		return sprite;
	};

	let title = QuintOS.gameTitle;
	QuintOS.dir += '/' + title[0].toUpperCase() + title.slice(1);

	if (QuintOS.level >= 11 && !QuintOS?.preload) QuintOS.preload = true;
	if (QuintOS.preload) pc.preloadData();

	if (/(a2|gridc)/.test(QuintOS.sys)) await pc.frame();

	let bootScreen = bootScreens[title];
	await displayBootscreen();
	// await delay(111111111); // test bootscreen
	await pc.eraseRect();

	if (QuintOS.sys == 'calcu') await delay(1000);
	if (QuintOS.sys == 'a2') await delay(500);

	if (QuintOS.sys == 'gridc') {
		// add the clock
		setInterval(() => {
			let time = new Date($.now());
			pc.text(Date.now(), 65, 29);
			time = time.toString().split(' GMT')[0];
			pc.text(time, 2, 29);
		}, 1000);
	}

	// onerror = (msg, url, lineNum) => {
	// 	pc.error(msg + ' ' + url + ':' + lineNum);
	// };
	p5.disableFriendlyErrors = false;
	pc.loadGame();
}

function setup() {
	createCanvas(320, 200);
	frameRate(60);
	noStroke();
}

function draw() {}
