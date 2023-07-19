//Add type
type MemberType = {
    name: string;
    age: number;
    isInRelationShip?: boolean;
}
const codeMelyMembers: MemberType[] = [
	{
		name: "Huy 2019",
		age: 19,
	},
	{
		name: "Huy 2020",
		age: 20,
		isInRelationShip: false
	},
	{
		name: "Huy 2021",
		age: 21,
		isInRelationShip: true
	},
	{
		name: "Huy 2022",
		age: 22,
		isInRelationShip: false
	}
]

const findColeMelyTeen = (members: MemberType[]) => {
	return members.find(member => member.age < 20)
}

const codeMelyCreateGroup = (...groupMembers: MemberType[]) => {
	return groupMembers;
}