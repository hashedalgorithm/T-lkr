"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

type SubtitleContextReducerStateActions =
  | {
      type: "add-subtitles";
      source: string;
    }
  | {
      type: "remove-subtitles";
    };

type SubtitleContextProps = PropsWithChildren;
type SubtitleContextState = {
  state: SubtitleContextReducerState;
  dispatch: Dispatch<SubtitleContextReducerStateActions>;
};
type SubtitleContextReducerState = {
  position: {
    x: number;
    y: number;
  };
  color: string;
  backgroundColor?: string;
  fontSize: number;
  tab?: chrome.tabs.Tab;
  parsedSubtitle: Array<Subtitle>;
};

type Subtitle = {
  id: number;
  startAt: number;
  endAt: number;
  text: string;
};

const intialReducerState = () =>
  ({
    position: {
      x: 0,
      y: 0,
    },
    color: "##ffff00",
    fontSize: 14,
    parsedSubtitle: [],
  }) satisfies SubtitleContextReducerState;

const RawContext = createContext<SubtitleContextState>({
  state: intialReducerState(),
  dispatch: () => {},
});

const reducer = (
  prevstate: SubtitleContextReducerState,
  actions: SubtitleContextReducerStateActions,
): SubtitleContextReducerState => {
  switch (actions.type) {
    case "add-subtitles":
      return {
        ...prevstate,
      };

    default:
      return prevstate;
  }
};

export const useSubtitleContext = () => useContext(RawContext);

export const useSubtitleContextState = () => useContext(RawContext).state;

const SubtitleContext = ({ children }: SubtitleContextProps) => {
  const [state, dispatch] = useReducer(reducer, intialReducerState());

  return (
    <RawContext.Provider value={{ state, dispatch }}>
      {children}
    </RawContext.Provider>
  );
};

export default SubtitleContext;
