import { FlexImage } from "../../components/Images";

const Dansala = () => {
  return (
    <>
      <h1 className="mt-20 text-2xl text-center">This is how our matrix group celebrated the Vesak festival by giving a seeni sambola dansala!</h1>
      <div className="container py-2 px-5 mx-auto lg:px-32 lg:pt-24">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <FlexImage width="w-full" src="/dansala/dansala.jpg" />
            <FlexImage width="w-1/2" src="/dansala/g2.jpg" />
            <FlexImage width="w-1/2" src="/dansala/pan.jpg" />
          </div>
          <div className="flex flex-wrap w-1/2">
            <FlexImage width="w-full" src="/dansala/bgroup.jpg" />
            <FlexImage width="w-1/2" src="/dansala/sambol.jpg" />
            <FlexImage width="w-1/2" src="/dansala/draw.jpg" />
            <FlexImage width="w-full" src="/dansala/group.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dansala;
