import React from 'react'
import Collapse from './Collapse'

function Generator({ data, depth = 1 }) {
    return (
        data.map((item, idx) => {
            if (item.type === "folder") {
                return <Collapse key={idx} content={item.children} heading={item.name} />
            }
            if (item.type === "file") {
                return <div key={item.name}>{item.name}</div>
            }

            return (<></>)
        })
    )
}

export default Generator;
