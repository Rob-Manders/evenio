export type EvenioUserID = string

export interface EvenioUser {
	id: EvenioUserID
	dateCreated: Date
	lastLogin: Date
	displayName: string
}
