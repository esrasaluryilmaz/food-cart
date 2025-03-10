import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Error from "../Error";
import Loader from "../Loader";
import { FaFire } from "react-icons/fa";
import RestaurantProductCard from "../RestaurantProductCard";

const RestaurantProduct = () => {
  //Url deki restaurant idsine eris
  const { id } = useParams();

  //Bilesen icerisinde verileri yonetebilmek icin useState kurulumu yap
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  //products endpointine ister atarak ilgili restauranta ait verileri al

  useEffect(() => {
    api
      .get(`products?restaurantid=${id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      {error ? (
        <Error />
      ) : !products ? (
        <Loader />
      ) : products.length === 0 ? (
        <p className=" p-3 text-2xl font-semibold">
          Bu restaurant'a ait ürün bulunamadı
        </p>
      ) : (
        <div>
          <h2 className="flex gap-2 text-2xl">
            <FaFire className="text-red-500" />
            Populer
          </h2>
          <p className="text-gray-600">
            Restoranin en cok tercih edilen urunleri
          </p>
          <div className="grid lg:grid-cols-2 gap-5 mt-5">
            {products?.map((item) => (
              <RestaurantProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantProduct;
