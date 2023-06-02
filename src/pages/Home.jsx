const Home = () => {
  return (
    <div className="flex items-center justify-center w-full">
    <div className="flex items-center justify-center w-4/5 bg-blend-soft-light p-10 gap-3 ">
      <div className="w-1/2 ml-32">
        <h1 className="text-3xl font-mono">
          OUR GROUP
        </h1>
        <h2 className="text-xl transition-2s font-mono">
           This is our amazing group.</h2>
      </div>
      <div className="w-1/2 ">
        <img src="/animated-grp.jpg" alt="" />
      </div>
    </div>
    </div>
  )
};

export default Home;
