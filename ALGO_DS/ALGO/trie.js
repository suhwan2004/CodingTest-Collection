/*
trie란 무엇일까?

const wordDict = [
  "samsung_earbuds",//ㅇ 
  "santa",
  "samsung_tablet",//ㅇ
  "santa_suit",
  "samsung_ssd",//ㅇ
  "salad",
  "safe",
  "samsung",//ㅇ
  "samsung_watch",//ㅇ
];

요렇게 여러 단어들이 있을 때

*/

//case 1 : trie를 안 썼을 때
// time : O(N*M),
/*
let target = "sam";
let result = []; //찾은 단어 저장 배열
const wordDict = [
  "samsung_earbuds", //ㅇ
  "santa",
  "samsung_tablet", //ㅇ
  "santa_suit",
  "samsung_ssd", //ㅇ
  "salad",
  "safe",
  "samsung", //ㅇ
  "samsung_watch", //ㅇ
];

function solution() { 
  for (let i = 0; i < wordDict.length; i++) {
    //O(n), n === wordDict.length
    if (target === wordDict[i].substring(0, target.length))
    //String 비교하는것도 시간복잡도에 들어감. => O(M), M === 가장 긴 단어(wordDict내에서...)
      result.push(wordDict[i]);
  }

  return result;
}

console.log(solution());
*/

//case 2. trie를 써서 풀기
/*시간 복잡도 :O(M), M => longest_word.length

tree or trie

tutorial --> dictionary

target = cat

root: {
  c: {
    a: {
      t: {
        '*': true;
        s: {
          '*': true;
        }
      }
    }
  },
  d: {
    o: {
      g: {
        s: {
          '*' : true;
        }
        '*': true;
      }
    }
  }
}
*/

const wordDict = [
  "samsung_earbuds",
  "santa",
  "samsung_tablet",
  "santa_suit",
  "samsung_ssd",
  "salad",
  "safe",
  "samsung_watch",
];

// words = [cats, dogs, cat]
/*
  //오 cats발견...
   dictionaryContainer: {
      c : { 
        a : { 
          t : {
            '*' : true,
            s: { <---root
              '*' : true, //더 이상 넣을거 없다~
            }
          }
        }
      }
      d : {
        o : {
          g : {
            s : {
              '*' : true,
            }
          }
        }
      }
   }
  */

const traversing = (root, curWord) => {
  let curNode = root; //
  //v
  //cats
  for (let c = 0; c < curWord.length; c++) {
    const curChar = curWord[c];

    if (!curNode[curChar]) {
      curNode[curChar] = {}; // 없으면 만들어 주고
    }
    curNode = curNode[curChar]; // 다음 노드로 옮겨줌!!
  }
  curNode["*"] = true;
};

const buildTrie = (arr) => {
  const dictionaryContainer = {}; // 1. object 생성!

  for (let i = 0; i < arr.length; i++) {
    let curWord = arr[i]; //2.현재 보는 단어들 중에서 i번째 단어 저장
    traversing(dictionaryContainer, curWord);
  }

  console.log(JSON.stringify(dictionaryContainer));
};

buildTrie(wordDict);
