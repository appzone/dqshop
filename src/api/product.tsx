import { dummyProducts } from "../services/dummy";

const TIMEOUT = 2000;

export default {
	getAllProducts: (cb: any) => setTimeout(() => cb(dummyProducts), TIMEOUT)
}