import { type Product } from './products'

interface ProductTableProps {
  products: Product[]
}

function ProductTable({ products }: ProductTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default ProductTable;