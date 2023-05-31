export const FlexImage =  (props)=> {
  const {width, src} = props;
  return (
    <div className={`p-1 transition duration-300 ease-in-out delay-150 md:p-2 hover:scale-105 ${width}`}>
      <img
        alt="matrix student photos"
        className="block object-cover object-center w-full h-full rounded-lg"
        src={src} />
    </div>
  )
}
