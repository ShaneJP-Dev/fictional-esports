// data/userData.ts

export interface UserData {
  points: number;
  avatar: string;
}

export const mockUserData: Record<string, UserData> = {
  Bret: { 
    points: 100, 
    avatar: 'https://unsplash.com/photos/a-small-toy-is-standing-in-front-of-a-pink-background-jlJpDBK17Hw?w=150&h=150&fit=crop&crop=face&auto=format'
  },
  Antonette: { 
    points: 43, 
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format'
  },
  Samantha: { 
    points: 44, 
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format'
  },
  Karianne: { 
    points: 27, 
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format'
  },
  Kamren: { 
    points: 23, 
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format'
  },
  Leopoldo_Corkery: { 
    points: 24, 
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format'
  },
  'Elwyn.Skiles': { 
    points: 15, 
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&auto=format'
  },
  Maxime_Nienow: { 
    points: 12, 
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face&auto=format'
  },
  Delphine: { 
    points: 10, 
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face&auto=format'
  },
  'Moriah.Stanton': { 
    points: 11, 
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face&auto=format'
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