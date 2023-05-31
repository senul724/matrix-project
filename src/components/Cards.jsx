export const SingleCard = (props) => {
  const {url, title, description} = props
  return (
    <div className="flex items-center p-4 w-1/3">
      <div className="flex flex-col items-center py-10 w-full rounded-lg border shadow-xl">
        <div className="w-3/4">
          <img
            alt="new year photos of matrix students"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={url} />
        </div>
        <h2 className="text-center mt-10 text-xl">{title}</h2>
        <div className="my-2 w-1/4 bg-[#474747] py-[0.5px]"/>
        <p className="text-[#6b6b6b]">{description}</p>
      </div>
    </div>
  );
};
