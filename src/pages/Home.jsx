import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import ServiceCard from "../components/ServiceCard"
import { Service_Card } from "../components/_CONSTANT"


function Home() {
  

  return (
    <div className="App text-neutral-800">
      <Navbar/>
      <Banner/>
      {/* Services */}
      <div className="md:px-10 xs:px-5 py-5">
        <header className="my-8">
        <h1 className='sm:text-4xl xs:text-3xl text-center'>Our Services</h1>
        </header>

        <section className="flex gap-x-5 gap-y-16 mt-20 container mx-auto flex-wrap justify-center">
            {Service_Card.map(service => <ServiceCard key={service.id} {...service}/>)}
        </section>
    </div>
      
    </div>
  )
}

export default Home
