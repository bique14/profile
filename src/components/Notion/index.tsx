import type { AppType } from "../../types";
import { useCallback, useState } from "react";

import useDrag from "../../hooks/useDrag";
import ApplicationHeaderControl from "../ApplicationHeaderControl";
import Sidebar from "./Sidebar";
import FrontendTricks from "./Sidebar/FrontendTricks";
import TaskList from "./Sidebar/TaskList";
import SafariProblems from "./Sidebar/SafariProblems";

const APP_SLUG: AppType = "notion";
const APP_NAME: string = "Notion";

interface NotionProps {
  onClose: (appType: AppType) => void;
}

export enum PageList {
  TaskList = "task-list",
  FrontendTricks = "frontend-tricks",
  SafariProblems = "safari-problems",
}

const sidebarPageList = [
  {
    id: PageList.FrontendTricks,
    name: "💄 Frontend Tricks",
  },
  {
    id: PageList.SafariProblems,
    name: "💣 Safari is Suck!",
  },
  {
    id: PageList.TaskList,
    name: "✔ Task List",
  },
];

const Notion = (props: NotionProps) => {
  const { onClose } = props;
  const { setRef, initialiseDrag } = useDrag();

  const [pageSelected, setPageSelected] = useState<PageList>(
    PageList.FrontendTricks
  );

  const onPageSelect = (pageId: PageList) => {
    setPageSelected(pageId);
  };

  const renderFromPage = useCallback(() => {
    switch (pageSelected) {
      case PageList.FrontendTricks:
        return <FrontendTricks />;
      case PageList.SafariProblems:
        return <SafariProblems />;
      case PageList.TaskList:
        return <TaskList />;
    }
  }, [pageSelected]);

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
        <div
          className="bg-[rgb(25,25,25)] flex-1 px-20 py-10"
          draggable="false"
        >
          {renderFromPage()}
        </div>
      </div>
    </div>
  );
};

export default Notion;
