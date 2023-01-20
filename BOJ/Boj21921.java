/*
https://www.acmicpc.net/problem/21921

Time : O(N)
Space : O(N)
DS : HashMap, Array
ALGO : Two Pointer

Solution
1. 입력을 통해, 간격(interval)과 totalDay(총 일수), arr의 값들(날짜별 조회수)를 받는다.
2. l, r 포인터를 추가하고 l-r-1(현재 간격)이 우리가 입력받은 interval과 같다면, maxVal을 갱신시도와 HashMap을 업데이트 한다. 
    아닌 경우는 더 작은 경우이기에, r을 움직이며 curSum을 고친다.
3. maxVal이 0이면 갱신이 없기에 SAD를 출력한다. 그게 아니라면, 정상적으로 maxVal과 hashMap.get(maxVal)을 출력한다.
*/

public class Boj21921{
    public static void main(String[] args){
        public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int totalDay = sc.nextInt();
        int interval = sc.nextInt();
        int[] arr = new int[totalDay];
        
        HashMap<Integer, Integer> map = new HashMap<>();
        int curSum = 0, l = 0, r = 0;
        int maxVal = 0;
        
        
        for(int i = 0; i < totalDay; i++){
            arr[i] = sc.nextInt();
        }
        curSum = arr[0];
       
        while(r < totalDay){
            int distance = r - l + 1;
            if(distance < interval){
            	r++;
            	if(r == totalDay) break;
                curSum += arr[r];
            }else if(distance == interval){
                maxVal = Math.max(curSum, maxVal);
                map.put(curSum, map.getOrDefault(curSum, 0) + 1);
                curSum -= arr[l++];
            }
        }
        
        if(maxVal == 0){
            System.out.println("SAD");
        }else{
            System.out.println(maxVal);
            System.out.println(map.get(maxVal));
        }
    }
}