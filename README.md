# Intuitive Ajax Library (Standalone)

A couple of functions that make js ajax calls much more intuitive. For obvious reasons, this doesn't work in Node.js

## How to use in HTML

1. $ git clone https://github.com/xinxinw1/ajax-only
2. Add
   
   ```html
   <script src="ajax-only/ajax.js"></script>
   ```
   
   to your html file.
5. Run `Ajax.aget("ajax-only/ajax.js", function (a){alert(a);})` to make sure it works.

## Function reference

```
Note: The ajax library functions are accessed by Ajax.<insert name>

aget(a, f)        asyncronous get url a with callback f
aget(a)           aget(a, f) but with no callback

apost(a, o, f)    asyncronous post url a with params o in form "name=test&data=test"  
                    and callback f
apost(a, o)       same as above but with no callback
apost(a, f)       same as above but with no params
apost(a)

seterr(o)         set error callback function for all ajax calls; o is a hashtable
                    with these values:
                      o.status     the http status
                      o.fn         either aget or apost
                      o.a          the url given
                      o.o          the params given (apost only)
                      o.f          the callback function given
```
