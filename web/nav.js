// Get the element with id 'referenceLinks'
var referenceLinks = document.getElementById('referenceLinks');

// Add event listeners for mouseenter and mouseleave
referenceLinks.addEventListener('mouseenter', function () {
	// Show elements with class 'refs'
	var refs = document.getElementsByClassName('refs');
	for (var i = 0; i < refs.length; i++) {
		refs[i].style.display = 'block';
	}

	// Set height and opacity of element with id 'referenceLink'
	var referenceLink = document.getElementById('referenceLink');
	referenceLink.style.height = '0';
	referenceLink.style.opacity = '0';
});

referenceLinks.addEventListener('mouseleave', function () {
	// Hide elements with class 'refs'
	var refs = document.getElementsByClassName('refs');
	for (var i = 0; i < refs.length; i++) {
		refs[i].style.display = 'none';
	}

	// Set height and opacity of element with id 'referenceLink'
	var referenceLink = document.getElementById('referenceLink');
	referenceLink.style.height = 'unset';
	referenceLink.style.opacity = '1';
});

// Get the element with id 'referenceLink'
var referenceLink = document.getElementById('referenceLink');

// Add click event listener
referenceLink.addEventListener('click', function () {
	// Show elements with class 'refs'
	var refs = document.getElementsByClassName('refs');
	for (var i = 0; i < refs.length; i++) {
		refs[i].style.display = 'block';
	}

	// Set height and opacity of element with id 'referenceLink'
	referenceLink.style.height = '0';
	referenceLink.style.opacity = '0';
});
