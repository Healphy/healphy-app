/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import Image from 'next/image'
import googleIcon from '../../../public/icons/google.svg'
import { Input } from 'components/Inputs/Input'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { setCookie } from 'nookies'
import { api } from 'services/config'

interface FormLoginProps {
  email: string
  password: string
}

export const FormLogin = () => {
  const { register, handleSubmit } = useForm<FormLoginProps>()
  const router = useRouter()

  async function submitFormLogin(formData: FormLoginProps) {
    try {
      await api
        .post('/Doctor/authenticate', {
          email: formData.email,
          password: formData.password,
        })
        .then((resp) => {
          if (resp.request.statusText === 'OK') {
            const token: string = resp.data.token
            setCookie(undefined, 'healphy-token', token, {
              maxAge: 60 * 60 * 1,
              path: '/',
            })
            api.defaults.headers.Authorization = `Bearer ${token}`
            router.push('/dashboard')
          }
        })
        .catch((error) => {
          alert('ERROU A SENHA OTARIO')
          console.error('error ====>', error)
        })
    } catch (error) {
      console.error('ERRO NA CHAMADA DA API', error)
    }
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(submitFormLogin)}
    >
      <Input
        {...register('email')}
        label="E-mail"
        type="email"
        id="email"
        placeholder="Insira seu e-mail"
      />
      <Input
        {...register('password')}
        label="Senha"
        type="password"
        id="password"
        placeholder="Insira sua senha"
      />
      <div className="flex justify-end">
        <a href="#" className="text-base text-blue-600 underline">
          Esqueci a senha
        </a>
      </div>
      <button className=" w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-800 transition-all text-white">
        Entrar
      </button>
      <button
        className="flex items-center justify-center gap-2 w-full p-3 rounded-lg border text-base font-medium text-gray-950 hover:bg-slate-100 transition-all"
        type="submit"
      >
        <Image src={googleIcon} alt="google-icon" quality={100} />
        Entrar com o Google
      </button>
    </form>
  )
}
