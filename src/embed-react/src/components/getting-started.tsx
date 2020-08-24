import React from 'react';
import { PyramidEmbedContainer } from '@pyramid-embed/embed-react';

const config = require('../../../config.json').gettingStarted;

export const GettingStarted = () => {
    const options = {
        contentId: config.content,
    };

    return (<PyramidEmbedContainer
        host={'<HOST>'}
        options={options}
        userName={'<USERNAME>'}
        password={'<PASSWORD>'}
        style={{ width: 400, height: 400 }} />);
}