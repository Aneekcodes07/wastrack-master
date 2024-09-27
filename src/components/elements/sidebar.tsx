import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import {
  BookCopy,
  House,
  CircleHelp,
  NotebookPen,
  Apple,
  Settings,Info,
  Coins,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div
      className={
        "fixed top-0 left-0 flex flex-col h-full pt-2 pb-40 mt-16 bg-white bg-opacity-50 block"
      }
    >
      <ScrollArea
        className="h-full md:w-72 w-screen px-6"
        style={{ zIndex: 80 }}
      >
        <Link to={"/"}>
          <Button
            variant="ghost"
            className="w-full justify-start text-custom mt-2 px-3 hover:no-underline"
            size="sm"
          >
            <House strokeWidth={2} size={15} className="mx-3" />
            Home
          </Button>
        </Link>
        <Link to={`/study`}>
          <Button
            variant="ghost"
            className="w-full justify-start text-custom my-0.5 px-3 hover:no-underline"
            size="sm"
          >
            <BookCopy strokeWidth={2} size={15} className="mx-3" />
            Your Reports
          </Button>
        </Link>
        <Link to={"/question/find"}>
          <Button
            variant="ghost"
            className="w-full justify-start text-custom my-0.5 px-3 hover:no-underline"
            size="sm"
          >
            <CircleHelp strokeWidth={2} size={15} className="mx-3" />
            Latest News
          </Button>
        </Link>

        <Link to={"/quiz"}>
          <Button
            variant="ghost"
            className="w-full justify-start text-custom my-0.5 px-3 hover:no-underline"
            size="sm"
          >
            <Coins strokeWidth={2} size={15} className="mx-3" />
            My rewards
          </Button>
        </Link>
      </ScrollArea>
      <div
        className="h-content md:w-72 w-screen px-6 noScrollBar bg-white"
        style={{ zIndex: 80 }}
      >
      <Link to={"/quiz"}>
        <Button
          variant="ghost"
          className="w-full justify-start text-custom my-0.5 px-3 hover:no-underline"
          size="sm"
        >
          <Info strokeWidth={2} size={15} className="mx-3" />
          FAQs
        </Button>
      </Link>
        <Link to={"/quiz"}>
          <Button
            variant="ghost"
            className="w-full justify-start text-custom my-0.5 px-3 hover:no-underline"
            size="sm"
          >
            <Settings strokeWidth={2} size={15} className="mx-3" />
            Settings
          </Button>
        </Link>
      </div>
    </div>
  );
}
