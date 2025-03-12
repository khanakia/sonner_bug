## How to use src/features/crud/FormResourceProvider.tsx

How to implement typesafe form provider

```tsx
import React from 'react'
import { FormResourceProvider, useFormResource } from './FormResource'
import { UseMutationResult } from './types'

type User = {
  name: string
  email: string
}

// Assume you have a mutationAdapter that fits the expected interface
const mutationAdapter: UseMutationResult = {
  // Implement fetch, create, update, etc.
  fetch: async (id: string | number) => {
    // Fetch and return the User data
    return { name: 'John Doe', email: 'john.doe@example.com' }
  },
  create: async (input: User) => {
    // Create logic
    return { name: input.name, email: input.email }
  },
  update: async (id: string | number, input: User) => {
    // Update logic
    return { name: input.name, email: input.email }
  },
  isLoading: false,
  isError: false,
  errorType: '',
  errors: [],
}

const UserForm = () => {
  const { data, form, isLoading, isError } = useFormResource<User>()

  // Example form submission handler
  const handleSubmit = (values: User) => {
    console.log('Form values:', values)
  }

  return (
    <Form form={form} onFinish={handleSubmit} initialValues={data}>
      <Form.Item name="name" label="Name">
        <input />
      </Form.Item>
      <Form.Item name="email" label="Email">
        <input />
      </Form.Item>
      <button type="submit" disabled={isLoading}>
        Submit
      </button>
      {isError && <div className="error">An error occurred</div>}
    </Form>
  )
}

const App = () => {
  return (
    <FormResourceProvider<User>
      id="123"
      mutationAdapter={mutationAdapter}
      isNew={false}
    >
      <UserForm />
    </FormResourceProvider>
  )
}

export default App
```
