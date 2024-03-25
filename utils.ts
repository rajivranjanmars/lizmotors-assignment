
export const calculateVerticalSpacing = (level: number): number => {
    // Define constants for vertical spacing between levels
    const levelSpacing = 100; // Adjust this value as needed

    // Calculate vertical spacing based on the level
    return level * levelSpacing;
};

// Calculate horizontal spacing between sibling nodes
export const calculateHorizontalSpacing = (): number => {
    // Define constant for horizontal spacing between sibling nodes
    const siblingSpacing = 150; // Adjust this value as needed

    // Return the fixed horizontal spacing between sibling nodes
    return siblingSpacing;
};
