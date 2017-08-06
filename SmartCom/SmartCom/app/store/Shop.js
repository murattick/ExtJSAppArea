//стор на вывод товаров
Ext.define('ExtMVC.store.Shop', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Item',  
    storeId: 'Shop',
    autoLoad: true,
    pageSize: 20,
    autoLoad: { start: 0, limit: 20 },

    proxy: {
        type: 'ajax',
        api: {
            read: '/Shop/Get',
            create: '/Shop/Create',
            update: '/Shop/Update',
            destroy: '/Shop/Delete',
        
        },
        reader: {
            type: 'json',
            idProperty: 'ItemID',
            totalProperty: 'total',
            root: 'Data',
            messageProperty: 'message',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            listful: true,
            returnJson: true,
            encode: false,
            root: 'Data'
        }
    }
});