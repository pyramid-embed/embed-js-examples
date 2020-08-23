import React from 'react';
import { PyramidEmbedContainer, Filter, EmbedOptions, Target } from '@pyramid-embed/embed-react';

export const Targeting = () => {
    const options:EmbedOptions = {
        contentId: '<CONTENT>',
        targets: Target.byFilter(Filter.byUniqueName('<FILTER>'),'<TARGET>'),
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