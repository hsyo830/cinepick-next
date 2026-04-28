type SectionBoxProps = {
  children: React.ReactNode;
};

const SectionCard = ({ children }: SectionBoxProps) => {
  return (
    <section className="bg-surface border-border mx-8.25 inline-flex rounded-[14px] border px-5.75 py-3">
      {children}
    </section>
  );
};

export default SectionCard;
