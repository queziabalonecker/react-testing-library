import { Dropdown } from './index';

import { screen, render, userEvent } from '../../tests';

const title = 'Selecione um pokemon';
const options = ['Pidgey', 'Nidoran', 'Caterpie'];

describe('Dropdown', () => {
  it('should start closed', () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });

  it('should show options when open', () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: title }));

    expect(screen.getByText(options[0])).toBeInTheDocument();
    expect(screen.getByText(options[1])).toBeInTheDocument();
    expect(screen.getByText(options[2])).toBeInTheDocument();
  });

  it('should signal an option was selected and close the menu', () => {
    const onSelect = jest.fn();
    render(<Dropdown title={title} options={options} onSelect={onSelect} />);

    userEvent.click(screen.getByRole('button', { name: title }));

    expect(screen.getByText(options[0])).toBeInTheDocument();
    expect(screen.getByText(options[1])).toBeInTheDocument();
    expect(screen.getByText(options[2])).toBeInTheDocument();

    userEvent.click(screen.getByText(options[0]));

    expect(onSelect).toHaveBeenCalledWith(options[0]);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });
});
