import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import toast from "react-hot-toast";
import Loading from "./Loading";
import { trackPromise } from "react-promise-tracker";

export default function EditProfile(props) {
  const { isOpen, closeModal } = props;
  const [newName, setNewName] = React.useState("");

  function handleChange(e) {
    setNewName((prev) => (prev = e.target.value));
  }

  function updateName() {
    if (newName === "") {
      return;
    }

    const sessionData = JSON.parse(sessionStorage.getItem("sessionData"));
    const accessToken = sessionData.accessToken;

    const fetchHeaders = new Headers();
    fetchHeaders.append("App-Secret", "*(3%13@Uh@1");
    fetchHeaders.append("Platform", "web");
    fetchHeaders.append("Accept", "application/json");
    fetchHeaders.append("Authorization", `Bearer ${accessToken}`);

    fetchHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: `${newName}`,
    });

    const requestOptions = {
      method: "PUT",
      headers: fetchHeaders,
      body: raw,
      redirect: "follow",
    };

console.log(accessToken);

   trackPromise(fetch(
      "https://phplaravel-718120-2386003.cloudwaysapps.com/api/v1/auth/update",
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          closeModal();
          toast.success("Name updated");
          const sessionData = JSON.parse(sessionStorage.getItem('sessionData'));
          sessionData["profileData"].name = newName;
          sessionStorage.setItem("sessionData", JSON.stringify(sessionData));
          console.log("session updated");
        }
      }).then(() => document.location.reload())
      .catch((error) => console.log("error", error)));
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block h-60 w-5/12 min-w-max max-w-md transform overflow-hidden rounded-2xl border-2 border-black bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-md font-bold leading-6 text-gray-900"
                >
                  Update your name
                </Dialog.Title>
                <p className="mt-2 mb-3 text-xs text-gray-500">
                  Change the name you want associated with your account
                </p>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="relative mb-4 mt-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    placeholder="Enter new name"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-center items-center">
                <Loading />
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-300 px-6 py-2 text-sm font-medium text-black hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-8 py-2 text-sm font-medium text-white hover:bg-green-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={updateName}
                  >
                    Save
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
