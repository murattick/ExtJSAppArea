Ext.Loader.setConfig({enabled: true});
//��� �������
Ext.application({
    name: 'ExtMVC',
    //����������� �������
    controllers: [
        'Item', 'Category'
    ],
    
    autoCreateViewport: true
});
