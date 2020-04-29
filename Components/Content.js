
import React from 'react';
import OptionLeft from './OptionLeft';
import OptionRight from './OptionRight';

function Content() {
    document.title = "Shopping"
    return (
        <div className="main--content">
            <main>
                <OptionLeft />
                <OptionRight />
            </main>
        </div>
    )
}
export default Content;