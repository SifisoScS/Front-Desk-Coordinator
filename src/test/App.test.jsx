import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders CoordinatorSelector initially', () => {
    render(<App />)
    expect(screen.getByText(/front desk coordinator/i)).toBeInTheDocument()
  })

  it('allows selecting a coordinator and shows main tabs', () => {
    render(<App />)
    const selectButtons = screen.getAllByRole('button', { name: /select coordinator/i })
    fireEvent.click(selectButtons[0])
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument()
  })
})
