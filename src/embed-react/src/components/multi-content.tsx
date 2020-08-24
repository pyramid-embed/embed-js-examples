import React from 'react';
import { PyramidEmbedContainer } from '@pyramid-embed/embed-react';

const config = require('../../../config.json').multiContent;

export const MultiContent = () => {
    const discoveryOptions = {
        contentId: config.discoveryContent,
    };

    const presentationOptions = {
        contentId: config.presentationContent,
    };

    return (
        <>
            <PyramidEmbedContainer
                host={'<HOST>'}
                options={discoveryOptions}
                userName={'<USERNAME>'}
                password={'<PASSWORD>'}
                style={{ width: 400, height: 400 }} />
            <PyramidEmbedContainer
                host={'<HOST>'}
                options={presentationOptions}
                userName={'<USERNAME>'}
                password={'<PASSWORD>'}
                style={{ width: 400, height: 400 }} />
        </>);
}