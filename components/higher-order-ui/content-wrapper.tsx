import { Footer } from "../footer";

interface ContentWrapperProps {
  children: React.ReactNode;
}

export const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <article
      className="
          p-8
          pb-10
          md:py-4
          md:px-14
          md:flex
          md:flex-col
          md:justify-between
        "
    >
      <main
        className="
          flex
          flex-col
          gap-3
          "
      >
        {children}
      </main>
      <Footer
        className="
            hidden
            md:flex
            md:py-0 md:px-0 "
      />
    </article>
  );
};
