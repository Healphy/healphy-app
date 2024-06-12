import { Button } from 'components/Button'
import { Location } from 'components/Location'
import { type Metadata } from 'next'
import Link from 'next/link'
import { createSlug } from 'utils/functions/string-treatment'

export const metadata: Metadata = {
  title: 'Healphy | Detalhes da consulta',
  description: 'Healphy | Consultas',
}

export default function AppointmentDetailsPage() {
  const replacedPatientName = createSlug('João Arthur Barp')
  return (
    <main className="p-7 w-full rounded-xl bg-zinc-100">
      <div className="p-5 rounded-2xl bg-white">
        <div>
          <div className="flex gap-8 items-center">
            <Link href="/consultas">
              <img src="/icons/arrow-left.svg" alt="ícone voltar" />
            </Link>
            <h1 className="text-2xl font-medium">Detalhes</h1>
          </div>
        </div>
        <div className="flex gap-6 mt-6">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <div>
                <h2 className="text-lg font-medium mb-2">Consulta</h2>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-medium">João Arthur Barp</span>
                  <Location city="Curitiba - PR" />
                </div>
              </div>
              <div>
                <p className="font-medium text-xl">Valor</p>
                <span className="font-semibold text-blue-600">R$80,00</span>
              </div>
            </div>
            <h3 className="text-xl font-medium">Lorem Ipsum Lorem ipsum</h3>
            <div>
              <p className="text-2xl font-medium mb-2">Descrição</p>
              <p className="text-sm text-neutral-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi facere iste nisi laborum, dolorum possimus, voluptates
                natus explicabo numquam deserunt eius similique cumque,
                voluptate eum quibusdam fugit. Laborum, eveniet et.
              </p>
            </div>
            <div>
              <p className="text-2xl font-medium mb-2">Diagnóstico</p>
              <p className="text-sm text-neutral-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                voluptatem tenetur nisi architecto sequi autem commodi
                praesentium saepe exercitationem a, explicabo assumenda libero
                alias reiciendis magni quos, unde laboriosam nemo. Saepe facilis
                libero quibusdam cumque odit doloribus quisquam error itaque
                maiores, temporibus molestias ipsa aliquid dolorem perspiciatis
                mollitia reprehenderit atque ea nihil neque deleniti! Earum
                quibusdam vel magni aut accusamus?
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-between gap-48">
            <div className="rounded-xl border p-6 w-full max-w-96 h-fit">
              <div className="flex justify-end text-end cursor-pointer">
                <img
                  src="/icons/profile.svg"
                  alt="icone de perfil"
                  width={20}
                />
              </div>
              <div className="flex flex-col gap-1 text-center items-center">
                <p className="font-medium text-lg">Neto Bonato</p>
                <p className="text-sm text-neutral-500 font-medium">
                  Dr. Ortopedista
                </p>
                <Location city="Curitiba, PR - Brasil" />
              </div>
              <div className="flex gap-4 mt-6">
                <Button
                  iconPath="/icons/message.svg"
                  text="Mensagem"
                  color="bg-blue-500"
                  hover="hover:bg-blue-600"
                />
                <Button
                  text="Pesquisar"
                  color="bg-green-400"
                  hover="hover:bg-green-500"
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-4">
              <Button
                text="Realizada"
                color="bg-blue-500"
                hover="hover:bg-blue-600"
              />
              <Button
                text="Cancelar"
                color="bg-orange-400"
                hover="hover:bg-orange-500"
              />
              <Button
                text="Não compareceu"
                color="bg-red-400"
                hover="hover:bg-red-500"
              />
              <Link href={`/consultas/detalhes/${replacedPatientName}/editar`}>
                <div
                  className={`w-full flex items-center justify-center gap-1 rounded-lg bg-indigo-400 hover:bg-indigo-500 p-3 text-white font-medium transition-all`}
                >
                  Editar
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
