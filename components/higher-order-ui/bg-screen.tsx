interface BgScreenProps {
  children: React.ReactNode;
}
const BgScreen = ({ children }: BgScreenProps) => {
  return (
    <div
      className="
        bg-neutral-magnolia
        h-screen
        flex
        flex-col
        justify-between
      "
    >
      {children}
    </div>
  );
};

export default BgScreen;
