export interface Node {
    id: number;
    rankHierarchy: number;
    parentId: number | null;
    childIds: number[];
    backgroundColor: string;
    name: string;
    children?: Node[]; 
}
export const mindMap: Node[] = [
    {
       id: 1,
        rankHierarchy: 1,
        parentId: null,
        childIds: [2, 3],
        backgroundColor: "#FFFFFF",
        name: "Research",
        children: [
            {
                id: 2,
                rankHierarchy: 2,
                parentId: 1,
                childIds: [4, 5],
                backgroundColor: "#FFFFCC",
                name: "External",
                children: [
                    {
                        id: 4,
                         rankHierarchy: 3,
                        parentId: 2,
                        childIds: [6, 7, 8, 9],
                        backgroundColor: "#FFCCCC",
                        name: "B2C",
                        children: [
                            {
                                id: 6,
                                rankHierarchy: 4,
                                parentId: 4,
                                childIds: [],
                                backgroundColor: "#CCFFCC",
                                name: "online"
                            },
                            {
                                id: 7,
                                rankHierarchy: 4,
                                parentId: 4,
                                childIds: [],
                                backgroundColor: "#CCFFCC",
                                name: "interview"
                            },
                            {
                                id: 8,
                                rankHierarchy: 4,
                                parentId: 4,
                                childIds: [],
                                backgroundColor: "#CCFFCC",
                                name: "public data"
                            },
                            {
                                id: 9,
                                rankHierarchy: 4,
                                parentId: 4,
                                childIds: [],
                                backgroundColor: "#CCFFCC",
                                name: "health"
                            }
                        ]
                    },
                    {
                        id: 5,
                        rankHierarchy: 3,
                        parentId: 2,
                        childIds: [],
                        backgroundColor: "#FFCCCC",
                        name: "B2B"
                    }
                ]
            },
            {
                id: 3,
                rankHierarchy: 2,
                parentId: 1,
                childIds: [],
                backgroundColor: "#FFFFCC",
                name: "Internal"
            }
        ]
    },
    {
        id: 7,
        rankHierarchy: 1,
        parentId: null,
        childIds: [8, 9],
        backgroundColor: "#FFFFFF",
        name: "Planning",
        children: [
            {
                id: 8,
                rankHierarchy: 2,
                parentId: 7,
                childIds: [],
                backgroundColor: "#FFFFCC",
                name: "PRD"
            },
            {
                id: 9,
                rankHierarchy: 2,
                parentId: 7,
                childIds: [],
                backgroundColor: "#FFFFCC",
                name: "Specs"
            }
        ]
    },
    {
        id: 10,
        rankHierarchy: 1,
        parentId: null,
        childIds: [11, 12],
        backgroundColor: "#FFFFFF",
        name: "Designing",
        children: [
            {
                id: 11,
                rankHierarchy: 2,
                parentId: 10,
                childIds: [],
                backgroundColor: "#FFFFCC",
                name: "Hardware"
            },
            {
                id: 12,
                rankHierarchy: 2,
                parentId: 10,
                childIds: [],
                backgroundColor: "#FFFFCC",
                name: "Software"
            }
        ]
    },
    {
        id: 13,
        rankHierarchy: 1,
        parentId: null,
        childIds: [14, 15],
        backgroundColor: "#FFFFFF",
        name: "Manufacturing",
        children: [
            {
                id: 14,
                rankHierarchy: 2,
                parentId: 13,
                childIds: [],
                backgroundColor: "#FFFFCC",
                name: "Material"
            },
            {
                id: 15,
                rankHierarchy: 2,
                parentId: 13,
                childIds: [],
                backgroundColor: "#FFFFCC",
                name: "Production"
            }
        ]
    },
    {
        id: 16,
        rankHierarchy: 1,
        parentId: null,
        childIds: [17, 18],
        backgroundColor: "#FFFFFF",
        name: "Sales/Marketing",
        children: [
            {
                id: 17,
                rankHierarchy: 2,
                parentId: 16,
                childIds: [],
                backgroundColor: "#FFFFCC",
                name: "online"
            },
            {
                id: 18,
                rankHierarchy: 2,
                parentId: 16,
                childIds: [],
                backgroundColor: "#FFFFCC",
                name: "Dealership"
            }
        ]
    }
];
