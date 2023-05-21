import { ResponsivePie } from "@nivo/pie"
import { IEmployee } from "../../types"

interface IProps {
    employees: IEmployee[]
}

interface IChartData {
    id: string;
    value: number;
}

const prepareData = (employees: IEmployee[]) => {
    return employees.reduce((acc: IChartData[], employee: IEmployee) => {
        const existingJob = acc.find(item => item.id === employee.jobTitle);
        if (existingJob) {
            existingJob.value += 1;
        } else {
            acc.push({ id: employee.jobTitle, value: 1 });
        }
        return acc;
    }, []);
}


export const EmployeesByJobTitleChart: React.FC<IProps> = ({ employees }) => {
    const chartData = prepareData(employees)

    return (
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
    )
}
