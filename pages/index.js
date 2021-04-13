import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
//Datos
import { skills, experiences, projects } from '../profile'
//Componentes
import Layout from '../components/Layout'

export default function Home() {
  
  return (
    <Layout>
      <Head>
        <title>Portafolio Next.js Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="row pt-2">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                {/* <Image
                    src='/profile.jpeg'
                    className='img-fluid'
                    alt='Ryan Ray'
                    width={250}
                    height={175}
                    layout='responsive'
                  /> */}
                <img src="/profile.jpeg" alt="Ryan Ray" className='img-fluid' />
              </div>
              <div className="col-md-8">
                <h1>Ryan Ray</h1>
                <h3>FullStack Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sit rem aliquam hic itaque eaque, totam dolore soluta cupiditate, esse tempora error repellendus tenetur, temporibus expedita perspiciatis iusto animi reiciendis.
                  Enim alias iure porro autem repellat consequuntur doloribus. Tempora laboriosam vero veritatis numquam molestias sit nam. Sed esse a architecto sunt, vel aliquid pariatur, officiis exercitationem, totam hic provident nisi.
                </p>
                <Link href='/'>
                  <a className='btn btn-outline-light'>Hire Me</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*Segunda Seccion*/}
      <section className="row mt-2">
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Skills</h1>
              {skills.map(({ skill, percentage }) => (
                <div className="py-3" key={skill}>
                  <h3>{skill} </h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role='progressbar'
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                    </div>
                  </div>
                </div>
              ))
              }
            </div>
          </div>
        </div>
        <div className="col-md-8">
          {/*Experiencia*/}
          <div className="card bg-light">
            <div className="card-body">
              <h1>Experience</h1>
              <ul>
                {experiences.map(({ title, description, from, to }, index) => (
                  <li key={index}>
                    <h3>{title} </h3>
                    <h5>
                      {from} {to ? `- ${to}` : "- current"}
                    </h5>
                    <p>
                      {description}
                    </p>
                  </li>
                ))}
              </ul>
              <Link href="/">
                <a className='btn btn-light'>Hire Me</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Tercera Seccion*/}
      <section>
        {/**Portafolio - Listado de Proyectos */}
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-dark">
              <div className="row">
                <div className="col-md-12 my-2">
                  <h1 className="text-center text-light">
                    Portfolio
                  </h1>
                </div>
                {projects.map(({ name, description, image }) => (
                  <div className="col-md-4 py-2" key={name}>
                    <div className="card h-100">
                      <div className="overflow">
                        <img
                          src={`/${image}`}
                          alt={name}
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <Link href="/portfolio">
                          <a className='h'>Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-md-12 mt-4">
                  <div className="text-center">
                    <Link href="/portfolio">
                      <a className="btn btn-outline-light">More Projects</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}
