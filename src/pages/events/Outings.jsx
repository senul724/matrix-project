import { FlexImage } from "../../components/Images";

const Outings = () => {
  return (
    <>
      {/** beach */}
      <h1 className="mt-20 text-2xl text-center">This is about some fun we had in the beach after the dansala!</h1>
      <div className="container py-2 px-5 mx-auto lg:px-32 lg:pt-24">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <FlexImage width="w-1/2" src="/outings/beach/van.jpg" />
            <FlexImage width="w-1/2" src="/outings/beach/kello.jpg" />
            <FlexImage width="w-full" src="/outings/beach/group.jpg" />
          </div>
          <div className="flex flex-wrap w-1/2">
            <FlexImage width="w-full" src="/outings/beach/kollo.jpg" />
            <div className="flex flex-col justify-center items-center p-1 w-1/2 rounded-lg border shadow-xl md:p-2">
              <p className="text-xl text-center">Some clicks we had at the Wellawaththa beach premises</p>
              <div className="my-2 w-1/2 bg-red-400 py-[0.8px]"/>
            </div>
            <FlexImage width="w-1/2" src="/outings/beach/van2.jpg" />
          </div>
        </div>
      </div>
      {/** One Galle Face */}
      <h1 className="mt-20 text-2xl text-center">This about a small outing after class to the One Galle Face mall</h1>
      <div className="container py-2 px-5 mx-auto lg:px-32 lg:pt-24">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <FlexImage width="w-full" src="/outings/ogf/kello.jpg" />
            <FlexImage width="w-full" src="/outings/ogf/table.jpg" />
          </div>
          <div className="flex flex-wrap w-1/2">
            <FlexImage width="w-full" src="/outings/ogf/group.jpg" />
            <FlexImage width="w-full" src="/outings/ogf/kollo.jpg" />
          </div>
          <div className="flex flex-col justify-center items-center py-10 px-1 w-full rounded-lg border shadow-xl">
            <p className="text-xl text-center">Some clicks we had at the One Galle Face Mall</p>
            <div className="my-2 w-1/2 bg-red-400 py-[0.8px]"/>
          </div>
          <div className="flex flex-wrap w-full">
            <FlexImage width="w-1/3" src="/outings/ogf/1.jpg" />
            <FlexImage width="w-1/3" src="/outings/ogf/2.jpg" />
            <FlexImage width="w-1/3" src="/outings/ogf/3.jpg" />
          </div>
        </div>
      </div>
      {/**Some kottu dates we went*/}
      <h1 className="mt-20 text-2xl text-center">These are some kottu dates we went during the lunch breaks</h1>
      <div className="container py-2 px-5 mx-auto lg:px-32 lg:pt-24">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <FlexImage width="w-full" src="/outings/kottu/1.jpg" />
            <FlexImage width="w-full" src="/outings/kottu/2.jpg" />
          </div>
          <div className="flex flex-wrap w-1/2">
            <FlexImage width="w-full" src="/outings/kottu/3.jpg" />
            <FlexImage width="w-full" src="/outings/kottu/4.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Outings;
