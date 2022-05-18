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

    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
    const { categories } = state;

    useEffect(() => {
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories,
            });
            categoryData.categories.forEach((category) => {
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
    }, [categoryData, loading, dispatch]);

    const handleClick = (id) => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id,
        });
    };
    return (

        <Dropdown className='dropdown mx-auto mt-4'>
            <Dropdown.Toggle className='dropdown' id="dropdown-basic">
                Categories: All
            </Dropdown.Toggle>
            <Dropdown.Menu >
                {categories.map((item) => (
                    <Dropdown.Item  key={item._id} 
                    onClick={() => {
                        handleClick(item._id)
                    }}>
                    {item.name}
                </Dropdown.Item>
                ))}
                
            </Dropdown.Menu>
        </Dropdown>

    )
}
