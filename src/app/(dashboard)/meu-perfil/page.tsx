import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healphy | Meu perfil',
  description: 'Healphy | Meu perfil',
}

export default function MyProfilePage(): JSX.Element {
  return (
    <>
      <main>
        <h1 className="text-5xl p-8">Meu perfil</h1>
      </main>
    </>
  )
}
