function ServiceCard({name, desc, cirImg, price}) {
  return (
    <div className='w-[300px] p-4 pt-20 border-2 border-slate-500 rounded-md relative'>
        <header className='w-[120px] h-[120px] absolute top-2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-500 overflow-hidden rounded-full shadow-[0_8px_8px_0px_rgba(0,0,0,0.3)]'>
            <img src={cirImg} alt="basicMakeUP" className=''/>
        </header>
        <section>
          <h2 className='text-xl font-semibold'>{name}</h2>
          <p className='text-sm text-slate-700 my-2'>{desc}</p>
          <div className='flex justify-between items-center'>
            <a href="/" className='text-base font-semibold underline decoration-red-500 text-red-600'>Full Details</a>
            <p className='text-lg font-bold'>{price}</p>
          </div>
        </section>
    </div>
  )
}

export default ServiceCard