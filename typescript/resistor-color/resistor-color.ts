const ColorArray = [
  { name: "black", code: 0 },
  { name: "brown", code: 1 },
  { name: "red", code: 2 },
  { name: "orange", code: 3 },
  { name: "yellow", code: 4 },
  { name: "green", code: 5 },
  { name: "blue", code: 6 },
  { name: "violet", code: 7 },
  { name: "grey", code: 8 },
  { name: "white", code: 9 },
]

export const colorCode = (color: string) => {
  if (color) {
    let colorObj = ColorArray.find((c) => c.name === color)
    return colorObj?.code
  } else {
    return ColorArray.map((c) => c.name).join(" ")
  }
}

export const COLORS = [
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
]
