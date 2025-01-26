import Text from '#/components/Typography/Text'
import { AnimalItem } from '#/types'
import React, { Dispatch, SetStateAction } from 'react'

const SelectedItem = ({ animalItem, setSelectedItem }: { animalItem?: AnimalItem, setSelectedItem: Dispatch<SetStateAction<AnimalItem | undefined>> }) => {
    const onClick = () => {
        setSelectedItem(undefined)
    }
    return animalItem ? (
        <div className="selected-item--container" onClick={onClick}>
            <div className='selected-item'>
                <img src={animalItem.image} alt="" />
                <Text size='small' text={animalItem.url} />
                <Text size='big' bold text={animalItem.title} />
                <Text text={animalItem.description} />
            </div>
        </div>
    ) : <div className='no-selected-item'></div>
}

export default SelectedItem