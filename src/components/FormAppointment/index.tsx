/* eslint-disable @typescript-eslint/no-misused-promises */
'use-client'
import { type AppointmentProps } from 'app/(dashboard)/agendar-consulta/page'
import { Button } from 'components/Button'
import { SecondaryInput } from 'components/Inputs/SecondaryInput'
import { useForm } from 'react-hook-form'
import { createAppointment } from 'services/services'

export const FormAppointment = async () => {
  const { register, handleSubmit } = useForm<AppointmentProps>()

  async function submitForm(formData: AppointmentProps) {
    await createAppointment(formData)
  }

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex w-full mt-8 gap-24"
    >
      <div className=" flex flex-col w-1/2 gap-2">
        <p className="text-2xl font-medium mb-2">Paciente</p>
        <SecondaryInput
          {...register('name')}
          id="name"
          label="Nome"
          placeholder="Informe o nome do paciente"
          type="text"
        />
        <SecondaryInput
          {...register('agreement')}
          id="agreement"
          label="Convênio"
          placeholder="Convênio do paciente"
          type="text"
        />
        <p className="text-lg font-medium mt-4 mb-2">Endereço do paciente</p>
        <SecondaryInput
          {...register('postalCode')}
          id="postalCode"
          label="CEP"
          placeholder="Informe o CEP do paciente"
          type="text"
        />
        <SecondaryInput
          {...register('city')}
          id="city"
          label="Cidade"
          placeholder="Cidade do paciente"
          type="text"
        />
        <SecondaryInput
          {...register('street')}
          id="street"
          label="Rua"
          placeholder="Nome da rua do paciente"
          type="text"
        />
        <SecondaryInput
          {...register('number')}
          id="number"
          label="Número"
          placeholder="Número da residência"
          type="text"
        />
        <SecondaryInput
          {...register('region')}
          id="region"
          label="Bairro"
          placeholder="Bairro do paciente"
          type="text"
        />
        <SecondaryInput
          {...register('complement')}
          id="complement"
          label="Complemento"
          placeholder="Complemento"
          type="text"
        />
      </div>
      <div className="flex flex-col w-1/2 gap-2">
        <p className="text-2xl font-medium mb-2">Médico</p>
        <SecondaryInput
          {...register('reason-consultation')}
          id="reason-consultation"
          label="Motivo da consulta"
          placeholder="Qual o motivo da consulta?"
          type="text"
        />
        <SecondaryInput
          {...register('consult-value')}
          id="consult-value"
          label="Valor"
          placeholder="Informe o valor da consulta"
          type="text"
        />
        <p className="text-lg font-medium mt-4 mb-2">Detalhes da consulta</p>
        <SecondaryInput
          {...register('crm')}
          id="crm"
          label="CRM do médico"
          placeholder="Informe o CRM do médico"
          type="number"
        />
        <div className="mt-7">
          <Button
            text="Criar Consulta"
            color="bg-blue-500"
            hover="hover:bg-blue-600"
            type="submit"
          />
        </div>
      </div>
    </form>
  )
}
