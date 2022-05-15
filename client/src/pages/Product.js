import React , { useEffect , useState  }from 'react'

export default function ProductItem(item) {

    const [product, setProduct ] = useState(item)
    
    const getFlower = async (id) => {
         const response = await fetch ('/api/${id}');
         const res = await response.json();
         return res;
    }

    useEffect((id) => {
        getFlower(id)

    })

    return (
        <div>
           
        
        </div>
    )
}
