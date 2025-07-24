// data/userData.ts

export interface UserData {
  points: number;
  avatar: string;
}

export const mockUserData: Record<string, UserData> = {
  Bret: { 
    points: 100, 
    avatar: 'https://images.unsplash.com/photo-1680447079006-f04c5c8bb087?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  Antonette: { 
    points: 43, 
    avatar: 'https://images.unsplash.com/photo-1740252117012-bb53ad05e370?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  Samantha: { 
    points: 44, 
    avatar: 'https://images.unsplash.com/photo-1646773777979-8242c6ee91c7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  Karianne: { 
    points: 27, 
    avatar: 'https://images.unsplash.com/photo-1714911463721-193701866e58?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  Kamren: { 
    points: 23, 
    avatar: 'https://images.unsplash.com/photo-1701948709593-bdac58b4944f?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  Leopoldo_Corkery: { 
    points: 24, 
    avatar: 'https://images.unsplash.com/photo-1696960252831-7580e1bcbee4?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  'Elwyn.Skiles': { 
    points: 15, 
    avatar: 'https://images.unsplash.com/photo-1699524826369-57870e627c43?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  Maxime_Nienow: { 
    points: 12, 
    avatar: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  Delphine: { 
    points: 10, 
    avatar: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  'Moriah.Stanton': { 
    points: 11, 
    avatar: 'https://images.unsplash.com/photo-1558624232-75ee22af7e67?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
};

// Fallback avatars for users not in mockUserData
export const generateRandomAvatar = (): string => {
  const avatars = [
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face&auto=format',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format',
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop&crop=face&auto=format',
    'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face&auto=format'
  ];
  return avatars[Math.floor(Math.random() * avatars.length)];
};