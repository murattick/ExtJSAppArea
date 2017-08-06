Ext.Loader.setConfig({enabled: true});
//имя проекта
Ext.application({
    name: 'ExtMVC',
    //контройлеры проекта
    controllers: [
        'Item', 'Category'
    ],
    
    autoCreateViewport: true
});
