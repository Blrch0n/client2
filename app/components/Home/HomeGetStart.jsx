import Link from "next/link";

const HomeGetStart = () => {
  return (
    <div>
      <div
        className="w-full h-[450px] bg-cover bg-no-repeat bg-center bg-[#f25c04] relative"
        style={{
          backgroundImage:
            "url('https://ultimatewebsolutions.net/foodboard/img/bg/bg.svg'",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-[] to-black opacity-50"></div>
        <div className="w-full h-full flex flex-col justify-center items-center text-white text-center">
          <h1>FOODBOARD</h1>
          <p>Food order wizard with online payment.</p>
          <div>
            <Link href="/pay-online">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGetStart;
