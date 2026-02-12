import Button from "./Button";

function Loop() {
  return (
    <div className="md:px-40 px-20 mt-10 ">
        <section className="px-10 py-10 rounded-xl bg-[#eaf0f7]">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div>
          <h1 className="font-bold text-3xl mb-2">Stay in the Loop</h1>
          <p className="text-gray-600 text-base">
            Sign up for our newsletter and get 15% off your first order <br /> plus early access to new drops.
          </p>
        </div>
     
         <div className="flex gap-5 md:mt-0 mt-10">
             <div className="flex items-center h-12 bg-white  rounded-xl px-4 pr-15 py-1 hover:border-solid hover:border-[#0d7ff2] hover:border-2">
    
            <input
              type="text"
              placeholder="Email Address"
              className="outline-none w-[85%] text-sm "
            />
            
          </div>
          <Button variant={"primary"} text={"Suscribe"}/>
          
         </div>
    
      </div>
    </section>
    </div>
  );
}

export default Loop;
