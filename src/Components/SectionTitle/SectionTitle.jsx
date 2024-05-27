const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div  className="md:w-full flex flex-col justify-center items-center">
      <div className="text-center my-12 md:w-3/12 ">
        <h3 className="text-[#D99904] text-[20px] ">---{subHeading}---</h3>
        <h1 className="text-[40px] border-y-4 py-3 mt-3 ">{heading}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
