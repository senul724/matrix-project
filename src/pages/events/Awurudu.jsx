import { SingleCard } from "../../components/Cards";

const Awurudu = () => {
  return (
    <>
      <h1 className="mt-20 text-2xl text-center">This is how are matrix group celebrated the sinhala tamil new year!</h1>
      <div className="container py-2 px-5 mx-auto lg:px-32 lg:pt-24">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="p-1 w-1/2 md:p-2">
              <img
                alt="new year photos of matrix students"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/awurudu/putu.jpg" />
            </div>
            <div className="p-1 w-1/2 md:p-2">
              <img
                alt="new year photos of matrix students"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/awurudu/boys.jpg" />
            </div>
            <div className="p-1 w-full md:p-2">
              <img
                alt="new year photos of matrix students"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/awurudu/kottu.jpg" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="p-1 w-full md:p-2">
              <img
                alt="new year photos of matrix students"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/awurudu/group.jpg" />
            </div>
            <div className="p-1 w-1/2 md:p-2">
              <img
                alt="new year photos of matrix students"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/awurudu/kiribath.jpg" />
            </div>
            <div className="p-1 w-1/2 md:p-2">
              <img
                alt="new year photos of matrix students"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/awurudu/girls.jpg" />
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-20 text-2xl text-center">Gamed we had and our winners</h2>
      <div className="my-2 w-1/3 bg-[#9b9c9e] py-[0.5px]"/>
      <div className="flex flex-wrap items-center mt-10 w-2/3">
        <SingleCard 
          title="Our Awurudu kumaraya and kumariya" 
          description="Praveen And Teena" 
          url="/awurudu/winners/kandk.jpg"
        />
        <SingleCard 
          title="Sangeetha putu winner" 
          description="Binura Kalutara" 
          url="/awurudu/winners/binura.jpg"
        />
        <SingleCard 
          title="Hodama Hinawa" 
          description="Dilna Mihidhini" 
          url="/awurudu/winners/dilna.jpg"
        />
        <SingleCard 
          title="Kotta pora" 
          description="Senul Ranasinghe" 
          url="/awurudu/winners/senul.jpg"
        />
        <SingleCard 
          title="Balloon Dance" 
          description="Niklesha and Nimeth" 
          url="/awurudu/winners/nandn.jpg"
        />
        <SingleCard 
          title="Kiri Kaweema" 
          description="Kushani and Adil" 
          url="/awurudu/winners/kanda.jpg"
        />
        <SingleCard 
          title="Aliyata Aha Thabeema" 
          description="Keshan" 
          url="/awurudu/winners/keshan.jpg"
        />
        <SingleCard 
          title="Balloon Pipireema" 
          description="Senul" 
          url="/awurudu/winners/senul.jpg"
        />
      </div>
    </>
  );
};

export default Awurudu;
