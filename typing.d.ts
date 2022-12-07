export interface INavState {
  subnav: boolean;
  navdir: string;
}

export type NavContextType = {
  subNav: INavState;
  setSubNav: (subNav: INavState) => void;
};
