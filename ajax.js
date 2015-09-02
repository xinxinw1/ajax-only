/***** Ajax Standalone 4.3.0-1 *****/

(function (udf){
  //// From Tools ////
  
  function cls(a){
    return Object.prototype.toString.call(a);
  }
  
  function udfp(a){
    return a === udf;
  }
  
  function fnp(a){
    return cls(a) === "[object Function]";
  }
  
  //// Error ////
  
  var err = function (o){
    alert("Can't connect to server! HTTP Status: " + o.status);
  }
  
  function seterr(f){
    return err = f;
  }
  
  //// Main ////
  
  function ajax(){
    if (window.XMLHttpRequest)return new XMLHttpRequest();
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  function ajaxstate(fn, a, o, f){
    var x = ajax();
    x.onreadystatechange = function (){
      if (x.readyState == 4){
        if (x.status == 200){
          f(x.responseText);
        } else if (x.status == 0 || x.status == 12029){
          if (attempts == 3)err({fn: fn, a: a, o: o, f: f, status: x.status});
          else setTimeout(inner, 1000);
        } else {
          err({fn: fn, a: a, o: o, f: f, status: x.status});
        }
      }
    }
    return x;
  }
  
  // aget("test.php?name=hey&data=what", function (r){alert(r);});
  // aget("test.php", function (r){alert(r);});
  // aget("test.php");
  function aget(a, f){
    if (udfp(f))f = function (){};
    var attempts = 0;
    (function inner(){
      var x = ajaxstate(aget, a, udf, f);
      x.open("GET", a, true);
      x.send();
      attempts++;
    })();
  }
  
  // apost("test.php", "name=hey&data=what", function (r){alert(r);});
  // apost("test.php", function (r){alert(r);});
  // apost("test.php");
  function apost(a, of, f){
    if (udfp(of))return apost3(a, "", function (){});
    if (fnp(of))return apost3(a, "", of);
    return apost3(a, of, udfp(f)?function (){}:f);
  }
  
  function apost3(a, o, f){
    var attempts = 0;
    (function inner(){
      var x = ajaxstate(apost, a, o, f);
      x.open("POST", a, true);
      x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      x.send(o);
      attempts++;
    })();
  }
  
  //// Export ////
  
  window.Ajax = {
    aget: aget,
    apost: apost,
    seterr: seterr
  };
  
})();
