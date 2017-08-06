var tabs = Ext.define('ExtMVC.view.item.TabPanel', { //��� ���������
    extend: 'Ext.tab.Panel',
    alias: 'widget.tabpanel',
    activeTab: 0,
    id: 'tabs',
    

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {

            items: [{
                xtype: 'gridmasterdetail', //��� ������� ������� grid � ����������� tab   

                title: 'The Big Shop',
                closable: false,
            }]
        });
        me.callParent(arguments);
    }

});