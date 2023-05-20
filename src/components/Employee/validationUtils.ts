import { FormFields } from "./types";

type ValidateFn = (value: string) => string;

type ValidationMap = {
    [field in keyof FormFields]: ValidateFn;
};

const name: ValidateFn = (value) => !value.trim() ? "Name is required" : "";

const jobTitle: ValidateFn = (value) => !value.trim() ? "Job title is required" : "";

const tenure: ValidateFn = (value) => {
    return (!value.trim() || isNaN(+value)) ? "Tenure is required and should be a number" : "";
};

const gender = (value: string) => !value.trim() ? "Gender is required" : "";

const validators: ValidationMap = {
    name,
    jobTitle,
    tenure,
    gender
}

export default validators;
