'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  HiBars3, HiChevronDoubleLeft, HiOutlineHome, HiOutlineQuestionMarkCircle,
} from 'react-icons/hi2';

export default function Sidebar() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  return (
    <div>
      <div className={`${isSidebarOpened ? 'invisible' : 'visible'}
        fixed left-0 top-0 m-6`}
      >
        <button
          type="button"
          className="text-3xl"
          onClick={() => setIsSidebarOpened(true)}
        >
          <HiBars3 name="open sidebar" />
        </button>
      </div>
      <div className={`${isSidebarOpened ? 'visible' : 'invisible translate-x-[-24rem]'}
        fixed left-0 top-0 z-50 flex h-screen w-96 flex-col gap-8 bg-white p-6 transition-all duration-500 ease-in-out`}
      >
        <button
          type="button"
          className="absolute right-0 top-0 m-6 text-3xl"
          onClick={() => setIsSidebarOpened(false)}
        >
          <HiChevronDoubleLeft name="close sidebar" />
        </button>
        <section className="py-6 text-center">
          <h1 className="my-4 text-2xl font-bold">
            HENOZIWD
          </h1>
          <p>
            Hello, World!
          </p>
        </section>
        <ul>
          <li>
            <Link
              href="/"
              className="flex items-center gap-1"
            >
              <HiOutlineHome />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-1"
            >
              <HiOutlineQuestionMarkCircle />
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
