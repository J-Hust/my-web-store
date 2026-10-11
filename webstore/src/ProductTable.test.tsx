import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import ProductTable from './ProductTable'

test('shows the name of each product', () => {
  render(
    <ProductTable
      products={[
        { id: 1, name: 'Hammer' },
        { id: 2, name: 'Saw' },
      ]}
    />,
  )

  expect(screen.getByText('Hammer')).toBeInTheDocument()
  expect(screen.getByText('Saw')).toBeInTheDocument()
})
