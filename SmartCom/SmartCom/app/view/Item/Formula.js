Ext.define('ExtMVC.view.item.Formula', { // модалка редактирования
    extend: 'Ext.window.Window',
    alias : 'widget.itemform',
    store: 'Shop',
    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Edit Item',
    layout: 'fit',
    autoShow: true,
    width: 280,


    initComponent: function () {
        var category = Ext.data.StoreManager.get("Category");
        category.load();
        var shop = Ext.data.StoreManager.get("Shop");
        shop.load();
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',
                
                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'right',
                    allowBlank: false,
                    combineErrors: true,
                    msgTarget: 'side'
                },

                items: [
					{
					    xtype: 'textfield',
					    name : 'ItemID',
					    fieldLabel: 'Id',
					    hidden:true
					},
                    {
                        xtype: 'textfield',
                        name: 'Level',
                        fieldLabel: 'Level',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        name : 'Title',
                        fieldLabel: 'Title'
                    },
                    {  //вывод из стора списка добавленных категорий
                        xtype: 'combobox',
                        fieldLabel: 'Choose Category',
                        displayField: 'Name',
                        valueField: 'CategoryID',
                        store: category,
                        name: 'CategoryID',
                        queryMode: 'local',
                    }]
            }
        ];
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id:'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-save',
                text: 'Save',
                action: 'saveItem'
            },{
                iconCls: 'icon-reset',
                text: 'Cancel',
                scope: this,
                handler: this.close
            }]
        }];

        this.callParent(arguments);
    }
});
