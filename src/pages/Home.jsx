const Home = () => {
  return (
    <div className="flex items-center justify-center w-full">
    <div className="flex items-center justify-center w-5/6 bg-blend-soft-light p-10 gap-3 ">
      <div className="w-1/3 ml-32">
        <h1 className="text-4xl font-serif">
          OUR GROUP
        </h1>
        <h2 className="text-2xl transition-2s font-serif">
           This is our amazing group.</h2>
      </div>
      <div className="w-2/3 ">
        <img src="/animated-grp.jpg" alt="" />
      </div>
    </div>
    </div>
  )
};

export default Home;
