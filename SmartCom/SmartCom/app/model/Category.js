//������ Category
Ext.define('ExtMVC.model.Category', {
    extend: 'Ext.data.Model',
    idProperty: 'CategoryID',

    fields: [
        { name: 'CategoryID', type: 'int' },
        { name: 'Name', type: 'string' },
    ]    
});