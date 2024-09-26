import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ResponsiveCard from '../../../src/components/common/ResponsiveCard'
import { teamMembersdata, TeamMembersData } from '../../../src/utils/data'
const mockScreenProps: TeamMembersData = teamMembersdata[0]
describe('Page', () => {
    it('renders a ResponsiveCard', () => {
        render(<ResponsiveCard  {...mockScreenProps} />)
        expect(screen).toBeDefined()
    })
})