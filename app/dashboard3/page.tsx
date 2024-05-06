export default function Dashboard() {
    return (
        <main className="flex flex-col text-lg  min-h-[100vh] bg-gradient-to-tr from-sky-300 to-pink-200 relative ">
            <img className='w-full h-[246px] object-cover absolute mix-blend-darken' src="/coverpat.svg" />
  
            <div className='flex justify-between p-8 pb-2'>
            <a href="/dashboard2"> 
                <img className='mix-blend-overlay' src="/arrow.svg" /></a>
                <div id="right-nav" className="flex">
                    <img className="w-[50px] h-[50px] rounded-full mix-blend-overlay" src="/profile.png" />
                </div>                
            </div>
            <div>
                <h1 className="text-white text-lg text-right pr-6 mix-blend-overlay">Thailand</h1>
                <h2 className="text-blue-950 text-2xl text-left pt-3 pl-10">Recommended Spot</h2>
                <h1 className="text-blue-950 text-4xl text-left font-bold pt-3 pl-10">Koh Larn</h1>
            </div>

            <div className="relative">
                <input
                    type="text"
                    placeholder="Search location"
                    className="w-[480px] p-1 px-12 mt-7 ml-5 mr-5 rounded-full shadow-lg" />
                <img className="absolute top-9 left-9" src="/search.svg" />
            </div> 


            <div className="flex justify-between px-20 pt-5 relative">
               
               <img className="w-[170px] h-[240px] top-10 bg-white p-5 pb-20 rounded-3xl" src="view.png/" />
               <img className="w-[170px] h-[240px] top-10 right-20 bg-white p-5 pb-20 rounded-3xl" src="cafe.png/" />
               <div className='absolute pt-20 mt-20 pl-6'>
                   <h1 className='text-2xl text-blue-950'>View Point</h1>
                   <h2 className='text-xs text-blue-950'>360 view of koh larn</h2>
                   
               </div>
               <div className='absolute pt-20 mt-20 pl-24 ml-20'>
                   <h1 className='text-2xl text-blue-950 ml-10 text-center'>Cafe</h1>
                   <h2 className='text-xs text-blue-950 ml-7'>popular cafe in koh larn</h2>
                   
               </div>
                
           </div>

   

           <a href="/dashboard4" className="flex justify-between px-20 pt-5">
               <img className="w-[170px] h-[240px] top-10 right-20 bg-white p-5 pb-20 rounded-3xl" src="kohlarn.png/" />
               <img className="w-[170px] h-[240px] top-10 right-20 bg-white p-5 pb-20 rounded-3xl" src="windmill.png/" />
               <div className='absolute pt-20 mt-20 pl-3'>
                   <h1 className='text-2xl text-blue-950 ml-1'>Tayai Beach</h1>
                   <h2 className='text-xs text-blue-950 ml-5'>beach in Kon Larn</h2>
                   
               </div>


               <div className='absolute pt-20 mt-20 pl-24 ml-20'>
                   <h1 className='text-2xl text-blue-950 mr-6 text-right'>Windmill</h1>
                   <h2 className='text-xs text-blue-950 ml-7'>windmill on hill in koh larn</h2>
                   
               </div>
           </a>

           <div className="flex justify-between px-20 pt-5">
               <img className="w-[170px] h-[240px] top-10 right-20 bg-white p-5 pb-20 rounded-3xl" src="tawean.png/" />
               <img className="w-[170px] h-[240px] top-10 right-20 bg-white p-5 pb-20 rounded-3xl" src="vibe.png/" />
               <div className='absolute pt-20 mt-20 pl-1'>
                   <h1 className='text-2xl text-blue-950 ml-0 text-left'>Tawean Beach</h1>
                   <h2 className='text-xs text-blue-950 ml-7'>beach in Kon Larn</h2>
                   
               </div>

               <div className='absolute pt-20 mt-20 pl-24 ml-20'>
                   <h1 className='text-2xl text-blue-950 mr-3 text-right'>Vibe Bar</h1>
                   <h2 className='text-xs text-blue-950 ml-8'>cafe on Tawean beach</h2>
                   
               </div>
           </div>



            <div className='flex justify-center gap-10 sticky bottom-0 bg-gradient-to-r from-sky-500 to-pink-400 w-full h-[80px] items-center'>
                <img className='shadow-xl' src='/search2.svg' />
                <img className='shadow-xl' src='/map.svg' />
            <a href="/">   
                <img className='bg-white p-2 rounded-lg' src='/home.svg' /></a>
                <img className='shadow-xl' src='/fav.svg' />
                <img className='shadow-xl' src='/profile2.svg' />

            </div>

            

            </main>

);
}
        