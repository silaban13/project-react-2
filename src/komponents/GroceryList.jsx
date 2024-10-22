
import { useState } from "react";
import Item from "./Item";


export default function GroceryList({items, onDeleteItem, onToggleItem, onClearItems}) {
    const [sortBy, setSortBy] = useState('input')
 
    let sortedItems;
 
     switch(sortBy) {
         case 'name':
         sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name)); 
         break;
         case 'checked':
         sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
         break;
         default:
         sortedItems = items;
         break;
     }
 
     return (
         <>
         <div className="list">
            <ul >
                {sortedItems.map((item) => (
                  <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
                     ))}
             </ul>
        </div>
           <div className="actions">
         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
             <option value="input">urutkan berdasarkan urutan input</option>
             <option value="name">urutkan berdasarkan nama barang</option>
             <option value="checked">urutkan berdasarkan ceklist</option>
         </select>
         <button onClick={onClearItems}>Bersihkan Daftar</button>
        </div>
        </>
     );
 }