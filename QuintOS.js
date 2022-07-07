let log = console.log; // log becomes a shortcut for console.log

if (typeof QuintOS == 'undefined') {
	window.QuintOS = {};
}

QuintOS.levels = [
	/*00*/ ['GuessTheNumber', 'calcu'], // primitives and if/else
	/*01*/ ['PickAPath', 'cpet'], // array
	/*02*/ ['Pong', 'zx'], // using objects
	/*03*/ ['LeafEater', 'gameboi'], // iteration
	/*04*/ ['Hangman', 'a2'], // strings
	/*05*/ ['QuickClicks', 'gridc'], // recursion
	/*06*/ ['BinaryCounter', 'cpet'], // binary
	/*07*/ ['CodeBreaker', 'gridc'], // loading files
	/*08*/ ['GenerativeArt', 'c64'], // fun (review)
	/*09*/ ['TicTacToe', 'gridc'], // 2D Array
	/*10*/ ['DataDesigner', 'c64'], // creating objects
	/*11*/ ['WorldWideWeb', 'macin'], // web

	/*12*/ ['Wordle', 'a2'],
	/*13*/ ['TicTacAIO', 'gridc'],
	/*14*/ ['SpeakAndSpell', 'sas'],
	/*15*/ ['Contain', 'zx'],
	/*16*/ ['Snake', 'gameboi'],
	/*17*/ ['SketchBook', 'c64'],
	/*18*/ ['SuperJump', 'arcv'],
	/*19*/ ['Sokoban', 'c64']
];

{
	let url = location.href.split('?');
	QuintOS.web ??= location.hostname != 'localhost' && location.hostname != '127.0.0.1';
	if (!QuintOS.web) {
		$('head').append('<link rel="icon" href="node_modules/quintos/favicon.png" />');
	}
	QuintOS.root = './node_modules';
	if (QuintOS.web) {
		QuintOS.root = 'https://quinton-ashley.github.io';
	}
	if (url.length > 1) {
		let params = new URLSearchParams(url[1]);
		for (let pair of params.entries()) {
			let k = pair[0].toLowerCase();
			let v = pair[1];
			if (k == 'gametitle' || k == 'game') k = 'game';
			if (v === 'false') v = false;
			QuintOS[k] = v;
		}
	}
}

QuintOS._lines = 0;

/* Display the text character at a position */
QuintOS._drawChar = (row, col, char) => {
	// out of bounds check
	if (col < 0 || row < 0 || col >= QuintOS.cols || row >= QuintOS.rows) return;
	if (QuintOS.sys == 'calcu' && row == 1 && col > 4) return;
	QuintOS.screen[row].tiles[col].childNodes[0].nodeValue = char;
};

/* Get the value of a character */
QuintOS._charAt = (row, col) => {
	if (
		col < 0 ||
		row < 0 ||
		col >= QuintOS.cols ||
		row >= QuintOS.rows ||
		(QuintOS.sys == 'calcu' && row == 1 && col > 4)
	) {
		QuintOS.error(
			`Out of bounds error! Could not retrieve character at row: ${row} col: ${col}\nThe size of this screen is ${QuintOS.cols}x${QuintOS.rows} characters.`
		);
	}
	return QuintOS.screen[row].tiles[col].childNodes[0].nodeValue;
};

QuintOS._boundsCheck = (row, col, w, h, type) => {
	type ??= 'object';
	let x1 = col + w;
	let y1 = row + h;
	let b0 = col < 0 || row < 0 || col >= QuintOS.cols || row >= QuintOS.rows;
	let b1 = x1 < 0 || y1 < 0 || x1 > QuintOS.cols || y1 > QuintOS.rows;
	if (b0 || b1) {
		QuintOS.error(
			`Out of bounds! Failed to create a ${type} at row: ${row} col: ${col} of width: ${w} and height: ${h}. The size of this screen is: ${QuintOS.cols}x${QuintOS.rows} characters.`
		);
		return false;
	}
	return true;
};

QuintOS._textSync = (lines, row, col) => {
	for (let i = 0; i < lines.length; i++) {
		let line = lines[i];
		for (let j = 0; j < line.length; j++) {
			QuintOS._drawChar(row + i, col + j, line[j]);
		}
	}
};

/* Display text with a characters per frame speed limit to mimic old computers */
QuintOS._textAsync = async (lines, row, col, speed) => {
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
			QuintOS._drawChar(row + i, col + j, line[j]);
			chars++;
		}
	}

	clearInterval(interval);
};

/* Display text in one frame */
QuintOS._text = (txt, row, col, w, h, speed) => {
	row ??= QuintOS._lines || 2;
	col ??= 2;
	if (typeof txt != 'string') txt += '';
	w = w || QuintOS.cols - col;
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
		if ((h && i >= h) || lines.length >= QuintOS.rows) break;
	}
	return { lines, row, col, speed };
};

/* Display text */
QuintOS.text = async (txt, row, col, w, h, speed) => {
	let noRow = !row && row != 0;
	txt = QuintOS._text(txt, row, col, w, h, speed);
	if (txt.speed) {
		await QuintOS._textAsync(txt.lines, txt.row, txt.col, txt.speed);
	} else {
		QuintOS._textSync(txt.lines, txt.row, txt.col);
	}
	if (noRow) QuintOS._lines = txt.row + txt.lines.length;
	return txt.lines.length; // returns the height
};

/* Display an application window frame */
QuintOS.frame = async (row, col, rows, cols, style, speed, c) => {
	row ??= 0;
	col ??= 0;
	cols ??= QuintOS.cols;
	rows ??= QuintOS.rows;
	style ??= 'solid';
	c ??= '─';
	if (QuintOS.sys == 'a2') c = '*';
	if (QuintOS.sys == 'gridc') c = '═';
	await textRect(row, col, rows, cols, style, c, speed);
};

