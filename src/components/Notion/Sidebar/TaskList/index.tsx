import { classList } from "../../../../libs/classList";

import taskList from "./tasks.json";

interface Card {
  title: string;
}

interface BoardColumnProps {
  header: string;
  color: string;
  count: number;
  cards: Card[];
}

interface CardItemProps {
  title: string;
}

const TITLE: string = "✔ Task List";

const TaskList = () => {
  return (
    <div
      className={classList(["h-full flex flex-col", "xl:w-9/12 xl:mx-auto"])}
    >
      <h1 className="text-5xl font-bold mb-12">{TITLE}</h1>
      <span className="mb-5">Use this board for track my website tasks.</span>

      <Board />
    </div>
  );
};

const Board = () => {
  return (
    <div className="h-full grid grid-cols-3 gap-4 text-sm">
      <BoardColumn
        header="To Do"
        color="bg-[rgb(110,54,48)]"
        count={taskList.todo.length}
        cards={taskList.todo}
      />
      <BoardColumn
        header="Doing"
        color="bg-[rgb(136,99,42)]"
        count={taskList.doing.length}
        cards={taskList.doing}
      />
      <BoardColumn
        header="Done🎉"
        color="bg-[rgb(44,89,63)]"
        count={taskList.done.length}
        cards={taskList.done}
      />
    </div>
  );
};

const BoardColumn = (props: BoardColumnProps) => {
  const { header, color, count, cards } = props;

  return (
    <div className="">
      <div className="flex mb-4">
        <h1 className={`${color} px-1.5 py-0.5 inline-block rounded`}>
          {header}
        </h1>
        <span className="ml-2 text-[rgb(155,155,155)]">{count}</span>
      </div>

      <div className="flex flex-col gap-2">
        {cards.map((card) => (
          <CardItem {...card} />
        ))}
      </div>
    </div>
  );
};

const CardItem = (props: CardItemProps) => {
  const { title } = props;

  return (
    <div className="bg-[rgb(40,40,40)] rounded px-2 py-3 whitespace-pre text-ellipsis overflow-hidden">
      {title}
    </div>
  );
};

export default TaskList;
