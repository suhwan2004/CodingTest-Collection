import java.util.Scanner;
import java.io.FileInputStream;
import java.util.*;
import java.lang.*;
import java.util.Map.Entry;

class SWEA1204
{
	public static void main(String args[]) throws Exception
	{

		Scanner sc = new Scanner(System.in);
		int T;
		T=sc.nextInt();

		for(int test_case = 1; test_case <= T; test_case++)
		{
            	int num = sc.nextInt();
            	int maxVal = -1;
            	int maxCount =-1;
            	HashMap<Integer,Integer> map = new HashMap<>();
            
            	for(int i = 0; i < 1000; i++){
                	int val = sc.nextInt();
                   	map.put(val, map.getOrDefault(val,0) + 1);
                }
            
            	for(Entry<Integer, Integer> entry : map.entrySet()){
                    int k = entry.getKey();
                    int v = entry.getValue();
                    if(v>maxCount){
                    	maxVal = k;
                        maxCount = v;
                    }else if(v == maxCount){
                   		if(k > maxVal){
                        	maxVal = k;
                            maxCount = v;
                        }
                    }
                };
            	System.out.println("#"+test_case+" "+maxVal);
		}
	}
}