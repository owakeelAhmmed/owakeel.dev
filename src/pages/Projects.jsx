import Card from '@/components/Card'
import React from 'react'
import {cardData} from "../data/cardData"
import ProjectCard from '@/components/ProjectCard'

const Projects = () => {
  return (
    <section className='py-[62px] space-y-24'>
      <div className=''>
        <h1 className='text-white text-[32px] font-semibold'><span className='text-primary'>/</span>Project</h1>
        <p className='text-white mt-4'>List of my projects</p>
      </div>

      <div>
        <h1 className='text-[32px] text-white'>#complete-apps</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-12 gap-4">
            {
              cardData.map((item) =>{
                return(
                  <Card 
                  key={item.id}
                  image={item.image}
                  tech={item.tech}
                  title={item.title}
                  description={item.description}
                />
                )

              })
            }
          </div>
      </div>

      <div>
        <h1 className='text-[32px] text-white'>#small-projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-12 gap-4">
            {
              cardData.map((item) =>{
                return(
                  <ProjectCard 
                  key={item.id}
                  image={item.image}
                  tech={item.tech}
                  title={item.title}
                  description={item.description}
                />
                )

              })
            }
          </div>
      </div>
    </section>
  )
}

export default Projects
