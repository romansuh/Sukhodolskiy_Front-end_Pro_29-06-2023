function generatePascalTriangle(rows) {
    if (rows === 0) {
        return [];
    } else if (rows === 1) {
        return [[1]];
    } else {
        let prevTriangle = generatePascalTriangle(rows - 1);
        let newRow = [1];

        for (let i = 1; i < prevTriangle[prevTriangle.length - 1].length; i++) {
            newRow[i] = prevTriangle[prevTriangle.length - 1][i - 1] + prevTriangle[prevTriangle.length - 1][i];
        }

        newRow.push(1);
        prevTriangle.push(newRow);

        return prevTriangle;
    }
}


function printPascalTriangle(triangle) {

}

const numberOfRows = 10;
const pascalTriangle = generatePascalTriangle(numberOfRows);

for (const row of pascalTriangle) {
    console.log(row.join(' '));
}
