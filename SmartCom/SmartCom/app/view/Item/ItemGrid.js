Ext.define('ExtMVC.view.item.ItemGrid', { //грид товаров
        extend: 'Ext.grid.Panel',
        alias: 'widget.itemgrid',
        id: 'itemgrid',

        store: 'Shop',
        requires: ['Ext.toolbar.Paging'],
        loadingText: 'Loading list...',

        initComponent: function () {
            var me = this;
            var category = Ext.data.StoreManager.get("Category");
            category.load();
            var brand = Ext.data.StoreManager.get("Brand");
            brand.load();
            this.columns = [
               { xtype: 'rownumberer' },
               { text: 'ID', width: 170, dataIndex: 'ItemID', flex: 1 },
               { text: 'Level', width: 170, dataIndex: 'Level', flex: 1 },
               { text: 'Title', width: 170, dataIndex: 'Title', flex: 1 },
               { //столбец берется из стора категории.
                   text: 'Category', width: 170, dataIndex: 'CategoryID', flex: 1, renderer: function (catId) {
                       return Ext.data.StoreManager.lookup('Category').getById(catId).get('Name');

                   },
               }, { //столбец берется из стора категории.
                   text: 'Brand', width: 170, dataIndex: 'BrandID', flex: 1, renderer: function (BrandID) {
                       return Ext.data.StoreManager.lookup('Brand').getById(BrandID).get('Name');
                   },
               },
               {
                   xtype: 'actioncolumn',
                   width: 50,
                   text: 'Action',
                   items: [{
                       icon: 'Content/Images/Delete.gif',  // удаление из корзины

                       tooltip: 'Delete',
                       handler: function (grid, rowIndex, colIndex) {
                           var rec = grid.getStore().getAt(rowIndex);
                           Ext.Msg.confirm("Confirmation", "Do you want to Delete item '" + rec.get('Title') + "'?", function (btnText) {
                               if (btnText === "no") {
                                   // function on click no
                               }
                               else if (btnText === "yes") {
                                   grid.getStore().remove(rec);
                                   grid.getStore().sync();
                                   var shop = Ext.data.StoreManager.get("Shop");
                                   shop.remove(rec);
                               }
                           }, this);

                       }
                   }]
               }

            ];

            this.dockedItems = [{
                xtype: 'toolbar',
                items: [{ //кнопка добавления
                    itemId: 'addItem',
                    text: 'Add',
                    action: 'addItem'
                },
                { //поиск
                    xtype: 'textfield',
                    emptyText: 'Search...',
                    width: 170,
                    listeners: {
                        change: function (field, newValue, oldValue, options) {
                            var grid = me;
                            grid.store.clearFilter();


                            if (newValue) {
                                var matcher = new RegExp(Ext.String.escapeRegex(newValue), "i");
                                grid.store.filter({
                                    filterFn: function (record) {
                                        return matcher.test(record.get('Title')) ||
                                                matcher.test(record.get('Category'));
                                    }
                                });
                            }
                        }
                    }
                }, '->', { //открывание новой таб с заказами
                    text: 'Grid Category',
                    width: 80,
                    handler: function (num) {
                        Ext.getCmp('tabs').add({
                            title: 'Grid Category',
                            dockedItems: [{
                                xtype: 'categorygrid'
                            }],
                            closable: true
                        });
                    }
                }]
            },
            {
                xtype: 'pagingtoolbar',
                dock: 'top',
                store: 'Shop',
                displayInfo: true,
                displayMsg: 'View Items {0} - {1} of {2}',
                emptyMsg: "No Data"
            }];

            this.callParent();
        }
    });
