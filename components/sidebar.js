import { usePathname } from 'next/navigation'
import { useRouter } from "next/router";
import { useState } from 'react';
// import { Disclosure } from '@headlessui/react';
// import { GiHamburgerMenu } from 'react-icons/gi';
const menuItems = [
    {
        id: 'dashboard',
        path: '/dashboard',
        label: 'Dashboarddddddddddddddddddd',
        icon: 'icon1.png'
    },
    {
        id: 'Age',
        path: '/Age',
        label: 'Age Vs xxxxxxxxxxxxxxxxxxxxxxx',
        icon: 'icon2.png'
    },
]

function SideBar() {
    const router = useRouter()
    const handleNav = (getMenu) => {
        router.push(getMenu.path)
    }
    const pathname = usePathname()
    return (
        <div>

            <div className="pt-6  bg-[#fffefe] z-50  h-[100%]  fixed top-0 -left-56  lg:left-0  lg:w-[320px] 
         peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                <aside className="lg:pr-[0px] pr-[30px] lg:left-20 border-2 border-solid border-black -left-96">
                    <div className="  h-screen pt-9   lg:left-20 -left-96">
                        <div className="flex  justify-left ml-10 border-2 border-solid border-black">
                            <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/logo-ct.png" className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8" alt="main_logo" />
                            <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">Customer Bank Churn</span>
                        </div>
                        <nav className=" mt-10 w-72 h-[50%] m-2  ">
                            <div className=" items-center block  w-auto max-h-screen overflow-auto grow basis-full">
                                <ul className="mb-[10px] flex flex-col w-[100%] pl-0 ">
                                    {menuItems.map(menuItems => <li key={menuItems.id}>
                                        <label onClick={() => handleNav(menuItems)} onTouchStart={
                                            (e) => {
                                                e.preventDefault();
                                                handleNav(menuItems);
                                            }}
                                            className={` w-[80%] p-4 cursor-pointer py-2.7 text-sm ease-nav-brand rounded-md my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors ${pathname.includes(menuItems.id) ? 'bg-white drop-shadow-lg' : ''}`} >
                                            <div className={`shadow-soft-2xl mr-2 flex h-8 w-8 items-center shadow-md justify-center rounded-lg   
                                    stroke-0 text-center xl:p-2.5 ${pathname.includes(menuItems.id) ? 'bg-gradient-to-tl from-purple-700 to-pink-500' : ''}`}>
                                                <div className='  md:p-[0.5px] p-[10px]'>
                                                    <img src={`/images/${menuItems.icon}`} className='max-w-full' />
                                                </div>
                                            </div>
                                            <span className={`ml-1 duration-300 opacity-100 text-[#344767] pointer-events-none ease-soft  ${pathname.includes(menuItems.id) ? 'text-md  font-bold text-[0.95rem]' : ''}`}>{menuItems.label}</span>
                                        </label>
                                    </li>)}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </aside>
            </div>
        
        </div>
    );
}
export default SideBar;