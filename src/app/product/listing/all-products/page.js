


export default async function AllProducts() {
    const getAllProducts = await getAllAdminProducts();

    return <CommonListing />
}