import Doctor from 'components/Doctor'
import Link from 'next/link'
import { listDoctors } from 'services/services'
import { type DoctorDataProps } from 'utils/types/doctors-type'

async function getDoctorsData(): Promise<DoctorDataProps[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await listDoctors()
  return response.data
}

export default async function TopDoctorsCard() {
  const doctorsData = await getDoctorsData()

  return (
    <section className="w-full bg-white p-6 rounded-xl">
      <div className="flex w-full justify-between items-center">
        <h3 className="text-lg font-medium text-neutral-600">Top Médicos</h3>
        <Link
          className="rounded-lg border border-solid border-neutral-300 px-4 py-2 font-medium text-sm text-neutral-400"
          href="/medicos"
        >
          Ver todos
        </Link>
      </div>
      <ul className="flex flex-col gap-4 mt-6">
        {doctorsData.map((doctor, index) => (
          <li key={`${index}-${doctor.id}`}>
            <Doctor
              name={`${doctor.doctorsName} ${doctor.doctorsLastName}`}
              role={doctor.speciality}
              img={
                doctor?.img?.path === undefined
                  ? 'https://github.com/barp14.png'
                  : ''
              }
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
