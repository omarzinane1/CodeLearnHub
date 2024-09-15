const Hero = () => {
  return (
    <section className="bg-slate-400 flex justify-center items-center">
      <div className="relative container  min-h-screen flex justify-center items-center ">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="text-center md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              Best Academic Online Learning Platform
            </h1>
            <p className="text-gray-600">
              The chat material discussed by a podcast not only provides general
              information but also from other perspectives.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
              Explore Courses
            </button>
          </div>
        </div>
        <div className=" absolute left-0 top-24 flex justify-center mt-6 md:mt-0 space-x-6">
          <img
            src="/image1.png"
            alt="Student 1"
            className="rounded-full w-60 h-80"
          />
        </div>
        <div className=" absolute right-0 bottom-20 flex justify-center mt-6 md:mt-0 space-x-6">
          <img
            src="/image2.png"
            alt="Student 2"
            className="rounded-full w-60 h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
