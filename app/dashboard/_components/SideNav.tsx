"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

interface MenuItem {
  name: string;
  icon: React.ComponentType;
  path: string;
}

function SideNav() {
  const MenuList: MenuItem[] = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard'
    },
  ];

  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.log(path);
  }, [path]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
      <div className='flex justify-center '>
        <Image src={"/logo.svg"} alt="logo" width={120} height={100} />
      </div>
      <hr className='my-5' />
      <div className='mt-3'>
        {MenuList.map((menu, index) => (
          <div 
            key={index}
            onClick={() => handleNavigation(menu.path)}
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${path === menu.path && 'bg-primary text-white'}`}
          >
            <menu.icon  />
            <h2 className='text-lg'>{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className='absolute bottom-10 left-0 w-full'>
        {/* Additional content if needed */}
      </div>
    </div>
  );
}

export default SideNav;
