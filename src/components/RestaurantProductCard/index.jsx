import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createItem, updateItem } from "../../redux/actions/basketAction";

const RestaurantProductCard = ({ item }) => {
  const dispatch = useDispatch();

  //Sepetteki urunlere erisebilmek icin store-a abone ol
  const { cart } = useSelector((store) => store.cartReducer);

  //Eklenecek urun sepette varmi kontrol et

  const found = cart.find((cartItem) => cartItem.productId === item.id);

  //handleAdd fonk. calistiginda eklenecek urun sepette varmi kontrol etmezsek var ola nurune tekrar ekler . Bunu engellemek icin sepette o urun var mi kontrol etmemz grekr
  const handleAdd = (e) => {
    console.log(e);
    found
      ? dispatch(updateItem(found.id, found.amount + 1))
      : //Sepete urun ekleme
        dispatch(createItem(item));
  };
  return (
    <div>
      {/* Left */}
      <div className="border p-3 shadow grid grid-cols-[1fr_115px] gap-3 rounded-lg hover:bg-red-100 border-zinc-100 hover:scale-[1.02] transition duration-300 cursor-pointer">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-semibold">{item.title}</h1>
            <p className="text-gray-500 my-1">{item.desc}</p>
          </div>
          <p className="text-lg font-semibold">{item.price}TL</p>
        </div>

        {/* Right */}
        <div className="relative">
          <img
            src={item.photo}
            className="size-full rounded-md object-cover"
            alt="item-photo"
          />
          <button
            onClick={handleAdd}
            className="absolute end-2 bottom-2 bg-white rounded-full size-8 grid place-items-center hover:bg-red-100"
          >
            {/* eger sepette bu urunden varsa miktari yazdir yoksa ekle ikonunu render et  */}
            {found ? <span>{found.amount} </span> : <FaPlus />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantProductCard;
