import { render, screen, fireEvent } from '@testing-library/react'
import CoordinatorSelector from '../components/CoordinatorSelector'

const coordinators = [
  {
    id: 'nichelle',
    name: 'Nichelle Naidoo',
    title: 'Reception Coordinator',
    location: '🏢 Front Desk • Durban Office',
    avatar: '👩‍💼',
  },
  {
    id: 'ntobeko',
    name: 'Ntobeko Ngcobo',
    title: 'Helpdesk Coordinator',
    location: '🛠️ Helpdesk Station • Durban Office',
    avatar: '👨‍💻',
  },
]

describe('CoordinatorSelector', () => {
  it('renders coordinator cards', () => {
    render(<CoordinatorSelector coordinators={coordinators} onSelect={() => {}} />)
    expect(screen.getByText('Nichelle Naidoo')).toBeInTheDocument()
    expect(screen.getByText('Ntobeko Ngcobo')).toBeInTheDocument()
  })

  it('calls onSelect with correct id when a coordinator is selected', () => {
    const onSelectMock = vi.fn()
    render(<CoordinatorSelector coordinators={coordinators} onSelect={onSelectMock} />)
    const selectButtons = screen.getAllByRole('button', { name: /select coordinator/i })
    fireEvent.click(selectButtons[0])
    expect(onSelectMock).toHaveBeenCalledWith('nichelle')
  })
})
