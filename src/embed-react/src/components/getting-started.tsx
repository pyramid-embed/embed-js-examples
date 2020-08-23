import React from 'react';
import { PyramidEmbedContainer } from '@pyramid-embed/embed-react';

export const GettingStarted = () => {
    const options = {
        contentId: '<CONTENT>'
    };

    return (<PyramidEmbedContainer
        host={'<HOST>'}
        options={options}
        userName={'<USERNAME>'}
        password={'<PASSWORD>'}
        style={{ width: 400, height: 400 }} />);
}