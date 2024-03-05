export default function Hero(props) {
    return (
        <div className={props.font}>

            <header className="bg-white dark:bg-gray-900 text-center">
             

                <div className="container px-6 py-4 mx-auto">
                    <div className="items-center lg:flex  gap-4">
                        <div className="w-full lg:w-5/12 ">
                            <div className="lg:max-w-lg">
                                <h1 style={{ lineHeight: 1.3 }} className="text-4xl font-extrabold text-gray-800 dark:text-white lg:text-7xl leading-8">India'S First  <span className="text-yellow-600">Luxury Handicraft</span>  Store </h1>

                                <p className=" lg:text-2xl mt-3 text-gray-600 dark:text-gray-400">Experience the Art of  <span className="text-yellow-600 font-medium ">Luxury Handicrafts</span> at  <span className="font-medium text-yellow-600">RarePlanetLuxe</span></p>


                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-7/12">
                            <img className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out   " src={'/banner.jpg'} alt="email illustration vector art" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
