import SearchIcon from "../icons/SearchIcon";

const SearchBar = () => {
  return (
    <form className="border-input-border bg-input h-8 w-full rounded-[7px] border md:h-10 lg:h-11">
      <div className="flex h-full min-w-0 items-center gap-2.5 px-2.5">
        <SearchIcon className="text-placeholder h-4 w-4 shrink-0" />
        <input
          type="search"
          placeholder="원하는 팀의 정보를 검색해보세요."
          className="text-foreground placeholder:text-placeholder min-w-0 flex-1 bg-transparent text-sm outline-none focus:outline-none md:text-base"
        />
      </div>
    </form>
  );
};

export default SearchBar;
