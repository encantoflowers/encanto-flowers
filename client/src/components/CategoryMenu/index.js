import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

import { DropdownButton, Dropdown, ButtonGroup, Container } from 'react-bootstrap'

import './style.css'

export default function CategoryMenu() {

    const [state, dispatch] = useStoreContext();

    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const { categories } = state;

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: data.categories,
            });
            data.categories.forEach((category) => {
                idbPromise('categories', 'put', category);
            });
        } else if (!loading) {
            idbPromise('categories', 'get').then((categories) => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories,
                });
            });
        }
    }, [data, loading, dispatch]);

    const handleClick = (id) => {
        console.log(id)
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id,
        });

    };
    console.log(data)

    return (
<Container className='buttongroup-container'>
        <DropdownButton as={ButtonGroup} title="Categories: All" className='category-dropdown mx-auto mt-4' variant="light" >
                {data ? (
                    <div>

                        {data.categories.map((category) => (
                            <Dropdown.Item key={category._id}
                                onClick={() => {
                                    console.log("category ID", category._id)
                                    handleClick(category._id)
                                }}>{category.Name}</Dropdown.Item>
                        ))}
                    </div>
                ) : (
                    <div>
                        <Dropdown.Item href="#" key='None'>'No Categories'</Dropdown.Item>
                    </div>
                )}
        </DropdownButton>
        </Container>
    )
}
