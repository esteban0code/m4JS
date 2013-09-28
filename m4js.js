var M4JS = (function() {
	var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	// private dta structure PairOfDigits
	function PairOfDigits(n1, n2) {
		this.n1 = n1;
		this.n2 = n2;
	}

	PairOfDigits.prototype.toString = function() {
		return ('{ n1: ' + this.n1 + ', n2: ' + this.n2 + ' }');
	};


	var sumOfDigits = (function() {
		var pairs = {};
		var l = digits.length;
		for (var i = 1; i < l; i++) {
			for (var j = i; j < l; j++) {
				var pair = new PairOfDigits(i, j);
				var sum = (i + j) + '';
				pairs[pair] = sum;
			}
		}

		return pairs;
	})();




	return {
		sumOfDigits: sumOfDigits,
		PairOfDigits: PairOfDigits
	};
})();

