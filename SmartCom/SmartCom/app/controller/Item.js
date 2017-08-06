Ext.define('ExtMVC.controller.Item', {
    extend: 'Ext.app.Controller',

    stores: ['Shop', 'Brand'],
    models: ['Item', 'Brand'],

    views: ['item.Formula', 'item.Add', 'item.TabPanel', 
            'item.ItemGrid', 'item.GridDetail', 'item.GridMasterDetail',
            'Category.CategoryGrid', 
            'menu.LMenu',
    ],

    refs: [ {
        ref: 'itemGrid',
        selector: 'grid'
    }, {
        ref: 'tabpanel',
        selector: 'panel'
    }
    ],

    init: function () {
        this.control({
            'itemgrid dataview': {
                itemdblclick: this.editItem
            },
            'itemgrid button[action=addItem]': {
                click: this.addItem
            },
            'itemform button[action=addingItem]': {
                click: this.addingItem
            },
            'itemform button[action=saveItem]': {
                click: this.updateItem
            },
            'itemgrid button[itemId=deleteItem]': {
                click: this.deleteItem
			} 
        });
    },

    addItem: function (grid, record) {
        var add = Ext.create('ExtMVC.view.item.Add').show();

        if (record) {
            add.down('form').loadRecord(record);
        }
    },
    addingItem: function (button, event) {
      
        var novo = false;
		
		var win = button.up('window'),
		form  = win.down('form').getForm();
		record = form.getRecord(),
        values = form.getValues();
		
		 if(form.isValid()) {
			  
            record = Ext.create('ExtMVC.model.Item');
            record.set(values);
            this.getShopStore().add(record);
            novo = true;
        }
        else Ext.Msg.alert('Invalid form!', 'Please try again.');
			
        win.close();
        this.getShopStore().sync();
    },

    editItem: function (grid, record) {
        var edit = Ext.create('ExtMVC.view.item.Formula').show();

        if (record) {
            edit.down('form').loadRecord(record);
        }
    },

    updateItem: function (button, event) {
		
        var win = button.up('window'),
        form = win.down('form').getForm();
        if (form.isValid()) {
            //AJAX запрос на вход

            Ext.Ajax.request({
                url: 'Shop/Update',
                method: 'post',
                params: { ItemID: form.getValues().ItemID, Level: form.getValues().Level, Title: form.getValues().Title, Code: form.getValues().Code, CategoryID: form.getValues().CategoryID, Brand: form.getValues().Brand, Price: form.getValues().Price },

                //scope : this,
                //method to call when the request is successful
                failure: function (response) {

                    data = Ext.decode(response.responseText);
                    Ext.Msg.alert('Update Error', data.errorMessage, Ext.emptyFn);

                    var Shop = Ext.data.StoreManager.get("Shop");

                    Shop.load();
                },
                //после успешной авторизации подгружаются сторы и активируются кнопки меню
                success: function (response, opts) {

                    data = Ext.decode(response.responseText);
                    if (data.errorMessage != null) {
                        Ext.Msg.alert('Update Message', data.errorMessage, Ext.emptyFn);

                        var Shop = Ext.data.StoreManager.get("Shop");

                        Shop.load();

                    } else {
                        //show the next screen
                    }
                }
            });
        }
        
        win.close();
        this.getShopStore().sync();
        this.getShopStore().load();

    }
    
});