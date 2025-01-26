import Text from '#/components/Typography/Text'
import React from 'react'
import { useParams } from 'react-router-dom'

const NoResult = () => {
    const params = useParams()
    const { inputText } = params

    return (
        <div className='no-result'>
            {inputText && <div className="no-result--line">
                <Text text='No results found for' />
                <Text bold text={` '${inputText}'`} />
            </div>}
            <div className="no-result--line">
                <Text text='Try looking for: ' />
                <Text bold text='insect, fish, horse, crocodilia, bear, cetacean, cow, lion rabbit, cat, snake, dog, bird.' />
            </div>
        </div>
    )
}

export default NoResult