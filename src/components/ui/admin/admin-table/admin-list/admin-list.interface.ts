export interface IListItem {
	id: string
	editUrl?: string
	viewUrl?: string
	items: string[]
}

interface IAdminListItem {
	listItem: IListItem
	removeHandler?: () => void
}
