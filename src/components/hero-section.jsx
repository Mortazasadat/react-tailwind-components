export default function HeroSimpleCenter() {
  return (
    <div className="bg-white">
      <div className="relative px-6 isolate pt-14 lg:px-8">
        <div className="absolute inset-x-0 overflow-hidden transform-gpu blur-3xl -z-10 -top-40 sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1055/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-300 to-pink-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56 ">
          <div className="hidden mb-8 sm:flex sm:justify-center">
            <div className="relative px-3 py-1  text-gray-600 leading-6 rounded-full text-sm ring-1 ring-gray-900/10 hover:!ring-gray-900/20 ">
              Announcing our next round of funding.
              <a href="#" className="ml-1 font-semibold text-blue-600">
                <span className="absolute inset-x-0 " />
                Read more <span>&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="mt-6 text-4xl font-bold leading-8 tracking-tight text-gray-900 sm:text-6xl ">
              {" "}
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {" "}
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <a
                href="#"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] blur-3xl -z-10 transform-gpu overflow-hidden sm:top-[calc(100%-30rem)] "
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-13rem)]  aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-300 to-pink-300 opacity-30 sm:left-[calc(50%+30rem)] sm:w-[72rem] "
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
