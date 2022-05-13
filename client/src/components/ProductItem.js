import React , { useEffect , useState  }from 'react'

export default function ProductItem(item) {

    const [product, setProduct ] = useState(item)
    const getFlower = async (id) => {
         const response = await fetch ('/api/${id}');
         const res = await response.json();
         return res;
    }
// incomplete - need to finish 
    useEffect((id) => {
        getFlower(id)

    })

    return (
        <div>
            {/* item image
            item name
            item description
            item price
            quantity picker
            add to cart
            call to order */}

        
        </div>
    )
}
