import { PageList } from "../index";
import Me from "../../../images/me.jpeg";

import { classList } from "../../../libs/classList";

interface SidebarProps {
  list: { id: PageList; name: string }[];
  pageSelected: PageList;
  onPageSelect: (pageId: PageList) => void;
}

interface SidebarPageListProps {
  id: PageList;
  name: string;
  pageSelected: PageList;
  onPageSelect: (pageId: PageList) => void;
}

const Sidebar = (props: SidebarProps) => {
  const { list, pageSelected, onPageSelect } = props;

  return (
    <div
      className={classList([
        "bg-[rgb(32,32,32)] w-1/4 p-4 text-sm",
        "xl:w-1/5",
      ])}
    >
      <div className="flex gap-2 items-center">
        <img alt="profile" src={Me} className="rounded w-6 aspect-square" />
        Bique's Notion
      </div>

      <div className="flex flex-col gap-2 mt-6">
        {list.map((l) => (
          <SidebarPageList
            key={l.id}
            {...l}
            pageSelected={pageSelected}
            onPageSelect={onPageSelect}
          />
        ))}
      </div>
    </div>
  );
};

const SidebarPageList = (props: SidebarPageListProps) => {
  const { id, name, pageSelected, onPageSelect } = props;

  const isSelected = id === pageSelected ? "bg-[rgb(44,44,44)] text-white" : "";
  const hoverClass = "hover:bg-[rgb(44,44,44)] hover:text-white";

  return (
    <div
      className={`relative -left-3 cursor-pointer text-[rgb(155,155,155)] w-[calc(100%+24px)] px-4 py-1 rounded ${isSelected} ${hoverClass}`}
      onClick={() => onPageSelect(id)}
    >
      {name}
    </div>
  );
};

export default Sidebar;
