import { ResponsivePie } from "@nivo/pie"
import { IEmployee } from "../../types"
import { sortData } from "../DataTable/utils";

interface IProps {
    employees: IEmployee[];
    height: number;
}

interface IChartData {
    id: string;
    value: number;
}

const prepareData = (employees: IEmployee[]) => {
    return employees.reduce((acc: IChartData[], employee: IEmployee) => {
        const existingJob = acc.find(item => item.id === employee.jobTitle);

        if (existingJob)
            existingJob.value += 1;
        else
            acc.push({ id: employee.jobTitle, value: 1 });

        return acc;
    }, []);
}

export const EmployeesByJobTitleChart: React.FC<IProps> = ({ employees, height }) => {
    // sort them so chart does not move when ordering is changed
    const sortedEmployees = sortData(employees, "jobTitle", "asc");
    const chartData = prepareData(sortedEmployees);

    return (
        <fieldset className="border rounded" style={{ height }}>
            <legend className="fs-5 ms-4 mt-2">
                Employees by Job Title
            </legend>
            <ResponsivePie
                data={chartData as any}
                margin={{ top: 40, right: 60, bottom: 70, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: "pastel1" }}
                borderWidth={1}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            />
        </fieldset>
    )
}
