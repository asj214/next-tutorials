export type User = {
  id: number;
  name: string;
  email: string;
  last_login: Date;
  created_at: Date;
  updated_at: Date;
}

export type Post = {
  id: number;
  title: string;
  body: string;
  user: User;
  created_at: Date;
  updated_at: Date;
}