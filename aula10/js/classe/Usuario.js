Ext.define('CursoExt4.classe.Usuario',{
  //atributos
  nome:'',
  senha:'',

  constructor:function (options) {

      Ext.apply(this, options || {});
      console.log('construtor foi chamado');
    }
});
