import { getShoppingCart } from "../utilities/fakedb";

//একটি আলাদা function লিখলাম data fetch করার জন্য। যেখানে দরকার হবে সেখানে এটি import করে ব্যবহার করা যাবে।
const CartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();
    //if cart data in database, i have to use async await নইলে আমরা data কে পাবো না।
    const storedCart = getShoppingCart(); // local Storage থেকে data load করা হয়েছে।
    const savedCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    //if you need to send two things যদি ২টা জিনিস পাঠাতে হয় তাহলে করনীয়
    // return [products, savedCart]
    //another option 
    // return { products, savedCart } // such as {products} = {products: products} product এর মধ্যে product এর ভ্যালু গুলো পাঠানো। 
    return savedCart;
}
export default CartProductsLoader;