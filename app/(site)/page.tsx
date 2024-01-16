"use client";

import BgScreen from "../../components/higher-order-ui/bg-screen";
import { FormDataProvider } from "@/context/form-data-context";
import { MobileHeader } from "@/components/MobileHeader";
import { BodyContent } from "./_components/body-content";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <FormDataProvider>
      <BgScreen>
        <article
          className="
          grid
          grid-cols-12
          h-screen
          text-body
          font-body
        "
        >
          <MobileHeader
            className="
            md:hidden
            col-span-12
          "
          />
          <BodyContent
            className="
            -mt-24
            md:-mt-0
            col-span-12
          "
          />
          <Footer
            className="
            self-end
            col-span-12
            md:hidden
          "
          />
        </article>
      </BgScreen>
    </FormDataProvider>
  );
}
