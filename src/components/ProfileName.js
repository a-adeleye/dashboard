import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import logout from "../auth/Logout";

export default function ProfileName({name, forceUpdate}) {
  return (
    <Menu as="div" className="relative z-50 inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border bg-gray-800 py-1.5 pl-4 pr-1 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none">
          {name}
          <ChevronDownIcon className="ml-5 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-40 min-w-max origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="bg-gray-100">
            <Menu.Item>
              <button onClick={logout} className="-mt-2 block w-full bg-gray-100 px-4 py-2 text-sm font-bold text-gray-900">
                Log out
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
