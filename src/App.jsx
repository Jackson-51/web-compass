import { Link } from "react-router-dom";

const App = () => {
  return(
    <div className="w-screen h-screen flex flex-col">
        <nav className="sticky top-0 w-screen flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <img src="/logoMap.png" alt="map logo" className="size-10"/>
            <h1>UNILAG MAP</h1>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/">Features</Link>
            <Link to="/">Maps</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Contact</Link>
            <button>Sign Up</button>
          </div>
          <span className="flex justify-center items-center bg-(--gray1) text-(--gray4) size-10 rounded-lg">
            <i className="fa-solid fa-bars text-xl"></i>
          </span>
        </nav>

        <section className="w-screen h-max bg-red-50 p-5 flex flex-col gap-5 md:flex-row justify-center items-center">
          <div className="flex flex-col gap-5 md:pl-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl/15 font-bold ">
                <p className="text-(--baseColor)">Explore the</p>
                University of Lagos Campus
                <p className="text-(--baseColor)">with Ease</p>
              </h1>
              <small className="text-(--gray4)">Find buildings, faculties, hostels, and landmarks instantly. Navigate UNILAG like never before.</small>
            </div>
            <div className="w-full relative">
              <input 
              type="text" 
              name="search" 
              placeholder="search"
              className="p-4 rounded-2xl w-full text-gray-700 border border-(--gray2) focus:border-(--gray4) outline-none"/>
              <i className="fa-solid fa-search text-(--gray2) absolute right-3 top-1/2 -translate-y-1/2"></i>
            </div>

            <div className="flex items-center gap-5">
              <button className="px-8 py-4.5 bg-(--baseColor) rounded-3xl text-gray-50 font-bold flex items-center gap-2">
                Get Started 
                <i className="fa-solid fa-angle-right"></i>
              </button>
              <button className="px-8 py-4.5 border border-(--baseColor) text-(--baseColor) rounded-3xl font-bold">
                View Map
              </button>
            </div>
          </div>

          <div className="w-full h-max">
            <img src="/mapUnilag.png" alt="" className="mask brightness-75"/>
          </div>
        </section>
    </div>  
  );
}
 
export default App;