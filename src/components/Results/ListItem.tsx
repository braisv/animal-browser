import Text from '#/components/Typography/Text'
import { AnimalListItem } from '#/types'
import React from 'react'

const ListItem = ({ id, title, description, url, cb }: AnimalListItem) => {
    return (
        <li key={id} className='list-item'>
            <Text size={'small'} text={url} />
            <div onClick={cb}>
                <Text size={'big'} title text={title} />
            </div>
            <Text text={description} />
        </li>
    )
}

export default ListItem