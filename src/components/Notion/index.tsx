import type { AppType } from "../../types";
import { useEffect, useState } from "react";

import useDrag from "../../hooks/useDrag";
import ApplicationHeaderControl from "../ApplicationHeaderControl";
import Sidebar from "./Sidebar";

const APP_SLUG: AppType = "notion";
const APP_NAME: string = "Notion";

interface NotionProps {
  onClose: (appType: AppType) => void;
}

export enum PageList {
  GettingStarted = "getting-started",
  TaskList = "task-list",
  FrontendTricks = "frontend-tricks",
  SafariProblems = "safari-problems",
}

const sidebarPageList = [
  {
    id: PageList.GettingStarted,
    name: "📄 Getting Started",
  },
  {
    id: PageList.TaskList,
    name: "✅ Task List",
  },
  {
    id: PageList.FrontendTricks,
    name: "💄 Frontend Tricks",
  },
  {
    id: PageList.SafariProblems,
    name: "💣 Safari is Suck!",
  },
];

const Notion = (props: NotionProps) => {
  const { onClose } = props;
  const { setRef, initialiseDrag } = useDrag();

  const [pageSelected, setPageSelected] = useState<PageList>(
    PageList.GettingStarted
  );

  const onPageSelect = (pageId: PageList) => {
    console.log(pageId);
    setPageSelected(pageId);
  };

  return (
    <div className="w-4/5 h-4/5 absolute top-10 left-40 z-20" ref={setRef}>
      <div
        className="flex px-2 h-5 bg-[rgb(18,18,18)]"
        style={{
          borderRadius: "4px 4px 0 0",
        }}
        onMouseDown={initialiseDrag}
      >
        <ApplicationHeaderControl appSlug={APP_SLUG} onClose={onClose} />
        <div className="flex-1 text-center text-white self-center text-sm cursor-default">
          {APP_NAME}
        </div>
      </div>
      <div className="flex h-full text-white">
        <Sidebar
          list={sidebarPageList}
          pageSelected={pageSelected}
          onPageSelect={onPageSelect}
        />
        <div className="bg-[rgb(25,25,25)] flex-1 p-4">paper</div>
      </div>
    </div>
  );
};

export default Notion;
