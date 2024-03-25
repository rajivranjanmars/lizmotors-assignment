import React from 'react';
import MindMapNode from './MindMapNode';
import { mindMap, Node } from '@/MindMap';

export default function MindMapPage  () {
    return (
        <div>
            <h1>Mind Map Visualization</h1>
            <div className="flex flex-col justify-start items-start">
                {/* Iterate over each node in the mindMap array */}
                {mindMap.map((nodeData) => (
                    <MindMapNode key={nodeData.id} node={nodeData} />
                ))}
            </div>
        </div>
    );
};

;
