import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
const siderbardata = [
  { title: "Home", link: "/" },
  { title: "Order", link: "/pay-online" },
  { title: "Faq", link: "/faq" },
  { title: "Contacts", link: "/contacts" },
];
const SiderBar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const pathname = usePathname();
  return (
    <div
      // Overlay: always in DOM, fades opacity & toggles pointer-events
      className={`fixed inset-0 z-50 transition-opacity duration-300 bg-[#00000050] bg-opacity-50
        ${
          isSideBarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      onClick={() => setIsSideBarOpen(false)}
    >
      <div
        // Sidebar panel: always in DOM, slides in/out
        className={`fixed left-0 top-0 h-full w-10/12 max-w-xs bg-white shadow-lg flex flex-col transform transition-transform duration-300 ease-in-out
          ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-fit relative py-[10px] text-center border-b-[1px] border-[#0000004d] text-[14px] text-[#0000004d]">
          MENU
          <span
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={() => setIsSideBarOpen(false)}
          >
            <FaTimes />
          </span>
        </div>
        <main className="flex-1 w-full h-fit">
          <ul className="w-full h-fit flex flex-col pl-5">
            {siderbardata.map((data, index) => {
              const isTrue = pathname === data.link;
              return (
                <Link key={index} href={data.link}>
                  <li className="py-2.5 border-b w-full flex h-fit pr-2.5 items-center justify-between border-[#0000004d] text-[#333]">
                    {data.title}
                    {isTrue && <MdKeyboardArrowRight />}
                  </li>
                </Link>
              );
            })}
          </ul>
        </main>
        <div className="w-full h-fit py-[10px] text-center border-t border-[#0000004d] text-[14px] text-[#0000004d]">
          © 2021 FoodBoard
        </div>
      </div>
    </div>
  );
};

export default SiderBar;
