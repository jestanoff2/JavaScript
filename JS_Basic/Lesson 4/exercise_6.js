function Painting(safetyNylon, paint, paintThinner, engineer) {
    let sumOfNylon = (safetyNylon + 2) * 1.5;
    let sumOfPaint = paint * 1.1 * 14.5;
    let sumOfPaintThinner = paintThinner * 5;
    let bags = 0.4;
    let sumOfMaterials = sumOfNylon + sumOfPaint + sumOfPaintThinner + bags;
    let workersHours = sumOfMaterials * 0.3 * engineer;
    let finalPrice = workersHours + sumOfMaterials;
    console.log(finalPrice);
}
Painting(10, 11, 4, 8);    