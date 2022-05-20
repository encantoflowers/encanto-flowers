import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { Dropdown , Container } from 'react-bootstrap'
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
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id,
        });
    };
    return (

        <Dropdown className='category-dropdown mx-auto mt-4'>
            <Dropdown.Toggle className='dropdown' id="dropdown-basic">
                Categories: All
            </Dropdown.Toggle>
            <Dropdown.Menu >
                {categories.map((category) => (
                    <Dropdown.Item href="#" key={category._id}>
                    {category.name}
                </Dropdown.Item>
                ))}
                
            </Dropdown.Menu>
        </Dropdown>

    )
}
