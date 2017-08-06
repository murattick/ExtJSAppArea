Ext.define('ExtMVC.store.Brand', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Brand',  
    storeId: 'Brand',
    autoLoad: true,
    pageSize: 20,
    autoLoad: { start: 0, limit: 20 },

    proxy: {
        type: 'ajax',
        api: {
            read: '/Shop/GetBrands'
        
        },
        reader: {
            type: 'json',
            idProperty: 'BrandID',
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