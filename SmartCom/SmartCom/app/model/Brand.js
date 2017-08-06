Ext.define('ExtMVC.model.Brand', {
    extend: 'Ext.data.Model',
    idProperty: 'BrandID',

    fields: [
        { name: 'BrandID', type: 'int' },
        { name: 'Name', type: 'string' }
        ]    
});