type SectionCardProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionCard = ({ children, className = "" }: SectionCardProps) => {
  return (
    <section className={`border-border bg-surface rounded-xl border p-3 md:p-4 ${className}`}>
      {children}
    </section>
  );
};

export default SectionCard;
