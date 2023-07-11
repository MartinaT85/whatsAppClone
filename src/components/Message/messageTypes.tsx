export interface IMessage {
  text: string;
  id: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
  };
}

export interface MessageProps {
  message: IMessage;
}
