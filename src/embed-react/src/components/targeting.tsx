import React from 'react';
import { PyramidEmbedContainer, Filter, EmbedOptions, Target } from '@pyramid-embed/embed-react';

const config = require('../../../config.json').targeting;

export const Targeting = () => {
    const options:EmbedOptions = {
        contentId: config.content,
        targets: Target.byFilter(Filter.byUniqueName(config.filter),config.targetName),
    };

    return (<PyramidEmbedContainer
        host={'<HOST>'}
        options={options}
        userName={'<USERNAME>'}
        password={'<PASSWORD>'}
        style={{ width: 400, height: 400 }}
        
        />);
}