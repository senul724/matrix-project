const Home = () => {
  return (
    <div className="flex justify-center items-center w-full">
    <div className="flex gap-3 justify-center items-center p-10 w-5/6 bg-blend-soft-light">
      <div className="ml-32 w-1/3">
        <h1 className="text-6xl font-extrabold">
          OUR GROUP
        </h1>
        <h2 className="text-2xl text-gray-500 transition-2s">
           This is our amazing group.</h2>
      </div>
      <div className="w-2/3">
        <img src="/animated-grp.jpg" alt="" />
      </div>
    </div>
    </div>
  )
};

export default Home;
