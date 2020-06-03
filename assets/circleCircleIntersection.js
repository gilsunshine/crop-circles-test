// based on the math here:
// http://math.stackexchange.com/a/1367732

// x1,y1 is the center of the first circle, with radius r1
// x2,y2 is the center of the second ricle, with radius r2

// credit to jupdike on github for the javascript implementation

function ccIntersect(x1,y1,x2,y2,r1,r2) {

  let centerdx = x1 - x2;
  let centerdy = y1 - y2;
  let R = Math.sqrt(centerdx * centerdx + centerdy * centerdy);
  if (!(Math.abs(r1 - r2) <= R && R <= r1 + r2)) { // no intersection
    return []; // empty list of results
  }

  let R2 = R*R;
  let R4 = R2*R2;
  let a = (r1*r1 - r2*r2) / (2 * R2);
  let r2r2 = (r1*r1 - r2*r2);
  let c = Math.sqrt(2 * (r1*r1 + r2*r2) / R2 - (r2r2 * r2r2) / R4 - 1);

  let fx = (x1+x2) / 2 + a * (x2 - x1);
  let gx = c * (y2 - y1) / 2;
  let ix1 = fx + gx;
  let ix2 = fx - gx;

  let fy = (y1+y2) / 2 + a * (y2 - y1);
  let gy = c * (x1 - x2) / 2;
  let iy1 = fy + gy;
  let iy2 = fy - gy;

  return [[ix1, iy1], [ix2, iy2]];
}
