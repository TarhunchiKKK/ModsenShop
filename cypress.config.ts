import { defineConfig } from "cypress";

const baseUrl: string = "http://localhost:5173";

export default defineConfig({
    env: {
        base_url: baseUrl,
        home_url: baseUrl + "/",
        shop_url: baseUrl + "/shop",
        product_url: baseUrl + "/shop/",
        auth_url: baseUrl + "/auth",
        contact_url: baseUrl + "/contact",
        cart_url: baseUrl + "/cart",
        api_url: "https://fakestoreapi.com",
    },
    e2e: {},
});
