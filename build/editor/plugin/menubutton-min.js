/*
Copyright 2013, KISSY v1.40dev
MIT Licensed
build time: Sep 17 23:04
*/
KISSY.add("editor/plugin/menubutton",function(g,b,e){b.prototype.addSelect=function(h,a,d){var d=d||e.Select,f=this.get("prefixCls")+"editor-";if(a&&(a.editor=this,a.menu&&(a.menu.zIndex=b.baseZIndex(b.ZIndexManager.SELECT)),a.elCls))a.elCls=f+a.elCls;var c=(new d(g.mix({render:this.get("toolBarEl"),prefixCls:f},a))).render();a.mode==b.Mode.WYSIWYG_MODE&&(this.on("wysiwygMode",function(){c.set("disabled",!1)}),this.on("sourceMode",function(){c.set("disabled",!0)}));this.addControl(h+"/select",c);
return c};return e},{requires:["editor","menubutton"]});
