const DnaArray = [
    { dna: "G", RNA: "C" },
    { dna: "C", RNA: "G" },
    { dna: "T", RNA: "A" },
    { dna: "A", RNA: "U" },
];
export function toRna(string) {
    const isValid = (string) => {
        let check = DnaArray.find((st) => st.dna === string);
        if (check) {
            return check?.RNA;
        }
        else {
            throw new Error("Invalid input DNA.");
        }
    };
    if (string.length === 1) {
        return isValid(string);
    }
    else if (string.length > 1) {
        let inputAsArray = string.split("");
        let transformedArray = inputAsArray.map((i) => isValid(i));
        if (transformedArray.find((i) => i === "Invalid Input DNA.")) {
            throw new Error("Invalid input DNA.");
        }
        else
            return transformedArray.join("").toString();
    }
}
