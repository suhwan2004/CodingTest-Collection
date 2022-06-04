/*
	 //    1_2_3_4_5_6_7_8
     //  1|0
           v
	 //  2|0 1
             v
	 //  3|0 1 1 0
               v 
	 //  4|01101001
               v
               */
/*1차시도... 이렇게 해버리면 저장용량이 너무 많이 들어가서 오류가 발생함.
var kthGrammar = function(n, k) {
    return dfs('0',1);
    function dfs(str, loc){
        if(loc == n){
            return str[k-1];
        }
        let word = '';
        for(let i = 0; i < str.length; i++){
            if(str[i] == 0) word += '01';
            else word += '10';
        }
        return dfs(word, loc+1);
    }
};
*/

var kthGrammar = function (n, k) {
  if (n == 1) return 0;
  if (k % 2 == 0) return kthGrammar(n - 1, k / 2) == 0 ? 1 : 0;
  else return kthGrammar(n - 1, (k + 1) / 2) == 0 ? 0 : 1;
};
