export interface ProductType {
  id: string
  location: string
  price: number
  weight: number
  strain: string
  picturePath: string
  coords: string
  description: string
  buyerId: string
  courierId: string
  buyer: {
    id: string
    telegramId: string
    telegramName: string
    balance: number
  }
  uploader: null | any
}

export interface UpdateDataType {
  price?: number
  weight?: number
  strain?: string
  location?: string
  coords?: string
  description?: string
  picturePath?: string
}

export interface ProductUpdateType {
  data: UpdateDataType
  id: string
}
