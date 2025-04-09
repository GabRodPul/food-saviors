import Image from "next/image";
import instagram from "public/icons/Instagram.svg";
import twitter from "public/icons/Twitter.svg";
import telegram from "public/icons/Telegram.svg";

export default function Footer() {
  return (
    <>
      <div className="flex w-full flex-col items-center bg-[#004D47] p-16 text-white">
        <div className="flex flex-col items-center">
          <h1 className="mb-3 text-2xl font-semibold">Food Savers</h1>
          <p className="mt-2 text-xl">About</p>
          <p className="mt-2 text-xl">Terms &amp; Privacy</p>
          <p className="mt-2 text-xl">Contact</p>
        </div>
        <div className="mt-5 flex w-1/2 justify-around">
          <a href="#">
            <Image src={instagram as string} alt="" height={20} width={20} />
          </a>
          <a href="#">
            <Image src={twitter as string} alt="" height={20} width={20} />
          </a>
          <a href="#">
            <Image src={telegram as string} alt="" height={20} width={20} />
          </a>
        </div>
      </div>
    </>
  );
}
