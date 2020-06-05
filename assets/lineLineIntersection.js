function llIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
    point1 = [x1, y1]
    point2 = [x2, y2]
    point3 = [x3, y3]
    point4 = [x4, y4]
   const ua = ((point4[0] - point3[0]) * (point1[1] - point3[1]) -
             (point4[1] - point3[1]) * (point1[0] - point3[0])) /
            ((point4[1] - point3[1]) * (point2[0] - point1[0]) -
             (point4[0] - point3[0]) * (point2[1] - point1[1]));

  const ub = ((point2[0] - point1[0]) * (point1[1] - point3[1]) -
             (point2[1] - point1[1]) * (point1[0] - point3[0])) /
            ((point4[1] - point3[1]) * (point2[0] - point1[0]) -
             (point4[0] - point3[0]) * (point2[1] - point1[1]));

  const x = point1[0] + ua * (point2[0] - point1[0]);
  const y = point1[1] + ua * (point2[1] - point1[1]);

  return createVector(x, y)
}
