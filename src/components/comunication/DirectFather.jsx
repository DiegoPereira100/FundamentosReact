import React from 'react'
import DirectChildren from './DirectChildren'

export default props => {
    return (
        <div>
             <DirectChildren name="Filho 1" age={20} nerd={true} />
             <DirectChildren name="Filho 2" age={15} nerd={false} />
             <DirectChildren name="Filho 3" age={17} nerd={true} />
        </div>
    )
}