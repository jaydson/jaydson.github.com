/*global window,document,console, Modernizr */
(function () {
	var Cube = function () {

		this.render = function (container) {
			if (!container) {
				throw "Provide a container";
			}

			var backgrounds = ['3d.jpg', 'connectivity.jpg', 'css3.jpg', 'device.jpg', 'html5.png', 'multimedia.jpg', 'offline.jpg', 'performance.jpg', 'semantics.jpg'],
				imgPath = '/images',
				DOMElementCube = document.createElement('div'),
				DOMElementLink = document.createElement('a'),
				i = 0,
				tempDOMElement = null,
				DOMContainer = document.getElementById(container);

			if (DOMContainer) {
				backgrounds.sort(function () {
					return Math.floor(Math.random() * 7);
				});

				DOMElementLink.href = 'https://github.com/jaydson/blog-header-experiments';
				DOMElementLink.target = '_blank';
				DOMElementLink.appendChild(DOMElementCube);
				DOMElementCube.setAttribute('class', 'animate');
				DOMElementCube.setAttribute('id', 'cube');

				for (i; i < 6; i = i + 1) {
					tempDOMElement = document.createElement('div');
					tempDOMElement.style.backgroundImage = 'url(' + imgPath + '/' +  backgrounds.shift() + ')';
					DOMElementCube.appendChild(tempDOMElement);
				}
				DOMContainer.appendChild(DOMElementLink);
			}
		};
	};

	window.addEventListener('DOMContentLoaded', function () {
		if (Modernizr.csstransforms3d) {
			var cube = new Cube().render('header-stage');
		}
	});
}());