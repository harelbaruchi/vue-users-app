export interface User {
  name: Name;
  email: string;
  picture: Picture;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  medium: string;
}
