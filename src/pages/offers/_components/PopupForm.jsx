"use client";

import { Field, Switch } from "@headlessui/react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div
      className={`inset-x-0 isolate mx-auto my-16 max-w-5xl rounded-3xl bg-secondary px-6 py-8 sm:py-12 lg:mx-32`}
    >
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-content sm:text-4xl">
          Let's talk
        </h2>
        <p className="mt-2 text-lg leading-8 text-content">
          We'll review your store and tell you exactly how you can improve your
          page speed. If you're a good fit, we will optimize your site for free!
        </p>
      </div>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="mx-auto max-w-xl"
      >
        <input
          type="hidden"
          name="access_key"
          value="16c01467-967d-411c-a15c-e5e9e4a936f3"
        />
        <input
          type="hidden"
          name="subject"
          value="New Contact Submission - Rock The JVM"
        />
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />
        <input type="hidden" name="from_name" value="Rock The JVM" />
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-content"
            >
              Name <span class="text-red-600">*</span>
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-content-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email <span class="text-red-600">*</span>
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <EnvelopeIcon
                  aria-hidden="true"
                  className="size-5 text-black"
                />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-black ring-1 ring-inset ring-content-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="website"
              class="block text-sm/6 font-medium text-black"
            >
              Company Website <span class="text-red-600">*</span>
            </label>
            <div class="mt-2 flex rounded-md shadow-sm">
              <span class="inline-flex items-center rounded-l-md border border-r-0 border-content-2 px-3 text-black sm:text-sm">
                https://
              </span>
              <input
                type="text"
                name="website"
                id="website"
                class="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-content-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                placeholder="www.example.com"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="budget"
              className="block text-sm font-semibold leading-6 text-content"
            >
              Monthly ad spend <span class="text-red-600">*</span>
            </label>
            <div className="mt-2.5">
              <select
                id="budget"
                name="budget"
                type="budget"
                autoComplete="budget"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-content-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm sm:leading-6"
              >
                <option value="0">I am not running ads</option>
                <option value="5000">$0-$5,000</option>
                <option value="10000">$5,000-$10,000</option>
                <option value="50000">$10,000-$50,000</option>
                <option value="100000">$50,000-$100,000</option>
                <option value="150000">$100,000+</option>
              </select>
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-content-2 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-1 data-[checked]:bg-accent-1"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 rounded-full bg-white shadow-sm ring-1 ring-content-2 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <div className="text-sm leading-6 text-content">
              By selecting this, you agree to our{" "}
              <a href="/legal/privacy">privacy policy</a>.
            </div>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={!agreed}
            className={`${agreed ? "bg-cta text-ctatext hover:bg-accent-1 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" : "text-content-1 ring-1 ring-cta"} block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm`}
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
