import React from 'react'
import arrow from './assets/arrowLeft.svg'
import Generator from './Generator';

export default function Collapse({ heading, content, depth = 1 }) {
    const [isExpanded, setExpanded] = React.useState(false);

    function handleExpanded() {
        setExpanded(prev => !prev)
    }

    return (
        <div className='collapse-wrapper'>
            <div className="collapse-title" onClick={handleExpanded}>
                <img src={arrow} height={16} width={16} className={isExpanded ? 'rotate-90' : ""} />
                <span>{heading}</span>
            </div>
            <div className="collapse-content" style={{ marginLeft: `${depth * 30}px` }}><Generator data={content} depth={depth} /></div>
        </div>
    )
}

