const AboutUs = () => {
  const pics = [
    {name:"Aadil Fareed", img:"/about_us/aadil.jpg", email:"maadilfareed1@gmail.com"},
    {name:"Dewmi Chathurika", img:"/about_us/dewmi.jpg", email:"dasd@gmail.com"},
    {name:"Binura Rusith", img:"/about_us/binura.jpeg", email:"uhjkhf@@gmail.com"},
    {name:"Teena Pihara", img:"/about_us/teena.jpg", email:"dsadas@gmail.com"},
    {name:"Keshan Nimesha", img:"/about_us/keshan.jpg", email:"kjsdkajhsd@gmail.com"},
    {name:"Niklesha Semini", img:"/about_us/niklesha.jpg", email:"nikleshasemini@gmail.com"},
    {name:"Nimeth Shavinda", img:"/about_us/shavinda.jpg", email:"nimethshavinda@gmail.com"}
    ];
  return(
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center py-12 w-full text-4xl text-center border">
        About the matrix group
        <div className="mt-2 mb-5 w-1/2 bg-blue-400 h-[0.8px]"/>
        <span className="text-2xl text-center text-[#6b6b6b]">This is about the amazing group of the matrix!</span>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center mt-20 w-2/3">
      {pics.map((value, index)=>
        <div className="flex p-4 w-full rounded-xl border shadow-lg" key={index}>
          <img src={value.img} className="w-32 h-32 rounded-full"/>
          <div className="flex flex-col justify-center ml-20" >
            <p className="text-2xl font-medium">{value.name}</p>
            <p className="text-xl font-medium text-gray-500">{value.email}</p>
          </div>
        </div>
        )}
      </div>
    </div>
  ) 
};

export default AboutUs;
