export default function Dashboard() {
    return (
        <main className="flex flex-col text-lg  min-h-[100vh] bg-gradient-to-tr from-sky-300 to-pink-200 relative ">
            <img className="w-full h-[250px] object-cover absolute mix-blend-darken rounded-3xl" src="/pattaya.png" />
            <img className='w-full h-[150px] object-cover absolute mix-blend-overlay' src="/pink.svg" />
            
  
            <div className='flex justify-between p-8 pb-2'>

                <a href="/dashboard">
                    <img className='mix-blend-overlay' src="/arrow.svg" />
                </a>

                <div id="right-nav" className="flex">
                    <img className="w-[50px] h-[50px] rounded-full mix-blend-darken" src="/profile.png" />
                </div>                
            </div>
            <div>
                <h1 className="text-white text-lg text-right pr-6 mix-blend-overlay">Thailand</h1>
                <h1 className="text-blue-950 text-5xl text-left font-bold pt-3 pl-10 mix-blend-darken">Pattaya</h1>
                <h2 className="text-blue-950 text-3xl text-left pt-0 pl-10">Thailand</h2>
            </div>

            <div className="relative">
                <input
                    type="text"
                    placeholder="Search location"
                    className="w-[480px] p-1 px-12 mt-10 ml-5 mr-5 rounded-full shadow-lg" />
                <img className="absolute top-11 left-9" src="/search.svg" />
            </div>

            <div className="m-3 mb-3 text-center text-blue-950 text-3xl">View Map</div>

            <div className="flex flex-col relative">
                
                <a href="/dashboard3">
                    <img className='w-[100px] h-[200px] absolute m-24 mt-3' src="/pin.svg" />
                </a>
                <h1 className="absolute text-blue-950 text-2xl m-12 mt-5 ml-20">Most Popular</h1>
                <h1 className="absolute text-blue-950 text-lg m-20 ml-0 p-20 pl-2">Most Crowded</h1>
                <h1 className="absolute text-blue-950 text-lg m-20 ml-24 p-20 pl-20">Most Visited</h1>
                <img className='absolute m-24 ml-10 pt-24' src="/pin.svg" />
                <img className='absolute m-24 p-24' src="/pin.svg" />
                <img className='w-[450px] h-[650px] m-10 mt-0 ' src="/mappat.png" />
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