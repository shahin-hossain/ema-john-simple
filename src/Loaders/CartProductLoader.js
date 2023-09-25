//একটি আলাদা function লিখলাম data fetch করার জন্য। যেখানে দরকার হবে সেখানে এটি import করে ব্যবহার করা যাবে।
const CartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();
    return products
}
export default CartProductsLoader;