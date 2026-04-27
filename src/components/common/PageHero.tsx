type PageHeroProps = {
  title: string;
  intro: string;
};

const PageHero = ({ title, intro }: PageHeroProps) => {
  return (
    <section className="aspect-1920/650 w-full overflow-hidden bg-[url('/image/hero/PageHeroLightGR.png')] bg-cover bg-bottom px-9.75 py-7.25 md:aspect-1920/500">
      <div className="text-xl font-bold md:text-4xl lg:text-5xl">{title}</div>
      <div className="w-65 text-sm font-medium md:mt-2 md:w-full md:text-lg lg:mt-3 lg:text-xl">
        {intro}
      </div>
    </section>
  );
};

export default PageHero;
