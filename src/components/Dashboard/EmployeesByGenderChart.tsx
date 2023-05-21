import { ResponsiveBar } from "@nivo/bar"
import { IEmployee } from "../../types";

interface IProps {
    employees: IEmployee[]
}

const prepareData = (employees: IEmployee[]) => {
    let maleCount = 0;
    let femaleCount = 0;

    employees.forEach(employee => {
        if (employee.gender === "Male") {
            maleCount++;
        } else if (employee.gender === "Female") {
            femaleCount++;
        }
    });

    return [
        { gender: "Male", Employees: maleCount },
        { gender: "Female", Employees: femaleCount },
    ];
}

export const EmployeesByGenderChart: React.FC<IProps> = ({ employees }) => (
    <ResponsiveBar
        data={prepareData(employees)}
        keys={["Employees"]}
        indexBy="gender"
        margin={{ top: 50, right: 50, bottom: 50, left: 80 }}
        padding={0.4}
        colors={{ scheme: "pastel2" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Employees",
            legendPosition: "middle",
            legendOffset: -40
        }}
        colorBy="indexValue"
    />
);
