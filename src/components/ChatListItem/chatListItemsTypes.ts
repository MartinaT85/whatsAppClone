export interface IChat {
  id: string,
  user: {
    image: string,
    name: string
  }
  lastMessage: {
    text: string,
    createdAt: string,
  }
}

export interface IChatListItemsProps {
  chat: IChat,
}


