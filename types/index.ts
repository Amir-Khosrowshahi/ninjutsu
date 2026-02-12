export interface User {
  id: number
  username: string
  name: string
  email: string
  role: string
  avatar?: string
  joinDate: string
  status: 'active' | 'inactive'
}

export interface MenuItem {
  id: string
  title: string
  icon: string
  path?: string
  subItems?: SubMenuItem[]
}

export interface SubMenuItem {
  id: string
  title: string
  path: string
}

export interface Activity {
  id: number
  user: string
  action: string
  time: string
  icon?: string
}