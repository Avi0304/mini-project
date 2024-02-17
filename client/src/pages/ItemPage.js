import React, { useState, useEffect } from "react";
import axios from "axios";
import DefaultLayout from "../components/DefaultLayout";


const ItemPage = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
  });
  
  useEffect(() => {
    getallitems();
  }, []);

  const getallitems = async () => {
    try {
      const { data } = await axios.get("/api/items/get-item");
      setItems(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const additem = async () => {
    try {
      await axios.post("api/items/add-item", newItem);
      setNewItem({ name: "", price: "", category: "", image: "" });
      getallitems();
    } catch (error) {
      console.error("error adding item:", error);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await axios.delete("/api/items/delete-item", { data: { itemId } });
      getallitems(); // Refresh the item list after deletion
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  
  return (
    <DefaultLayout>
      <h1>Item List</h1>


      {/* Display list of items */}
      <ol className="list-group list-group-numbered">
        {items.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name} - {item.price} - {item.category}
            <button onClick={() => deleteItem(item.id)} className="delete-button">Delete</button>
           
          </li>
        ))}
      </ol>

      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Item
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add Items
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="Name" class="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  value={newItem.name}
                  onChange={(e) =>
                    setNewItem({ ...newItem, name: e.target.value })
                  }
                  placeholder="Enter item name"
                />
              </div>
              <div class="mb-3">
                <label for="Price" class="form-label">
                  Price:
                </label>
                <input
                  type="text"
                  value={newItem.price}
                  onChange={(e) =>
                    setNewItem({ ...newItem, price: e.target.value })
                  }
                  placeholder="Enter item price"
                />
              </div>
              <div class="mb-3">
                <label for="Price" class="form-label">
                  cateogry:
                </label>
                <input
                  type="text"
                  value={newItem.category}
                  onChange={(e) =>
                    setNewItem({ ...newItem, category: e.target.value })
                  }
                  placeholder="Enter item category"
                />
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">
                  Image:
                </label>
                <input
                  type="text"
                  value={newItem.image}
                  onChange={(e) =>
                    setNewItem({ ...newItem, image: e.target.value })
                  }
                  placeholder="Enter item image URL"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={additem}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
   
    </DefaultLayout>
  );
};

export default ItemPage;
