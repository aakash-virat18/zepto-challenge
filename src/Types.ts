export type PersonType = {
  name: string;
  email: string;
  photo: string;
};

export type PropstypeMenu = {
  data: PersonType[];
  selectedHandler: (value: PersonType) => void;
};

export type PropsTypeSelected = {
  data: PersonType;
  removeSelected: (person: PersonType) => void;
  highlightedUser: boolean;
};