/* Display a rectangle with character or character set */
async function textRect(row, col, rows, cols, style, c, speed) {
	style ??= 'solid';
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
	if (style != 'outline') {
		QuintOS._drawChar(row, col, c.tl);
		QuintOS._drawChar(row, col + cols - 1, c.tr);
		QuintOS._drawChar(row + rows - 1, col, c.bl);
		QuintOS._drawChar(row + rows - 1, col + cols - 1, c.br);
	}

	let chars = 0;
	for (let i = row + 1, j = col + 1; i < row + rows / 2 || j < col + cols / 2; i++, j++) {
		if (speed && chars % speed == 0) await delay();
		// Horizontal Lines
		if (j < col + cols / 2 && (style != 'dashed' || (j - col + 1) % 2)) {
			QuintOS._drawChar(row, j, c.hori);
			QuintOS._drawChar(row + rows - 1, j, c.hori);
			QuintOS._drawChar(row, col + cols - (j - col + 1), c.hori);
			QuintOS._drawChar(row + rows - 1, col + cols - (j - col + 1), c.hori);
		}
		// Vertical Lines
		if (i < row + rows / 2 && (style != 'dashed' || (i - row + 1) % 2)) {
			QuintOS._drawChar(i, col, c.vert);
			QuintOS._drawChar(i, col + cols - 1, c.vert);
			QuintOS._drawChar(row + rows - (i - row + 1), col, c.vert);
			QuintOS._drawChar(row + rows - (i - row + 1), col + cols - 1, c.vert);
		}
		chars++;
	}
}

// function textBox(txt, row, col, w, h) { }

/* Display a line between two points using a character (diagonal lines not supported yet) */
async function textLine(row1, col1, row2, col2, style, c, speed) {
	if (row1 == row2) {
		c ??= '-';
		await text(c.repeat(Math.abs(col1 - col2)), col1, row1, null, null, speed);
	} else if (col1 == col2) {
		c ??= '|';
		await text((c + '\n').repeat(Math.abs(row1 - row2)), col1, row1, null, null, speed);
	}
}

QuintOS._overlap = (a, b) => {
	if (a.col >= b.col + b.w || b.col >= a.col + a.w) {
		return false;
	}

	if (a.row >= b.row + b.h || b.row >= a.row + a.h) {
		return false;
	}
	return true;
};

// dist(x0, y0, x1, y1) {
// 	return 0;
// }

QuintOS.erase = () => {
	let eraser = {
		row: !/(gameboi|arcv)/.test(QuintOS.sys) ? (!/(calcu|sas)/.test(QuintOS.sys) ? 1 : 0) : 2,
		col: !/(a2|gridc)/.test(QuintOS.sys) ? 0 : 1,
		w: QuintOS.cols - (!/(a2|gridc)/.test(QuintOS.sys) ? 0 : 2),
		h: QuintOS.rows - (!/(a2|gridc)/.test(QuintOS.sys) ? 0 : 2)
	};
	for (let i = 0; i < QuintOS.gpu.length; i++) {
		let el = QuintOS.gpu[i];
		if (QuintOS._overlap(el, eraser)) {
			el.erase();
			i--;
		}
	}
	QuintOS._lines = 0;
	if (QuintOS.sys == 'calcu') {
		QuintOS._textSync([' '.repeat(QuintOS.cols), ' '.repeat(4)], 0, 0);
		return;
	}
	let lines = [];
	for (let i = 0; i < eraser.h; i++) {
		lines.push(' '.repeat(eraser.w));
	}
	QuintOS._textSync(lines, eraser.row, eraser.col);
};

async function eraseRect(row, col, w, h, speed) {
	speed ??= 160;
	if (QuintOS.sys == 'calcu' && (typeof h == 'undefined' || h > 1)) {
		await eraseRect(0, 0, QuintOS.cols, 1, speed);
		await eraseRect(1, 0, 4, 1, speed);
		return;
	}
	let noArgs = !row && row != 0;
	row ??= 0;
	col ??= 0;
	w ??= QuintOS.cols;
	h ??= QuintOS.rows;

	let eraser = {
		row,
		col,
		w,
		h
	};

	await text((' '.repeat(w) + '\n').repeat(h), row, col, w, h, speed);

	for (let i = 0; i < QuintOS.gpu.length; i++) {
		let el = QuintOS.gpu[i];
		if (QuintOS._overlap(el, eraser)) {
			el.erase();
			i--;
		}
	}
	if (QuintOS.level > 4) QuintOS._lines = row;
}

function button(txt, row, col, action) {
	// not the game title or user

	let _this = this;
	class Button {
		constructor(txt, row, col, action) {
			// TODO: whole number check
			txt = QuintOS._text(txt, row, col);
			this.row = txt.row;
			this.col = txt.col;
			let lines = txt.lines;
			if (lines.length == 1 && row != 0) {
				if (QuintOS.sys == 'cpet') {
					lines[0] = '>' + lines[0] + '<';
				}
			}
			this.txt = lines.join('\n');
			let w = 0; // max width of text
			for (let line of lines) {
				if (line.length > w) w = line.length;
			}
			this.w = w;
			this.h = lines.length;

			if (!QuintOS._boundsCheck(this.row, this.col, this.w, this.h, 'button')) {
				return;
			}

			this.action = action;
			this.tiles = [];

			// add all tiles belonging to the button, to the button
			for (let i = 0; i < lines.length; i++) {
				if (QuintOS.sys == 'calcu' && i != 0) break;
				let line = lines[i];
				for (let j = 0; j < line.length; j++) {
					this.tiles.push(QuintOS.screen[this.row + i].tiles[this.col + j]);
				}
			}

			QuintOS._textSync(lines, this.row, this.col);

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
			QuintOS.gpu.splice(QuintOS.gpu.indexOf(this), 1);
		}
	}
	let btn = new Button(txt, row, col, action);
	QuintOS.gpu.push(btn);
	return btn;
}

function upload(txt, row, col, type, action) {
	return button(txt, row, col, () => {
		let el = document.createElement('input');
		el.type = 'file';
		el.accept = type + '/*';

		el.addEventListener('change', (evt) => {
			let file = evt.path[0].files[0];
			let reader = new FileReader();
			reader.onload = () => {
				let data = reader.result;
				if (type == 'json') data = JSON.parse(data);
				file.data = data;
				action(file);
			};
			reader.readAsText(file);
		});

		el.dispatchEvent(new MouseEvent('click'));
	});
}

