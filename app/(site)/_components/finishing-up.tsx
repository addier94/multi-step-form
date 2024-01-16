export const FinishingUp = () => {
  return (
    <main
      className="
      flex
      flex-col
      gap-3
      md:gap-1
    "
    >
      <h1 className="text-2xl text-primary-marine-blue font-bold">
        Finishing up
      </h1>
      <p className="text-neutral-cool-gray">
        Double-check everything looks OK before confirming.
      </p>
      <article
        className="
        mt-2
        md:mt-6
        space-y-3
        text-primary-marine-blue
        text-sm
      "
      >
        <div>
          <div
            className="
            bg-neutral-alabaster
              p-4
              rounded-lg
            "
          >
            <section
              className="
              flex
              justify-between
              items-center
              border-b-[1px]
              pb-4
            "
            >
              <p
                className="
                flex
                flex-col
              "
              >
                <span className="font-medium ">Arcade (Monthly)</span>
                <span className="underline text-neutral-cool-gray">Change</span>
              </p>
              <p className="font-medium">$90/yr</p>
            </section>
            <section
              className="
                flex
                justify-between
                items-center
              "
            >
              <p
                className="
                flex
                justify-between
                w-full
                mt-4
                "
              >
                <span className="text-neutral-cool-gray">Online service</span>
                <span>+$10/yr</span>
              </p>
            </section>
            <section
              className="
                flex
                justify-between
                items-center
              "
            >
              <p
                className="
                flex
                justify-between
                w-full
                mt-4
                "
              >
                <span className="text-neutral-cool-gray">Larger storage</span>
                <span>+$20/yr</span>
              </p>
            </section>
          </div>
          <section
            className="flex
              justify-between
              mt-8
              mx-4
              "
          >
            <p className="text-neutral-cool-gray">
              Total <span>(Per year)</span>
            </p>
            <p className="text-primary-purplish-blue font-bold">$120/yr</p>
          </section>
        </div>
      </article>
    </main>
  );
};
