// __test__/RegistrationForm.test.tsx

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegistrationForm from '@/components/RegistrationForm';

describe('RegistrationForm', () => {
  beforeEach(() => {
    render(<RegistrationForm />);
  });

  it('renders all form fields and the submit button', () => {
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/gamer tag/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/favourite game/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /enlist in the battle/i })).toBeInTheDocument();
  });

});