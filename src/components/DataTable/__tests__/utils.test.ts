import { sortData } from "../utils";

describe("sortData", () => {
    it("should sort data in ascending order for column with numbers", () => {
        const data = [
            { name: "Mario", age: 35 },
            { name: "Andrea", age: 15 },
            { name: "Sofia", age: 40 },
        ];
        const expected = [
            { name: "Andrea", age: 15 },
            { name: "Mario", age: 35 },
            { name: "Sofia", age: 40 },
        ];
        expect(sortData(data, "age", "asc")).toEqual(expected);
    });

    it("should sort data in descending order for column with numbers", () => {
        const data = [
            { name: "Mario", age: 35 },
            { name: "Andrea", age: 15 },
            { name: "Sofia", age: 40 },
        ];
        const expected = [
            { name: "Sofia", age: 40 },
            { name: "Mario", age: 35 },
            { name: "Andrea", age: 15 },
        ];
        expect(sortData(data, "age", "desc")).toEqual(expected);
    });

    it("should sort data in ascending order for a column with strings", () => {
        const data = [
            { name: "Mario", age: 35 },
            { name: "Andrea", age: 15 },
            { name: "Sofia", age: 40 },
        ];
        const expected = [
            { name: "Andrea", age: 15 },
            { name: "Mario", age: 35 },
            { name: "Sofia", age: 40 },
        ];
        expect(sortData(data, "name", "asc")).toEqual(expected);
    });
});
