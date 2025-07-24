import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
 // Adjust the import path as needed
import { User } from '../api/leaderboard/route'; // Adjust the import path as needed
import Podium from '@/components/Podium';

// Mock framer-motion to prevent issues with animations in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...rest }: any) => <div {...rest}>{children}</div>,
  },
}));

describe('Podium', () => {
  const mockUsers: User[] = [
    { id: '1', gamerTag: 'PlayerOne', avatar: '/avatars/player1.png', points: 1000 },
    { id: '2', gamerTag: 'PlayerTwo', avatar: '/avatars/player2.png', points: 900 },
    { id: '3', gamerTag: 'PlayerThree', avatar: '/avatars/player3.png', points: 800 },
    { id: '4', gamerTag: 'PlayerFour', avatar: '/avatars/player4.png', points: 700 },
  ];

  it('renders the top three users correctly on the podium', () => {
    const topThreeUsers = [mockUsers[0], mockUsers[1], mockUsers[2]];
    render(<Podium topThree={topThreeUsers} allUsers={mockUsers} />);

    // Check if player names are rendered
    expect(screen.getByText('PlayerOne')).toBeInTheDocument();
    expect(screen.getByText('PlayerTwo')).toBeInTheDocument();
    expect(screen.getByText('PlayerThree')).toBeInTheDocument();

    // Check if points are rendered
    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText('900')).toBeInTheDocument();
    expect(screen.getByText('800')).toBeInTheDocument();

    // Check for the crown icon for the first-place player
    expect(screen.getByText('👑')).toBeInTheDocument();
  });

  it('correctly orders the podium visually (3rd, 1st, 2nd)', () => {
    const topThreeUsers = [mockUsers[0], mockUsers[1], mockUsers[2]];
    render(<Podium topThree={topThreeUsers} allUsers={mockUsers} />);

    const podiumItems = screen.getAllByText(/Player/).map(el => el.textContent);
    // The visual order is 3rd, 1st, 2nd based on getPodiumOrder function
    expect(podiumItems[0]).toBe('PlayerThree');
    expect(podiumItems[1]).toBe('PlayerOne');
    expect(podiumItems[2]).toBe('PlayerTwo');
  });

  it('applies correct styling based on position (e.g., border colors)', () => {
    const topThreeUsers = [mockUsers[0], mockUsers[1], mockUsers[2]];
    render(<Podium topThree={topThreeUsers} allUsers={mockUsers} />);

    // PlayerOne (1st place) should have yellow border
    const playerOneAvatarContainer = screen.getByAltText('PlayerOne').closest('div');
    expect(playerOneAvatarContainer).toHaveClass('border-yellow-300');

    // PlayerTwo (2nd place) should have gray border
    const playerTwoAvatarContainer = screen.getByAltText('PlayerTwo').closest('div');
    expect(playerTwoAvatarContainer).toHaveClass('border-gray-300');

    // PlayerThree (3rd place) should have amber border
    const playerThreeAvatarContainer = screen.getByAltText('PlayerThree').closest('div');
    expect(playerThreeAvatarContainer).toHaveClass('border-amber-700');
  });

  it('handles fewer than three users gracefully', () => {
    const twoUsers: User[] = [mockUsers[0], mockUsers[1]];
    render(<Podium topThree={twoUsers} allUsers={twoUsers} />);

    expect(screen.getByText('PlayerOne')).toBeInTheDocument();
    expect(screen.getByText('PlayerTwo')).toBeInTheDocument();
    expect(screen.queryByText('PlayerThree')).not.toBeInTheDocument(); // Ensure third player is not rendered
  });

  it('displays user avatars', () => {
    const topThreeUsers = [mockUsers[0], mockUsers[1], mockUsers[2]];
    render(<Podium topThree={topThreeUsers} allUsers={mockUsers} />);

    expect(screen.getByAltText('PlayerOne')).toHaveAttribute('src', '/avatars/player1.png');
    expect(screen.getByAltText('PlayerTwo')).toHaveAttribute('src', '/avatars/player2.png');
    expect(screen.getByAltText('PlayerThree')).toHaveAttribute('src', '/avatars/player3.png');
  });
});