var Miniscule = new Object();

(function()
 {
	 var exposed = {};

	 var isAtom = function(a) {
		 return typeof a == 'string' || typeof a == 'number' ||
			 typeof a == 'boolean';
	 };
	 
	 var car = function(s) {
		 return s[0];
	 };

	 var cdr = function(s) {
		 return s[1];
	 };
	 
	 var firstSubExp = function(exp) {
		 return car(cdr(exp));
	 };
	 
	 var secondSubExp = function(exp) {
		 return car(cdr(cdr(exp)));
	 };
	 
	 var plus = function(n, m) {
		 return parseInt(n, 10)+parseInt(m, 10);
	 }
	 
	 var minus = function(n, m) {
		 return parseInt(n, 10)-parseInt(m, 10);
	 }
	 
	 var times = function(n, m) {
		 return parseInt(n, 10) * parseInt(m, 10);
	 }
	 
	 var divide = function(n, m) {
		 return parseInt(n, 10) / parseInt(m, 10);
	 }
	 
	 var send = function(n, m) {
		 return (exposed[n])[m];
	 }
	 
	 var atomToFunction = function(x) {
		 if (x === '+')
			 return plus;
		 if (x === '-')
			 return minus;
		 if (x === '*')
			 return times;
		 if (x === '/')
			 return divide;
		 if (x === "send")
			 return send;
		 else
			 throw new SyntaxError=12();
	 }

	 Miniscule.expose = function(name, object) {
		 exposed[name] = object;
	 }
	 
	 Miniscule.value = function (exp) {
		 return isAtom(exp) ? exp :
		 atomToFunction(car(exp)) (
			 Miniscule.value(firstSubExp(exp)), Miniscule.value(secondSubExp(exp)));		 
	 }
	 
	 var s = function (x) {
		 
		 var tx = /\s*(\(|\)|[^\s()]+|$)/g,
		 result;
		 tx.lastIndex = 0;
		 result = function list() {
			 var head = null,
			 neo  = null,
			 r    = tx.exec(x),
			 sexp = (r && r[1]) || '',
			 tail = null;
			 
			 if (sexp != '(') {
				 return sexp;
			 }
			 while (true) {
				 sexp = list();
				 if (sexp === '' || sexp == ')') {
					 return head;
				 }
				 neo = [sexp];
				 if (tail) {
					 tail[1] = neo;
				 } else {
					 tail = head = neo;
				 }
				 tail = neo;
			 }
		 }();
		 s.lastIndex = tx.lastIndex;
		 return result;
	 };

	 Miniscule.eval = function(exp)
	 {
		 return Miniscule.value(s(exp));
	 }

	 Miniscule.parse = s;

 }).apply();

