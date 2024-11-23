import { EvenioGroupID } from '@/types/group'
import { EvenioUserID }  from '@/types/user'

export type EvenioEventID = string

export interface EvenioEvent {
	id: EvenioEventID
	dateCreated: Date
	dateModified: Date
	date: Date
	name: string
	description: string
	group: EvenioGroupID
	organiser: EvenioUserID
}