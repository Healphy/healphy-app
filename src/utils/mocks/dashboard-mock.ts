import { type AppointmentPriceProps } from 'components/AppointmentPrice'
import { type DoctorProps } from 'components/Doctor'
import { type SmallCardProp } from 'components/SmallCard'

export interface DashboardProps {
  smallCard: SmallCardProp[]
  nextAppointments: AppointmentPriceProps[]
  doctors: DoctorProps[]
}

export const DashboardData: DashboardProps = {
  smallCard: [
    {
      cardTitle: 'Agendamentos',
      cardData: '684',
    },
    {
      cardTitle: 'Cancelamentos',
      cardData: '546',
    },
    {
      cardTitle: 'Total Pacientes',
      cardData: '7,732',
    },
    {
      cardTitle: 'Não compareceu',
      cardData: '4',
    },
  ],
  nextAppointments: [
    {
      name: 'Rebeca Cadete',
      doctor: 'Dr. Ernesto Fonseca',
      date: '4 de Janeiro, 13h30',
      price: 350,
    },
    {
      name: 'João Barp',
      doctor: 'Dr. Neto Bonato',
      date: '4 de Janeiro, 13h30',
      price: 50,
    },
    {
      name: 'Gustavo Jannuzi',
      doctor: 'Dr. Neto Bonato',
      date: '4 de Janeiro, 13h30',
      price: 200,
    },
    {
      name: 'João A. Bonato',
      doctor: 'Dr. Ernesto Fonseca',
      date: '4 de Janeiro, 13h30',
      price: 150,
    },
    {
      name: 'Natalia Curry',
      doctor: 'Dr. Ernesto Fonseca',
      date: '4 de Janeiro, 13h30',
      price: 350,
    },
    {
      name: 'Natalia Curry',
      doctor: 'Dr. Ernesto Fonseca',
      date: '4 de Janeiro, 13h30',
      price: 350,
    },
    {
      name: 'Natalia Curry',
      doctor: 'Dr. Ernesto Fonseca',
      date: '4 de Janeiro, 13h30',
      price: 75,
    },
    {
      name: 'Natalia Curry',
      doctor: 'Dr. Ernesto Fonseca',
      date: '4 de Janeiro, 13h30',
      price: 100,
    },
    {
      name: 'Natalia Curry',
      doctor: 'Dr. Ernesto Fonseca',
      date: '4 de Janeiro, 13h30',
      price: 200,
    },
  ],
  doctors: [
    {
      img: {
        path: 'https://github.com/bonatoneto.png',
        alt: 'foto-neto-bonato',
      },
      name: 'Neto Bonato',
      role: 'Urologista',
    },
    {
      img: {
        path: 'https://github.com/GustavoJannuzzi.png',
        alt: 'foto-gustavo',
      },
      name: 'Gustavo Jannuzzi',
      role: 'Cardiologista',
    },
    {
      img: {
        path: 'https://github.com/barp14.png',
        alt: 'foto-joao',
      },
      name: 'João Arthur Barp Begnini',
      role: 'Nutricionista',
    },
    {
      img: {
        path: 'https://github.com/ramux2.png',
        alt: 'foto-guilherme',
      },
      name: 'Guilherme Oliver Branches',
      role: 'Obstetra',
    },
  ],
}
