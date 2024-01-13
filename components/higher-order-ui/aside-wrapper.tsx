interface AsideWrapperProps {
  children: React.ReactNode;
}
export const AsideWrapper = ({ children }: AsideWrapperProps) => {
  return (
    <aside
      className="
        hidden
        md:block
        w-60
        bg-cover
        bg-no-repeat
        rounded-md
        px-6
        py-8
        "
      style={{ backgroundImage: "url(/assets/images/bg-sidebar-desktop.svg" }}
    >
      {children}
    </aside>
  );
};
