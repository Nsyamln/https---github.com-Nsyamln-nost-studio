export default function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <h3>Opsi Pengiriman</h3>
        <hr />
      </div>
      <div>
        <h3>J&T Express</h3>
        <p>Rp20.000</p>
      </div>
      <div>
        <h1>Total Pesanan (1 Produk) :</h1>
        <p>Rp509.000</p>
      </div>
      <div></div>
      <button className="w-full bg-[#171313] font-semibold rounded-md my-2 p-4 text-center flex items-center justify-center text-white cursor-pointer">
        Buat Pesanan
      </button>
    </div>
  );
}