function input(value, row, col, onSubmit, onChange) {
	let _this = this;
	class Input {
		constructor(value, row, col, onSubmit, onChange) {
			this.row = row || 0;
			this.col = col || 0;
			this.cursorX = this.col;
			this.h = 1;
			this.onSubmit = onSubmit || (() => {});
			this.onChange = onChange || (() => {});
			this.value = '';

			this.blink = setInterval(() => {
				$(QuintOS.screen[this.row].tiles[this.cursorX]).toggleClass('hovered');
				if (QuintOS.sys == 'calcu' && QuintOS._charAt(this.row, this.cursorX) != '_') {
					QuintOS._drawChar(this.row, this.cursorX, '_');
				} else {
					QuintOS._drawChar(this.row, this.cursorX, ' ');
				}
			}, 500);
		}

		erase() {
			clearInterval(this.blink);
			document.removeEventListener('keydown', this.onKeyDown);
			let cursor = QuintOS.screen[this.row].tiles[this.cursorX];
			$(cursor).off();
			$(cursor).removeClass('hovered');
			for (let i = 0; i < this.cursorX - this.col + 1; i++) {
				let tile = QuintOS.screen[this.row].tiles[this.col + i];
				if (tile) tile.childNodes[0].nodeValue = ' ';
			}

			// remove from gpu stack
			QuintOS.gpu.splice(QuintOS.gpu.indexOf(this), 1);
		}

		get w() {
			return this.value.length || 1;
		}
	}
	let inp = new Input(value, row, col, onSubmit, onChange);
	inp.onKeyDown = (e) => {
		// log(e.key);
		$(QuintOS.screen[inp.row].tiles[inp.cursorX]).removeClass('hovered');

		if (e.key == 'Enter') {
			inp.onSubmit(inp.value);
			return;
		} else if (e.key == 'Backspace' && inp.value.length > 0) {
			if (QuintOS.sys == 'calcu' && (inp.row != 1 || inp.value.length != 4)) {
				QuintOS._drawChar(inp.row, inp.cursorX, ' ');
			}
			inp.value = inp.value.slice(0, -1);
			inp.cursorX--;
			QuintOS._drawChar(inp.row, inp.cursorX, ' ');
			return;
		} else if (e.key.length != 1) {
			return;
		}
		let c = e.key[0];
		QuintOS._drawChar(inp.row, inp.cursorX, c);
		inp.value += c;
		inp.cursorX++;
		if (e.key != 'Backspace') {
			inp.onChange(inp.value);
		}
	};

	document.addEventListener('keydown', inp.onKeyDown);
	if (value) {
		value += ''; // convert to string
		// when creating the input, type the inital value
		for (let c of value) {
			inp.onKeyDown({
				key: c
			});
		}
	}
	QuintOS.gpu.push(inp);
	return inp;
}

async function alert(txt, row, col, w, h) {
	let pu = QuintOS.popup;
	let noRow = !row && row != 0;
	if (noRow) {
		if (QuintOS._lines) {
			row = QuintOS._lines + 1;
		} else {
			row = pu.row;
		}
	}
	col ??= pu.col;
	w ??= pu.w;
	h ??= pu.h;

	if (QuintOS.language == 'java') {
		txt = await System.out.print(txt);
	}

	if (typeof txt != 'string') txt += '';

	let th;
	if (QuintOS.sys != 'calcu') {
		let _txt = QuintOS._text(txt, row + 1, col + 2, w - 4);
		th = _txt.lines.length;
		if (txt) th += 2;
		await eraseRect(row, col, w, h + th);
		if (_txt.speed) {
			await QuintOS._textAsync(_txt.lines, _txt.row, _txt.col, _txt.speed);
		} else {
			QuintOS._textSync(_txt.lines, _txt.row, _txt.col);
		}
		await textRect(row, col, h + th, w);
	} else {
		erase();
		txt = txt.slice(0, QuintOS.cols);
		th = await text(txt, row, col, w);
		await text('OKAY', 1, 0);
	}

	let okayRow = row + th;
	let okayCol = Math.floor(Math.min(col + w / 2, col + w - 4));
	if (QuintOS.sys == 'calcu') {
		okayRow = 1;
		okayCol = 0;
	}
	let okayBtn = await button('OKAY', okayRow, okayCol);

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
			await eraseRect(row, col, w, h + th);
			if (!noRow) QuintOS._lines = row;
		};

		if (QuintOS.sys == 'calcu') return;

		okayBtn.action = async () => {
			if (erasing) return;
			await erase();
			resolve();
		};
	});
}

