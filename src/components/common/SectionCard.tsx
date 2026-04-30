type SectionBoxProps = {
  children: React.ReactNode;
};

const SectionCard = ({ children }: SectionBoxProps) => {
  return (
    <section className="md:bg-surface border-border inline-flex w-full rounded-[14px] md:border md:px-5.75 md:py-3">
      {children}
    </section>
  );
};

export default SectionCard;
