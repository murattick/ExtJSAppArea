//модель товара
Ext.define('ExtMVC.model.Item', {
    extend: 'Ext.data.Model',
    idProperty: 'ItemID',

    fields: [
        { name: 'ItemID', type: 'int' },
        { name: 'Title', type: 'string' },
        { name: 'Level', type: 'int' },
        { name: 'CategoryID', type: 'int' },
        { name: 'BrandID', type: 'int' },
        ]    
});