import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import { FormActionButtons } from ".";

describe('FormActionButtons', () => {
    it('should render cancel button and save button with type submit', () => {
        render(<FormActionButtons onCancel={vi.fn()} />);

        expect(screen.getByRole('button', { name: /cancelar/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /salvar/i })).toHaveAttribute('type', 'submit');
    });

    it('should call onCancel when click on cancel button', async () => {
        const spyCancel = vi.fn();
        render(<FormActionButtons onCancel={spyCancel} />);

        const cancelButton = screen.getByRole('button', { name: /cancelar/i });
        await userEvent.click(cancelButton);

        expect(spyCancel).toHaveBeenCalledTimes(1);
    });
});
