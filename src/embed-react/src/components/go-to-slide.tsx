import React, { Component } from 'react';
import { PyramidEmbedContainer, EmbeddedResult, EmbedOptions } from '@pyramid-embed/embed-react';

const config = require('../../../config.json').goToSlide;

export class GoToSlide extends Component {

    embeddedResult: EmbeddedResult;

    options: EmbedOptions = {
        contentId: config.content,
        onLoad: (result: EmbeddedResult) => {
            this.embeddedResult = result;
        },
    };

    onGoToSlide = () => {
        this.embeddedResult.goToSlide(parseInt((document.getElementById('txt') as HTMLInputElement).value))
    };

    render() {
        return (
            <>
                <label>Go To Slide:</label>
                <input type='text' id={'txt'} />
                <button onClick={() => this.onGoToSlide()} >GO</button>
                <PyramidEmbedContainer
                    host={'<HOST>'}
                    options={this.options}
                    userName={'<USERNAME>'}
                    password={'<PASSWORD>'}
                    style={{ width: 400, height: 400 }} />

            </>);
    }
}
