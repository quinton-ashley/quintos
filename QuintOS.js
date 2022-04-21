let log = console.log; // log becomes a shortcut for console.log

window.QuintOS = {
	levels: [
		/*00*/ ['GuessTheNumber', 'calcu'],
		/*01*/ ['PickAPath', 'cpet'],
		/*02*/ ['Pong', 'zx'],
		/*03*/ ['Hangman', 'a2'],
		/*04*/ ['QuickClicks', 'gridc'],
		/*05*/ ['ClickAPath', 'gridc'],
		/*06*/ ['TicTacToe', 'gridc'],
		/*07*/ ['WorldWideWeb', 'macin'],
		/*08*/ ['WheelOfFortune', 'a2'],
		/*09*/ ['Contain', 'zx'], // TODO arc
		/*10*/ ['TicTacAIO', 'gridc'],
		/*11*/ ['SpeakAndSpell', 'calcu'], // TODO sas
		/*12*/ ['Snake', 'gameboi'], // TODO gameboi
		/*13*/ ['SketchBook', 'c64'],
		/*14*/ ['SuperJump', 'arcv'],
		/*15*/ ['Sokoban', 'c64']
	]
};

{
	let url = location.href.split('?');
	if (url[0].includes('QuintOS_live')) {
		$('head').append('<link rel="icon" href="node_modules/quintos/img/favicon.png" />');
	} else {
		QuintOS.web = true;
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
			`Out of bounds error! Could not retreive character at row: ${row} col: ${col}\nThe size of this screen is ${QuintOS.cols}x${QuintOS.rows} characters.`
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
	// let noRow = !row && row != 0;
	txt = QuintOS._text(txt, row, col, w, h, speed);
	if (txt.speed) {
		await QuintOS._textAsync(txt.lines, txt.row, txt.col, txt.speed);
	} else {
		QuintOS._textSync(txt.lines, txt.row, txt.col);
	}
	QuintOS._lines = txt.row + txt.lines.length;
	return txt.lines.length; // returns the height
};

/* Display an application window frame */
QuintOS.frame = async (row, col, w, h, style, speed, c) => {
	row ??= 0;
	col ??= 0;
	w ??= QuintOS.cols;
	h ??= QuintOS.rows;
	style ??= 'solid';
	c ??= '─';
	if (QuintOS.sys == 'a2') c = '*';
	if (QuintOS.sys == 'gridc') c = '═';
	await textRect(row, col, w, h, style, c, speed);
};

/* Display a rectangle with character or character set */
async function textRect(row, col, w, h, style, c, speed) {
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
		QuintOS._drawChar(row, col + w - 1, c.tr);
		QuintOS._drawChar(row + h - 1, col, c.bl);
		QuintOS._drawChar(row + h - 1, col + w - 1, c.br);
	}

	let chars = 0;
	for (let i = row + 1, j = col + 1; i < row + h / 2 || j < col + w / 2; i++, j++) {
		if (speed && chars % speed == 0) await delay();
		// Horizontal Lines
		if (j < col + w / 2 && (style != 'dashed' || (j - col + 1) % 2)) {
			QuintOS._drawChar(row, j, c.hori);
			QuintOS._drawChar(row + h - 1, j, c.hori);
			QuintOS._drawChar(row, col + w - (j - col + 1), c.hori);
			QuintOS._drawChar(row + h - 1, col + w - (j - col + 1), c.hori);
		}
		// Vertical Lines
		if (i < row + h / 2 && (style != 'dashed' || (i - row + 1) % 2)) {
			QuintOS._drawChar(i, col, c.vert);
			QuintOS._drawChar(i, col + w - 1, c.vert);
			QuintOS._drawChar(row + h - (i - row + 1), col, c.vert);
			QuintOS._drawChar(row + h - (i - row + 1), col + w - 1, c.vert);
		}
		chars++;
	}
}

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
		row: !/(gameboi|arcv)/.test(QuintOS.sys) ? (QuintOS.sys != 'calcu' ? 1 : 0) : 2,
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
		await textRect(row, col, w, h + th);
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
		await textRect(row, col, w, h + th);
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
			/System\.out\.print(ln)*\(([^\)]*)\);\s*(.*=)(.*\.)*next(Int|Float|Double|Line|Short|Long)*\(\);/gm,
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
	let title = QuintOS.game;
	if (QuintOS.level >= 0) {
		title = QuintOS.level.toString().padStart(2, '0') + '_' + title;
	}
	$('head title').text(title);
	if (/(a2|gridc)/.test(QuintOS.sys)) QuintOS.frame();
	if (QuintOS.sys != 'calcu') {
		let col = !/(c64|gameboi|arcv)/.test(QuintOS.sys) ? 2 : 0;
		button(title, 0, col, () => {
			if (!QuintOS.gameCode) {
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
	}
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
			setTimeout(resolve, millisec);
		});
	}
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

