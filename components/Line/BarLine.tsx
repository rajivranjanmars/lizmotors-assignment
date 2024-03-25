// VerticalLineWithBar.tsx
import React from 'react';

interface Props {
    startX: number;
    startY: number;
    length: number; // Length of the vertical line
    barHeight: number; // Height of the bar
    stroke: string;
}

export default function BarLine({ startX, startY, length, barHeight, stroke }: Props) {
    const endX = startX + length;

    return (
        <svg style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%' }}>
            <line
                x1={startX}
                y1={startY}
                x2={endX}
                y2={startY}
                stroke={stroke}
                strokeWidth="2" // Regular line thickness
            />
            <line
                x1={startX } // Adjust to place the bar slightly to the left of the vertical line
                y1={startY- barHeight} // Adjust to define the height of the barHeight
                x2={startX } // Adjust to place the bar slightly to the right of the vertical line
                y2={startY + barHeight} // Adjust to define the height of the bar
                stroke={stroke}
                strokeWidth="4" // Thickness of the bar
            />
        </svg>
    );
}
