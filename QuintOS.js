window.addEventListener('keydown', function (e) {
	if ((e.key == ' ' || e.key == '/') && e.target == document.body) {
		e.preventDefault();
	}
});

$(async () => {
	const log = console.log;

	if (typeof QuintOS.level == 'undefined') {
		alert('ERROR: load.js not found! Create this file and write:\nQuintOS.level = 0;');
		return; // exit
	}

	let screen = {
		w: 40,
		h: 25
	};
	if (QuintOS.level == 0) {
		screen.w = 23;
		screen.h = 2;
	} else if (QuintOS.level == 1) {
		screen.w = 55;
		screen.h = 35;
	} else if (QuintOS.level == 2) {
		screen.w = 55;
		screen.h = 30;
	} else if (QuintOS.level == 3 || QuintOS.level == 4) {
		screen.w = 80;
		screen.h = 30;
	} else if (QuintOS.level == 7) {
		screen.w = 16;
		screen.h = 2;
	} else if (QuintOS.level == 8) {
		screen.w = 28;
		screen.h = 34;
	}
	window.pc = new PC(screen.w, screen.h, QuintOS.level);
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
*** QUINTOS JAVASCRIPT 0.0 ***

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
 ██████                          █████   █████
██    ██ ██  ██ ██  ████  █████ ██   ██ ██    
██    ██ ██  ██ ██ ██  ██  ██   ██   ██  ████
██  ▄ ██ ██  ██ ██ ██  ██  ██   ██   ██     ██`
			},
			{
				name: 'h1-b',
				x: 5,
				y: 12,
				speed: 2,
				txt: `
 ██████   ████  ██ ██  ██  ██    █████  █████
     ▀                                       `
			},
			{
				name: 'bg',
				x: 0,
				y: 13,
				speed: 5,
				txt: '.\n'.repeat(21)
			}
		],
		Hangman: [
			{
				name: 'info',
				x: 22,
				y: 1,
				speed: 1,
				txt: 'QuintOS ]['
			},
			{
				name: 'bg',
				x: 10,
				y: 3,
				speed: 80,
				txt: `
    _     _     _  _     _     _
(_.' )  .' )  .' )( \`.  ( \`.  ( \`._)
   .' .' .' .' .'  \`. \`. \`. \`. \`.
  (_.' .' .' ,' .'\`. \`, \`. \`. \`._)
     .' .' ,' .'    \`. \`, \`. \`.
   .' .' .' .'        \`. \`. \`. \`.
  (_.' .' .'            \`. \`. \`._)
     .' .'                \`. \`.
   .' .'                    \`. \`.
 .' .'                        \`. \`.
(_.'                            \`._)
 _                               _
( '.                            ,' )
 '. '.                        ,' ,'
   '. '.                    ,' ,'
   _ '. '.                ,' ,' _
  ( '. '. '.            ,' ,' ,' )
   '. '. '. '.        ,' ,' ,' ,'
   _ '. '. \`. '.    ,' ,\` ,' ,' _
  ( '. '. '. \`. '.,' ,\` ,' ,' ,' )
 _ '. '. '. '. '.  ,' ,' ,' ,' ,' _
( '._)  '._)  '._)(_,'  (_,'  ( ,' )`
			},
			{
				name: 'logo',
				x: 24,
				y: 12,
				speed: 1,
				txt: `
▓▓▓ ▓▓▓
  ▓ ▓
  ▓ ▓
  ▓ ▓
▓▓▓ ▓▓▓`
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
				speed: 5,
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
				speed: 1,
				txt: `
THE Personal Computer: Powered by JavaScript™
Version 0.3 Copyleft QuintOS ©1981`
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
QUiNT Compass qOS BIOS Version 04
Copyleft © 1983 QUiNT Systems Corp`
			}
		],
		Pong: [
			{
				name: 'boot',
				txt: `
  **** QUINTOS 05 JAVASCRIPT ES12 ****

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
		SketchBook: [
			{
				name: 'boot',
				txt: `
  **** QUINTOS 05 JAVASCRIPT ES12 ****

  64GB RAM SYSTEM 38911 GIGABYTES FREE

READY.
10 PRINT CHR$(205.5+RND(1)); : GOTO 10
  RUN\n`.slice(1)
			},
			{
				name: 'h1',
				x: 6,
				y: 3,
				speed: 2,
				txt: `
  ────────────────▄▄───▐█
  ────▄▄▄───▄██▄──█▀───█─▄
  ──▄██▀█▌─██▄▄──▐█▀▄─▐█▀
  ─▐█▀▀▌───▄▀▌─▌─█─▌──▌─▌
  ─▌▀▄─▐──▀▄─▐▄─▐▄▐▄─▐▄─▐▄

████◣             ██◣ ██◣
█    █             █  █ █
█    █ █ █▐▌██◣██◣ █  █ █
█    █ █ █▐▌█ █ █  █  █ ◥██◣
█    █ █ █▐▌█ █ █  █  █    █
█  ▗ █ ██◤▐▌█ █ █  █  █    █
◥████◤             ◥██◤ ◥██◤
	    ▘`
			},
			{
				name: 'info',
				x: 20,
				y: 31,
				speed: 1,
				txt: `
JavaScript READY
QuintOS version 0.1
CopyLeft 1977`
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
				name: 'version',
				x: 1,
				y: 1,
				speed: 1,
				txt: 'QuintOS v8'
			},
			{
				name: 'logo',
				x: 7,
				y: 13,
				speed: 2,
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

	async function loadGame(game) {
		if (pc.level < 5 || pc.level == 7) {
			await pc.eraseRect();
		}
		pc.loadGame(game);
	}

	async function displayBootscreen() {
		console.log('QuintOS v' + pc.level + ' size: ' + pc.w + 'x' + pc.h);

		if (pc.level == 0 || pc.level == 7) {
			let txt0 = "'-.⎽⎽.-'⎺⎺".repeat(3);
			for (let i = 0; i < 30 * (pc.level == 7 ? 0.5 : 1); i++) {
				// pc.text(txt1.slice(0, 12), 0, 0, 0, 0, 12);
				await pc.text(txt0.slice(0, 23), 0, 0, 0, 0, 23);
				txt0 = txt0[txt0.length - 1] + txt0.slice(0, -1);
				// txt1 = txt1.slice(1) + txt1[1];
			}
			await pc.eraseRect();
		}

		if (pc.level < 5 || pc.level == 7) {
			for (let el of bootScreen) {
				let txt = el.txt.charAt(0) == '/n' ? el.txt.slice(1) : el.txt;
				await pc.text(txt, el.x, el.y, 0, 0, el.speed);
			}
			if (pc.level == 7) await delay(500);
		}

		if (pc.level < 5) return;

		let waitForDraw = new Promise((resolve) => {
			let wasDrawn = false;
			window.draw = () => {
				if (!wasDrawn) {
					wasDrawn = true;
					resolve();
				}
			};
		});

		if (pc.level == 8) {
			// support
			const stdout = document.getElementById('bootScreen');
			const PRINT = (str) => {
				stdout.innerHTML += str;
				stdout.scrollTop = stdout.scrollHeight;
			};
			const STR$ = (val) => String.fromCodePoint((9380 + val) >>> 0);
			const RND = (range) => Math.random() * range;

			PRINT(bootScreen[0].txt);

			async function makeMaze() {
				for (let i = 0; i < 50; i++) {
					let txt = '';
					for (let j = 0; j < 20; j++) {
						txt += STR$(205.5 + RND(1));
					}
					PRINT(txt);
					await delay();
				}
			}

			await Promise.all([Promise.race([makeMaze(), delay(1000)]), waitForDraw]);

			// if (camera?.off) camera.off();
		}

		if (pc.level == 8) {
		}

		if (pc.level == 5 || pc.level >= 8) {
			$('#bootScreen').remove();
			$('#tube').addClass('clear');
			$('#tube').append($('main'));

			$('main').css('display', 'block');
			$('canvas').css('width', '96vmin');
			$('canvas').css('height', '60vmin');

			if (pc.level == 8) {
				resizeCanvas(640, 800);
			}
			let logo = bootScreen[1];
			await pc.text(logo.txt, logo.x, logo.y);

			await delay(500);
			await pc.erase();
		}
	}

	let games = [
		'GuessTheNumber',
		'PickAPath',
		'Hangman',
		'QuickClicks',
		'TicTacToe',
		'Pong',
		'SpeakAndSpell',
		'Snake',
		'Sokoban'
	];

	let game = games[pc.level];
	if (typeof QuintOS.gameSelect != 'undefined') {
		game = QuintOS.gameSelect;
	}
	QuintOS.dir += '/' + game[0].toUpperCase() + game.slice(1);
	if (QuintOS.preload) pc.preloadData(game);
	if (pc.level >= 2 && pc.level < 5) await pc.frame();
	let bootScreen = bootScreens[game] || bootScreens[games[pc.level]];
	await displayBootscreen();
	if (pc.level == 0) await delay(1000);
	if (pc.level == 2) await delay(500);

	if (pc.level >= 3 && pc.level < 5) {
		// Add the Clock
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

	loadGame(game);
});
