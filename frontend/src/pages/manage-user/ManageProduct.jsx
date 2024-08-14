import React, { useEffect } from 'react'
import { useGetAllProductsQuery } from '../../context/api/productApi'
import Loader from '../../components/loader'
import ProductsWrapper from '../../components/products-wrapper'

const ManageProduct = () => {
    const [products, setProducts] = React.useState(null)
    const { data, isFetching } = useGetAllProductsQuery()

    useEffect(() => {
        setProducts(data?.payload)
    }, [data])

    return (
        <section className=''>
            <h1 className='text-3xl font-bold mb-4'>Manage Product</h1>
            <div className="w-full flex items-center justify-start gap-6">
                {
                    isFetching ? <Loader /> : products?.map(product => <ProductsWrapper key={product?.id} product={product} />)
                }
            </div>
        </section>
    )
}

export default ManageProduct