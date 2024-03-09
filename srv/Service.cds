namespace com.mtx.srv;

using {com.mtx.db as db} from '../db/Database';


service ProductService @(path: '/product-srv') {

    entity Products as projection on db.Product;

}
