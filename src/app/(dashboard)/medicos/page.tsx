import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healphy | Médicos',
  description: 'Healphy | Médicos',
}

export default function DoctorsPage(): JSX.Element {
  return (
    <>
      <main>
        <h1 className="text-5xl p-8">Médicos</h1>
      </main>
    </>
  )
}
