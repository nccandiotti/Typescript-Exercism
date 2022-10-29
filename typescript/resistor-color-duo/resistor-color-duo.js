let colorsObj = {
    black: "0",
    brown: "1",
    red: " 2",
    orange: "3",
    yellow: "4",
    green: "5",
    blue: "6",
    violet: "7",
    grey: "8",
    white: "9",
};
const colorsArray = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
];
export function decodedValue(colorsArray) {
    let firstTwo = `${colorsObj[colorsArray[0]]}${colorsObj[colorsArray[1]]}`;
    return +firstTwo;
}