/**
 * Gets a color from a color palette
 * c is the color key
 * palette can be a palette object or number index
 *   in the system's palettes array
 */
function colorPal(c, palette) {
	if (typeof palette == 'number') {
		palette = QuintOS.palettes[palette];
	}
	palette ??= QuintOS.palettes[0];
	c = palette[c];
	if (!c) return color(0, 0, 0, 0);
	return color(c);
}

let keyCodes = {
	_: 189,
	'-': 189,
	',': 188,
	';': 188,
	':': 190,
	'!': 49,
	'?': 219,
	'.': 190,
	'"': 50,
	'(': 56,
	')': 57,
	'§': 51,
	'*': 187,
	'/': 55,
	'&': 54,
	'#': 191,
	'%': 53,
	'°': 220,
	'+': 187,
	'=': 48,
	"'": 191,
	$: 52,
	Alt: 18,
	ArrowUp: 38,
	ArrowDown: 40,
	ArrowLeft: 37,
	ArrowRight: 39,
	CapsLock: 20,
	Clear: 12,
	Control: 17,
	Delete: 46,
	Escape: 27,
	Insert: 45,
	PageDown: 34,
	PageUp: 33,
	Shift: 16,
	Tab: 9
};

/**
 * Get the keyCode of a key
 * @param {string} keyName
 * @returns {number} keyCode
 */
function getKeyCode(keyName) {
	let code = keyCodes[keyName];
	if (code) return code;
	return keyName.toUpperCase().charCodeAt(0);
}

/**
 * Check if key is down
 * @param {string} keyName
 * @returns {boolean} true if key is down
 */
function isKeyDown(keyName) {
	return keyIsDown(getKeyCode(keyName));
}

function spriteArt(txt, scale, palette) {
	scale ??= 1;
	if (typeof palette == 'number') {
		palette = QuintOS.palettes[palette];
	}
	palette ??= QuintOS.palette;
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
					let c = colorPal(lines[i][j], palette);
					img.set(j * scale + sX, i * scale + sY, c);
				}
			}
		}
	}
	img.updatePixels();
	return img; // return the p5 graphics object
}

function loadAni(spriteSheetImg, size, pos, frameCount, frameDelay) {
	let w, h;
	if (typeof size == 'number') {
		w = size;
		h = size;
	} else {
		w = size[0];
		h = size[1];
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
			x = w * i;
			y = h * pos;
		} else {
			// pos is the location of the animation line
			// given as a [row,column] coordinate pair of distances in tiles
			// from the top left corner of the image
			x = w * (i + pos[1]); // column
			y = h * pos[0]; // row
		}

		frames.push({
			frame: { x: x, y: y, width: w, height: h }
		});
	}
	let ani = loadAnimation(new SpriteSheet(spriteSheetImg, frames));
	if (typeof frameDelay != 'undefined') ani.frameDelay = frameDelay;
	return ani;
}

