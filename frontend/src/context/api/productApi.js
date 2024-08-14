import { api } from "./index";

export const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllProducts: build.query({
            query: (params) => ({
                url: "/products",
                params
            }),
            providesTags: ["Products"]
        }),
        createProduct: build.mutation({
            query: (body) => ({
                url: "/products",
                method: "POST",
                body
            }),
            invalidatesTags: ["Products"]
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Products"]
        })
    }),
})

export const { useGetAllProductsQuery, useCreateProductMutation, useDeleteProductMutation } = productApi