import { useState } from "react";
 export default function Form({ onAddItem }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
      
    function handleSubmit(e) {
       e.preventDefault()

       if (!name) return;
       
       const newItem ={ name, quantity, checked: false, id: Date.now() };
       onAddItem(newItem);
       console.log(newItem);

        setName('');
        setQuantity(1);
    }
   // ini sangat penting dalam react perulangan 
   // dalam bentuk array ini harus dicatat dalam 
   //buku catatan
   const quantityNum = [...Array(10)].map((_, i) => (
       <option value={i + 1} key={i + 1}>
           {i + 1}
       </option>
   ));

   return (
       <form className="add-form" onSubmit={handleSubmit}>
          <h3>Hari ini belanja apa kita?</h3>
          <select value={quantity} onChange={(e) => setQuantity (Number(e.target.value))}>{quantityNum}</select>
           <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
       
           <button>Tambah</button>
       </form>
   );
}