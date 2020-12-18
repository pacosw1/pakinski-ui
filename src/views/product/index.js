import { useLazyQuery, useMutation } from '@apollo/client';

import {SEARCH_TAGS, CREATE_PRODUCT} from "./queries"
import React, { useEffect, useState } from 'react';

import {SearchBar} from "./styles"



const NewProduct = props => {

    let [tags, setTags] = useState([])
    let [fields, setFields] = useState({
        title: "",
        description: "",
        price: 0.00,
        freeStock: 1,
        previewImage: "",
    })

    const [createProduct, { loading: saveLoading, error: saveError }] = useMutation(CREATE_PRODUCT);

    let [info, setInfo] = useState({
        title: "",
        price: 0.00,
        description: "",
    })

    let [images, setImages] = useState([])

    const onTagSearch = (e, getTags) => {
        getTags({variables: { keyword: e.target.value }})
    }


    const submitProduct = () => {
        let input = {...fields, tags, images}

        input.price = parseFloat(input.price)
        input.freeStock = parseInt(input.freeStock)

            createProduct({variables: { input }}).then(res => {
                console.log(res)
            }).catch(e => {
                console.log(e)
            })
       
    }

    const onChangeField = (e) => {

        let {value, name} = e.target

        console.log(name)

        let copy = {...fields}
        copy[name] = value

        setFields(copy)

        console.log(fields)
    }

    console.log(images)




    //INFO



    //IMAGES



    const removeImage = (name) => {

        let copy = [...images]

        copy = copy.filter(img => img.name !== name)

        setImages(copy)
    }

    const updateImageFiles = (files) => {

        files = Array.from(files)


        setImages(files)
    }



    //TAGS
    const addTag = (tag) => {

        let copy = [...tags]
        copy.push(tag)
        
        setTags(copy)

    }

    const removeTag = (id) => {

        let copy = [...tags]

        copy = copy.filter(x => x.id !== id)
        
        setTags(copy)

    }

    const renderTags = tags.map(tag => {
        return <ExistingTag removeTag={removeTag} id={tag.id} key={tag.id} title={tag.title}/>
    })

    return <div>
        <h1>Product Info</h1>
        <TextInput onChange={onChangeField} name="title"/>
        <TextInput onChange={onChangeField} name="description"/>
        <NumberInput onChange={onChangeField} name="price"/>
        <NumberInput onChange={onChangeField} name="freeStock"/>
        <h1>Images</h1>
        <ImageSection images={images} updateImageFiles={updateImageFiles} removeImage={removeImage}/>
        
        <h1>Tags</h1>
        {renderTags}
        <TagSection tags={tags} addTag={addTag} onSearch={onTagSearch}/>

        <button onClick={() => submitProduct()}>Crear</button>
    </div>
}







//IMAGES

const ImageSection = ({images, updateImageFiles, removeImage}) => {


    const renderPreview = images.map((img, key) => {
        return <Image src={URL.createObjectURL(img)} removeImage={removeImage} name={img.name} key={key} alt="preview"/>
    })

    return <>

        <input type="file" multiple={true} onChange={ e => updateImageFiles(e.target.files) } />
        {renderPreview}
    </>
}

const Image = ({src, name, alt, removeImage}) => {

    return <img onClick={() => removeImage(name)} height={100} width={100} src={src} alt={alt}/>
}




//INPUTS

const NumberInput = ({onChange, name}) => {
    return <input placeholder={name} name={name} type="number" onChange={e => onChange(e)}/>
}
const TextInput = ({onChange, name}) => {
    return <input placeholder={name} name={name} type="text" onChange={e => onChange(e)}/>
}











//TAGS

const TagSection = ({tags, addTag, onSearch}) => {


    let [getTags, { loading, error, data }] = useLazyQuery(SEARCH_TAGS);

    if (data) {

        let hash = {}

        tags.forEach(tag => {
            if (!hash[tag.id]) {
                hash[tag.id] = 1
            }
        });
        let copy = [...data.searchTags]

        data = copy.filter(x => !hash[x.id]) 
    }


    const renderTags = (data ? data: []).map(tag => {
        return <Tag addTag={addTag} key={tag.id} id={tag.id} title={tag.title}/>
    })


    return <div>
        <h1>{error ? "Error connecting to server" : null} </h1>
        <h1>Select Tags</h1>
        <SearchBar onChange={e => onSearch(e, getTags)}/>

        {renderTags}
        
    </div>
}



//tags

const ExistingTag = ({id, title, removeTag}) => {

    return <h1 onClick={() => removeTag(id)}>{title}</h1>
}


const Tag = ({id, title, addTag}) => {

    return <h1 onClick={() => addTag({id, title})}>{id} {title}</h1>
}

export default NewProduct