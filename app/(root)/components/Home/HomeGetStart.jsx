import Link from "next/link";
import Button from "../ui/Button";

const HomeGetStart = () => {
  return (
    <div
      className="w-full h-[450px] bg-cover bg-no-repeat bg-center bg-[#f25c04] relative"
      style={{
        backgroundImage:
          "url('https://ultimatewebsolutions.net/foodboard/img/bg/bg.svg'",
      }}
    >
      <div className="absolute inset-0 z-0 bg-linear-to-t from-[] to-black opacity-50"></div>
      <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center z-20 gap-[30px] text-white text-center">
        <h1 className="text-[48px] lg:text-[60px] font-bold">FOODBOARD</h1>
        <p className="text-[16px] lg:text-[21px]">
          Food order wizard with online payment.
        </p>
        <div>
          <Link href="/pay-online">
            <Button title={"Get Started"} padding={"12px 45px"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeGetStart;
