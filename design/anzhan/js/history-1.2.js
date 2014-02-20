//打开DIV层
function DisplayAllSitesBox() {
        FillAllSites();
        $("#allSitesBoxHdl").toggle()
}
//变色
function changeListBgColor(obj, s) {
        if (s == 1) {
                obj.style.backgroundColor='#EDF6FB';
        } else {
                obj.style.backgroundColor='#F5FBFF';
        }
}
//赋值
function SetInputValue(id, str){
        $('#'+id).val(str);
        $('#allSitesBoxHdl')[0].style.display='none';
}
function FillAllSites() {
        var allSites = $.cookie('allSites');
        var boxhtml = '';
        if (allSites) {
                var allSitesA = allSites.split('|');
                for (i = 0; i < allSitesA.length; i++) {

                        var tmpArr = allSitesA[i].split(',');
                        var tmpSite = tmpArr[0];
                        var tmpState = tmpArr[1];

                        //if (allSitesA[i].indexOf(',1') >= 0) {
                        if (tmpState == 1) {
                                boxhtml += "<li class=\"lis\" onmouseover=\"changeListBgColor(this, 1)\" onmouseout=\"changeListBgColor(this, 0)\"><input type=\"button\" onclick=\"DelAllSitesItem('"+tmpSite+"')\" class=\"list_span_cancel\" value=\"取消\"><input type=\"button\" class=\"list_span_saved\" value=\"已存\"><a onclick=\"SetInputValue('site', '"+tmpSite+"')\" class=\"list_span_select\">" + tmpSite + "</a></li>";
                        } else if (allSitesA[i].indexOf(',-1') >= 0) {
                                //
                        } else {
                                boxhtml += "<li class=\"lis\" onmouseover=\"changeListBgColor(this, 1)\" onmouseout=\"changeListBgColor(this, 0)\"><input type=\"button\" onclick=\"DelAllSitesItem('"+tmpSite+"')\" class=\"list_span_delte\" value=\"删除\"><input type=\"button\" onclick=\"SaveAllSitesItem('" + tmpSite + "');\" class=\"list_span_save\" value=\"保存\"><a onclick=\"SetInputValue('site', '"+tmpSite+"')\" class=\"list_span_select\">" + tmpSite + "</a></li>";
                        }

                }
        }
        $("#allSitesBox").html(boxhtml);
}
function DelAllSitesItem(value) {
        var newSites = [];
        var allSites = $.cookie('allSites');
        var allSitesA = allSites.split('|');
        for (i = 0; i < allSitesA.length; i++) {
                var tmpArr = allSitesA[i].split(',');
                var tmpSite = tmpArr[0];
                var tmpState = tmpArr[1];

                if (value != tmpSite){
                        newSites.push(allSitesA[i]);
                }
        }
        if (newSites.length > 0) {
                allSites = newSites.join('|');
        } else {
                allSites = null;
        }
        $.cookie('allSites', allSites, {path: '/', domain: '.aizhan.com'});
        FillAllSites();
}
function SaveAllSitesItem(value) {
        var newSites = [];
        var newSites1 = [];
        var newSites0 = [];
        var allSites = $.cookie('allSites');
        if (allSites){
                var allSitesA = allSites.split('|');
                for (i = 0; i < allSitesA.length; i++) {
                        var tmpArr = allSitesA[i].split(',');
                        var tmpSite = tmpArr[0];
                        var tmpState = tmpArr[1];

                        if (value != tmpSite){
                                newSites0.push(allSitesA[i]);
                        } else {
                                newSites1.push(tmpSite+',1');
                        }
                }
                newSites = newSites1.concat(newSites0);
                if (newSites.length > 0) {
                        allSites = newSites.join('|');
                } else {
                        allSites = null;
                }
        } else {
                allSites = null;
        }
        $.cookie('allSites', allSites,{path: '/', domain: '.aizhan.com'}); 
        FillAllSites();
}

$(document).mousedown(
        function(event){
                if (event.target.id != 'site' && event.target.parentNode.className != 'lis' && $('#allSitesBoxHdl')[0].style.display != 'none') {
                        $('#allSitesBoxHdl').hide();
                }
        }
);
