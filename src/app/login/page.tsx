import Image from 'next/image'
import googleIcon from '../../../public/icons/google.svg'

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
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="e-mail" className="text-base text-gray-950">
                E-mail
              </label>
              <input
                type="email"
                id="e-mail"
                placeholder="Insira seu e-mail"
                className="w-96 p-3 border rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="e-mail" className="text-base text-gray-950">
                Senha
              </label>
              <input
                type="email"
                id="e-mail"
                placeholder="Insira sua senha"
                className="w-96 p-3 border rounded-lg outline-none"
              />
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-base text-blue-600 underline">
                Esqueci a senha
              </a>
            </div>
            <button className=" w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-800 transition-all text-white">
              Sign in
            </button>
            <button
              className="flex items-center justify-center gap-2 w-full p-3 rounded-lg border text-base font-medium text-gray-950
              hover:bg-slate-100
              transition-all"
            >
              <Image src={googleIcon} alt="google-icon" quality={100} />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
