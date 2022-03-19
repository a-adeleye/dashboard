import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfileName() {
  return (
    <Menu as="div" className="relative inline-block text-left z-50">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border shadow-sm pl-4 pr-1 py-1.5 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none">
          adescuma
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 min-w-max shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="bg-gray-100">
            <Menu.Item>
              <button className="block px-4 w-full py-2 text-sm bg-gray-100 font-bold text-gray-900">
                Log out
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
