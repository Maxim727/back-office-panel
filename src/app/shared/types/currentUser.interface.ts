export interface CurrentUserInterface {
  id: number,
  email: string,
  createdAt: string,
  updatedAt: string,
  username: string,
  bio: string | null,
  image: string | null,
  token: string
}

// Angular suggests using like this
// bio?: string
// but in this case it could be undefined
// for speciality of JS we make as a null
// null нет значения
