var bigPal = function() {
  var max = 1;
  for (var x = 999; x > 900; x--) {
    for (var y = 999; y > 900; y--) {
      if ((x*y).toString() == (x*y).toString().split('').reverse().join('') && (x*y) > max) {
    max=x*y;
      } else {
        continue;
      };
    }
  }
  return max;
}

/* The original version included the extra, unnecessary steps of adding each found palindrome
to an array and then returning the largest with Math.max */
