"use client"
import React, { useState } from 'react';
import { Node } from '@/MindMap';

interface Props {
    node: Node;
}
export default function MindMapNode({ node }: Props) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const renderChildren = (children: Node[] | undefined) => {
        if (!children || children.length === 0) {
            return null;
        }

        return (
            <div className={`flex flex-col justify-start ${node.id === 1 ? '' : 'items-start'} space-y-4`}>
                {children.map((child) => (
                    <MindMapNode key={child.id} node={child} />
                ))}
            </div>
        );
    };

    return (
        <div className={`relative mx-16 my-2 flex items-center justify-start`}>
            <div>
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 rounded-md shadow-md transition duration-300 ease-in-out hover:shadow-lg w-36 text-center cursor-pointer"
                    style={{ backgroundColor: node.backgroundColor }}
                >
                    {node.name}
                </div>
            </div>
            <div className="absolute top-full left-0 mt-2 bg-white p-4 rounded-md shadow-md" style={{ display: isHovering ? 'block' : 'none' }}>
                Dummy card content
            </div>
            {renderChildren(node.children)}
        </div>
    );
}
