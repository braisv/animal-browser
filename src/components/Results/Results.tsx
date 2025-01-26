import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AnimalModule, faker } from '@faker-js/faker'
import { AnimalItem, AnimalListItem } from '#/types';
import ListItem from '#/components/Results/ListItem';
import Loading from '#/components/Results/Loading';
import NoResult from '#/components/Results/NoResult';
import SelectedItem from '#/components/Results/SelectedItem';

const getImage = (category: string) => faker.image.avatarGitHub();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();

const Results = () => {
    const params = useParams()
    const { inputText } = params

    const [loading, setLoading] = useState(true)
    const [listItems, setListItems] = useState<AnimalListItem[]>([])
    const [selectedItem, setSelectedItem] = useState<AnimalItem>()

    const loadAnimalList = useCallback(() => {
        if (inputText && inputText in faker.animal) {
            const fakerAnimal = faker.animal
            const animals = faker.helpers.multiple(() => fakerAnimal[inputText as keyof AnimalModule](), { count: 20 })
            const data = animals.map((item, index) => {
                const animalData = {
                    id: index + 1,
                    url: getUrl(),
                    title: item,
                    description: getText(),
                    image: getImage(inputText),
                }
                return (
                    {
                        ...animalData,
                        cb: () => setSelectedItem(animalData)
                    });
            });
            setListItems(data || [])
        } else {
            setListItems([])
        }
        setLoading(false)
    }, [inputText])

    useEffect(() => {
        if (inputText) {
            setLoading(true)
            setTimeout(loadAnimalList, 3000);
        } else {
            setListItems([])
            setLoading(false)
        }

        return () => {
            setSelectedItem(undefined)
        }
    }, [inputText])

    if (loading) {
        return [...new Array(20)].map(Loading)
    }

    return (
        <div className='results'>
            {listItems.length ? <ul>{listItems.map(ListItem)}</ul> : <NoResult />}
            <SelectedItem animalItem={selectedItem} setSelectedItem={setSelectedItem} />
        </div>
    )
}

export default Results