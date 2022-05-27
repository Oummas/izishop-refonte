import { useState } from "react";
import { SideSection } from "./_components/SideSection"

type FormStepType = { slug: "login" } | { slug: "signup" }

export const Authentication = () => {

  const [formStep, setFormStep] = useState<FormStepType>({ slug: "login" });

  return (
    <div className="flex">
      <SideSection />
      <div className="flex-1">
        <section className="container mx-auto my-48 md:w-1/3 p-5 border border-mainBlue rounded-lg">
          <form className="space-y-10">
            <h4 className="text-center text-3xl text-mainBlue">
              Inscris-toi sur Izishop
            </h4>

            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                className="border border-gray-700 px-4 py-3 focus:outline-none focus:border-mainBlue rounded-lg col-span-2"
                placeholder="Prénom"
              />
              <input
                type="text"
                className="border border-gray-700 px-4 py-3 focus:outline-none focus:border-mainBlue rounded-lg col-span-2"
                placeholder="Nom"
              />
              <input
                type="text"
                className="border border-gray-700 px-4 py-3 focus:outline-none focus:border-mainBlue rounded-lg col-span-2"
                placeholder="Nom d'utilisateur"
              />
              <input
                type="email"
                className="border border-gray-700 px-4 py-3 focus:outline-none focus:border-mainBlue rounded-lg col-span-2"
                placeholder="Email"
              />
            </div>

            <button
              type="submit"
              className="focus:outline-none mt-5 bg-mainBlue px-4 py-3 text-white w-full text-lg rounded-lg"
            >
              Submit
            </button>
          </form>
        </section>

      </div>
    </div>
  )
}