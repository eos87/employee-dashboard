async function fetchInitialEmployees<T>(): Promise<T> {
    try {
        const response = await fetch("/data/employees.json");

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`fetchAllEmployees failed: ${error}`);
        throw error;
    }
}

export const employeeService = {
    fetchInitialEmployees
};