async function prompt(txt, row, col, w, h) {
	txt ??= '';
	let pu = QuintOS.popup;
	let noRow = !row && row != 0;
	if (noRow) {
		if (QuintOS._lines) {
			row = QuintOS._lines + 1;
		} else {
			row = pu.row;
		}
	}
	col ??= pu.col;
	w ??= pu.w;
	h ??= pu.h;

	if (QuintOS.language == 'java') {
		txt = await System.out.print(txt);
	}

	if (typeof txt != 'string') txt += '';

	let th;
	if (QuintOS.sys != 'calcu') {
		let _txt = QuintOS._text(txt, row + 1, col + 2, w - 4);
		th = _txt.lines.length;
		if (txt) th += 2;
		await eraseRect(row, col, w, h + th);
		if (_txt.speed) {
			await QuintOS._textAsync(_txt.lines, _txt.row, _txt.col, _txt.speed);
		} else {
			QuintOS._textSync(_txt.lines, _txt.row, _txt.col);
		}
		await textRect(row, col, h + th, w);
	} else {
		window.erase();
		txt = txt.slice(0, QuintOS.cols);
		th = await text(txt, row, col, w);
	}
	let inRow = row + th;
	let inCol = col + 2;
	if (QuintOS.sys == 'calcu') {
		inRow = 1;
		inCol = 0;
	}
	let inp = input('', inRow, inCol);
	let enterBtn;
	let cancelBtn;
	if (QuintOS.sys != 'calcu') {
		let ebCol = col + w - (!/(a2|gameboi|zx)/.test(QuintOS.sys) ? 18 : 4);
		if (QuintOS.sys == 'a2') ebCol--;
		let eLbl = !/(gameboi|zx)/.test(QuintOS.sys) ? 'ENTER' : '»';
		if (QuintOS.sys == 'a2') eLbl = '↵';
		enterBtn = button(eLbl, row + th, ebCol);

		let cbCol = col + w - (!/(a2|gameboi|zx)/.test(QuintOS.sys) ? 10 : 2);
		if (QuintOS.sys == 'a2') cbCol--;
		let cLbl = !/(gameboi|zx)/.test(QuintOS.sys) ? 'CANCEL' : 'X';
		if (QuintOS.sys == 'a2') cLbl = 'x';
		cancelBtn = button(cLbl, row + th, cbCol);
	}

	let _this = this;
	let erasing = false;
	let eraseBtn = async () => {
		erasing = true;
		if (QuintOS.sys != 'calcu') {
			enterBtn.erase();
			cancelBtn.erase();
		}

		if (QuintOS.language == 'java' && QuintOS.level <= 3) {
			QuintOS._lines = 0;
			erase();
		} else {
			await eraseRect(row, col, w, h + th);
			if (!noRow) QuintOS._lines = row;
		}
	};
	return new Promise((resolve) => {
		inp.onSubmit = async () => {
			if (erasing) return;
			await eraseBtn();
			let val = inp.value;
			if (val != '') val = isNaN(val) ? val : Number(val);
			resolve(val);
		};

		if (QuintOS.sys == 'calcu') return;

		enterBtn.action = inp.onSubmit;

		cancelBtn.action = async () => {
			if (erasing) return;
			await eraseBtn();
			resolve(null);
		};
	});
}

QuintOS.runJS = (src, file) => {
	return new Promise(async (resolve, reject) => {
		file ??= await QuintOS.loadCode(src);
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
		if (!file) {
			script.src = src;
		} else if (file == '404: Not Found' && !src.includes('preload')) {
			script.innerHTML = 'QuintOS.error(`File not found: ' + src + '`);';
		} else {
			script.innerHTML = 'log(`running: ' + src + '`);\n' + file;
		}

		document.body.appendChild(script);
	});
};

QuintOS.translateJava = async (file) => {
	if (QuintOS.fileType == 'pde') {
		file = `
public class ${QuintOS.game} {
  ${file.replaceAll('\n', '\n  ')}
  public static void main(String[] args) {}
}`;
	}

	if (QuintOS.dev) log(file);

	if (QuintOS.sys != 'calcu') {
		file = file.replace(/(.*=)(.*\.)*next(Int|Float|Double|Line|Short|Long)*\(\);/gm, '$1 prompt();');
	} else {
		file = file.replace(
			/System\.out\.print(ln)*\(([^\)]*)\);\s*(.*=)(.*\.)*next(Int|Float|Double|Short|Long)*\(\);/gm,
			'$3 prompt($2);'
		);
	}

	let rp = 'text($2);';
	if (QuintOS.sys == 'calcu') rp = 'alert($2);';
	file = file.replace(/System\.out\.print(ln)*\(([^\(\)]*(\([^\(\)]*\))*)*\);/gm, rp);

	file = await jdk.transpile(file);

	// file = file.replace(/size\(.*\);/gm, '');

	if (QuintOS.dev) log(file);
	return file;
};

QuintOS.runJava = async (src, file) => {
	jdk.run();
};

QuintOS.preloadData = async () => {
	if (QuintOS.preloadCode) {
		await QuintOS.preloadCode();
		return;
	}
	let dir = QuintOS.dir;
	let title = QuintOS.game;
	let src = `${dir}/${title[0].toLowerCase() + title.slice(1)}-preload.${QuintOS.fileType}`;
	try {
		await QuintOS.runCode(src);
	} catch (error) {
		QuintOS.error(error);
	}
};

QuintOS.runCode = async (src, file) => {
	if (QuintOS.language == 'js') {
		await QuintOS.runJS(src, file);
	} else if (QuintOS.language == 'java') {
		await QuintOS.runJava(src, file);
	}
};

QuintOS.runGame = async () => {
	if (typeof QuintOS.gameCode == 'function') {
		QuintOS.gameCode();
	} else {
		QuintOS.runCode(QuintOS.gameFile, QuintOS.gameCode);
	}
	if (/(a2|gridc)/.test(QuintOS.sys)) QuintOS.frame();

	if (/(calcu|sas)/.test(QuintOS.sys)) return;

	let title = QuintOS.game;
	if (QuintOS.level >= 0) {
		title = QuintOS.level.toString().padStart(2, '0') + '_' + title;
	}
	let col = !/(c64|gameboi|arcv)/.test(QuintOS.sys) ? 2 : 0;
	button(title, 0, col, () => {
		if (QuintOS.gameFile) {
			// open the javascript source in new tab
			open(QuintOS.gameFile);
		} else {
			// open the Javascript editor and console in codepen
			open(window.location.href + '?editors=0011');
		}
	});
	if (!QuintOS.user) return;
	text(' by ', 0, col + title.length);
	let row = !/(gameboi|arcv)/.test(QuintOS.sys) ? 0 : 1;
	col = !/(gameboi|arcv)/.test(QuintOS.sys) ? 6 + title.length : 0;
	if (QuintOS.sys == 'c64') col = 4 + title.length;
	button(QuintOS.user, row, col, () => {
		open('https://github.com/' + QuintOS.user);
	});
};

QuintOS.loadCode = async (src) => {
	let file;
	if (QuintOS.language == 'js') {
		if (src.slice(0, 4) == 'http') {
			file = await (await fetch(src)).text();
			return file;
		}
		return;
	}
	if (QuintOS.language == 'java') {
		file = await (await fetch(src)).text();
		file = await QuintOS.translateJava(file);
	}
	return file;
};

