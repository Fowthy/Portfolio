import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Hobbies, CanvasLoader } from "./components";
import { Suspense } from "react";

const App = () => {
  const handleComponentLoad = (componentName) => {
    console.log(`${componentName} has loaded.`);
  };
  return (
    <BrowserRouter>
      <Suspense fallback={<CanvasLoader  />}>
      <div className='relative z-0 bg-primary'>

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar onComponentLoad={handleComponentLoad}/>
          <Hero onComponentLoad={handleComponentLoad}/>
        </div>
        <About onComponentLoad={handleComponentLoad}/>
        <Experience onComponentLoad={handleComponentLoad}/>
        <Tech />
        <Works onComponentLoad={handleComponentLoad}/>
        <StarsCanvas />

        <Hobbies onComponentLoad={handleComponentLoad}/>
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact onComponentLoad={handleComponentLoad}/>
        </div>
      </div>
        </Suspense>
    </BrowserRouter>
  );
}

export default App;
