export interface Product {
  id: number
  name: string
}

export async function fetchProducts(signal: AbortSignal): Promise<Product[]> {
  const response = await fetch('/products', { signal })

  if (!response.ok) {
    throw new Error(`Could not load products (${response.status})`)
  }

  return (await response.json()) as Product[]
}

export async function createProduct(name: string): Promise<Product> {
  const response = await fetch('/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  })

  if (!response.ok) {
    throw new Error(`Could not create product (${response.status})`)
  }

  return (await response.json()) as Product
}