QuintOS.loadGame = async () => {
	let title = QuintOS.game;
	if (QuintOS.gameCode) return;
	let dir = QuintOS.dir;
	let fileBase = title + '.';
	if (QuintOS.language == 'js') fileBase = `${title.slice(0, 1).toLowerCase() + title.slice(1)}.`;
	fileBase += QuintOS.fileType;
	let src = dir + '/' + fileBase;
	let gameCode;
	try {
		gameCode = await QuintOS.loadCode(src);
	} catch (ror) {
		QuintOS.error(ror);
	}
	QuintOS.gameFile = src;
	return gameCode;
};

QuintOS.error = async (e) => {
	console.error(e);
	if (e.stack) {
		let stack = e.stack.split('\n')[0].split('/').pop().split(':');
		stack = stack[0] + ' line ' + stack[1];
		await alert('ERROR: ' + e.message + '\n\n' + stack + '\n' + e.stack);
	} else {
		await alert('ERROR: ' + e);
	}
};

async function exit() {
	if (QuintOS.language == 'java') {
		await alert('The program exited!');
	}
	await eraseRect();

	// run a simple eval based calculator program
	if (QuintOS.sys == 'calcu') {
		let inp;
		function calculate(value) {
			let result = eval(value);
			inp.erase();
			inp = input(result, 0, 0, calculate);
		}
		inp = input('', 0, 0, calculate);
		return;
	}

	// create an input the user can move around the screen
	let inp = input('', 0, 0, () => {
		inp.row++;
	});
}

window.addEventListener('keydown', function (e) {
	if (
		(e.key == ' ' ||
			e.key == '/' ||
			e.key == 'ArrowUp' ||
			e.key == 'ArrowDown' ||
			e.key == 'ArrowLeft' ||
			e.key == 'ArrowRight') &&
		e.target == document.body
	) {
		e.preventDefault();
	}
});

function loadImg(imgPath) {
	return new Promise((resolve) => {
		loadImage(imgPath, () => {
			resolve();
		});
	});
}

/********************************************************************
 ******************************* QUINTOS *****************************
 ********************************************************************/

p5.disableFriendlyErrors = true;

