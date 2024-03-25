
interface Props {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    stroke: string;
    
}
export default function DiagonalArrowLine({ startX, startY, endX, endY, stroke }: Props) {
    const midX = (startX + endX) / 2.5;
    ;

    const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
    return (
        <svg style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%' }}>
            <defs>
                <marker
                    id="arrow"
                    markerWidth="10"
                    markerHeight="10"
                    refX="8"
                    refY="3"
                    orient="auto"
                    markerUnits="strokeWidth"
                >
                    <path d="M0,0 L0,6 L9,3 z" fill={stroke} />
                </marker>
            </defs>
            <line
                x1={startX}
                y1={startY}
                x2={midX}
                y2={endY}
                stroke={stroke}
                strokeWidth="2"
            />
            <line
                x1={midX}
                y1={endY} 
                x2={endX}
                y2={endY}
                stroke={stroke}
                strokeWidth="2"
                markerEnd="url(#arrow)"
            />
        </svg>
    );
}
