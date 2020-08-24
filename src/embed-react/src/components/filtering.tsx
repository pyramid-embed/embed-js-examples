import React from 'react';
import { PyramidEmbedContainer, Filter, EmbedOptions, Target } from '@pyramid-embed/embed-react';

const config = require('../../../config.json').filtering;

export const Filtering = () => {
    const options: EmbedOptions = {
        contentId: config.content,
        filters: Filter.byUniqueName(config.filter),
    };

    return (<PyramidEmbedContainer
        host={'<HOST>'}
        options={options}
        userName={'<USERNAME>'}
        password={'<PASSWORD>'}
        style={{ width: 400, height: 400 }}

    />);
}