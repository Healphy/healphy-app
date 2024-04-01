import TopCard from 'components/TopCard'

export default function Home(): JSX.Element {
  return (
    <>
      <main className="p-7 w-full">
        <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
        <div className="flex gap-6">
          <TopCard cardTitle="Agendamentos" cardData="684" />
          <TopCard cardTitle="Cancelamentos" cardData="546" />
          <TopCard cardTitle="Total Pacientes" cardData="7,732" />
          <TopCard cardTitle="Não compareceu" cardData="4" />
        </div>
      </main>
    </>
  )
}
