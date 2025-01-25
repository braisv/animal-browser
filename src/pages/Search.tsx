import { AnimalModule, faker } from '@faker-js/faker'
import React from 'react'
import { useParams } from 'react-router-dom'

const getImage = (category: string) => faker.image.urlLoremFlickr({ category });
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();

const Search = () => {
    const params = useParams()
    const { inputText } = params

    if (inputText && inputText in faker.animal) {
        const fakerAnimal = faker.animal
        console.log({ inputText })
        const animals = faker.helpers.multiple(() => fakerAnimal[inputText as keyof AnimalModule](), { count: 20 })
        console.log({ animals })

        const data = animals.map((item, index) => {
            return (
                {
                    id: index + 1,
                    url: getUrl(),
                    title: item,
                    description: getText(),
                    image: getImage('fish'),
                });
        });

        console.log({ data })
    }


    return (
        <div className='search'>Search: {inputText}</div>
    )
}

export default Search