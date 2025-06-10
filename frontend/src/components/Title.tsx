import type { TitleProps } from "../types/title/titleType"

const Title = ({text1,text2}:TitleProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2  mt-10">
      <h1 className="text-5xl font-serif font-extrabold">
        {text1}
      </h1>

      <h6 className="text-lg font-sans text-gray-600 font-medium">{text2}</h6>
    </div>
  );
}

export default Title
