// StraightCircleLine.tsx

interface Props {
    startX: number;
    startY: number;
    circleRadius: number;
}

export default function StraightCircleLine({ startX, startY,   circleRadius }: Props) {
    return (
        <svg style={{ position: 'relative', zIndex: -1, width: '100%', height: '100%' }}>
            
            <circle cx={startX} cy={startY} r={circleRadius} fill="none" stroke='black' strokeWidth="2" />
            <line
                x1={startX+circleRadius}
                y1={startY}
                x2={startX+50}
                y2={startY}
                stroke="black"
                strokeWidth="2"
                
            />
        </svg>
    );
}
