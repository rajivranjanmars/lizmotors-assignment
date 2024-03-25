interface Props {
    startX: number;
    startY: number;
    length: number;
    stroke: string;
}

export default function VerticalLine({ startX, startY, length, stroke }: Props) {
    const endY = startY + length;

    return (
        <svg style={{ position: 'relative', zIndex: -1, width: '100%', height: '100%' }}>
            <line
                x1={startX}
                y1={startY}
                x2={startX}
                y2={endY}
                stroke={stroke}
                strokeWidth="2"
            />
        </svg>
    );
}
