import { FormLogin } from 'components/FormLogin'
import Image from 'next/image'

export default function LoginPage(): JSX.Element {
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col w-full max-w-96">
        <div className="flex flex-col items-start gap-4">
          <div className="flex justify-center w-full mb-12">
            <Image
              src="/images/logo.png"
              alt="logo-healphy"
              width={200}
              height={100}
            />
          </div>
          <h1 className="flex justify-center items-center text-4xl font-medium text-gray-950">
            Bem vindo!
          </h1>
          <p className="text-lg font-normal text-gray-500">
            Por favor, insira seu e-mail e sua senha.
          </p>
          <FormLogin />
        </div>
      </div>
    </main>
  )
}
