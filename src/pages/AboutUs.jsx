import { FlexImage } from "../components/Images";

const AboutUs = () => {
  const pics = [];
  return(
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center py-12 w-full text-4xl text-center border">
        About the matrix group
        <div className="mt-2 mb-5 w-1/2 bg-blue-400 h-[0.8px]"/>
        <span className="text-2xl text-center text-[#6b6b6b]">This is about the amazing group of the matrix!</span>
      </div>
      <div className="flex justify-between items-center">
        {pics.map((value)=><FlexImage src={value} width={"w-1/4"}/>)}
      </div>
    </div>
  ) 
};

export default AboutUs;
