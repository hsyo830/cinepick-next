type SectionBoxProps = {
  children: React.ReactNode;
};

const SectionCard = ({ children }: SectionBoxProps) => {
  return (
    <section className="md:bg-surface border-border mx-4.5 inline-flex rounded-[14px] md:mx-8.25 md:border md:px-5.75 md:py-3">
      {children}
    </section>
  );
};

export default SectionCard;
