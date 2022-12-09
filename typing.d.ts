export interface INavState {
  subnav: boolean;
  navdir: string;
}

export type NavContextType = {
  subNav: INavState;
  setSubNav: (subNav: INavState) => void;
};

export interface IModalState {
  boolean;
}

export type ModalContextType = {
  modal: IModalState;
  setModal: (IModalState) => void;
};
