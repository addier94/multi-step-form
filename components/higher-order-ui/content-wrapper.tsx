import { Footer } from "../footer";

interface ContentWrapperProps {
  children: React.ReactNode;
}

export const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <article
      className="
          px-6
          pt-7
          pb-8
          md:py-4
          md:px-14
          md:flex
          md:flex-col
          md:justify-between
          md:w-[30rem]
        "
    >
      {children}
      <Footer
        className="
            hidden
            md:grid
            md:py-0 md:px-0"
      />
    </article>
  );
};
