import style from "@/style";

const ImgContent = ({ img, title, children }) => {
  return (
    <div className="flex flex-col mt-20 bg-red-500">
      <div className="flex items-center justify-end gap-6 md:gap-20 flex-col md:flex-row my-6  max-w-7xl ">
        <div className="md:w-1/2 bg-yellow-500  flex items-center justify-center">
          <img
            src={img}
            width={500}
            height={300}
            alt="image description"
            className="rounded-3xl object-contain  "
          />
        </div>

        <div className="md:w-1/2  bg-blue-500 flex flex-col justify-end">
          <div className="text-center mb-10">
            <p
              className={` mb-2 font-poppins font-semibold text-[20px] leading-[32px] text-white`}
            >
              {title}
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ImgContent;
