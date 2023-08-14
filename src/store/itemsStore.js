let items = [{id: 1234, text: 'Hello todo!!!'}];
let listeners = new Set();


export const itemsStore = {
  addItem(item){
    items = [...items, item]
    emitChanges()
  },
  deleteItem(id){
    const tempItems = items.filter(item => item.id!==Number(id))
    items = [...tempItems]
    emitChanges()
  },
  subscribe(listener){
    listeners.add(listener)
    // listeners = [...listeners, listener]
    return () => {
      // listeners.filter(l => l!==listener)
      listeners.delete(listener)
    }
  },
  getSnapshot(){
    return items
  }
}

function emitChanges(){
  for(let listener of listeners){
    listener()
  }
}