//problema 2
function reverseInParentheses (e) 
{
    for(var i = 0; i < e.length; i++) 
    {
      if(e[i] === ")") 
      {
        e = e.substring(0, i) + e.substring(i + 1);
        i--;
        var inverso = "";
        while(e[i] !== "(") 
        {
          inverso += e[i];
          e = e.substring(0, i) + e.substring(i + 1);
          i --;
        }
        e = e.substring(0, i) + inverso + e.substring(i + 1);
        i += inverso.length - 1;
      }
    }
     console.log(e);

  }
  reverseInParentheses('(bar)');
  reverseInParentheses('foo(bar)baz');
  reverseInParentheses('foo(bar)baz(blim)');
  reverseInParentheses('foo(bar(baz))blim');
