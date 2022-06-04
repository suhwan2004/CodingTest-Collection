/*
고유한 이메일 이름을 찾아라.
+밑의 내용은 이름에 포함 안됨. @부터는 도메인 네임.
*/
var numUniqueEmails = function (emails) {
  let set = new Set();

  for (let i = 0; i < emails.length; i++) {
    let str = emails[i].split("@");
    let [local, domain, word] = [str[0], str[1], ""];
    for (let j = 0; j < local.length; j++) {
      if (local[j] == ".") continue;
      if (local[j] == "+") break;
      word += local[j];
    }
    set.add(word + "@" + domain);
  }
  return set.size;
};
