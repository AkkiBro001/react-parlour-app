import homeBanner from '../assets/images/home-banner.jpg'

const Banner = () => {
    return (
        
        <div className="banner pt-20 relative h-[650px] overflow-hidden">
            <img src={homeBanner} alt="home-banner" 
            className="absolute -z-10 right-0 h-full object-cover object-right-top lg:opacity-100 md:opacity-20 xs:opacity-20" />
            
            <section className='h-full flex flex-col justify-center md:px-10 xs:px-5 gap-5'>
                <p className='sm:text-2xl font-semibold text-green-600 border-l-[3px] pl-3 border-green-600'>Beauty Clinic</p>
                <h1 className='sm:text-4xl xs:text-3xl font-bold'>The beauty of your skin<br />is important to us</h1>
                <div className='mt-5 flex gap-5 sm:flex-row xs:flex-col'>
                <button className='border-2 border-neutral-900 font-bold uppercase p-3 hover:bg-neutral-900 hover:text-white'>Book An Appointment</button>
                <button className='border-2 border-neutral-900 font-bold uppercase p-3 hover:bg-neutral-900 hover:text-white'>See Our Products</button>
                </div>
            </section>
        </div>
        
    )
}

export default Banner