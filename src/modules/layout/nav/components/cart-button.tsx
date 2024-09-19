const fetchCart = async () => {
    const cart = await new Promise(res => setTimeout(res,3000));
    return [];
}
export default async function CartButton(){
    await fetchCart();
    return <></>
}