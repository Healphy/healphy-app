import { type AppointmentCardProps } from 'components/AppointmentCard'

interface AppointmentDataProps {
  appointments: AppointmentCardProps[]
}

export const AppointmentData: AppointmentDataProps = {
  appointments: [
    {
      patientName: 'Ana Silva',
      location: 'São Paulo',
      appoinmentDate: '2024-05-23',
      appointmentType: 'Consulta Médica',
      value: '150,00',
      agreement: 'Unimed',
    },
    {
      patientName: 'João Santos',
      location: 'Rio de Janeiro',
      appoinmentDate: '2024-05-25',
      appointmentType: 'Exame de Rotina',
      value: '80,00',
      agreement: 'Amil',
    },
    {
      patientName: 'Maria Oliveira',
      location: 'Belo Horizonte',
      appoinmentDate: '2024-05-27',
      appointmentType: 'Tratamento Fisioterapêutico',
      value: '200,00',
      agreement: 'SulAmérica',
    },
    {
      patientName: 'Pedro Pereira',
      location: 'Salvador',
      appoinmentDate: '2024-05-28',
      appointmentType: 'Check-up',
      value: '250,00',
      agreement: 'Bradesco Saúde',
    },
    {
      patientName: 'Carla Ferreira',
      location: 'Brasília',
      appoinmentDate: '2024-05-30',
      appointmentType: 'Consulta Odontológica',
      value: '120,00',
      agreement: 'Golden Cross',
    },
    {
      patientName: 'Lucas Almeida',
      location: 'Curitiba',
      appoinmentDate: '2024-06-02',
      appointmentType: 'Exame de Rotina',
      value: '80,00',
      agreement: 'Amil',
    },
    {
      patientName: 'Camila Costa',
      location: 'Fortaleza',
      appoinmentDate: '2024-06-05',
      appointmentType: 'Tratamento Fisioterapêutico',
      value: '200,00',
      agreement: 'Unimed',
    },
    {
      patientName: 'Bruno Rodrigues',
      location: 'Manaus',
      appoinmentDate: '2024-06-08',
      appointmentType: 'Consulta Médica',
      value: '150,00',
      agreement: 'SulAmérica',
    },
    {
      patientName: 'Juliana Gomes',
      location: 'Recife',
      appoinmentDate: '2024-06-10',
      appointmentType: 'Check-up',
      value: '250,00',
      agreement: 'Bradesco Saúde',
    },
    {
      patientName: 'Rafael Martins',
      location: 'Porto Alegre',
      appoinmentDate: '2024-06-15',
      appointmentType: 'Consulta Odontológica',
      value: '120,00',
      agreement: 'Golden Cross',
    },
  ],
}
