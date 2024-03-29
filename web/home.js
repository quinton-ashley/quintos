let args = {
	page: 0
};

{
	let url = location.href.split('?');
	if (url.length > 1) {
		let params = new URLSearchParams(url[1]);
		for (let pair of params.entries()) {
			if (pair[0] == 'page') pair[1] = Number(pair[1]);
			args[pair[0]] = pair[1];
		}
	}
}

let gamesPerPage = 8;

function generatePreviews(games) {
	let html = '';

	let startIndex = (args.page || 0) * gamesPerPage;
	for (let i = startIndex; i < startIndex + gamesPerPage; i++) {
		let game = games[i];
		if (!game) break;
		let { user, title, v } = game;
		let url = `/quintos/?user=${user}&game=${title}`;
		for (let attr in game) {
			if (attr == 'title' || attr == 'user') continue;
			url += `&${attr}=${game[attr]}`;
		}

		html += `
<div class="item">
	<div class="item-content">
		<div class="item-iframe">
			<a href="${url}" class="gameLink"></a>
			<iframe src="${url}&iframe=true" scrolling="no" frameborder="0"></iframe>
		</div>
		<div class="item-info">
			<a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>
			<span>by</span>
			<a href="./home.html?user=${user}${game.language == 'java' ? '&language=java' : ''}">${user}</a>
		</div>
	</div>
</div>`;
	}

	document.getElementById('games').innerHTML += html;

	let url = '?';
	if (args.user) url += 'user=' + args.user;
	if (args.page) {
		document.getElementById('prev').href = url + `&page=${args.page - 1}`;
		if (games.length <= (args.page + 1) * gamesPerPage) {
			document.getElementById('next').hidden = true;
		}
	} else {
		document.getElementById('prev').hidden = true;
	}

	document.getElementById('next').href = url + `&page=${args.page + 1}`;

	const iframes = Array.from(document.getElementsByTagName('iframe'));
	for (const item of iframes) {
		item.contentWindow.console.log = () => {};
	}

	setTimeout(() => {
		for (let i = 0; i < frames.length; i++) {
			frames[i].stop();
		}
	}, 3000);
}

if (args.user) {
	const gameTitles = [
		'GuessTheNumber',
		'PickAPath',
		'Pong',
		'LilyLeap',
		'Hangman',
		'QuickClicks',
		'BinaryConverter',
		'GenerativeArt',
		'CodeBreaker',
		'TicTacToe',
		'DataDesigner',
		'WorldWideWeb',
		'Wordle',
		'TicTacAIO',
		'SpeakAndSpell',
		'Contain',
		'SuperJump',
		'Sokoban'
	];

	let games = [];

	for (let title of gameTitles) {
		let game = { title: title, user: args.user };
		if (args.language) game.language = args.language;
		games.push(game);
	}
	generatePreviews(games);
} else {
	let games = [
		{ user: 'Ali4110', title: 'Wordle', v: 4 },
		{ user: 'Paeto-Chayarat', title: 'NumberDash', sys: 'arc' },
		{ user: 'OleHo370', title: 'GenerativeArt', v: 5 },
		{ user: 'seva-zoff', title: 'QuickClicks', v: 4 },
		{ user: 'Ali4110', title: 'PickAPath', v: 4 },
		{ user: 'AmaniZungu', title: 'LilyLeap', v: 4 }, // CornN10
		{ user: 'quinton-ashley', title: 'Pong' },
		{ user: 'quinton-ashley', title: 'BigBinary' },

		{ user: 'Ali4110', title: 'TicTacAIO', v: 4 },
		{ user: 'CornN10', title: 'LilyLeap', v: 4 },
		{ user: 'WarriorFPHS', title: 'GenerativeArt', v: 4 },
		{ user: 'Paeto-Chayarat', title: 'NumberDash', sys: 'arc', v: 4 },
		{ user: 'quinton-ashley', title: 'Sokoban' },
		{ user: 'quinton-ashley', title: 'Hangman' },
		{ user: 'quinton-ashley', title: 'WheelOfFortune' },
		{ user: 'Ali4110', title: 'DataDesigner', v: 4 },
		{ user: 'quinton-ashley', title: 'SpeakAndSpell' } // jaximuslim 's version needs menu select
	];
	generatePreviews(games);
}
