import { EvenioUserID } from '@/types/user'

export type EvenioGroupID = string

export interface EvenioGroup {
	id: EvenioGroupID
	dateCreated: Date
	name: string
	description: string
	admins: EvenioUserID[]
	organisers: EvenioUserID[]
	contactEmail: string
}
