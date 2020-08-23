import React from 'react';
import { PyramidEmbedContainer, Filter, EmbedOptions, Target } from '@pyramid-embed/embed-react';

export const Filtering = () => {
    const options:EmbedOptions = {
        contentId: '<CONTENT>',
        filters: Filter.byUniqueName('<FILTER>'),
        onLoad:(x)=>console.log(x),
    };

    return (<PyramidEmbedContainer
        host={'<HOST>'}
        options={options}
        userName={'<USERNAME>'}
        password={'<PASSWORD>'}
        style={{ width: 400, height: 400 }}
        
        />);
}