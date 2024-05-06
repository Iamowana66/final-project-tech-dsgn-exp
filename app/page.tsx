


export default function Home() {
  return (
    <main className='bg-[url("https://i.pinimg.com/564x/b4/8e/f7/b48ef717c4d2640e85113e894ee91367.jpg")] bg-cover bg-center p-50 m-50'>
      <div className='flex justify-between p-8 pb-2'>
        <img src="/line.svg" />
        <div id="right-nav" className="flex">
          <img className="w-[50px] h-[50px] rounded-full" src="/profile.png" />
        </div>
      </div>
      <div>
        <h1 className="text-white text-lg text-right pr-6">Thailand</h1>
      </div>
      
      <div className='p-20'>
        <h1 className='text-white text-6xl text-center pt-20'>Find</h1>
        <h1 className='text-white text-6xl text-center p-3'>your</h1>
        <h1 className='text-white text-6xl text-center p-3'>vibes</h1>
        <h1 className='text-white text-6xl text-center p-3'>and</h1>
        <h1 className='text-white text-6xl text-center p-3'>style</h1>
      </div>

      <div className='flex justify-center p-20 pt-15'>
        <a href="/dashboard" className="rounded-full w-[200px] h-[50px] bg-blue-400 text-white text-3xl text-center">Start</a>
        
      </div>
      
     

    </main>
  );
}
