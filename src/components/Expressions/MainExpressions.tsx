import { AnimatePresence, motion } from "framer-motion";
import Articles from "./Articles";
import Events from "./Events";

interface MainExpressionsIntro {
  tabs: string[],
  selectedTab: string,
  setSelectedTab: (arg: string) => void,
}

export default function MainExpressions({ tabs, selectedTab, setSelectedTab } : MainExpressionsIntro) {
  return (
    <>
      <div className="mb-5 flex justify-center">
        <ul aria-label="Tabs">
          {tabs.map((tab, idx) => (
            <li
              key={idx}
              className={`${
                tab == selectedTab
                  ? "text-brand-dark font-semibold"
                  : ""
              } relative inline-block py-2 px-4 font-normal capitalize cursor-pointer`}
              aria-label="Tab item"
              onClick={() => {
                setSelectedTab(tab);
              }}
            >
              <span>{tab}</span>
              {tab == selectedTab ? (
                <motion.div
                  className="border-brand-earth_yellow absolute w-full left-0 bottom-0 border-b-2"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>

      </div>

      {
        <AnimatePresence mode="wait">
          { selectedTab == "articles" && (
            <Articles />
          ) }
          {
            selectedTab == "events" && (
              <Events />
            )
          }
        </AnimatePresence>
      }
    </>
  )
}
