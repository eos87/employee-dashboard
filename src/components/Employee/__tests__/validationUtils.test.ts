import validators from "../validationUtils";

describe("validationUtils", () => {
    describe("name", () => {
        it("should return error for empty string", () => {
            expect(validators.name("")).toBe("Name is required");
        });

        it("should return error for string of spaces", () => {
            expect(validators.name("    ")).toBe("Name is required");
        });

        it("should return empty string for valid value", () => {
            expect(validators.name("John")).toBe("");
        });
    });

    describe("jobTitle", () => {
        it("should return error for empty string", () => {
            expect(validators.jobTitle("")).toBe("Job title is required");
        });

        it("should return error for string of spaces", () => {
            expect(validators.jobTitle("    ")).toBe("Job title is required");
        });

        it("should return empty string for valid value", () => {
            expect(validators.jobTitle("John")).toBe("");
        });
    });

    describe("tenure", () => {
        it("should return error for empty string", () => {
            expect(validators.tenure("")).toBe("Tenure is required and should be a number");
        });

        it("should return error for string of spaces", () => {
            expect(validators.tenure("    ")).toBe("Tenure is required and should be a number");
        });

        it("should return error for non-numeric string", () => {
            expect(validators.tenure("abc")).toBe("Tenure is required and should be a number");
        });

        it("should return empty string for valid number", () => {
            expect(validators.tenure("1")).toBe("");
        });
    });

    describe("gender", () => {
        it("should return error for empty string", () => {
            expect(validators.gender("")).toBe("Gender is required");
        });

        it("should return error for string of spaces", () => {
            expect(validators.gender("    ")).toBe("Gender is required");
        });

        it("should return empty string for valid value", () => {
            expect(validators.gender("John")).toBe("");
        });
    });
});
