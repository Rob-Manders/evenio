import { EvenioGroupID } from '@/types/group'
import { EvenioUserID }  from '@/types/user'

export interface EvenioEvent {
	id: string
	dateCreated: Date
	dateModified: Date
	date: Date
	name: string
	description: string
	group: EvenioGroupID
	organiser: EvenioUserID
}