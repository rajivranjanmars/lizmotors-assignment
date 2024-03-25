interface Props {
    startX: number;
    startY: number;
    
}

export default function StraingArrowLine({ startX, startY }: Props) {
    const markerId = `arrow-${startX}-${startY}`;
    return (
        <svg style={{ position: 'absolute', zIndex: 1, width: '100%', height: '100%' }}>
            <defs>
                <marker
                    id={markerId}
                    markerWidth="10"
                    markerHeight="10"
                    refX="8"
                    refY="3"
                    orient="auto"
                    markerUnits="strokeWidth"
                >
                    <path d="M0,0 L0,6 L9,3 z" />
                </marker>
            </defs>
            <line
                x1={startX}
                y1={startY}
                x2={startX+50}
                y2={startY}
                stroke={"#000"}
                markerEnd={`url(#${markerId})`}
            />
        </svg>
    );
};


