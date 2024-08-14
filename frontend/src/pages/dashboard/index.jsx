import React, { memo, useEffect } from 'react'
import { useGetAllProductsQuery } from '../../context/api/productApi'
import ProductsWrapper from '../../components/products-wrapper'
import Loader from '../../components/loader'

const Dashboard = () => {
    const [products, setProducts] = React.useState(null)
    const { data, isFetching } = useGetAllProductsQuery()

    useEffect(() => {
        setProducts(data?.payload)
    }, [data])

    return (
        <section className='w-full flex flex-col items-start gap-6'>
            <div className="w-full products__container">
                <ul className='w-full flex items-center justify-between'>
                    <h3 className='text-2xl font-semibold'>Products</h3>
                    <p>View All</p>
                </ul>
                <div className="w-fll flex flex-wrap items-center justify-start gap-6 overscroll-x-auto">
                    {
                        isFetching ? <Loader /> : products?.map(product => <ProductsWrapper key={product?.id} product={product} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default memo(Dashboard)