async function preload() {
	if (QuintOS.username) QuintOS.user = QuintOS.username;
	if (QuintOS.gameTitle) QuintOS.game = QuintOS.gameTitle;
	if (!QuintOS.user) QuintOS.user = 'quinton-ashley';
	if (!QuintOS.game) {
		if (typeof QuintOS.level != 'undefined') {
			QuintOS.game = QuintOS.levels[QuintOS.level][0];
		} else {
			if (
				location.href == 'quintos.org' ||
				location.href == 'https://quintos.org' ||
				location.href == 'https://quintos.org/'
			) {
				location.href = 'https://quintos.org/home.html';
			}
			return;
		}
	} else {
		for (let i in QuintOS.levels) {
			let l = QuintOS.levels[i];
			if (l[0].toLowerCase() == QuintOS.game.toLowerCase()) {
				QuintOS.game = l[0];
				QuintOS.level = Number(i);
				break;
			}
		}
		let g = QuintOS.game.toLowerCase();
		if (g == 'clickapath') {
			QuintOS.game = 'ClickAPath';
			QuintOS.level = 5;
		} else if (g == 'wheeloffortune') {
			QuintOS.game = 'WheelOfFortune';
			QuintOS.level = 8;
		}
		QuintOS.level ??= -1;
	}

	createCanvas();
	frameRate(60);
	noStroke();

	let sys = QuintOS.sys || QuintOS.system || QuintOS.levels[QuintOS.level || 0][1];
	QuintOS.sys = sys;
	QuintOS.system = sys;
	QuintOS.gpu = [];

	{
		let dir = `${QuintOS.root}/quintos/sys/${QuintOS.sys}`;
		let html = await (await fetch(`${dir}/${QuintOS.sys}.html`)).text();
		$('body').append(html);
		$('body').addClass(QuintOS.sys);
		$('head').append(`<link rel="stylesheet" href="${dir}/${QuintOS.sys}.css"></link>`);
	}

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

		function updateSearchBar() {
			try {
				document.getElementById('searchBar').value = frames.iframe0.url || frames.iframe0.contentWindow.location.href;
			} catch (e) {}
			frames.iframe0.url = null;
		}

		frames.iframe0.onload = updateSearchBar;

		$('#window0')[0].onclick = updateSearchBar;

		function dragElement(elmnt) {
			var pos1 = 0,
				pos2 = 0,
				pos3 = 0,
				pos4 = 0;
			if (document.getElementById(elmnt.id + 'header')) {
				// if present, the header is where you move the DIV from:
				document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
			} else {
				// otherwise, move the DIV from anywhere inside the DIV:
				elmnt.onmousedown = dragMouseDown;
			}

			function dragMouseDown(e) {
				e = e || window.event;
				e.preventDefault();
				// get the mouse cursor position at startup:
				pos3 = e.clientX;
				pos4 = e.clientY;
				document.onmouseup = closeDragElement;
				// call a function whenever the cursor moves:
				document.onmousemove = elementDrag;
			}

			function elementDrag(e) {
				e = e || window.event;
				e.preventDefault();
				// calculate the new cursor position:
				pos1 = pos3 - e.clientX;
				pos2 = pos4 - e.clientY;
				pos3 = e.clientX;
				pos4 = e.clientY;
				// set the element's new position:
				elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
				elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
			}

			function closeDragElement() {
				// stop moving when mouse button is released:
				document.onmouseup = null;
				document.onmousemove = null;
			}
		}
		// Make the DIV element draggable:
		dragElement(document.getElementById('window0'));
	}

	$('canvas').removeAttr('style');
	pixelDensity(1);

	let rows, cols;
	if (QuintOS.sys == 'a2') {
		rows = 24;
		cols = 40;
	} else if (QuintOS.sys == 'arcv') {
		rows = 34;
		cols = 28;
	} else if (/(c64|cpet)/.test(QuintOS.sys)) {
		rows = 25;
		cols = 40;
	} else if (QuintOS.sys == 'calcu') {
		rows = 2;
		cols = 23;
	} else if (QuintOS.sys == 'gameboi') {
		rows = 18;
		cols = 20;
	} else if (QuintOS.sys == 'gridc') {
		rows = 30;
		cols = 80;
	} else if (QuintOS.sys == 'sas') {
		rows = 4;
		cols = 20;
	} else if (QuintOS.sys == 'zx') {
		rows = 24;
		cols = 32;
	}
	QuintOS.cols = cols;
	QuintOS.rows = rows;

	// default values for alerts and prompts for each system
	let popup = {
		a2: {
			row: 2,
			col: 2,
			w: 36
		},
		arcv: {
			row: 16,
			col: 4,
			w: 20
		},
		c64: {
			row: 10,
			col: 10,
			w: 20
		},
		calcu: {
			row: 0,
			col: 0,
			w: 23,
			h: 1
		},
		cpet: {
			row: 2,
			col: 0,
			w: 40
		},
		gridc: {
			row: 1,
			col: 1,
			w: 78
		},
		gameboi: {
			row: 5,
			col: 0,
			w: 20
		},
		macin: {
			row: 2,
			col: 2,
			w: 20
		},
		sas: {
			row: 0,
			col: 0,
			w: 23,
			h: 1
		},
		zx: {
			row: 2,
			col: 0,
			w: 32
		}
	};
	QuintOS.popup = popup[QuintOS.sys];
	QuintOS.popup.h ??= 2;

	let screen0 = document.getElementById('screen0');

	// create rows
	for (let i = 0; i < rows; i++) {
		let row = document.createElement('row');
		screen0.appendChild(row);
	}
	QuintOS.screen = screen0.childNodes;

	// create single character text tiles
	for (let i = 0; i < rows; i++) {
		let c = i != 1 || QuintOS.sys != 'calcu' ? cols : 4;
		for (let j = 0; j < c; j++) {
			let tile = document.createElement('tile');
			tile.appendChild(document.createTextNode(' '));
			QuintOS.screen[i].appendChild(tile);
		}
		QuintOS.screen[i].tiles = QuintOS.screen[i].childNodes;
	}
	// the rows will all have the same height
	// the tiles will all have the same width
	$('body').append(`
<style>
row {
	height: ${100 / QuintOS.rows}%;
}
tile {
	width: ${100 / QuintOS.cols}%;
}
</style>`);

	let palettes = {
		zx: [
			{
				' ': '',
				'.': '',
				'-': '',
				_: '',
				b: '#000000', // Black
				u: '#0000d8', // blUe
				r: '#d80000', // Red
				m: '#d800d8', // Magenta
				g: '#00d800', // Green
				c: '#00d8d8', // Cyan
				y: '#d8d800', // Yellow
				w: '#ffffff', // White
				//
				B: '#000000', // bright 1 black
				U: '#0000ff', // bright 1 blue
				R: '#ff0000', // bright 1 red
				M: '#ff00ff', // bright 1 magenta
				G: '#00ff00', // bright 1 green
				C: '#00ffff', // bright 1 cyan
				Y: '#ffff00', // bright 1 yellow
				W: '#ffffff' // bright 1 white
			}
		],
		c64: [
			{
				' ': '',
				'.': '',
				'-': '',
				_: '',
				b: '#000000', // blacK
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
				u: '#50459b', // blUe
				i: '#887ecb', // Indigo
				p: '#a057a3' // Purple
			}
		],
		gameboi: [
			{
				' ': '',
				'.': '',
				'-': '',
				_: '',
				0: '#071821',
				1: '#306850',
				2: '#86c06c',
				3: '#e0f8cf'
			}
			// {
			// 	0: '#000000',
			// 	1: '#555555',
			// 	2: '#aaaaaa',
			// 	3: '#ffffff'
			// }
		],
		gridc: [
			{
				' ': '',
				'.': '',
				'-': '',
				_: '',
				X: '#e5b930'
			}
		]
	};

	palettes.arcv = palettes.zx;

	/*#0f380f; #306230; #8bac0f; #9bbc0f; */

	// assign palettes to the system's palette
	QuintOS.palettes = palettes[QuintOS.sys] || [];
	QuintOS.palette = QuintOS.palettes[0] || {};

	const _colorPal = colorPal;

	window.colorPal = (c, palette) => {
		if (typeof palette == 'number') {
			palette = QuintOS.palettes[palette];
		}
		palette ??= QuintOS.palette;
		return _colorPal(c, palette);
	};

	const _spriteArt = spriteArt;

	window.spriteArt = (txt, scale, palette) => {
		if (typeof palette == 'number') {
			palette = QuintOS.palettes[palette];
		}
		palette ??= QuintOS.palette;
		return _spriteArt(txt, scale, palette);
	};

	// deprecated
	Sprite.prototype.loadAni = function (name, atlas) {
		this.addAni(name, atlas);
	};

	// deprecated
	Sprite.prototype.loadImg = function (name, atlas) {
		this.addAni(name, atlas);
	};

	let bootScreens = {
		calcu: [
			{
				name: 'info',
				col: 0,
				row: 0,
				speed: 1,
				txt: 'Hello! QuintOS v0.0'
			}
		],
		cpet: [
			{
				name: 'boot',
				col: 0,
				row: 0,
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
				col: 5,
				row: 8,
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
				col: 5,
				row: 14,
				speed: 2,
				txt: `
 █████                 ██  ██
    █                                       `
			},
			{
				name: 'bg',
				col: 0,
				row: 17,
				speed: 5,
				txt: '.\n'.repeat(9)
			}
		],
		zx: [
			{
				name: 'bg',
				col: 0,
				row: 0,
				speed: 20,
				txt: ['§', 'ж', '*', '^', '°', '#', '¤', '‡', '˜', '»'][Math.floor(Math.random() * 10)].repeat(1000)
			},
			{
				name: 'info',
				col: 12,
				row: 20,
				speed: 1,
				txt: `
JavaScript READY
QuintOS version 02
CopyLeft 1977`
			}
		],
		a2: [
			{
				name: 'bg',
				col: 2,
				row: 0,
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
				col: 15,
				row: 8,
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
				col: 15,
				row: 15,
				speed: 1,
				txt: 'QuintOS ][e'
			}
		],
		gridc: [
			{
				name: 'bg',
				col: 5,
				row: 2,
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
				col: 2,
				row: 1,
				speed: 50,
				txt: `
          ________\n         /\\       \\\n        /  \\       \\
       /    \\       \\\n      /      \\_______\\\n      \\      /       /
    ___\\    /   ____/___\n   /\\   \\  /   /\\       \\
  /  \\   \\/___/  \\       \\\n /    \\       \\   \\       \\
/      \\_______\\   \\_______\\\n\\      /       /   /       /
 \\    /       /   /       /\n  \\  /       /\\  /       /
   \\/_______/  \\/_______/`.slice(1)
			},
			{
				name: 'h1',
				col: 20,
				row: 8,
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
				col: 5,
				row: 0,
				speed: 1,
				txt: 'QuintOS'
			},
			{
				name: 'info',
				col: 20,
				row: 21,
				speed: 2,
				txt: `
THE Personal Computer: Powered by JavaScript™
Version 4.0 Copyleft QuintOS ©1981`
			}
		],
		TicTacToe: [
			{
				name: 'logo',
				col: 24,
				row: 4,
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
				col: 23,
				row: 24,
				speed: 2,
				txt: `
QUiNT Compass qOS BIOS Version 05
Copyleft © 1983 QUiNT Systems Corp`
			}
		],
		ClickAPath: [
			{
				name: 'logo',
				row: 6,
				col: 25,
				speed: 20,
				txt: `
          ________\n         /\\       \\\n        /  \\       \\
       /    \\       \\\n      /      \\_______\\\n      \\      /       /
    ___\\    /   ____/___\n   /\\   \\  /   /\\       \\
  /  \\   \\/___/  \\       \\\n /    \\       \\   \\       \\
/      \\_______\\   \\_______\\\n\\      /       /   /       /
 \\    /       /   /       /\n  \\  /       /\\  /       /
   \\/_______/  \\/_______/`
			}
		],
		Contain: [
			{
				name: 'bg',
				col: 0,
				row: 0,
				speed: 20,
				txt: ['§', 'ж', '*', '^', '°', '#', '¤', '‡', '˜', '»'][Math.floor(Math.random() * 10)].repeat(1000)
			},
			{
				name: 'info',
				col: 12,
				row: 20,
				speed: 1,
				txt: `
JavaScript READY
QuintOS version 09
CopyLeft 1977`
			}
		],
		c64: [
			{
				name: 'boot',
				txt: `
  **** QUINTOS v13 JAVASCRIPT ES12 ****

  64GB RAM SYSTEM 38911 GIGABYTES FREE

READY.
10 PRINT CHR$(205.5+RND(1)); : GOTO 10
  RUN\n`.slice(1)
			},
			{
				name: 'logo',
				col: 12,
				row: 9,
				speed: 2,
				txt: `
┏━━┓ ┏┓ ┏┓┏━┳━━┓
┃┏┓┣┳╋╋━┫┗┫┃┃━━┫
┃┗┛┃┃┃┃┃┃┏┫┃┣━━┃
┗━┓┣━┻┻┻┻━┻━┻━━┛
  ┗┛`
			}
		],
		gameboi: [
			{
				name: 'logo',
				col: 0,
				row: 0,
				speed: 1,
				txt: 'QuintOS'
			},
			{
				name: 'version',
				col: 1,
				row: 1,
				speed: 1,
				txt: 'v7'
			}
		],
		arcv: [
			{
				name: 'logo',
				row: 13,
				col: 7,
				speed: 1,
				txt: `
┏━┓ ┏┓ ┏┓┏━┳━┓
┃┃┣┳╋╋━┫┗┫┃┃━┫
┃┃┃┃┃┃┃┃┏┫┃┃ ┃
┃┃┃┃┃┃┃┃┃┫┃┣━┃
┗┓┣━┻┻┻┻━┻━┻━┛
 ┗┛`
			}
		],
		Sokoban: [
			{
				name: 'logo',
				row: 13,
				col: 7,
				speed: 1,
				txt: `
┏━┓ ┏┓ ┏┓┏━┳━┓
┃┃┣┳╋╋━┫┗┫┃┃━┫
┃┃┃┃┃┃┃┃┏┫┃┃ ┃
┃┃┃┃┃┃┃┃┃┫┃┣━┃
┗┓┣━┻┻┻┻━┻━┻━┛
 ┗┛`
			}
		]
	};

	async function displayBootscreen() {
		if (QuintOS.sys == 'calcu') {
			let txt0 = "'-.⎽⎽.-'⎺⎺".repeat(3);
			for (let i = 0; i < 30; i++) {
				QuintOS._textSync([txt0.slice(0, 23)], 0, 0);
				// QuintOS._textSync([txt0.slice(0, 1)], 1, 0);
				txt0 = txt0[txt0.length - 1] + txt0.slice(0, -1);
				await delay(48);
			}
			QuintOS._textSync([' '.repeat(QuintOS.cols)], 0, 0);
		} else if (QuintOS.sys == 'c64') {
			function makeMaze() {
				const STR$ = (val) => String.fromCodePoint((9380 + val) >>> 0);
				const RND = (range) => Math.random() * range;
				let txt = '';
				for (let i = 0; i < rows; i++) {
					for (let j = 0; j < cols; j++) {
						txt += STR$(205.5 + RND(1));
					}
					txt += '\n';
				}
				return txt;
			}
			await QuintOS.text(makeMaze(), 0, 0, 0, 0, 20);
		}

		for (let el of bootScreen) {
			let txt = el.txt[0] == '/n' ? el.txt.slice(1) : el.txt;
			await QuintOS.text(txt, el.row, el.col, 0, 0, el.speed);
		}
	}

	QuintOS.language ??= 'js';
	if (QuintOS.dir?.includes('games_java')) {
		QuintOS.language = 'java';
	}
	QuintOS.fileType = QuintOS.language;
	if (QuintOS.language == 'java' && /(Pong|Contain|SketchBook|SpeakAndSpell|SuperJump|Sokoban)/.test(QuintOS.game)) {
		QuintOS.fileType = 'pde';
	}

	if (!QuintOS.dir && QuintOS.level != -1) {
		QuintOS.dir = 'https://raw.githubusercontent.com/' + QuintOS.user + '/quintos-games/main';
		if (QuintOS.language == 'js') {
			if (QuintOS.user != 'quinton-ashley') {
				QuintOS.dir += '/GAMES';
			} else {
				QuintOS.dir += '/games_js';
			}
		} else if (QuintOS.language == 'java') {
			QuintOS.dir += '/games_java';
		}
	} else if (!QuintOS.dir) {
		QuintOS.dir = 'https://raw.githubusercontent.com/' + QuintOS.user + '/' + QuintOS.game + '/main';
	}
	QuintOS.dir += '/' + QuintOS.game;

	let bootScreen = [];
	if (!QuintOS.disableBoot) {
		bootScreen = bootScreens[QuintOS.game] || bootScreens[QuintOS.sys] || [];
	}

	await Promise.all([
		(async () => {
			if (QuintOS.language == 'java') {
				try {
					let dir = QuintOS.root + '/java2js/jdk';
					await jdk.init(dir);
					if (QuintOS.java2js_worker) jdk.workerPath = QuintOS.java2js_worker;
				} catch (ror) {
					console.error(ror);
					return;
				}
				System.exit = exit;
				// jdk.log = function (...args) {
				// 	this.logged = args[0];
				// };
				if (QuintOS.gameCode) {
					QuintOS.gameCode = await QuintOS.translateJava(QuintOS.gameCode);
				}
			}
			QuintOS.gameCode ??= await QuintOS.loadGame();
			// if (QuintOS.language == 'java') {
			// 	jdk.load(QuintOS.game);
			// }
			if (QuintOS.fileType == 'pde') {
				let inst = new window[QuintOS.game]();
				let loaded = false;
				if (typeof inst.preload == 'function') inst.preload();
				if (typeof inst.setup == 'function') {
					setup = () => {
						inst.setup();
						loaded = true;
					};
				}
				if (typeof inst.draw == 'function') {
					draw = () => {
						if (!loaded) return;
						inst.draw();
					};
				}
			}
		})(),
		(async () => {
			if (QuintOS.language != 'java') {
				if (
					QuintOS.preload ||
					QuintOS.preloadCode ||
					(!QuintOS.preload && (QuintOS.level >= 11 || QuintOS.level == -1))
				) {
					QuintOS.preloadData();
				}
			}

			if (/(a2|gridc)/.test(QuintOS.sys)) await QuintOS.frame();

			await displayBootscreen();
		})()
	]);

	window.drawText = text;
	window.text = QuintOS.text;
	window.erase = QuintOS.erase;

	window.size = () => {};

	QuintOS._image = image; // p5.js image function

	window.image = (img, ...args) => {
		for (let i = 0; i < args.length; i++) {
			args[i] = Math.round(args[i]);
		}
		QuintOS._image(img, ...args);
	};

	// await delay(111111111); // test bootscreen
	if (QuintOS.sys == 'calcu') await delay(1000);
	if (QuintOS.sys == 'a2') await delay(500);
	if (QuintOS.sys == 'sas') await delay(1000);

	await eraseRect();
	QuintOS._lines = 0;

	if (QuintOS.sys == 'gridc') {
		// add the clock
		setInterval(() => {
			let time = new Date($.now());
			QuintOS._textSync([Date.now() + ''], 29, 65);
			time = time.toString().split(' GMT')[0];
			QuintOS._textSync([time + ''], 29, 2);
		}, 1000);
	}

	// onerror = (msg, url, lineNum) => {
	// 	error(msg + ' ' + url + ':' + lineNum);
	// };

	// $('#screen0').parent().addClass('clear');
	$('#screen0').parent().append($('main'));
	$('main').css('display', 'block');

	if (QuintOS.sys == 'c64') {
		resizeCanvas(320, 200);
	} else if (QuintOS.sys == 'arcv') {
		resizeCanvas(320, 400);
	} else if (QuintOS.sys == 'gridc') {
		resizeCanvas(320, 270);
	} else if (QuintOS.sys == 'gridc2') {
		resizeCanvas(480, 270);
	} else if (QuintOS.sys == 'zx') {
		resizeCanvas(256, 192);
	} else if (QuintOS.sys == 'gameboi') {
		resizeCanvas(160, 144);
	}

	strokeWeight(2);
	noSmooth();
	$('canvas').removeAttr('style');

	await delay(100);

	window.centerX = width * 0.5;
	window.centerY = height * 0.5;
	if (typeof world != 'undefined') {
		world.resize();
	}

	p5.disableFriendlyErrors = false;

	let title = QuintOS.game;
	if (QuintOS.level >= 0) {
		title = QuintOS.level.toString().padStart(2, '0') + '_' + title;
	}
	document.title = title;

	if (QuintOS.sys != 'macin') {
		console.log(
			`QuintOS${QuintOS.level >= 0 ? ' v' + QuintOS.level : ''} size: ${width}x${height} rows: ${rows} cols: ${cols}`
		);
		QuintOS.runGame();
	} else {
		console.log(`QuintOS${QuintOS.level >= 0 ? ' v' + QuintOS.level : ''}`);
		frames.iframe0.src = QuintOS.dir + '/index.html';
	}

	// if QuintOS is running in an iframe on quintos.org
	if (QuintOS.iframe) {
		outputVolume(0);
		setTimeout(() => {
			noLoop();
		}, 6000);
	}

	// for (let t = 0; draw.toString() == '() => {}' && t < 120; t++) {
	// 	await delay();
	// }

	setup();
}

window.setup = () => {};
window.draw = () => {};
