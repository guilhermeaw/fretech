import { render, screen } from '@testing-library/react';

import { EmptyList } from '.';

describe('EmptyList', () => {
  it('should render an image, a heading and a message passed by prop', () => {
    const message = 'Sem ocorrências cadastradas';

    render(<EmptyList message={message} />);

    expect(screen.getByAltText(/caixa vazia/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /nada por aqui/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
