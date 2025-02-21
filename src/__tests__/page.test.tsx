import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../pages/index';

test('Page', () => {
	render(<Page />);
	expect(screen.getByRole('list').textContent).toBe(
		'Get started by editing src/pages/index.tsx.Save and see your changes instantly.',
	);
	expect(screen.getAllByRole('link').map((link) => link.textContent)).toEqual([
		'Deploy now',
		'Read our docs',
		'Learn',
		'Examples',
		'Go to nextjs.org →',
	]);
});
