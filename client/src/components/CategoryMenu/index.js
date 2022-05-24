import React, { useEffect } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_CATEGORY } from '../../utils/actions';

import { DropdownButton, Dropdown, ButtonGroup, Container } from 'react-bootstrap'

import './style.css'

export default function CategoryMenu() {

    const [state, dispatch] = useStoreContext();

    const { categories } = state;

    useEffect(() => {
        console.log(categories);
    }, [categories, dispatch]);

    const handleClick = (id) => {
        console.log(id)
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id,
        });
    };

    return (
<Container className='buttongroup-container'>
        <DropdownButton as={ButtonGroup} title="Categories: All" className='category-dropdown mx-auto mt-4' variant="light" >
                {categories ? (
                    <div>
                        {categories.map((category) => (
                            <Dropdown.Item key={category._id}
                                onClick={() => {
                                    console.log("category ID", category._id)
                                    handleClick(category._id)
                                }}>{category.Name}
                            </Dropdown.Item>
                        ))}
                    </div>
                ) : (
                    <div>
                        <Dropdown.Item href="#" key='None'>'Categories loading...'</Dropdown.Item>
                    </div>
                )}
        </DropdownButton>
        </Container>
    )
}
