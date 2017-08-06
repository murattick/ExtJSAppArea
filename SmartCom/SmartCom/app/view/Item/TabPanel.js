var tabs = Ext.define('ExtMVC.view.item.TabPanel', { //код табпанели
    extend: 'Ext.tab.Panel',
    alias: 'widget.tabpanel',
    activeTab: 0,
    id: 'tabs',
    

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {

            items: [{
                xtype: 'gridmasterdetail', //для примера добавил grid в добавляемую tab   

                title: 'The Big Shop',
                closable: false,
            }]
        });
        me.callParent(arguments);
    }

});