import React from 'react';
import { PyramidEmbedContainer, Filter, EmbedOptions, Target } from '@pyramid-embed/embed-react';

const config = require('../../../config.json').mutliFiltering;

export const MultiFiltering = () => {

    const filters = Filter.create();
    config.filters.forEach((f: string) => {
        filters.addUniqueName(f);
    });

    const options: EmbedOptions = {
        contentId: config.content,
        filters: filters,
    };

    return (<PyramidEmbedContainer
        host={'<HOST>'}
        options={options}
        userName={'<USERNAME>'}
        password={'<PASSWORD>'}
        style={{ width: 400, height: 400 }}

    />);
}