import { App } from "../App"
import { render, screen } from "@testing-library/react"

test("full app rendering takes to dashboard by default", async () => {
    render(<App />)

    expect(screen.getByText(/Corporate Employees/i)).toBeInTheDocument()
})