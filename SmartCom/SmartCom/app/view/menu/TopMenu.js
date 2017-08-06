Ext.define('ExtMVC.view.menu.TopMenu', { //верхнее меню
    extend: 'Ext.menu.Menu',
    alias: 'widget.topMenu',
    floating: false, // usually you want this set to True (default)
    renderTo: Ext.getBody(), // usually rendered by it's containing components


    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [
            {
                width: 60,
            }
        ]
    }]
});