{
	class Tiles {
		constructor(tileSize, x, y, depth) {
			this.tileSize = tileSize;
			this._x = x || 0;
			this._y = y || 0;
			this.depth = depth || 0;
			this.groupNames = [];
			this.createGroup('default');
		}

		get x() {
			return this._x;
		}

		set x(val) {
			this._x = val;
			for (let groupName of this.groupNames) {
				let group = this[groupName];
				for (let i = 0; i < group.length; i++) {
					let sprite = group[i];
					sprite.col = sprite.col;
				}
			}
		}

		get y() {
			return this._y;
		}

		set y(val) {
			this._y = val;
			for (let groupName of this.groupNames) {
				let group = this[groupName];
				for (let i = 0; i < group.length; i++) {
					let sprite = group[i];
					sprite.row = sprite.row;
				}
			}
		}

		createSprite(ani, row, col, layer) {
			if (typeof ani == 'number') {
				// shift parameters over
				layer = col;
				col = row;
				row = ani;
				ani = null;
			}
			let groupName = 'default';
			if (ani) {
				for (groupName of this.groupNames) {
					if (Object.keys(this[groupName].animations).includes(ani)) {
						break;
					}
				}
			}
			return this[groupName].createSprite(ani, row, col, layer);
		}

		loadAni(name, atlas) {
			this.default.loadAni(name, atlas);
		}

		loadImg(name, atlas) {
			this.loadAni(name, atlas);
		}

		removeSprites() {
			for (let groupName of this.groupNames) {
				this[groupName].removeSprites();
			}
		}

		createGroup(groupName) {
			let _this = this;
			if (_this[groupName]) return;

			let group = new Group();

			group.animations = {};

			group.loadAni = function (name, atlas) {
				if (typeof name != 'string') {
					atlas = name;
					name = 'default' + this.animations.length;
				}
				let { size, pos, line, frames, delay } = atlas;
				size ??= _this.tileSize;
				pos ??= line || 0;
				let sheet = this.spriteSheet || _this.spriteSheet;
				this.animations[name] = loadAni(sheet, size, pos, frames, delay);
			};

			group.loadImg = function (name, atlas) {
				this.loadAni(name, atlas);
			};

			group.snap = function (o, dist) {
				if (o.isMoving) return;
				dist ??= 1;
				for (let i = 0; i < this.length; i++) {
					let sprite = this[i];
					let row = (sprite.position.y - _this.y) / sprite.w;
					let col = (sprite.position.x - _this.x) / sprite.h;
					if (Math.abs(row) % 1 >= dist || Math.abs(col) % 1 >= dist) continue;
					row = Math.round(row);
					col = Math.round(col);
					sprite._row = row;
					sprite._col = col;
					sprite.velocity.x = 0;
					sprite.velocity.y = 0;
					sprite.y = _this.y + row * sprite.w;
					sprite.x = _this.x + col * sprite.h;
				}
			};
			/*
			 * createSprite
			 * layer is optional, defaults to zero
			 */
			group.createSprite = function (ani, row, col, layer) {
				if (typeof ani == 'number') {
					// shift parameters over
					layer = col;
					col = row;
					row = ani;
					ani = null;
				}
				let w = _this.tileSize;
				let h = _this.tileSize;
				if (typeof _this.tileSize != 'number') {
					w = _this.tileSize[0];
					h = _this.tileSize[1];
				}
				let sprite = createSprite(0, 0, w, h);
				// prettier-ignore
				Object.defineProperty(sprite, 'row', {
					get: function () { return this._row },
					set: function (row) {
						this._row = row;
						this.destRow = row;
						this.y = _this.y + row * h;
					}
				});
				// prettier-ignore
				Object.defineProperty(sprite, 'col', {
					get: function () { return this._col },
					set: function (col) {
						this._col = col;
						this.destCol = col;
						this.x = _this.x + col * w;
					}
				});
				sprite.row = row;
				sprite.col = col;
				sprite.layer = layer;
				sprite.depth = layer ? _this.depth + layer : 0;
				// always start animations at frame 0
				// if false, by default p5.play will save which frame an animation is on
				// when the animation is changed so if the animation hadn't finished
				// when the sprite uses that animation again it will continue at the frame
				// it was at before, this is not ideal for most use cases idk why it's
				// the default so I added this boolean flag for changing that behavior
				sprite.autoResetAnimations = true;

				/*
				 * move(direction, speed)
				 * move(destinationRow, destinationCol, speed)
				 * Moves the sprite/group in a direction by one tile
				 * or to a destination row, col
				 */
				sprite.move = function (destRow, destCol, speed, cb) {
					if (typeof destRow == 'undefined') {
						console.error('sprite.move ERROR: movement direction or destination not defined');
						return;
					}
					// if the sprite is moving stop it from moving in the direction it used to be moving in
					if (sprite.isMoving) {
						sprite.velocity.x = 0;
						sprite.velocity.y = 0;
					}
					let direction = true;
					// if destRow is actually the direction (up, down, left, or right)
					if (typeof destRow == 'string') {
						// shift input parameters over by one
						direction = destRow;
						cb = speed;
						speed = destCol;
						destRow = sprite.destRow;
						destCol = sprite.destCol;
						if (direction == 'up') destRow--;
						if (direction == 'down') destRow++;
						if (direction == 'left') destCol--;
						if (direction == 'right') destCol++;
						if (/(up|down)/.test(direction)) {
							sprite.destRow = destRow;
						}
						if (/(left|right)/.test(direction)) {
							sprite.destCol = destCol;
						}
						sprite.direction = direction;
					} else {
						sprite.destRow = destRow;
						sprite.destCol = destCol;
					}
					if (speed == 0) {
						sprite.row = destRow;
						sprite.col = destCol;
						return;
					}

					speed ??= 1;
					if (speed <= 0) {
						console.warn('sprite.move: speed should be a positive number');
						speed = Math.abs(speed);
					}
					sprite.isMoving = true;
					sprite.attractionPoint(speed, _this.x + destCol * sprite.w, _this.y + destRow * sprite.h);

					let dist = Math.max(Math.abs(sprite.row - destRow), Math.abs(sprite.col - destCol));
					let frames = 0;
					if (dist == 1) frames = Math.floor((dist * sprite.w) / speed);

					let margin = (speed * 1.5) / sprite.w;

					return (async () => {
						while (sprite.isMoving) {
							await delay();
							// skip calculations if not close enough to destination yet
							if (frames > 0) {
								frames--;
								continue;
							}
							// calculate the sprite's row, col grid position without rounding
							let row = (sprite.position.y - _this.y) / sprite.w;
							let col = (sprite.position.x - _this.x) / sprite.h;
							// see if the sprite is too far from a whole number row, col coordinate
							if (Math.abs(row - Math.round(row)) % 1 > margin || Math.abs(col - Math.round(col)) % 1 > margin)
								continue;
							row = Math.round(row);
							col = Math.round(col);
							sprite._row = row;
							sprite._col = col;
							// check if the sprite has reached it's destination
							if (sprite.isMoving && (sprite.destRow != row || sprite.destCol != col)) continue;
							// stop moving the sprite
							sprite.velocity.x = 0;
							sprite.velocity.y = 0;
							// move the sprite to the exact row, col coordinate position
							sprite.y = _this.y + row * sprite.h;
							sprite.x = _this.x + col * sprite.w;
							sprite.isMoving = false;
							// if a callback was given, call it
							if (typeof cb == 'function') cb();
						}
					})();
				};

				sprite.addToGroup(this);
				if (ani) sprite.changeAnimation(ani);
				return sprite;
			};

			_this[groupName] = group;
			_this.groupNames.push(groupName);
			return group;
		}
	}

	window.createTiles = (tileSize, x, y, depth) => {
		return new Tiles(tileSize, x, y, depth);
	};
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
		if (QuintOS.game.toLowerCase() == 'wordle') {
			QuintOS.game = 'Wordle';
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

	const pages = {
		a2: `
<div class="back-shadow"></div>
<div class="bg">
	<div class="🖥️">
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
			<div id="refresh" onclick="location.reload();"></div>
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
<div id="pc" class="wrapper">
	<div class="power"></div>
	<div class="gameboy">
		<div class="top">
			<div class="corner left"></div>
			<div class="top"><span>&#x25C1; OFF&middot;ON &#x25B7;</span></div>
			<div class="corner right"></div>
		</div>
		<div class="bezel">
			<div class="top"><span>DOT MATRIX WITH STEREO SOUND</span></div>
			<div class="bottom">
				<div class="battery">
					<div class="led"></div>
					<span>BATTERY</span>
				</div>
				<div class="gamescreen">
					<div id="screen0" class="screen"></div>
				</div>
			</div>
		</div>
		<div class="brand"><span>QuintOS</span><span>GAME BOI</span><sub>&trade;</sub></div>
		<div class="controls">
			<div class="cross">
				<div class="cursor up"></div>
				<div class="cursor left"></div>
				<div class="cursor center">
					<div class="circle"></div>
				</div>
				<div class="cursor right"></div>
				<div class="cursor down"></div>
			</div>
			<div class="buttons">
				<div class="button B" data-button="B"></div>
				<div class="button A" data-button="A"></div>
			</div>
		</div>
		<div class="speaker">
			<div class="band"></div>
			<div class="band"></div>
			<div class="band"></div>
			<div class="band"></div>
			<div class="band"></div>
			<div class="band"></div>
		</div>
		<div class="bottom">
			<div class="gamecontrols">
				<div class="gap">
					<div class="button select" data-button="SELECT"></div>
				</div>
				<div class="gap">
					<div class="button start" data-button="START"></div>
				</div>
			</div>
			<div class="phones">&#x1F3A7;PHONES</div>
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
				<div class="powerButton" onclick="location.reload();">
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
	} else if (QuintOS.sys == 'gridc') {
		rows = 30;
		cols = 80;
	} else if (QuintOS.sys == 'zx') {
		rows = 24;
		cols = 32;
	} else if (QuintOS.sys == 'gameboi') {
		rows = 18;
		cols = 20;
	}
	QuintOS.cols = cols;
	QuintOS.rows = rows;
	QuintOS.gpu = [];

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
			row: 2,
			col: 3,
			w: 50
		},
		gameboi: {
			row: 5,
			col: 0,
			w: 20
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

	if (QuintOS.sys == 'calcu') {
		QuintOS.screen = screen0.childNodes;
		for (let i = 0; i < rows; i++) {
			QuintOS.screen[i].tiles = QuintOS.screen[i].childNodes;
		}
	} else {
		// create rows
		for (let i = 0; i < rows; i++) {
			let row = document.createElement('row');
			screen0.appendChild(row);
		}
		QuintOS.screen = screen0.childNodes;

		// create single character text tiles
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < cols; j++) {
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
	}

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
			// 			{
			// 				name: 'h1',
			// 				col: 0,
			// 				row: 3,
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
				row: 4,
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
				row: 2,
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
				col: 20,
				row: 10,
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
				row: 23,
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
				col: 4,
				speed: 1,
				txt: `
┏━┓ ┏┓ ┏┓┏━┳━┓┏┓┏┓┏┓
┃┃┣┳╋╋━┫┗┫┃┃━┫┃┃┃┗┛┃
┃┃┃┃┃┃┃┃┏┫┃┃ ┃┃┃┗━┓┃
┃┃┃┃┃┃┃┃┃┫┃┣━┃┃┃  ┃┃
┗┓┣━┻┻┻┻━┻━┻━┛┗┛  ┗┛
 ┗┛`
			}
		],
		Sokoban: [
			{
				name: 'logo',
				row: 13,
				col: 5,
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

	async function displayBootscreen() {
		// let waitForDraw = () =>
		// 	new Promise((resolve) => {
		// 		let wasDrawn = false;
		// 		window.draw = () => {
		// 			if (!wasDrawn) {
		// 				wasDrawn = true;
		// 				resolve();
		// 			}
		// 		};
		// 	});

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

		// if (QuintOS.sys == 'calcu') {
		// 	let txt0 = '|/-\\';
		// 	for (let i = 0; i < 30; i++) {
		// 		let ci = i % 4;
		// 		await QuintOS.text(txt0.slice(ci, ci + 1), 1);
		// 		await delay(200);
		// 	}
		// }

		// await waitForDraw();

		// if (QuintOS.sys == 'calcu') return;
	}

	let palettes = {
		zx: [
			{
				' ': '',
				'.': '',
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
		]
	};

	palettes.arcv = palettes.zx;

	/*#0f380f; #306230; #8bac0f; #9bbc0f; */

	// assign palettes to the system's palette
	QuintOS.palettes = palettes[QuintOS.sys] || [];
	QuintOS.palette = QuintOS.palettes[0] || {};

	let _createSprite = createSprite;

	window.createSprite = (x, y, w, h) => {
		let img;
		if (typeof x == 'object') img = x;
		x ??= 0;
		y ??= 0;

		let sprite = _createSprite(x, y, w, h);

		if (img) sprite.addImage(img);

		// prettier-ignore
		Object.defineProperty(sprite, 'x', {
			get: function () { return this.position.x },
			set: function (x) { this.position.x = x }
		});
		// prettier-ignore
		Object.defineProperty(sprite, 'y', {
			get: function () { return this.position.y },
			set: function (y) { this.position.y = y }
		});
		// prettier-ignore
		Object.defineProperty(sprite, 'w', {
			get: function () { return this.width },
			set: function (w) { this.width = w }
		});
		// prettier-ignore
		Object.defineProperty(sprite, 'h', {
			get: function () { return this.height },
			set: function (h) { this.height = h }
		});

		// sprite.ani = function (name, start, end) {
		// 	return new Promise((resolve, reject) => {
		// 		this.changeAnimation(name);
		// 		if (start) this.animation.changeFrame(start);
		// 		if (end) this.animation.goToFrame(end);
		// 		this.animation.onComplete = () => {
		// 			resolve();
		// 		};
		// 	});
		// };

		sprite._aniChanged = 0;

		sprite.ani = async function (...anis) {
			let count = ++sprite._aniChanged;

			for (let i = 0; i < anis.length; i++) {
				if (typeof anis[i] == 'string') anis[i] = { name: anis[i] };
				let ani = anis[i];
				if (ani.name[0] == '!') {
					ani.name = ani.name.slice(1);
					ani.start = -1;
					ani.end = 0;
				}
			}

			let _ani = (name, start, end) => {
				return new Promise((resolve) => {
					this.changeAnimation(name);
					if (start < 0) {
						start = this.animation.images.length + start;
					}
					if (start) this.animation.changeFrame(start);
					if (end != undefined) this.animation.goToFrame(end);
					this.animation.onComplete = () => {
						resolve();
					};
				});
			};

			for (let i = 0; i < anis.length; i++) {
				let ani = anis[i];
				if (ani.name == '*') {
					if (count == sprite._aniChanged) i = 0;
					continue;
				}
				let { name, start, end } = ani;
				await _ani(name, start, end);
			}
		};

		sprite.img = function (img) {
			return sprite.ani(img);
		};

		sprite.loadAni = function (name, atlas) {
			if (typeof name != 'string') {
				atlas = name;
				name = 'default0';
			}
			let { size, pos, line, frames, delay } = atlas;
			size ??= [this.w / this.scale, this.h / this.scale];
			pos ??= line || 0;
			this.addAnimation(name, loadAni(this.spriteSheet, size, pos, frames, delay));
		};

		sprite.loadImg = function (name, atlas) {
			this.loadAni(name, atlas);
		};

		return sprite;
	};

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
					let root = './node_modules/java2js/jdk';
					if (QuintOS.web) root = 'https://quinton-ashley.github.io/java2js/jdk';
					await jdk.init(root);
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

	await eraseRect();
	QuintOS._lines = 0;

	if (QuintOS.sys == 'gridc') {
		// add the clock
		setInterval(() => {
			let time = new Date($.now());
			QuintOS._textSync([Date.now() + ''], 65, 29);
			time = time.toString().split(' GMT')[0];
			QuintOS._textSync([time + ''], 29, 2);
		}, 1000);
	}

	// onerror = (msg, url, lineNum) => {
	// 	error(msg + ' ' + url + ':' + lineNum);
	// };
	p5.disableFriendlyErrors = false;

	// $('#screen0').parent().addClass('clear');
	$('#screen0').parent().append($('main'));
	$('main').css('display', 'block');

	if (QuintOS.sys == 'c64') {
		resizeCanvas(320, 200);
	} else if (QuintOS.sys == 'arcv') {
		resizeCanvas(320, 400);
	} else if (QuintOS.sys == 'gridc') {
		resizeCanvas(320, 240);
	} else if (QuintOS.sys == 'zx') {
		resizeCanvas(256, 192);
	} else if (QuintOS.sys == 'gameboi') {
		resizeCanvas(160, 144);
	}

	camera.position.x = width / 2;
	camera.position.y = height / 2;
	strokeWeight(2);
	$('canvas').removeAttr('style');

	console.log(
		`QuintOS${QuintOS.level >= 0 ? ' v' + QuintOS.level : ''} size: ${width}x${height} rows: ${rows} cols: ${cols}`
	);

	await delay(100);
	QuintOS.runGame();
	setup();

	if (QuintOS.iframe) {
		outputVolume(0);
		setTimeout(() => {
			noLoop();
		}, 6000);
	}
}

function setup() {}

function draw() {}
