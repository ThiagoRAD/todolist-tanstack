import { createFileRoute } from '@tanstack/react-router'

const App = () => {
  return <div>hi</div>
}

export const Route = createFileRoute('/')({ component: App })
